import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Bora melhorar um pouco a aparência da nossa aplicação?</SlideLi>
              <SlideLi>E ganhar alguns componentes personalizados? 
                <ul>
                  <SlideLi>
                    <Code>Card</Code>
                    <Code>Nav</Code>
                    <Code>Dropdown</Code>
                    <Code>Table</Code>
                  </SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Na aula de hoje vamos ver:
                <ul>
                  <SlideLi>Api de Context</SlideLi>
                  <SlideLi>Customização de temas | Props para todos os níveis inferiores</SlideLi>
                  <SlideLi>Styled components</SlideLi>
                  <SlideLi>MUI for React - Material for React</SlideLi>
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