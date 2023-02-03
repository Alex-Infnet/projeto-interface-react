import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide8 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Dicas de estudo... Para praticar!
                <ul>
                  <SlideLi>Tente efetuar a criação de um novo projeto utilizando o <b>create-react-app</b></SlideLi>
                  <SlideLi>Busque entender a estrutura de diretórios</SlideLi>
                  <SlideLi>Crie componentes</SlideLi>
                  <SlideLi>Pratique a manipulação de estados locais com a hook useState</SlideLi>
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

export default Slide8