import styled from "styled-components"
import play from "../assets/seta_play.png"
import { cards } from "./deck"

export default function FlashCards() {
    return (
        <>
            {cards.map((c, i) => <Card key={i}>
                <p>Pergunta {i + 1}</p>
                <img src={play} alt="Icone de Play"></img>
            </Card>)}
        </>

    )

}

const Card = styled.div`
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
  }

`