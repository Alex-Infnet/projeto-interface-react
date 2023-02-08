import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide3 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi><strong>Context</strong> - Interface para compartilhamento de props</SlideLi>
              <SlideLi>"Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível."</SlideLi>
              <SlideLi>"Contexto (context) é usado principalmente quando algum dado precisa ser acessado por muitos componentes em diferentes níveis."</SlideLi>
              <SlideLi>Quando usar?
                <ul>
                  <SlideLi>Contexto (context) é indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React.</SlideLi>
                  <SlideLi>Usuário | Language | Temas</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Quando não usar?
                <ul>
                  <SlideLi>Evitar usar contexto quando um componente precisa ser compartilhado e reutilizado muitas vezes.</SlideLi>
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

export default Slide3