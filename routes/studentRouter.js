var routes =require("express").Router();

var {create,getAll,deleteStudent}=require("../controllers/studentController")


routes.get("/getAStudent",getAll)
routes.post("/createStudent",create)
routes.delete("/deleteStudent",deleteStudent)
module.exports=routes