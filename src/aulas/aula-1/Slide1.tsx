import styled from 'styled-components'
import { Col, GridItem } from "../../common"
import Slide from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <Slide1.Li>Disciplina: Projeto de Interfaces com React</Slide1.Li>
              <Slide1.Li>Professor: Alexandre Werneck Andreza</Slide1.Li>
              <Slide1.Li>Conteúdo da disciplina: https://github.com/xanwerneck/projeto-interface-react</Slide1.Li>
              <Slide1.Li>Metodologia: Live coding baseado em projeto</Slide1.Li>
              <Slide1.Li>Caso de uso: Gestor de Obras</Slide1.Li>
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

Slide1.Li = styled.li`
  font-size: 1.6rem;
  margin-bottom: 15px;
`
Slide1.Image = styled.img`
  min-width: 500px;
  justify-content: center;
`


export default Slide1