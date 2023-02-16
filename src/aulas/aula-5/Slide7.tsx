import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide7 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Agora sim, vamos criar as nossas rotas</SlideLi>
              <SlideLi>Através de layout, crie 3 rotas para navegação</SlideLi>
              <SlideLi>O usuário deve ser capaz de acessar SignIn, SignUp e Forgot password</SlideLi>
              <SlideLi>Utilize Link para fazer as conexões entre os componentes</SlideLi>
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