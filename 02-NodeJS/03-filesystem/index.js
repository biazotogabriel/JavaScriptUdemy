const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname, '..', '..')
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        if (/\.git/g.test(fileFullPath)) continue
        if (/node_modules/g.test(fileFullPath)) continue
        const stats = await fs.stat(fileFullPath)
        if (stats.isDirectory()) {
            readdir(fileFullPath)
        }
        if (!/\.css$/g.test(fileFullPath)) continue
        console.log(fileFullPath)
    }
}

readdir()