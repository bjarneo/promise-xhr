
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const path = require('path');

module.exports = {
    devtool: null,
    entry: [
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: __dirname,
        filename: 'index.js',
        library: 'xhr',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new ClosureCompiler({
            options: {
                languageIn: 'ECMASCRIPT6',
                languageOut: 'ECMASCRIPT3',
                compilationLevel: 'ADVANCED'
            }
        })
    ]
};
