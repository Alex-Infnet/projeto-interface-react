import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide6 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos avançar um pouco mais e falar de algumas bibliotecas de terceiros para utilizarmos no projeto</SlideLi>
              <SlideLi>A ideia é melhorar alguns estilos e claro, utilizar alguns componentes existentes para isso</SlideLi>
              <SlideLi>Podemos falar de alguns:
                <ul>
                  <SlideLi>React Bootstrap - https://react-bootstrap.github.io/</SlideLi>
                  <SlideLi>Material component - https://mui.com/</SlideLi>
                  <SlideLi>Tailwind CSS - Até onde sei mais CSS framework do que próprio para o React</SlideLi>
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

export default Slide6