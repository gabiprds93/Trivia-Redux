import React from 'react';
import './App.css';
import {connect} from "redux-zero/react";
import {addAnswer, previous, next, restart, check} from "./Actions";
import background from './img/cinema.png';
import facebook from './img/Facebook-icon.png';
import google from './img/Googleplus-icon.png';
import twitter from './img/Twitter-icon.png';

const App = ({questions, total, arrayAnswers, count, incorrect, title}) =>
{
  let invisible = "";
  let flechaAnterior = " disabled";
  let flechaSiguiente = " disabled";
  let answers = arrayAnswers.map((item, index) => 
  {
    return <h4 key={index}>{index+1}. {questions[index].question} {item}</h4>;
  });
  if(incorrect.length > 0)
  {
    invisible = "invisible";
    for(let i of incorrect)
    {
      answers[i] = <h4 key={i} style={{color:"red"}}>{i+1}. {questions[i].question} <strike>{arrayAnswers[i]}</strike> <strong>{questions[i].answer}</strong></h4>;           
    }
  }
  let secPreguntas;
  if(count < total)
  {
    secPreguntas = (
      <div className="container" id="contenedorPreguntas">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h1>{questions[count].question}</h1>
          </div>
        </div>
        <div className="row text-center options">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <h1 className="btn btn-default" id="option1" onClick={e => addAnswer(e.target.textContent)}>{questions[count].option1}</h1>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <h1 className="btn btn-default" id="option2" onClick={e => addAnswer(e.target.textContent)}>{questions[count].option2}</h1>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <h1 className="btn btn-default" id="option3" onClick={e => addAnswer(e.target.textContent)}>{questions[count].option3}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 col-md-offset-0 col-xs-offset-0 text-center">
            <img className="btn social" src={facebook} alt=""/>
            <img className="btn social" src={google} alt=""/>
            <img className="btn social" src={twitter} alt=""/>
          </div>
        </div>
      </div>
    );
  }
  if(count == total)
  {
    secPreguntas = (
      <div className="container" id="contenedorRespuestas">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <h1 id="title">{title}</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12" id="answers">
            {answers}
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className={"btn btn-primary " + invisible} id="btnEnviar" onClick={e => check(e)}>Enviar</div>
            <div className="btn btn-primary" id="btnComenzar" onClick={e => restart(e)}>Comenzar de nuevo</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <header id="cabecera">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-xs-2 col-md-offset-10 col-sm-offset-9 col-xs-offset-6">
              <img className={"btn "+ invisible + flechaAnterior} id="anterior" src="img/flecha-izq.png" onClick={e => previous(e)} alt=""/>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-2">
              <img className={"btn"+ invisible + flechaSiguiente} id="siguiente" src="img/flecha-der.png" onClick={e => next(e)} alt=""/>
            </div>
          </div>
        </div>
      </header>
      <section id="secImage">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-8 col-xs-10 col-md-offset-4 col-sm-offset-3 col-xs-offset-1 text-center">
              <img className="img-responsive" id="imagen" alt="" src={questions[count].image}/>
            </div>
          </div>
        </div>
      </section>
      <section id="secProgreso">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h4 id="progreso">{count} de {total} respondidas</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="progress">
                <div className="progress-bar progress-bar-striped active" id="barra" role="progressbar"
                  aria-valuenow={count*20} aria-valuemin="0" aria-valuemax="100" style={{width:count*20+"%"}}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="secPreguntas">
        {secPreguntas}
      </section>
      <section id="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <img className="img-responsive" src={background} alt=""/>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <label className="">Copyright 2017</label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const mapToProps = ({questions, total, arrayAnswers, count, incorrect, title}) => ({questions, total, arrayAnswers, count, incorrect, title});

export default connect(mapToProps)(App);