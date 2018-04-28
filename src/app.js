const Conference = require('./components/conference.component');

const argv = process.argv;
console.dir(process.argv);
if(argv.length == 2){

}else if(argv.length >2){
    
}
///////////

///////////
function printHelp(){
console.error(
`Usage:
node app.js [-h|-d|-u]

To enter data as input:
node app.js 
OR
node app.js -d
then type the data in stdin, and end the stream with ^D(buggy in Windows)

To enter URL as input:
node app.js -u=<path of file>

To enter both URL and data as input(it will be appended):
node app.js -d  -u <path to file>

To print this help:
node app.js -h
`
)
}