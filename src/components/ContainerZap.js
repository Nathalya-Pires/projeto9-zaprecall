import styled from "styled-components"
import logo from "../assets/logo.png"
import FlashCards from "./FlashCards"
import Rodape from "./Rodape"
import { useState } from "react"
import ContainerTela from "../style/ContainerTela"


export default function ContainerZap() {
  const [contador, setContador] = useState(0)
  const [boasVindas, setBoasVindas] = useState(true)

  if (boasVindas === true) {

    return (
      <ContainerTela>
        <LogoInicial>
          <img src={logo} alt="Logo de Raio"></img>
          <h1>ZapRecall</h1>
        </LogoInicial>
        <BotaoInicial onClick={() => setBoasVindas(false)}>Iniciar Recall!</BotaoInicial>
      </ContainerTela>
    )
  }

  if (boasVindas === false) {

    return (
      <ContainerTela>
        <Logo>
          <img src={logo} alt="Logo de Raio"></img>
          <h1>ZapRecall</h1>
        </Logo>
        <FlashCards contador={contador} setContador={setContador} />
        <Rodape contador={contador} />
      </ContainerTela>

    )

  }


}


const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img{
    width: 52px;
  }

  h1{
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  }

`

const LogoInicial = styled.div`
   margin-top: 8%;

   h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-top: 9%;
    
 }
`

const BotaoInicial = styled.button`
    width: 30%;
    height: 54px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #D70900;
    background-color: #FFFFFF;
    border:1px solid #D70900;
    border-radius: 5px ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    margin-top: 3%;
    cursor: pointer;
`
