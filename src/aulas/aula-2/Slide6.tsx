import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide6 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Para entendermos melhor o conceito de props, vamos fazer a seguinte customização no componente de Login
                <ul>
                  <SlideLi>Agora, a tela de login deve informar para qual cliente o usuário está tentando se autenticar</SlideLi>
                  <SlideLi>Para isso, adicione um parâmetro no componente Login que recebe o nome do cliente</SlideLi>
                  <SlideLi>Adicione o nome do cliente em uma tag h* para exibição</SlideLi>
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