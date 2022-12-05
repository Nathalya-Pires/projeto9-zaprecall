import styled from "styled-components"
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import certo from "../assets/icone_certo.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import { useState } from "react"


export default function Card({ elem, i }) {
    const [flashCardFechado, setFlashCardFechado] = useState(true)
    const [flashCardAberto, setFlashCardAberto] = useState(false)
    const [flashCardResposta, setFlashCardResposta] = useState(false)
    const [flashCardFinalizado, setFlashCardFinalizado] = useState(false)
    const [icone, setIcone] = useState("")
    const [corClicada, setCorClicada] = useState("")
    const cores = {verde:"#2FBE34", amarelo:"#FF922E", vermelho:"#FF3030"}

    if (flashCardFechado && true) {
        return (
            <CardFechado>
                <p>Pergunta {i + 1}</p>
                <img
                    src={play}
                    onClick={() => (setFlashCardAberto(true), setFlashCardFechado(false))}
                    alt="Icone de Play">
                </img>
            </CardFechado>

        )
    }

    if (flashCardAberto && true) {
        return (
            <CardAberto>
                <p>{elem.pergunta}</p>
                <img
                    src={virar}
                    onClick={() => (setFlashCardResposta(true), setFlashCardAberto(false))}
                    alt="Icone de virar"></img>
            </CardAberto>
        )
    }

    if (flashCardResposta && true) {
        return (
            <CardResposta>
                <p>{elem.resposta}</p>
                <div>
                    <Botao cor={cores.vermelho} onClick={() => (setFlashCardFinalizado(true), setFlashCardResposta(false), (setIcone(erro)), setCorClicada(cores.vermelho))}>Não lembrei</Botao>
                    <Botao cor={cores.amarelo} onClick={() => (setFlashCardFinalizado(true), setFlashCardResposta(false), (setIcone(quase)), setCorClicada(cores.amarelo))}>Quase não lembrei</Botao>
                    <Botao cor={cores.verde} onClick={() => (setFlashCardFinalizado(true), setFlashCardResposta(false), (setIcone(certo)), setCorClicada(cores.verde))}>Zap!</Botao>
                </div>
            </CardResposta>

        )
    }

    if (flashCardFinalizado && true) {
        return(
            <CardFinalizado corClicada={corClicada}>
                <p><s>Pergunta {i + 1}</s></p>
                <img
                    src={icone}
                    alt="Icone">
                </img>
            </CardFinalizado>
        )
    }

}

const CardFechado = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }

    img{
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    }

`
const CardAberto = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer
  }
`
const CardResposta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div{
    display: flex;
    justify-content: space-between;
  }

`
const Botao = styled.button`
  width: 90px;
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
  background: ${props => props.cor};
  border-radius: 5px;
  border: 1px solid ${props => props.cor};
  padding:5px;
  cursor: pointer;
`
const CardFinalizado = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.corClicada}
    }

    img{
    position: absolute;
    bottom: 20px;
    right: 20px;
    }
`