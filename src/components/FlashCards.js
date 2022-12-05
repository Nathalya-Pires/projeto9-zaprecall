import { cards } from "./deck"
import Card from "./Card"

export default function FlashCards() {

    return (
        <>
            {cards.map((elem, i) => <Card key={i} elem={elem} i={i}/>)}
        </>

    )

}

