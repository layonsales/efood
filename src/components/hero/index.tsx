import logo from '../../assets/images/logo.png'
import { Title, LogoEfood } from './styles'

const Hero = () => (
    <div>
        <LogoEfood>
            <img src={logo} alt="Efood" />
        </LogoEfood>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
)

export default Hero