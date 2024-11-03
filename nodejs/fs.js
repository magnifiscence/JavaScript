
var fs = require('fs')

fs.readFile('calc.js','utf8', function(err, data){
    console.log(data)
})

/*fs.writeFile('calc.js','console.log("done")',function(err){
    console.log("Data Saved")
})*/

/*
fs.appendFile('calc.js','console.log("done")',function(err){
    console.log('Data')
})
*/

/*
fs.unlink('calc1.js',function(err){
    console.log('Deleted')
})
*/