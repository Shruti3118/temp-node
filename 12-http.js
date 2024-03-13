const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
        //res.end()
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
        //res.end()
    }
    else{
    res.end(`
    <h1>OOPS</h1>
    <p>We can't find the resource you are looking for</p>
    <a href = "/">back home</a>
    `)
    //res.end()
    }
})

server.listen(5000)