type Usuarios = {
    name: string,
    email: string,
    role: string
}

const lista: Usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function recebe (usuario: Usuarios[]):string[] {
    return usuario.filter(i => i.role === "admin")
    .map(i => i.email)
}

console.log(recebe(lista))
