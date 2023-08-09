const http=require("http")

const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.write("Thanks for Joining PickupBizz")
    res.end()
}
})

server.listen(5000)
console.log("server is running on port 5000.....")