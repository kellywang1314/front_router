const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const webpack = require('webpack')
const complier = webpack(webpackConfig)
let app = express()

app.use(webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath
}))

app.get('/history',function(req,res){
    let filename = __dirname + '/public/' + 'history.html'
    complier.outputFileSystem.readFile(filename, (err, result) =>{
        if(err){
            return(next(err))
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
    //res.sendFile(__dirname + '/public/' + 'history.html')
})

//使用webpack-dev-middleware打包之后的文件在内存中，并没有直接输出，所以访问需要读内存
app.get('/hash',function(req,res,next){
    let filename = __dirname + '/public/' + 'hash.html'
    complier.outputFileSystem.readFile(filename, (err, result) =>{
        if(err){
            return(next(err))
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
    //res.sendFile(__dirname + '/public/' + 'hash.html')
}) 

app.listen(8082,function(){
    let uri = 'http://localhost:8082'
    console.log('Listening at ' + uri + '\n')
})