var routes =require("express").Router();

var {create,getAll,deleteAdmin}=require("../controllers/adminController")


routes.get("/getAdmin",getAll)
routes.post("/createAdmin",create)
routes.delete("/deleteAdmin",deleteAdmin)

module.exports=routes;