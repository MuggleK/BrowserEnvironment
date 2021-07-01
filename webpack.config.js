const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
        mode: "none",
        //mode: "production",
        entry: {
        
            app: "./src/index.js" // 入口文件
        
        },
        output: {
            
            path: __dirname, // 打包目录
            
            filename: 'catvm.build.js', // 输出文件名
        }
    
}