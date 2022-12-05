import { cards } from "./deck"
import Card from "./Card"

export default function FlashCards({contador, setContador}) {

    return (
        <>
            {cards.map((elem, i) => <Card key={i} elem={elem} i={i} contador={contador} setContador={setContador}/>)}
        </>

    )

}

