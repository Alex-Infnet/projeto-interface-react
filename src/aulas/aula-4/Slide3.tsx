import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide3 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi><strong>styled-components</strong></SlideLi>
              <SlideLi>O nome nos ajuda a entender, estilização de componentes, vamos olhar esse código abaixo.</SlideLi>
              <SlideLi>
                <Code>{"<div class='container'>?</div>"}</Code>
                <Code>{".container{background: red}"}</Code>
              </SlideLi>
              <SlideLi>Acima, temos a estrutura comum de definição de estilos com CSS</SlideLi>
              <SlideLi>Definimos uma classe, colocamos ela em um arquivo estático, global na aplicação e utilizamos essa classe na nossa tag</SlideLi>
              <SlideLi>Mas agora estamos mais orientados a componentes, certo? Com arquivos CSS eu preciso controlar a utilização / criação das classes de maneira independente</SlideLi>
              <SlideLi>E se pudessemos combinar as duas estruturas?</SlideLi>
              <SlideLi>
                <Code>{"<MyDiv>?</MyDiv>"}</Code>
                <Code>{"MyDiv = styled.div`background:red`"}</Code>
              </SlideLi>
              <SlideLi>O resultado do HTML vai ser similar a estrutura de classes, a vantagem é que o gerenciamento das classes é feito no escopo da aplicação, e esse estilo está contido no componente</SlideLi>
              <SlideLi>Além disso, esse modelo me permite fazer sobrecarga de estilos, como vamos ver depois</SlideLi>
              <SlideLi>E ainda, o <i>styled-components</i> fica responsável por manter uma geração de classes otimizada, sem repetições ou classes não utilizadas</SlideLi>
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

export default Slide3