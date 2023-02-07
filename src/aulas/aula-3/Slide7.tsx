import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide7 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>MUI - Material components for React</SlideLi>
              <SlideLi>Referência: <a href="https://mui.com">MUI.com</a>
                <ul>
                  <SlideLi>Permite a utilização de componentes primários comuns a maioria das aplicações Web</SlideLi>
                  <SlideLi>Facilita a integração com styled-components (ainda vamos ver isso, muita calma)</SlideLi>
                  <SlideLi>Permite a definição, através de sobrecarga, de temas personalizados</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Para instalar a biblioteca basta seguir a recomendação de <i>Getting Started</i>
                <ul>
                  <SlideLi><Code>yarn add @mui/material @emotion/react @emotion/styled | npm install @mui/material @emotion/react @emotion/styled</Code></SlideLi>
                  <SlideLi>Como sugestão, alguns outros componentes podem ser instalados que servem como complemento a instalação original, por exemplo:
                      <ul>
                        <SlideLi><Code>yarn add @mui/icons-material | npm i @mui/icons-material</Code></SlideLi>
                      </ul>
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

export default Slide7