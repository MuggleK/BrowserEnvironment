var catvm = require("../catvm/CatVm.js");
catvm.run(this, {
	proxy: true,
	log: true,
	polyfill: ["base64"]
});

document.documentElement = new HTMLElement();

debugger;
