const express=require("express")
const mustacheExpress=require("mustache-express")
const app=express()
//const funcioncreadora=require("./usuarios")
//const repoUsuarios=funcioncreadora()
const repoUsuarios=require("./Login")()
const repo=require("./promediar")
app.use(express.static('www'))
app.use(express.urlencoded({extended:false}))
app.engine('mustache',mustacheExpress())  //Define las vistas de mustache
app.set('view engine','mustache')
app.set('views',__dirname + '/views')
app.get("/forma",(request,response)=>{
    response.render("forma")
})

app.get("/cal",(request,response)=>{
    response.render("cal")
})
app.get("/faltas",(request,response)=>{
    response.render("faltas")
})


app.get("/registrarArea",(request,response)=>{
    response.render("registrarArea")
})
app.get("/registrarUsuario",(request,response)=>{
    response.render("registrarUsuario")
})

app.get("/lista",(request,response)=>{
    response.render("lista")
})

app.post("/login",(request,response)=>{
    console.log("Validando informacion "+request.body.correo+":"+request.body.password)
    let usuario=repoUsuarios.validarUsuario(request.body.correo,request.body.password)
    if(usuario==null)
    {
        response.status(404).render("forma",{correo:request.body.correo})
        //response.status(404).send("El correo :"+request.body.correo+" no existe")
        return
    }


    //response.status(200).send("Voy a ver que sigue")
    let parametroMustache={...usuario}
    console.log(parametroMustache)
    response.status(200).render("bienvenida",parametroMustache)
})

app.listen(8080,()=>console.log("Corriendo en el 8080..."))