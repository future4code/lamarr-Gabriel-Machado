const variavel = ( nome: string ) => {
  const type = typeof nome
    const frase = `O valor informado é do tipo: ${type}`
    return (frase)
}

console.log(variavel("Gabriel"))