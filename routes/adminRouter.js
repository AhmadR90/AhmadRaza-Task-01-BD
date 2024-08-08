var routes =require("express").Router();

var {create,getAll,deleteAdmin}=require("../controllers/adminController")
var {createUserSchema}=require("../validations/validation")

routes.get("/getAdmin",getAll)
routes.post("/createAdmin",createUserSchema,create)
routes.delete("/deleteAdmin",deleteAdmin)

module.exports=routes;