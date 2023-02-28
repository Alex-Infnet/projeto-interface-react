import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide6 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Monte um novo projeto React</SlideLi>
              <SlideLi>Utilize o utilitário create-react-app para iniciar</SlideLi>
              <SlideLi>Aplique as técnicas de styled-components para personalizar seus componentes</SlideLi>
              <SlideLi>Crie rotas com o react-router-dom</SlideLi>
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