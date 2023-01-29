import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide2 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Hoje o nosso principal foco é estudar a criação de componentes React...</SlideLi>
              <SlideLi>Antes disso, vamos mostrar as duas maneiras de criarmos componentes: Classes (out-of-date) | Funcionais (hooks)</SlideLi>
              <SlideLi>Os componentes React inicialmente eram orientados a classes, implementando funções personalizadas para manipulações da Virtual DOM:
                <ul>
                  <SlideLi>componentWillUpdate</SlideLi>
                  <SlideLi>componentDidUpdate</SlideLi>
                  <SlideLi>componentWillMount</SlideLi>
                  <SlideLi>componentDidMount</SlideLi>
                  <SlideLi>
                    <h6>* Não vamos demonstrar a criação de componentes com classes por não faz parte da recomendação.</h6>
                  </SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>A partir da versão 16, o React inclui a criação de componentes funcionais, em que os eventos de renderização são controlados e manipulados através de um conceito chamado Hooks.</SlideLi>
              <SlideLi>
                <h6>* Voltaremos a definir as principais hooks do React, mas antes disso, vamos ver a criação de componentes.</h6>
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

export default Slide2