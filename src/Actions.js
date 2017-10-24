import store from "./Store";

const nxt = () => {
    let contador = store.getState().contador;
    let total = store.getState().total;
    if(contador >= 0 && contador <= total - 1)
    {
        store.setState({
            contador: contador + 1,
        })
    }
}

export const addAnswer = (answer) => {
    let contador = store.getState().contador;
    let oldList = store.getState().arrayAnswers;
    console.log("oldlist", oldList);
    oldList[contador] = answer
    const newList = oldList;
    store.setState({
        arrayAnswers: newList
    })
    nxt();
}
export const anterior = (answer) => {
    
    const addAnswerList = [...store.getState().arrayAnswers, [
        answer = answer,
    ]];

    store.setState({
        arrayAnswers: addAnswerList
    })
}
export const siguiente = () => {
    let contador = store.getState().contador;
    let total = store.getState().total;
    if(contador >= 0 && contador <= total - 1)
    {
        store.setState({
            contador: contador + 1,
        })
    }
}
let contCorrectas = 0;
export const comprobar = (answer) => {
    let questions = store.getState().questions;
    let arrayAnswers = store.getState().arrayAnswers;
    let cont = 0;
    console.log("entro comprbar")
    let incorrectas = store.getState().incorrectas;
    let titulo = store.getState().titulo;
    let total = store.getState().total;
    
    for(let i = 0; i < total; i++)
    {
          if(arrayAnswers[cont] == questions[i].answer)
          {
                contCorrectas++;
                console.log("contCorrectas", contCorrectas)
          }
          else
          {
            incorrectas.push(cont);  
            console.log("incorrectas", incorrectas)
          }
          cont++;
    }
    titulo = `${contCorrectas} de ${total} correctas!`;    
    store.setState({
        incorrectas: incorrectas,
        titulo: titulo,
    })
}
export const reiniciar = (answer) => {
    
    let total = store.getState().total;
    
    contCorrectas = 0;
    
    store.setState({
        arregloRespuestas: new Array(total),
        contador: 0,
        titulo: "Aqui estan tus respuestas:",
        incorrectas: [],
    })
}
