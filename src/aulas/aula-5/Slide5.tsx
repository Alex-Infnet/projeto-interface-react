import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide5 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Vamos refatorar nosso código, tendo essa ideia de Layout em mente.</SlideLi>
              <SlideLi>Antes de criarmos as rotas da aplicação, vamos criar uma página de Acesso</SlideLi>
              <SlideLi>Essa página de acesso vai receber como <i>children</i> os componentes de SignIn, SignUp, Forgot password</SlideLi>
              <SlideLi>Crie esses componentes individuais utilizando o mesmo estilo que criamos na aula anterior</SlideLi>
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

export default Slide5