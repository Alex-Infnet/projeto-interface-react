import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide5 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Mas e como proteger rotas privadas?</SlideLi>
              <SlideLi>Não estamos falando de segurança, é preciso que o servidor valide sempre os dados recebidos</SlideLi>
              <SlideLi>Mas a gente quer agora criar / tratar algumas rotas para serem acessadas somente por usuários autenticados</SlideLi>
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