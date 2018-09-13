const express = require('express');
const cors = require('cors');
const app = express();
const XLSX = require('xlsx');
app.get('/', (req, res, next) => {
    console.log('hello world');
    const workbook = XLSX.readFile('cdif.xlsx');
    const sheet_name_list = workbook.SheetNames;
    let data = [];
    sheet_name_list.forEach(function (y) {
        const worksheet = workbook.Sheets[y];
        console.log(XLSX.utils.sheet_to_json(worksheet));
        data.push(XLSX.utils.sheet_to_json(worksheet));
        
    });
    console.log(data);
})

app.listen(5000, () => console.log('running on 5000'));

