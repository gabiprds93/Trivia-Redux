import store from "./Store";

export const addAnswer = (answer) => 
{
    let count = store.getState().count;
    let oldList = store.getState().arrayAnswers;
    oldList[count] = answer;
    const newList = oldList;
    store.setState({
        arrayAnswers: newList
    });
    next();
}

export const previous = (answer) => 
{
    
    const addAnswerList = [...store.getState().arrayAnswers, [
        answer = answer,
    ]];

    store.setState({
        arrayAnswers: addAnswerList
    })
}

export const next = () => 
{
    let count = store.getState().count;
    let total = store.getState().total;
    if(count >= 0 && count <= total - 1)
    {
        store.setState({
            count: count + 1,
        })
    }
}

let countCorrect = 0;
export const check = (answer) => 
{
    let questions = store.getState().questions;
    let arrayAnswers = store.getState().arrayAnswers;
    let incorrect = store.getState().incorrect;
    let title = store.getState().title;
    let total = store.getState().total;
    let cont = 0;    
    
    for(let i = 0; i < total; i++)
    {
        if(arrayAnswers[cont] == questions[i].answer)
        {
            countCorrect++;
        }
        else
        {
            incorrect.push(cont);  
        }
        cont++;
    }
    title = `${countCorrect} de ${total} correctas!`;    
    store.setState({
        incorrect: incorrect,
        title: title,
    });
}

export const restart = (answer) => 
{
    let total = store.getState().total;
    countCorrect = 0;
    store.setState({
        arrayAnswers: new Array(total),
        count: 0,
        title: "Aqui estan tus respuestas:",
        incorrect: [],
    });
}