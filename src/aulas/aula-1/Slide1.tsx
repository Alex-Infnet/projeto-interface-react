import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi><b>Disciplina:</b> Projeto de Interfaces com React</SlideLi>
              <SlideLi><b>Professor:</b> Alexandre Werneck Andreza</SlideLi>
              <SlideLi><b>Conteúdo da disciplina (slides):</b> <a href="https://github.com/xanwerneck/projeto-interface-react">https://github.com/xanwerneck/projeto-interface-react</a></SlideLi>
              <SlideLi><b>Metodologia:</b> Live coding | Code review | Conteúdo teórico {'=>'} prático</SlideLi>
              <SlideLi><b>Caso de uso:</b> Gestor de Obras</SlideLi>
              <SlideLi><b>Linkedin:</b> /in/xanwerneck</SlideLi>
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