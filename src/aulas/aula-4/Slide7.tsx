import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide7 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Aproxime o design da aplicação, do Figma, no projeto</SlideLi>
              <SlideLi>Primeiro passo, verifique os componentes de Form da biblioteca MUI, utilize-os</SlideLi>
              <SlideLi>Implemente personalizações específicas com os <i>styled-components</i></SlideLi>
              <SlideLi>Ao final dos estilos, utilize o Chrome Dev Tools para discutir os resultados</SlideLi>
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