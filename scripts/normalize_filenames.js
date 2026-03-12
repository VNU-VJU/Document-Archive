const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const dataDir = path.join(repoRoot, 'data');
const indexFile = path.join(repoRoot, 'index.html');
const migrationPlan = path.join(repoRoot, 'docs', 'MIGRATION_PLAN.md');
const dryRun = process.argv.includes('--dry-run');

const renames = [
    // Issuer-Type-Number -> Number-Type-Issuer
    { oldId: 'BGDDT-TT-2021-08', newId: '08-2021-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2021-17', newId: '17-2021-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2021-18', newId: '18-2021-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2021-23', newId: '23-2021-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2024-01', newId: '01-2024-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2016-04', newId: '04-2016-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2020-04', newId: '04-2020-TT-BGDDT' },
    { oldId: 'BGDDT-TT-2020-39', newId: '39-2020-TT-BGDDT' },
    { oldId: 'BTC-TT-2013-111', newId: '111-2013-TT-BTC' },
    { oldId: 'CP-ND-2021-86', newId: '86-2021-ND-CP' },
    { oldId: 'CP-ND-2023-24', newId: '24-2023-ND-CP' },
    { oldId: 'DHNN-TB-2184', newId: '2184-TB-DHNN' },
    { oldId: 'DHQGHN-QD-628', newId: '628-QD-DHQGHN' },
    { oldId: 'TTCP-QD-2022-78', newId: '78-2022-QD-TTCP' },

    // DHVN-Type-Number -> Number-Type-DHVN
    { oldId: 'DHVN-DT-840', newId: '840-DT-DHVN' },
    { oldId: 'DHVN-HD-000', newId: '000-HD-DHVN' },
    { oldId: 'DHVN-HD-259', newId: '259-HD-DHVN' },
    { oldId: 'DHVN-HD-304', newId: '304-HD-DHVN' },
    { oldId: 'DHVN-HD-483', newId: '483-HD-DHVN' },
    { oldId: 'DHVN-HD-1534', newId: '1534-HD-DHVN' },
    { oldId: 'DHVN-KTDBCL-826', newId: '826-KTDBCL-DHVN' },
    { oldId: 'DHVN-QD-323', newId: '323-QD-DHVN' },
    { oldId: 'DHVN-QD-473', newId: '473-QD-DHVN' },
    { oldId: 'DHVN-QD-700', newId: '700-QD-DHVN' },
    { oldId: 'DHVN-QD-1132', newId: '1132-QD-DHVN' },
    { oldId: 'DHVN-QD-1592', newId: '1592-QD-DHVN' },
    { oldId: 'DHVN-TB-911', newId: '911-TB-DHVN' },
    { oldId: 'DHVN-TB-984', newId: '984-TB-DHVN' },
    { oldId: 'DHVN-TB-1010', newId: '1010-TB-DHVN' },
];

function renameFiles() {
    const files = fs.readdirSync(dataDir);
    renames.forEach(({ oldId, newId }) => {
        files.forEach(file => {
            if (file.startsWith(oldId)) {
                const oldPath = path.join(dataDir, file);
                const newPath = path.join(dataDir, file.replace(oldId, newId));
                console.log(`${dryRun ? '[dry-run] ' : ''}Renaming: ${file} -> ${file.replace(oldId, newId)}`);
                if (!dryRun) {
                    fs.renameSync(oldPath, newPath);
                }
            }
        });
    });
}

function updateReferences() {
    [indexFile, migrationPlan].forEach(filePath => {
        if (!fs.existsSync(filePath)) return;
        let content = fs.readFileSync(filePath, 'utf8');
        renames.forEach(({ oldId, newId }) => {
            // Avoid partial matches by ensuring common suffixes or boundary
            const regex = new RegExp(oldId + '(?=[_\\"\'])', 'g');
            content = content.replace(regex, newId);
        });
        if (!dryRun) {
            fs.writeFileSync(filePath, content);
        }
        console.log(`${dryRun ? '[dry-run] ' : ''}Updated references in: ${filePath}`);
    });
}

renameFiles();
updateReferences();
console.log(`Done.${dryRun ? ' (dry-run)' : ''}`);
