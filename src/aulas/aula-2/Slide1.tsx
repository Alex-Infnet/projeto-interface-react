import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos continuar... </SlideLi>
              <SlideLi>Apenas para recordar, vimos na última aula:
                <ul>
                  <SlideLi>Conceitos do framework React</SlideLi>
                  <SlideLi>Como criar uma aplicação React sem o utilitário <b>create-react-app</b></SlideLi>
                  <SlideLi>Dependências do projeto</SlideLi>
                  <SlideLi>Estudamos o caso de uso do projeto - Nossa Obra</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>
                <h6>* Dúvidas? Sugestões? Reclamações?</h6>
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

export default Slide1