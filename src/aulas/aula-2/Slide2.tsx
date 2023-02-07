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
              <SlideLi>Antes disso, vamos falar sobre as duas maneiras de criarmos componentes: Classes (out-of-date) | Funcionais (hooks)</SlideLi>
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
              <SlideLi>A partir da versão 16, o React inclui a criação de componentes funcionais, sem a necessidade de implementação de classes.</SlideLi>
              <SlideLi>O principal mecanismo que permitiu isso foi através das funções hooks, que conseguem reagir aos eventos do ciclo de vida dos componentes. Manutenção de estados, ações antes e depois da inicialização ou desmontagem dos componentes, compartilhamento de props, dentre outros.</SlideLi>
              <SlideLi>
                <h6>* Voltaremos a definir as principais hooks do React, mas antes disso, vamos ver a criação de componentes.</h6>
              </SlideLi>
              <SlideLi>
                <h6>* Para entender um pouco mais sobre Hooks, recomendo: https://reactjs.org/docs/hooks-overview.html</h6>
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