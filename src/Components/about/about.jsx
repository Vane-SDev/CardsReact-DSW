import React from 'react';
import './about.css';
import perfil1 from "../../assets/perfil1.jpeg";
import perfil2 from "../../assets/perfil2.jpeg";

export default function About() {
    return (
        <div className='about-section'>
            <h2>Quienes somos</h2>
            <div className='about-content'>
                <p className='about-text'>
                Somos dos desarrolladoras apasionadas por el software y la tecnología.
                En este equipo, cada una aporta sus habilidades únicas para crear aplicaciones
                intuitivas y funcionales, desde el frontend hasta el backend.<br/> 
                Nos motiva esa sensación de resolver problemas complejos, de ver cómo una idea va tomando forma y se convierte en algo que otros pueden usar y disfrutar. Para nosotras, cada proyecto es una oportunidad para superarnos, aprender, y llevar nuestras habilidades al siguiente nivel.<br/> No solo nos interesa seguir las tendencias tecnológicas, sino aplicar las mejores prácticas para hacer el trabajo bien hecho, y de una forma que nos permita seguir evolucionando. Nos enorgullece crear herramientas y soluciones que tengan sentido y que, al final, puedan hacer la vida un poco más fácil a quienes las utilicen.
                </p>
            
            <div className='dev-images'>
                <img src={perfil2} alt='Desarrolladora Vanesa' className='developer-image'/>
                <img src={perfil1} alt='Desarrolladora Estefania' className='developer-image'/>   
              </div>
            </div> 
        </div>
    );
}