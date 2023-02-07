import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide8 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCICIO] Vamos parar um pouco o projeto de testes que criamos e olhar de volta para o nosso caso de uso</SlideLi>
              <SlideLi>Para isso, vamos praticar o MUI, utilizando componentes existentes e adicionando-os ao nosso projeto</SlideLi>
              <SlideLi>* Uma informação importante, existe uma estrutura de Grid montada no projeto, utilizem como referência para estudos, podem utilizar o Grid disponibilizado pelo MUI.</SlideLi>
              <SlideLi>Vamos precisar de:
                <ul>
                  <SlideLi>Que tal colocar todo o componente de Login dentro de um Card</SlideLi>
                  <SlideLi>Adicione o componente ao Card</SlideLi>
                  <SlideLi>Dúvida: O que vcs acham? Vamos adicionar o Card a page ou ao component?</SlideLi>
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

export default Slide8