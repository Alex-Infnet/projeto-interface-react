import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Para tratar as rotas do projeto vamos utilizar a biblioteca react-router-dom</SlideLi>
              <SlideLi>A bilioteca react-router tem como principal objetivo permitir ao desenvolvedor interagir com o stack trace de rotas do navegador</SlideLi>
              <SlideLi>Destina-se ao <i>client side</i> da aplicação React</SlideLi>
              <SlideLi>Observe essa explicação existente na documentação do projeto
                <ul>
                  <SlideLi>"With client side routing, developers are able to manipulate the browser history stack programmatically."</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>
                <Code>
                "On the initial render, and when the <u>history stack</u> changes, React Router will match the <u>location</u> against your route config to come up with a set of <u>matches</u> to render."
                </Code>
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