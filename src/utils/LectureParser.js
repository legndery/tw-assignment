const fs = require('fs');
class LectureParser {
    constructor(options){
        this.lines = [];
        this.file = "";
        this.PATTERN = /(.*?)(\d+min|\d*lightning)/i
        this.parsedLines = []
        this.isParsed = false;
        ////////////////////
        this.generateInputLines(options)
    }
    generateInputLines({lines,file}){
        if(!(lines || file))
            throw new Error("No Lines or File Url provided");

        if(lines){
            if(typeof lines === 'string'){
                this.lines.push(lines);
            }else{
                this.lines=lines;
            }
        }
        if(file){
            this.file = file;
            try{
                this.readFileAndParse();
            }catch(err){ throw err; }
        }
    }
    parse(){
        return this.lines.map((l)=>{
            const lineContent = this.PATTERN.exec(l);
            return [lineContent[1].trim(), this.convertToTimeInt(lineContent[2].trim())];
        });
    }
    addLines(line){
        this.lines.push(line);
    }
    convertToTimeInt(time){
        time = time.toLowerCase();
        let t=0;
        if(time.endsWith('lightning')){
            t = parseInt(time.replace('lightning', ''));
            t = t>0?t*5:5;
        }else{
            t = parseInt(time.replace("min",""));
        }
        return t;
    }
    readFileAndParse(){
        const fileContent = fs.readFileSync(this.file,{encoding:'utf-8'});
        const lines = fileContent.split("\n");
       this.lines =  this.lines.concat(lines);
    }
}
module.exports = LectureParser;