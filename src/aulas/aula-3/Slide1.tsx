import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos continuar... </SlideLi>
              <SlideLi>Apenas para recordar, vimos na última aula:
                <ul>
                  <SlideLi>Hook useState</SlideLi>
                  <SlideLi>Criação de componentes funcionais</SlideLi>
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

export default Slide1