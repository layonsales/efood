import ProductList from "../../components/productlist"
import Food from "../../models/food"

import pasta from '../../assets/images/pasta.png'
import sushi from '../../assets/images/sushi.png'

const comida: Food[] = [
    {
        name: "Hioki Sushi",
        note: "8.2",
        origin: "japonesa",
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: sushi
    },
    {
        name: "La Dolce Vita Trattoria",
        note: "6.9",
        origin: "italiana",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: pasta
    }
]

const Home = () => (
    <>
        <ProductList food={comida} />
        <ProductList food={comida} />
        <ProductList food={comida} />
    </>
)

export default Home