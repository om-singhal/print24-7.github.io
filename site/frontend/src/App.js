import React  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div id="parent">
  <header className="header">
    <div className="logo-box">
      <img src=" "></img>
    </div>
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">best designs</span>
        <span className="heading-primary-sub">print24*7</span>
        <a href="@" className="om om-vasu">discover product</a>
      </h1>
    </div>
  </header> 
  <main>
    <section id="features">
      <div className="row">
        <div className="feature-box col-lg-4">
         <img className="icon" src=""></img>
         <h2><strong>products</strong></h2>
         <p><i>good quality products</i></p>
        </div>  
        <div className="feature-box col-lg-4">
         <img className="icon" src=""></img>
         <h2><strong>products</strong></h2>
         <p><i>good quality products</i></p>
        </div>
      </div>
    </section>
    <section id="testimonals">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2>i love the button badges and lock key qualitry and delivery is also fast
              </h2>
              <img class="testimonals-image"src="data:image/jpeg;base64,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"></img>
             <em> vasu jansath</em>
            </div>
            <div class="carousel-item">
              <h2>i love the button badges and lock key qualitry and delivery is also fast
              </h2>
              <img class="testimonals-image"src="data:image/jpeg;base64,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"></img>
             <em> om jansath</em>
            </div>
          </div>
         
        </div>
       
      </section>
     
  </main>   
 </div>    
  );
}

export default App;
