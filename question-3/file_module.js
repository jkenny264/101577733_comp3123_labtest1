
var fs = require('fs');
const path = require('node:path');


const logsDirectoryPath = path.join(process.cwd(), Logs);

function removeLogFiles () {
    fs.readFile(path.join(logsDirectoryPath,'log0.txt'), 'utf8', (err, data) => {
        if (err) {
            createLogFiles();
            return;
        }
    });

}


 function createLogFiles() {
//     // for (let i = 0; i < 10; i++) {
        let fileName = path.join(logsDirectoryPath,'log' + String(0) + '.txt');
             fs.writeFile(fileName, "test", 'utf8', (err) => {
                if (err) {
                        console.error(err);
                        return;
                }
                console.log(fileName)
             })
//     // }

}


removeLogFiles()