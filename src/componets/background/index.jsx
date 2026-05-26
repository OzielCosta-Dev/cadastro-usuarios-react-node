
import UsersImage from '../../assets/users.png'
import { TopBackground } from './styles'




function MyBackground() {

    return (
        <TopBackground>
            <img src={UsersImage} alt="Usuários" />
        </TopBackground>
    )

}

export default MyBackground
