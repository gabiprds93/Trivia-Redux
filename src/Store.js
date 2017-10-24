import createStore from "redux-zero";
import image1 from "./img/aladino.jpg";
import image2 from "./img/frozen.jpg";
import image3 from "./img/mulan.jpg";
import image4 from "./img/toystory.jpg";
import image5 from "./img/elreyleon.jpg";
import image6 from "./img/final.gif";

const QUESTIONS =
[
    {
        image: image1,
        question: "¿De qué película es esta imagen?",
        option1: "Aladino",
        option2: "El Rey León",
        option3: "La Sirenita",
        answer: "Aladino",
    },
    {
        image: image2, 
        question: "¿Te suena familiar?",
        option1: "Pinocho",
        option2: "Frozen",
        option3: "La Bella Durmiente",
        answer: "Frozen",
    },
    {
        image: image3, 
        question: "¿Recuerdas esta?",
        option1: "Enredados",
        option2: "Fantasía",
        option3: "Mulán",
        answer: "Mulán",
    },
    {
        image: image4, 
        question: "¿Sabes cuál es esta película?",
        option1: "Buscando a Nemo",
        option2: "Toy Story",
        option3: "Enredados",
        answer: "Toy Story",
    },
    {
        image: image5, 
        question: "¿Y esta?",
        option1: "Aladino",
        option2: "El Rey León",
        option3: "La Sirenita",
        answer: "El Rey León",
    },
    {
        image: image6,
    }
];

const initialState = 
{
    questions: QUESTIONS,
    total: 5,
    arrayAnswers: new Array(this.total),
    contador: 0,
    incorrectas: [],
    titulo: "Aqui estan tus respuestas:",
    
};

const store = createStore(initialState);

export default store;