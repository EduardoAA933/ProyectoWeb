function buscarUsuarioPorCorreo(correo)
{
    console.log("Correo:",correo)
   return this.usuarios.find((usuario)=>usuario.correo==correo)
}
function validarUsuario(correo,password)
{
   let usuario = this.buscarUsuarioPorCorreo(correo)
   if(usuario==null)
       {
        return null
       }
   if(usuario.password==password)
      {
        return usuario
      }
   return null   
}
function agreagarUsuario(correo,nombre,password)
{
    this.usuarios.push(usuario)
    usuario.area=[]
}
function agregarArea(usuario,area)
{
  
   let pos=this.usuarios.findIndex(usuario => 
     usuario.correo==correo)
    if(pos>=0)
    {
        this.usuarios[pos].areas.push(area)
        return area
    }
    return null
}
function crearRepoUsuarios()
{
    let usuarios=[
        {correo:"admin@gmail.com",nombre:"Admin1",password:"12345"},
        {correo:"eduardo@gmail.com",nombre:"Eduardo Aranda",password:"12345"},
        {correo:"jorge@gmail.com",nombre:"Jorge Barba",password:"12345"}
    ]
    return {usuarios,buscarUsuarioPorCorreo,validarUsuario,agreagarUsuario,agregarArea}

}
module.exports=crearRepoUsuarios
