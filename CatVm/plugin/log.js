var config = require("./config.js")


function info(tag, objectname, propertyname, value) {
    var islog = config.getConfigById("log");
    if (typeof (islog) == "boolean" && islog) {
        // if (propertyname == 'Intl'){
            console.table([{ tag, objectname, propertyname, value }], ["tag", "objectname", "propertyname", "value"]);
            debugger;
        // }

    }
}

module.exports = {
    info
}
