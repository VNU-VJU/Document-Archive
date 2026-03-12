#!/usr/bin/env python3
"""Analyze PDF image blocks and surrounding text context."""

import argparse
from pathlib import Path

import fitz  # PyMuPDF

def get_context_around_image(page, img_rect, chars=50):
    """Get text appearing before and after an image based on vertical position."""
    blocks = page.get_text("blocks", sort=True)
    before_blocks = []
    after_blocks = []
    for b in blocks:
        if b[6] != 0:
            continue
        block_text = b[4].strip()
        if not block_text:
            continue
        block_y_center = (b[1] + b[3]) / 2
        if block_y_center < img_rect.y0:
            before_blocks.append(block_text)
        elif block_y_center > img_rect.y1:
            after_blocks.append(block_text)
    text_before = ""
    text_after = ""
    if before_blocks:
        combined = " ".join(before_blocks)
        text_before = combined[-chars:] if len(combined) > chars else combined
    if after_blocks:
        combined = " ".join(after_blocks)
        text_after = combined[:chars] if len(combined) > chars else combined
    return text_before, text_after

def parse_args():
    parser = argparse.ArgumentParser(
        description="Inspect PDF image blocks and print surrounding text context."
    )
    parser.add_argument("pdf_path", help="Path to the PDF file to inspect.")
    parser.add_argument(
        "--chars",
        type=int,
        default=50,
        help="Number of surrounding characters to keep before and after each image.",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    pdf_path = Path(args.pdf_path).expanduser().resolve()
    doc = fitz.open(pdf_path)
    total_images = 0
    print(f"PDF: {pdf_path}")
    print(f"Total pages: {len(doc)}")
    print("=" * 80)
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text("text")
        text_preview = text[:200].replace("\n", "\\n") if text else "(no text)"
        image_blocks = []
        for b in page.get_text("dict", sort=True)["blocks"]:
            if b["type"] == 1:
                bbox = b["bbox"]
                w = bbox[2] - bbox[0]
                h = bbox[3] - bbox[1]
                image_blocks.append({"bbox": bbox, "width": round(w, 1), "height": round(h, 1)})
        print(f"\n--- Page {page_num + 1} ---")
        print(f"Text preview: {text_preview}")
        print(f"Image blocks (with bbox): {len(image_blocks)}")
        if image_blocks:
            for i, img in enumerate(image_blocks):
                bbox = img["bbox"]
                rect = fitz.Rect(bbox)
                before, after = get_context_around_image(page, rect, chars=args.chars)
                print(f"\n  Image {i+1}:")
                print(f"    BBox: x0={bbox[0]:.1f}, y0={bbox[1]:.1f}, x1={bbox[2]:.1f}, y1={bbox[3]:.1f}")
                print(f"    Size: {img['width']}x{img['height']} pts")
                print(f"    Text BEFORE: ...{before}")
                print(f"    Text AFTER:  {after}...")
                total_images += 1
    print("\n" + "=" * 80)
    print(f"TOTAL IMAGES across all pages: {total_images}")
    doc.close()

if __name__ == "__main__":
    main()
