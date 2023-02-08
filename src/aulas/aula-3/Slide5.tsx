import { Code, Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide5 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Crie um context que recebe parâmetros para alterar o valor de fundo do componente Login</SlideLi>
              <SlideLi>
                <ul>
                  <SlideLi>
                    <Code>`{"{background : 'red'}"}`</Code>
                    Cria o contexto que será utilizado pelo provedor dos recursos na árvore de componentes.
                  </SlideLi>
                  <SlideLi>Utilize o App como parent level mais alto para aplicar o contexto.</SlideLi>
                  <SlideLi>Crie um botão para ligar ou desligar o darkMode</SlideLi>
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

export default Slide5