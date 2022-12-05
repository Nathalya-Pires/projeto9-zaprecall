import styled from "styled-components"
import ContainerTela from "../style/ContainerTela"
import logo from "../assets/logo.png"
import { useState } from "react"

export default function IniciarRecall() {
    const [boasVindas, setBoasVindas] = useState(false)

    if (boasVindas && true) {
        return (
            <ContainerTela>
                <Logo>
                    <img src={logo} alt="Logo de Raio"></img>
                    <h1>ZapRecall</h1>
                </Logo>
                <Botao>Iniciar Recall!</Botao>
            </ContainerTela>
        )
    }
}

const Logo = styled.img`
    width: 50%;
    height: 50%;

h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
 }
`
const Botao = styled.button`
    width: 50%;
    height: 50%;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
`