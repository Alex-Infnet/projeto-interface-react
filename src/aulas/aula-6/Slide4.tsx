import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Vamos agora deixa a nossa aplicação ainda mais robusta e personalizada</SlideLi>
              <SlideLi>* Podemos remover a nova estrutura de rotas do projeto, se quiser</SlideLi>
              <SlideLi>Uma coisa que pode ser observada é o tratamento de rota não localizada, famoso 404</SlideLi>
              <SlideLi>Por padrão, a gente consegue acessar um template existente</SlideLi>
              <SlideLi>E se quisermos ter a nossa própria página de erro? Esse é o exercício</SlideLi>
              <SlideLi>Crie uma página para a captura do erro 404. Uma sugestão é consultar a biblioteca por bons componentes</SlideLi>
              <SlideLi>E ainda, utilizar a estrutura de Grid criada para o projeto</SlideLi>
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