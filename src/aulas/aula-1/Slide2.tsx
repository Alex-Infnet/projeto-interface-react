import styled from 'styled-components'
import { Col, GridItem } from "../../common"
import Slide from "../../common/Slide"

const Slide2 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <Slide2.Li>ECMA Script</Slide2.Li>
              <Slide2.Li>React e motivações</Slide2.Li>
              <Slide2.Li>Functional components
                <ul>
                  <Slide2.Li>Hooks</Slide2.Li>
                  <Slide2.Li>useState | useEffect | useRef</Slide2.Li>
                </ul>
              </Slide2.Li>
              <Slide2.Li>React route - Public and private routes</Slide2.Li>
              <Slide2.Li>React forms - state managements</Slide2.Li>
              <Slide2.Li>Styled components - CSS customization</Slide2.Li>
              <Slide2.Li>Themes - aplicando sobrecarga de temas</Slide2.Li>
            </ul>
          </GridItem>
          <GridItem>
            <Slide2.Image src='data:image/png;base64,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' />
          </GridItem>
        </>
      </Col>
    </Slide>
  )
}

Slide2.Li = styled.li`
  font-size: 1.6rem;
  margin-bottom: 15px;
`
Slide2.Image = styled.img`
  min-width: 500px;
  justify-content: center;
`


export default Slide2