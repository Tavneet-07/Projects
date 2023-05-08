const http = require('http');
const fs=require('fs');

const homeFile= fs.readFileSync("home.html", "utf-8")
const requests=require('requests');
const replaceVal=(tempVal,orgVal)=>{
    let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=temperature.replace("{%location%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    temperature=temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temperature;
}

const server=http.createServer((req,res)=>{

    if (req.url == "/") {
        requests(
          "https://api.openweathermap.org/data/2.5/weather?q=Bareilly&appid=c31ab6a71748de6f4fae7a0d9ea8898d"
        )
        .on("data",(chunk)=>{
            const objdata=JSON.parse(chunk); // to parse the json data into  object of java script
            const arrData=[objdata]; // this will return the data as array of an object
            console.log(arrData);
            const realTimeData=arrData.map((val)=> replaceVal(homeFile,val)).join(""); // join method is used to convert arry into string
            // this we did to chnge the value of homefile with the values from the API
            res.write(realTimeData);
            console.log(realTimeData);
        })
        .on("end",(err)=>{
            if (err)
            return console.log("Connection closed due to errors",err);
            console.log("end")
            res.end();
        });
    }

});
server.listen(7000,"127.0.0.1");