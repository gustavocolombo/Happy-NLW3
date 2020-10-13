import React from 'react';
import logoimg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/global.css'
import '../styles/pages/landing.css';

function Landing(){
  return(
    <div id="page-landing">
     <div className="content-wrapper">
      <img src={ logoimg } alt="logo"/>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças</p>
      </main>

      <div className="location"> 
        <strong>Quixadá</strong>
        <span>Ceará</span>
      </div>
     
     <a href="" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
     </a>   
     
     </div>
   </div>
  );
}

export default Landing;