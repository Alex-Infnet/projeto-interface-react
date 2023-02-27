import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide6 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Vamos criar um componente genérico que faça o tratamento de rotas privadas</SlideLi>
              <SlideLi>Para praticar os conceitos, crie um componente para tratar rotas privadas</SlideLi>
              <SlideLi>Crie uma página que deveria ser protegida</SlideLi>
              <SlideLi>Utilizando o mesmo conceito de layout, garante que a página criada herde das rotas privadas</SlideLi>
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