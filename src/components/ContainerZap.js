import styled from "styled-components"
import logo from "../assets/logo.png"
import FlashCards from "./FlashCards"
import Rodape from "./Rodape"
import { useState } from "react"
import ContainerTela from "../style/ContainerTela"

export default function ContainerZap() {
  const [contador, setContador] = useState(0)


    return (
        <ContainerTela>
            <Logo>
                <img src={logo} alt="Logo de Raio"></img>
                <h1>ZapRecall</h1>
            </Logo>
            <FlashCards contador={contador} setContador={setContador}/>
            <Rodape contador={contador}/>
        </ContainerTela>

    )

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
