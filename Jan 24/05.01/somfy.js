//an house with 32 curation
//each curation has an ip address,port, channel.,name (curation1,curation2)
let config ={
    name: "floor1",
    ip:"192.168.1.206",
    port: c,
    ch1: true,
    ch2: true,
    ch3: false,
    ch4: false,
    ch5: false,
    ch6: false,
    ch7: false,
    ch8: false,
    ch9: false,
    ch10: true,
    ch11: false,
    ch12: false,
    ch13: false,
    ch14: false,
    ch15: false,
    ch16: false,
    reverse: false,
    totalCh: 16,
}
//16 objects -> array -> name,ip,port,channel,reverse

var comfyArray = [];

for(var counter=1;counter<=config.totalCh;counter++){
    if(config[`ch${counter}`]){
        var Object ={
            name: `curtaion${counter}`,
            ch: counter,
            ip: "192.168.1.206",
            port: 1001,
            reverse: false,
        }
    }
}
console.log(curtains);
