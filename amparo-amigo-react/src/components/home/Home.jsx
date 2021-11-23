import React from 'react'
import imgagemIntro from './img/home.jpg'

export default function Home() {
  return (
    <>
      <section id="intro">
        <div className="intro-container">
          <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators"></ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-background"><img src={imgagemIntro} alt="" /></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Aumentando a rede de colaboração e humanidade</h2>
                    <p>Aqui você encontra pessoas que se importam com a sua causa de ajuda</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Encontrar Voluntário</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
