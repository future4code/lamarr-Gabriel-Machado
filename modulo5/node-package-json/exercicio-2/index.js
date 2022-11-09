const recebe = process.argv[2]
const recebePriNum = Number(process.argv[3])
const recebeSegNum =  Number(process.argv[4])

const operador = () => {
    switch (recebe){
        case "add":
            return recebePriNum + recebeSegNum
        case "mult":
            return recebePriNum * recebeSegNum
        case "sub":
            return recebePriNum - recebeSegNum
        case "div":
            return recebePriNum / recebeSegNum
    } 
}

console.log(operador())