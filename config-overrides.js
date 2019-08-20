const { override, fixBabelImports, addWebpackAlias ,overrideDevServer,watchAll} = require('customize-cra')
const path = require('path')

const addCustomize=()=>{
    return (config)=>{
        console.log(config)
    config.output.publicPath="./"
    console.log("haha")
    console.log(config)

    return config
    }
    }
module.exports = {
    
    webpack:override(
        addCustomize(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        colleague: path.resolve(__dirname, './src/pages/colleague'),
        home: path.resolve(__dirname, './src/pages/home'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        util: path.resolve(__dirname, './src/util'),
        pages: path.resolve(__dirname, './src/pages'),
        store:path.resolve(__dirname,'./src/store')
      }),
      ),
    //   devServer:overrideDevServer(
    //     watchAll({
    //         port:9000
    //     })
    //   ),
}
