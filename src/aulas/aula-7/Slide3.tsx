import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide3 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos conhecer a bilioteca:
                <ul>
                  <SlideLi>
                    <Code>React Hook Forms</Code>
                  </SlideLi>
                  <SlideLi>Estamos falando na verdade de uma função hook que vai prover alguns recursos para nós.</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Antes de iniciar a implementação utilizando a biblioteca vamos voltar ao projeto e entender algumas mudanças.</SlideLi>
              <SlideLi>Como podemos ver, algumas novas páginas foram adicionadas, nada mais são do que componentes / páginas novas.</SlideLi>
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