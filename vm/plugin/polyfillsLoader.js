const fs = require('fs');
const path = require('path');

function readFilesInDirectory(directoryPath, code) {
    const files = fs.readdirSync(directoryPath);
    const concatenatedContent = [];

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            const data = fs.readFileSync(filePath, 'utf8');
            concatenatedContent.push(data);
        } else if (stats.isDirectory()) {
            const subDirectoryContent = readFilesInDirectory(filePath, code);
            concatenatedContent.push(subDirectoryContent);
        }
    });

    return code + concatenatedContent.join('\n') + '\n';
}

module.exports = {
    readFilesInDirectory
}
