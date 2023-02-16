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
                  <SlideLi>É hora de personalização e estilização, pratique <i>styled-components</i></SlideLi>
                  <SlideLi>Crie layouts e páginas</SlideLi>
                  <SlideLi>Personalize rotas para navegação entre elas</SlideLi>
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