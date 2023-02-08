import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Vamos praticar, utilizando nosso caso de uso</SlideLi>
              <SlideLi>Adicione, temporariamente, o cliente selecionado para login</SlideLi>
              <SlideLi>Essa informação deve ser exibida acima do elemento Card</SlideLi>
              <SlideLi>Crie uma div com as seguintes propriedas:
                <ul>
                  <SlideLi>font-size: 2em</SlideLi>
                  <SlideLi>text-align: center</SlideLi>
                  <SlideLi>color: theme.pallete.primary.main (cor do tema)</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Abaixo do Card adicione informações da aplicação, contendo a seguinte instrução:
                <ul>
                  <SlideLi><Code>Sistema criado em 2023</Code></SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Crie uma div com as seguintes propriedas:
                <ul>
                  <SlideLi>font-size: 0.6em</SlideLi>
                  <SlideLi>color: theme.pallete.primary.main (cor do tema)</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Crie uma função para obter o ano automaticamente</SlideLi>
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