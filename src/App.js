import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import { addAnswer, anterior, siguiente, reiniciar, comprobar } from "./Actions";
import fondo from './img/cinema.png';
import facebook from './img/Facebook-icon.png';
import google from './img/Googleplus-icon.png';
import twitter from './img/Twitter-icon.png';

const App = ({questions, total, arrayAnswers, contador, incorrectas, titulo}) =>
{
  let invisible = "";
  let flechaAnterior = " disabled";
  let flechaSiguiente = " disabled";
  let respuestas = arrayAnswers.map((item, index) => 
  {
        return <h4 key={index}>{index+1}. {questions[index].question} {item}</h4>;
  });
  if(incorrectas.length > 0)
  {
    invisible = "invisible";
        for(let i of incorrectas)
        {
              respuestas[i] = <h4 key={i} style={{color:"red"}}>{i+1}. {questions[i].question} <strike>{arrayAnswers[i]}</strike> <strong>{questions[i].answer}</strong></h4>;           
        }
  }
  let secPreguntas;
  if(contador < total)
  {
        secPreguntas = (
        <div className="container" id="contenedorPreguntas">
              <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                          <h1>{questions[contador].question}</h1>
                    </div>
              </div>
              <div className="row text-center opciones">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                          <h1 className="btn btn-default" id="opcion1" onClick={e => addAnswer(e.target.textContent)}>{questions[contador].option1}</h1>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                          <h1 className="btn btn-default" id="opcion1" onClick={e => addAnswer(e.target.textContent)}>{questions[contador].option2}</h1>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                          <h1 className="btn btn-default" id="opcion1" onClick={e => addAnswer(e.target.textContent)}>{questions[contador].option3}</h1>
                    </div>
              </div>
              <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-md-offset-0 col-xs-offset-0 text-center">
                          <img className="btn social" src={facebook} alt=""/>
                          <img className="btn social" src={google} alt=""/>
                          <img className="btn social" src={twitter} alt=""/>
                    </div>
              </div>
        </div>);
  }
  if(contador == total)
  {
        secPreguntas = (
        <div className="container" id="contenedorRespuestas">
              <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                          <h1 id="titulo">{titulo}</h1>
                    </div>
              </div>
              <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12" id="respuestas">
                          {respuestas}
                    </div>
              </div>
              <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className={"btn btn-primary " + invisible} id="btnEnviar" onClick={e => comprobar(e)}>Enviar</div>
                          <div className="btn btn-primary" id="btnComenzar" onClick={e => reiniciar(e)}>Comenzar de nuevo</div>
                    </div>
              </div>
        </div>);
  }
  return (
  <div>
        <header id="cabecera">
              <div className="container">
                    <div className="row">
                          <div className="col-md-1 col-sm-1 col-xs-2 col-md-offset-10 col-sm-offset-9 col-xs-offset-6">
                                <img className={"btn "+ invisible + flechaAnterior} id="anterior" src="img/flecha-izq.png" onClick={e => anterior(e)} alt=""/>
                          </div>
                          <div className="col-md-1 col-sm-1 col-xs-2">
                                <img className={"btn"+ invisible + flechaSiguiente} id="siguiente" src="img/flecha-der.png" onClick={e => siguiente(e)} alt=""/>
                          </div>
                    </div>
              </div>
        </header>
        <section id="secImagen">
              <div className="container">
                    <div className="row">
                          <div className="col-md-4 col-sm-8 col-xs-10 col-md-offset-4 col-sm-offset-3 col-xs-offset-1 text-center">
                                <img className="img-responsive" id="imagen" alt="" src={questions[contador].image}/>
                          </div>
                    </div>
              </div>
        </section>
        <section id="secProgreso">
              <div className="container">
                    <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                                <h4 id="progreso">{contador} de {total} respondidas</h4>
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="progress">
                                      <div className="progress-bar progress-bar-striped active" id="barra" role="progressbar"
                                      aria-valuenow={contador*20} aria-valuemin="0" aria-valuemax="100" style={{width:contador*20+"%"}}>
                                      </div>
                                </div>
                          </div>
                    </div>
              </div>
        </section>
        <section id="secPreguntas">
              {secPreguntas}
        </section>
        <section id="fondo">
              <div className="container">
                    <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                                <img className="img-responsive" src={fondo} alt=""/>
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

const mapToProps = ({questions, total, arrayAnswers, contador, incorrectas, titulo}) => ({questions, total, arrayAnswers, contador, incorrectas, titulo});

export default connect(mapToProps)(App);