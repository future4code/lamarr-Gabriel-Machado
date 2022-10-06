console.log("exercicio 1");

function conversorDeTemperatura(temperatura, unidade){
    if(unidade === "K"){
        return `${temperatura}°C equivale a ${temperatura + 273.15}K`
    } else if(unidade === "F"){
        return `${temperatura}°C equivale a ${9 * temperatura/5 + 32}°F`
    } else if (unidade !== "F" || unidade !== "K"){
        return `As unidades devem ser maiúsculas. Ex: "F" não "f".`
    }
}

console.log(conversorDeTemperatura(15, "F"))
console.log(conversorDeTemperatura(16, "K"))