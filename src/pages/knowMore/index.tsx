import ProductList from "../../components/productlist"
import Food from "../../models/food"

import pizza from '../../assets/images/pizza.png'

const comida: Food[] = [
    {
        name: "Pizza Marguerita",
        note: "10",
        origin: "italiana",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza
    },
    {
        name: "Pizza Marguerita",
        note: "10",
        origin: "italiana",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza
    }
]

const KnowMore = () => (
    <>
        <ProductList food={comida} />
        <ProductList food={comida} />
        <ProductList food={comida} />
    </>
)

export default KnowMore