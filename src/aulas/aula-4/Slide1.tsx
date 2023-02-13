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
                  <SlideLi>Hooks useState | useContext</SlideLi>
                  <SlideLi>Context API - createContext | Provider | useContext</SlideLi>
                  <SlideLi>Biblioteca MUI</SlideLi>
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

export default Slide1