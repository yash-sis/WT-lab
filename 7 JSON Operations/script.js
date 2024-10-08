function convertJsonToObject() {
    try {
        const jsonInput = document.getElementById('jsonInput').value;
        const jsObject = JSON.parse(jsonInput);
        document.getElementById('result').innerText = 'Converted Object: ' + JSON.stringify(jsObject, null, 2);
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}

function convertJsonToDate() {
    try {
        const jsonInput = document.getElementById('jsonDateInput').value;
        const jsObject = JSON.parse(jsonInput);
        const date = new Date(jsObject.date);
        document.getElementById('result').innerText = 'Converted Date: ' + date.toString();
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}

function convertJsonToCsv() {
    try {
        const jsonInput = document.getElementById('dataInput').value;
        const jsObject = JSON.parse(jsonInput);
        const headers = Object.keys(jsObject[0]);
        const csvRows = [
            headers.join(','),
            ...jsObject.map(row => headers.map(fieldName => JSON.stringify(row[fieldName])).join(','))
        ];
        const csvString = csvRows.join('\n');
        document.getElementById('result').innerText = 'Converted CSV:\n' + csvString;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}

function convertCsvToJson() {
    try {
        const csvInput = document.getElementById('dataInput').value;
        const lines = csvInput.split('\n');
        const headers = lines[0].split(',');
        const jsonArray = lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });
        document.getElementById('result').innerText = 'Converted JSON:\n' + JSON.stringify(jsonArray, null, 2);
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}

function createHash() {
    try {
        const input = document.getElementById('hashInput').value;
        const hash = CryptoJS.SHA256(input);
        document.getElementById('result').innerText = 'Generated Hash (SHA-256): ' + hash;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}
