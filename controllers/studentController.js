module.exports={
    create:(req,res)=>{
        try {
            return res.send({
                response:"Student Created Successfuly"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    getAll:(req,res)=>{
        try {
            return res.send({
                response:"Student users List"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    deleteStudent:(req,res)=>{
        try {
            return res.send({
                response:"Student Deleted Successfuly"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    }

}