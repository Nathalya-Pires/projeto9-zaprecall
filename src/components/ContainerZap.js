import styled from "styled-components"
import logo from "../assets/logo.png"
import FlashCards from "./FlashCards"
import Rodape from "./Rodape"

export default function ContainerZap() {
    return (
        <ContainerTela>
            <Logo>
                <img src={logo} alt="Logo de Raio"></img>
                <h1>ZapRecall</h1>
            </Logo>
            <FlashCards/>
            <Rodape/>
            
        </ContainerTela>

    )

}




const ContainerTela = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

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
