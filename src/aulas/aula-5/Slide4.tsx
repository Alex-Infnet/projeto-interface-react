import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Calma, vamos ver isso através de exemplos, daqui a pouco, antes quero falar de mais um recurso.</SlideLi>
              <SlideLi>React router nos auxilia no compartilhamento de componentes através do conceito de layout.</SlideLi>
              <SlideLi>Vamos olhar a definição de Layout:
                <ul>
                  <SlideLi>"It only exists to make wrapping multiple child routes in the same layout simpler"</SlideLi>
                  <SlideLi>Como podemos observar, componentes do tipo <Code>Layout</Code> servem apenas para compartilharem estruturas comuns entre diferentes rotas.</SlideLi>
                  <SlideLi>A vantagem é que o React router vai resolver essa estrutura para nós.</SlideLi>
                  <SlideLi>Se a gente lembrar das páginas de Login a gente consegue visualizar um típico caso de uso para Layout</SlideLi>
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

export default Slide4