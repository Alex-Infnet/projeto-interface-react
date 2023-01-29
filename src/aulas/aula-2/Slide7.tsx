import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide7 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Recordando... O que vimos hoje?
                <ul>
                  <SlideLi>Criação de componentes</SlideLi>
                  <SlideLi>Definição da hook useState</SlideLi>
                  <SlideLi>Passagem de parâmetros entre componentes</SlideLi>
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

export default Slide7