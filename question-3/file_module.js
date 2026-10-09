var fs = require('fs');
const path = require('node:path');

const logsDirectoryPath = path.join(process.cwd(), "Logs");

function removeLogFiles () {

    fs.readFile(path.join(logsDirectoryPath,'log0.txt'), 'utf8', (err, data) => {
        if (err) {
            createLogFiles();
            return;
        }
    });
    for (let i = 0; i < 10; i++) {
        let logFileName = 'log' + String(i) + '.txt'
        let logFilePath = path.join(logsDirectoryPath, logFileName);
        fs.unlink(logFilePath, (err) => {
            if (err) {
                    console.error(err);
                    return;
            }
            console.log("delete files..." + logFileName)
        })
    }

    createLogFiles();

}


function createLogFiles() {
    fs.readFile(path.join(logsDirectoryPath,'log0.txt'), 'utf8', (err, data) => {
        if (!err) {
            createLogFiles();
            return;
        }
    });
    for (let i = 0; i < 10; i++) {
        let logFileName = 'log' + String(i) + '.txt'
        let logFilePath = path.join(logsDirectoryPath, logFileName);
        fs.writeFile(logFilePath, "test", 'utf8', (err) => {
            if (err) {
                    console.error(err);
                    return;
            }
            console.log(logFileName)
        })

    }

}


removeLogFiles()
