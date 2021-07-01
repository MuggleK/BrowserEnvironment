
//引入全局配置类
var config = require("./config.js")

function load()
{
    var cof = config.getConfigById("polyfill");
    //加载兜底列表
    if(cof != undefined )
    {
        cof.forEach(element => {
            require("../polyfill/"+ element +".js").run();
        });

    } 
}
module.exports = {
    load
}