module.exports={
    create:(req,res)=>{
        try {
            return res.send({
                response:"Admin Created Successfuly"
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
                response:"Admin users List"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    deleteAdmin:(req,res)=>{
        try {
            return res.send({
                response:"Admin Deleted Successfuly"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    }

}