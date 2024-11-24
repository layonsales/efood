import Product from "../product";
import Food from "../../models/food";
import { Container, List } from "./styles";

export type Props = {
    food: Food[]
}

const ProductList = ({ food }: Props) => (
    <Container>
        <div className="container">
            <List>
                {food.map(food => (
                    <Product
                        key={food.name}
                        name={food.name}
                        note={food.note}
                        origin={food.origin}
                        description={food.description}
                        image={food.image} />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductList