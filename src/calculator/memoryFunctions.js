const jsonfile = require('jsonfile');
const path = "./dbAnswers.json"

function saveData(object){
    jsonfile.writeFile(path, obj, { flag: 'a' }, function (err) {
        if (err) throw err;
    })
}

function readData(){
    jsonfile.readFile(path, (err, data) => {
        if (err) throw err;
        return data;
    });
}

module.exports = {
    addEntry(operator, operand1, operand2, answer){
        const date = new Date();
        entry = {
            "timestamp" : {
                "date" : `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
                "time" :  `${date.getHours()}:${date.getMinutes()}`,
            },
            "operator" : operator,
            "operands" : {
                "operand1" : operand1,
                "operand2" : operand2,
            },
            "answer" : answer,
        }
        saveData(entry);
    },
    getEntries(){
        return readData();
    }
}