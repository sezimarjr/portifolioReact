import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descriçao, SideBarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}> Sezimar Jr </Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        sezimarjr
      </Paragrafo>
      <Descriçao fontSize={12} tipo="principal">
        Engheneiro front-end
      </Descriçao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
