const express=require("express")
const routes=express.Router()


routes.post("/",(request,response)=>{
    console.log(request.body)
    request.getConnection((err,conn)=>{
        if(err){
            console.log(err)
        }
        conn.query('INSERT INTO contacts set ?',[request.body],(err,rows)=>{
            if(err){
                console.log(err)
            }
            response.json("contacto agregado")
        })
    })
})

//_________________________________________________________


routes.get("/",(request,response)=>{
    request.getConnection((err,conn)=>{
        if(err){
            console.log(err)
        }
        conn.query('SELECT * FROM contacts',(err,rows)=>{
            if(err){
                console.log(err)
            }
            response.json(rows)
        })
    })
})

//___________________________________________________________
routes.delete("/:id",(request,response)=>{
    request.getConnection((err,conn)=>{
        if(err){
            console.log(err)
        }
        conn.query('DELETE FROM contacts WHERE id=?',[request.params.id],(err,rows)=>{
            if(err){
                console.log(err)
            }
            response.json(request.body); // Devolver un objeto JSON con el mensajeresponse.json({ message: "contacto eliminado" }); // Devolver un objeto JSON con el mensaje
        })
    })
})
//_______________________________________________________________


routes.put("/:id",(request,response)=>{
    request.getConnection((err,conn)=>{
        if(err){
            console.log(err)
        }
        conn.query('UPDATE contacts set ? WHERE id=?',[request.body,request.params.id],(err,rows)=>{
            if(err){
                console.log(err)
            }
            response.json("contacto actualizado")
        })
    })
})


module.exports=routes