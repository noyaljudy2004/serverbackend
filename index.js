//import json-server library
const jsonServer =  require('json-server')

// create a express like server instance
const rBuilderServer=jsonServer.create()

// tell json server to use dataBase.json as its data source
const router=jsonServer.router('db.json')

//add useful middleware -cors,  logging etc
const middleware = jsonServer.defaults()
rBuilderServer.use(middleware)
rBuilderServer.use(router)


const PORT=process.env.PORT || 3000

rBuilderServer.listen(PORT,()=>{
    console.log(`rbserver running at port ${PORT} and waiting for client request`);
    
})