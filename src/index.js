var catvm = require("../vm/vm.js");
catvm.run(this, {
    proxy: true,
    log: true,
    polyfill: ["base64"]
});

debugger;
