module.exports={
    create:(req,res)=>{
        try {
            return res.send({
                response:"Teacher Created Successfuly"
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
                response:"Teacher users List"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    deleteTeacher:(req,res)=>{
        try {
            return res.send({
                response:"Teacher Deleted Successfuly"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    }

}