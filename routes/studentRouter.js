var routes =require("express").Router();

var {create,getAll,deleteStudent}=require("../controllers/studentController")
var {createUserSchema}=require("../validations/validation")

routes.get("/getAStudent",getAll)
routes.post("/createStudent",createUserSchema,create)
routes.delete("/deleteStudent",deleteStudent)
module.exports=routes