// adc item na lista
// exibir a lista

const novaTarefa = process.argv[2];

const tarefas = [ 
    'Estudar',
    'Ler',
    'Fazer exercícios', 
    'Tomar banho',
    'Escovar os dentes',
    'Arrumar a cama',
    'Tomar café',
    'Ir trabalhar',
    'Almoçar',
    'Jantar',
    'Dormir'
]

function adc() {
    tarefas.push(novaTarefa)
    console.log('tarefa adicionada com successo!')
    return tarefas
}

console.log(adc())
