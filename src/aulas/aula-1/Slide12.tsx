import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide12 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>
                Obrigado, e mais uma vez lembrando, o conteúdo dessa aula e todas as outras estará disponível em:
                <ul>
                  <SlideLi>
                    <a href="https://github.com/xanwerneck/projeto-interface-react">https://github.com/xanwerneck/projeto-interface-react</a>
                  </SlideLi>
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

export default Slide12