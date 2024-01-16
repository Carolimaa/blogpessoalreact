import React from 'react';
import './Home.css';
import HomeLogo from '../../assets/blogreact.png'

function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src={HomeLogo} alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;