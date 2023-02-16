import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos hoje continuar falando de rotas... </SlideLi>
              <SlideLi>Mas antes de entrar nos detalhes, vamos relembrar:
                <ul>
                  <SlideLi>Hooks useState | useContext</SlideLi>
                  <SlideLi>Context API - createContext | Provider | useContext</SlideLi>
                  <SlideLi>Biblioteca MUI</SlideLi>
                  <SlideLi>Estilização de componentes | styled-components</SlideLi>
                  <SlideLi>Criação de rotas | createBrowserRouter</SlideLi>
                </ul>
              </SlideLi>
            </ul>
          </GridItem>
          <GridItem>
            <></>
          </GridItem>
        </>
      </Col>
    </Slide>
  )
}

export default Slide1