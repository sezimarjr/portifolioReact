import EstiloGlobal, { Container } from './styles'
import SideBar from './containers/SideBar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
