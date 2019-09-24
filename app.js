const csvFilePath = './customer-data.csv'
const csv = require('csvtojson')
const fs = require('fs')

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    fs.writeFileSync('customer-data.json', JSON.stringify(jsonObj, null, 2), (error) => {
        if (error){
            throw 'Error!' + error
        }
    })

    console.log('Done!');
})
.catch((error) => {
    console.log(error);
})
