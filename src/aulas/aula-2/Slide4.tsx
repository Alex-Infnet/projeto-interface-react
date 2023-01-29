import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Ops... antes de construir o primeiro componente vamos falar de uma das principais hooks do React</SlideLi>
              <ul>
                <SlideLi>
                  <Code>useState</Code>
                </SlideLi>
                <SlideLi>Com <b>escopo local</b>, o useState cria <u>getter</u> e <u>setter</u> para variáveis que duram todo o tempo de vida do componente
                  <ul>
                    <SlideLi><h6>Tempo de vida do componente?</h6></SlideLi>
                    <SlideLi>O React faz um importante controle otimizado do tempo de vida dos componentes. Dessa maneira, depois que um componente é iniciado e não mais utilizado, para reduzir o consumo de memória, o React faz um limpeza desse componente e todos as funções e variáveis dentro do escopo desse componente</SlideLi>
                    <SlideLi>É o caso dessas variáveis de estado locais, são eliminadas assim que o componente deixa de existir</SlideLi>
                  </ul>
                </SlideLi>
                <SlideLi>A função hook <i>useState</i> retorna um array contendo 2 objetos, o valor corrente do estado e uma função setter. Além disso, ao invocar a função pela primeira vez é possível instanciar o objeto com valor default, vamos alguns exemplos de uso:
                  <ul>
                    <SlideLi>
                      <Code>const [valor, setValor] = useState() | <h6>valor = undefined</h6></Code>
                      <Code>const [valor, setValor] = useState(1) | <h6>valor = 1</h6></Code>
                    </SlideLi>
                  </ul>
                </SlideLi>
                <SlideLi>Uma coisa importante dos estados locais é que eles são imutáveis (como toda const no JS), apenas a função setter é capaz de modificar o valor</SlideLi>
              </ul>
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