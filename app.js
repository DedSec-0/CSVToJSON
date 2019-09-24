const csvFilePath='./customer-data.csv'
const csv=require('csvtojson')

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    console.log(jsonObj[0]);
})