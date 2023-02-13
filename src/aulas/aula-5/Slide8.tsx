import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide8 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>E por fim, mais um conceito que é importante de falarmos é sobre parâmetros.</SlideLi>
              <SlideLi>Como compartilhar parâmetros da URL? Como recebe-los em nossos componentes.</SlideLi>
              <SlideLi>O React router nos disponibiliza para isso a hook useParams, nós vamos dar uma olhada.</SlideLi>
              <SlideLi>Acesso a dados de forma geral com o React Router, pode ser respondido através de 3 serviços:
                <ul>
                  <SlideLi><Code>let location = useLocation();</Code></SlideLi>
                  <SlideLi><Code>let urlParams = useParams();</Code></SlideLi>
                  <SlideLi><Code>let [urlSearchParams] = useSearchParams();</Code></SlideLi>
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

export default Slide8