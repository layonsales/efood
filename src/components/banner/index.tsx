import { BannerImage } from './styles'
import Hero from '../hero'

import BannerImg from '../../assets/images/fundo.png'

const Banner = () => (
    <BannerImage style={{ backgroundImage: `url(${BannerImg})` }}>
        <Hero />
    </BannerImage>
)

export default Banner