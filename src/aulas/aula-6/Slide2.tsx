import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Na última aula vemos como montar a estrutura de rotas a partir de objeto JS.</SlideLi>
              <SlideLi>Como exercício teórico, vamos praticar um pouco a outra abordagem</SlideLi>
              <SlideLi>Vamos construir as nossas rotas utilizar componentes explícitos para cada rota da aplicação</SlideLi>
              <SlideLi>* Esse exercício não será mantido no projeto, tem intenção apenas didática.</SlideLi>
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