import { Texto, RedesSociais, Rodape, RodapeLogo } from './styles'

import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'

const Footer = () => (
    <Rodape>
        <div className="container">
            <RodapeLogo>
                <img src={logo} alt="efood" />
            </RodapeLogo>

            <RedesSociais>
                <img src={instagram} alt="logoInstagram" />
                <img src={facebook} alt="logoFacebook" />
                <img src={twitter} alt="logoTwitter" />
            </RedesSociais>

            <Texto>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Texto>
        </div>
    </Rodape>
)

export default Footer