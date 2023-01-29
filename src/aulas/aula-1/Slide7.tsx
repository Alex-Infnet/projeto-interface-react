import { Col, GridItem } from "../../common"
import Code from "../../common/Code"
import Slide, { SlideLi } from "../../common/Slide"

const Slide7 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>React</SlideLi>
              <SlideLi>
                <Code>
                  React é um framework JS orientado a estados que implementa, através da sintaxe JSX, a sua própria maneira de criação de objetos HTML, manipulação de funções e valores JS através de componentes otimizados e personalizados.
                </Code>
              </SlideLi>
              <SlideLi>JSX</SlideLi>
              <SlideLi>
                <Code>
                  JSX é a sintaxe utilizada no React para a construção dos componentes. JSX permite a criação dinâmica de componentes HTML, que interagem com objetos e funções JS, dessa forma o parse entre valores obtidos e objetos na DOM sejam transparentes ao desenvolvedor.
                </Code>
              </SlideLi>
              <SlideLi>Virtual DOM</SlideLi>
              <SlideLi>
                <Code>
                  React implementa um conceito de VDOM, ou virtual DOM, que cria a sua própria DOM para trabalhar com os componentes, controlando de maneira otimizadas os acessos e a frequência de manipulação de estruturas da DOM original.
                </Code>
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

export default Slide7