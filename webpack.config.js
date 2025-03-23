const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',  // Ensures Webpack compiles for Node.js (not the browser)
    entry: './main.js',  // Main entry file
    output: {
        path: path.resolve(__dirname, 'dist'),  // Output folder
        filename: 'bundle.js',  // Bundled file name
    },
    externals: [nodeExternals()],  // Prevent bundling node_modules
    mode: 'production',  // Optimized for deployment
};

