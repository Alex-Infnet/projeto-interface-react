import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide2 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Aulas: <b>16 aulas</b></SlideLi>
              <SlideLi>Janeiro: 31/1</SlideLi>
              <SlideLi>Fevereiro: 2/2 | 7/2 | 9/2 | 14/2 | 16/2 | ... | 28/2</SlideLi>
              <SlideLi>Março: 2/3 | ... (7/3 | 9/3) | 14/3 | 16/3 | 21/3 | 23/3 | 29/3 | 30/3</SlideLi>
              <SlideLi>Abril: 4/4 | 6/4 ? (Aula no dia 7/3 ou 9/3) - tira dúvidas</SlideLi>
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

export default Slide2