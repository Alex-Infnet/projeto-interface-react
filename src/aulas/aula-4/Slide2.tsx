import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide1 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Vamos continuar melhorando a aparência da nossa aplicação</SlideLi>
              <SlideLi>Para isso vamos introduzir o conceito de <i>styled-components</i></SlideLi>
              <SlideLi>
                <i>styled-components</i>
                <ul>
                  <SlideLi>https://styled-components.com/</SlideLi>
                  <SlideLi>https://styled-components.com/docs/basics#motivation</SlideLi>
                  <SlideLi>"styled-components is the result of wondering how we could enhance CSS for styling React component systems."</SlideLi>
                  <SlideLi>A principal motivação vem dessa definição, como podemos utilizar CSS para estilizar os componentes React</SlideLi>
                  <SlideLi>Vamos dar uma olhada em mais algumas motivações, conforme a documentação:
                    <ul>
                      <SlideLi>Injeção de estilos eficiente, apenas estilos associados ao componente.</SlideLi>
                      <SlideLi>Classes não utilizadas são automaticamente removidas do projeto.</SlideLi>
                      <SlideLi>Manutenção simplificada, a personalização dos componentes está restrita ao componente.</SlideLi>
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

export default Slide1