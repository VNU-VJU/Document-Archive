#!/bin/bash

# Function to optimize a PDF
optimize_pdf() {
    local input_file="$1"
    local output_file="${input_file}.optimized"
    
    echo "Optimizing: $input_file"
    
    gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile="$output_file" "$input_file"
    
    if [ $? -eq 0 ]; then
        orig_size=$(stat -f%z "$input_file")
        new_size=$(stat -f%z "$output_file")
        
        if [ "$new_size" -lt "$orig_size" ]; then
            mv "$output_file" "$input_file"
            echo "Success: $(($orig_size / 1024))KB -> $(($new_size / 1024))KB"
        else
            rm "$output_file"
            echo "Skipped: Optimization did not reduce size."
        fi
    else
        echo "Error: Failed to optimize $input_file"
        [ -f "$output_file" ] && rm "$output_file"
    fi
}

# Target files over 10MB in data/ and data/Confidential/
find data -name "*.pdf" -size +10M | while read -r pdf; do
    optimize_pdf "$pdf"
done
