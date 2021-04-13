const fs = require("fs");
const parseString = require('xml2js').parseString;
module.exports = {

    filter:async ()=>{
        let someXml  = fs.readFileSync('./static/SearchFilter.xml','utf-8');
        let data;
        let doNext = async (res) => {
            data = res;
        };
        parseString(someXml,(err,result)=>{
           doNext(result);
        });
        return data;
    }
};
