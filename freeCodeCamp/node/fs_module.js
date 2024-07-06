/* file system module*/
var fs = require('fs')

/*
fs.readFile('calc.js','utf8', function(err, data){
    console.log(data)
})
*/

fs.writeFile('calc1.js','console.log("done")',function(err){
    console.log("Data Saved")
})
/*when you use writeFile to an existing file it replaces the content in the file with a new one but append just
adds content to the file */
/*fs.unlink('calc1.js',function(err){
    console.log('deleted')
}) */