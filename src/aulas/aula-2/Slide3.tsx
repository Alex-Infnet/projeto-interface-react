import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide3 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos começar a construir nossos componentes</SlideLi>
              <SlideLi>E definir alguns conceitos como:
                <ul>
                  <SlideLi>Props = passagem de parâmetros</SlideLi>
                  <SlideLi>Relação Parent {'>>'} Child entre componentes</SlideLi>
                  <SlideLi>Reutilização de componentes entre diferentes páginas</SlideLi>
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

export default Slide3