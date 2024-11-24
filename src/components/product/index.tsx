import { Titulo, Descricao, Card, Infos, Nota, Info, Conteudo } from "./styles"
import ButtonLink from "../button";
import Tag from "../tag"
import estrela from '../../assets/images/estrela.png'

type Props = {
    name: string;
    note: string;
    origin: string;
    description: string;
    image: string;
}

const Product = ({ name, note, origin, description, image }: Props) => (
    <Card>
        <img src={image} alt={name} style={{ width: '100%' }} />
        <Conteudo>
            <Info>
                <Titulo>{name}</Titulo>
                <Nota>
                    {note} <img src={estrela} alt="estrela" />
                </Nota>
            </Info>
            <Infos>
                <Tag>{origin}</Tag>
            </Infos>
            <Descricao>{description}</Descricao>
            <ButtonLink title="Saiba mais" to="/knowMore" type={"link"} children={"saiba mais"}></ButtonLink>
        </Conteudo>
    </Card>
)

export default Product