import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide9 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Dicas de estudo... Para praticar!
                <ul>
                  <SlideLi>Crie componentes diversos</SlideLi>
                  <SlideLi>Aplique a Context API para compartilhar valores entre estes componentes</SlideLi>
                  <SlideLi>Crie componentes filhos para visualizar toda a hierarquia de compartilhamento obtida com Context</SlideLi>
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

export default Slide9