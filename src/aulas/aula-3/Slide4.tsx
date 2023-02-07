import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi><strong>Context</strong> - Interface para compartilhamento de props</SlideLi>
              <SlideLi>API
                <ul>
                  <SlideLi>
                    <Code>React.createContext</Code>
                    Cria o contexto que será utilizado pelo provedor dos recursos na árvore de componentes.
                  </SlideLi>
                  <SlideLi>
                    <Code>Context.Provider</Code>
                    Funciona como um gateway para aplicar mudanças no valor, ou definir o valor de context das estruturas descendentes.
                  </SlideLi>
                  <SlideLi>
                    <Code>Context.Consumer</Code>
                    Faz o 'assignment' de value a todos os componentes filhos.
                  </SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Melhor do que falar, vamos mostrar através de exemplos a context Api e suas aplicações</SlideLi>
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

export default Slide4