var routes =require("express").Router();

var {create,getAll,deleteTeacher}=require("../controllers/teacherController")


routes.get("/getATeacher",getAll)
routes.post("/createTeacher",create)
routes.delete("/deleteTeacher",deleteTeacher)


module.exports=routes