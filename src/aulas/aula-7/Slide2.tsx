import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Hoje vamos entrar em um assunto mais específico para criação de forms otimizados.</SlideLi>
              <SlideLi>Na realidade já criamos alguns forms para as áreas de acesso, lembram?</SlideLi>
              <SlideLi>Mas eram simples, hoje vamos estudar um biblioteca que nos ajuda na construção de formulários.</SlideLi>
              <SlideLi>Com a grande vantagem que a biblioteca vai fazer algumas melhorias de renderização para nós.</SlideLi>
              <SlideLi>Criar um form é simples, mas vamos ver como adicionar validação sendo um pouco menos verboso.</SlideLi>
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