class CommandLineComponent {
    constructor(argv) {
        this._argv = argv;
        this._argv.splice(0, 2);
        this._options = {};//{ file: './data/data.txt' }
    }
    getInput() {
        var fs = require('fs');
        var response = fs.readFileSync('/dev/stdin').toString();
        return response.split("\n");
    }
    commander(cb) {
        let flag = false;
        const argv = this._argv;
        if (argv.length == 1) {
            if (argv[0] == '-d') {
                //get input
                this._options['data'] = this.getInput();
                flag = true;
            }
        }
        if (argv.length == 2) {
            if (argv[0] == '-u') {
                this._options['file'] = argv[1].trim();
                flag = true;
            }
        }
        if (!flag) {
            console.log(this.printHelp());
            return 1;
        } else {
            cb(this._options);
        }
    }
    printHelp() {
        return (
            `Usage:
node app.js [-h|-d|-u <url>]

To enter data as input:
node app.js -d
then type the data in stdin, and end the stream with ^D(buggy in Windows)

To enter URL as input:
node app.js -u <path of file>

To enter both URL and data as input(it will be appended):
node app.js -d  -u <path to file>

To print this help:
node app.js -h
`
        )
    }
}
module.exports = CommandLineComponent;