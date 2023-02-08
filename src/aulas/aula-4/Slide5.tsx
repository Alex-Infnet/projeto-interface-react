import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide5 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Excelente, vamos agora colocar um pouco mais a mão na massa do projeto</SlideLi>
              <SlideLi>A página Login está muito associada ao seu conteúdo? Card deveria fazer parte do estilo de Login?</SlideLi>
              <SlideLi>Ainda vamos criar mais duas páginas, recuperação de senha e criação de conta</SlideLi>
              <SlideLi>Todas essas páginas compartilham o mesmo estilo de Card, vamos refatorar?</SlideLi>
              <SlideLi>Devemos garantir que diferentes páginas utilizam o mesmo estilo de Card</SlideLi>
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

export default Slide5