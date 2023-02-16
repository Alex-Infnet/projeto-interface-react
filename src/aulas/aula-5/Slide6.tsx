import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide6 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Um outro tópico importante a cobrirmos sobre criação de rotas, são os mecanismos de navegação básicos</SlideLi>
              <SlideLi>Duas maneiras de navegar entre páginas:
                <ul>
                  <SlideLi><Code>Link = component that wrap navigation behavior</Code></SlideLi>
                  <SlideLi><Code>navigate = function returned from useNavigate that makes a kind of redirect</Code></SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Navigation behavior como mudanças na URL, atualização em history stack serão automaticamente gerenciados pelo React router.</SlideLi>
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

export default Slide6