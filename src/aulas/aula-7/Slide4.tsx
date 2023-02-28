import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Vamos lá, vamos criar um formulário bem simples, simples mesmo.</SlideLi>
              <SlideLi>Olhando o modelo / template do nosso projeto, vamos olhar o form de criação de atividade</SlideLi>
              <SlideLi>Vamos adicionar uma rota para essa página /orcamento/1/cadastro_atividade</SlideLi>
              <SlideLi>Esse form, como eu disse, vai ser muito simples</SlideLi>
              <SlideLi>Crie apenas o primeiro campo.</SlideLi>
              <SlideLi>Utilize o react hook forms para construir esse form</SlideLi>
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