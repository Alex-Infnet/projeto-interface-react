import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide11 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>
                Referências:
                <ul>
                  <SlideLi>https://pt-br.reactjs.org/ (Principal referência da linguagem)</SlideLi>
                  <SlideLi>https://pt-br.reactjs.org/docs/hello-world.html (O clássico Hello World)</SlideLi>
                  <SlideLi>https://pt-br.reactjs.org/docs/create-a-new-react-app.html (Primeiros passos na criação de uma aplicação React)</SlideLi>
                  <SlideLi>https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c (ECMA Script review)</SlideLi>
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

export default Slide11