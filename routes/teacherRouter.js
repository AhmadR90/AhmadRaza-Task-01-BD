var routes =require("express").Router();

var {create,getAll,deleteTeacher}=require("../controllers/teacherController")
var {createUserSchema}=require("../validations/validation")

routes.get("/getATeacher",getAll)
routes.post("/createTeacher",createUserSchema,create)
routes.delete("/deleteTeacher",deleteTeacher)


module.exports=routes