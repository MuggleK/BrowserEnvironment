const fs = require('fs');
const {VM, VMScript} = require('vm2');
const {load_env} = require("../vm/load.js");

let env_code = load_env({
    proxy: true,
    log: false,
});
// 加载加密代码
let code = fs.readFileSync(`../src/code.js`) + '\r\n'

const vm = new VM()
const script = new VMScript(env_code + code, `调试.js`);
debugger;
let result = vm.run(script);
console.log(result)