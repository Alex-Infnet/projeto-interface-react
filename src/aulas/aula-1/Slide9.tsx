import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide9 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Como iniciar um projeto React 
                <h6>* Antes do create-react-app</h6>
              </SlideLi>
              <SlideLi>create-react-app é um utilitário para criação de aplicações React com varios componentes comuns já embarcados
                <h6>* Vamos entrar nos detalhes depois desse modelo</h6>
              </SlideLi>
              <SlideLi>
                Pré-requisitos
                <ul>
                  <SlideLi>Accesso ao terminal (Windows - CMD)</SlideLi>
                  <SlideLi>Node - versão {'>'} 18</SlideLi>
                  <SlideLi>O node deve fazer parte do path, e portanto estar acessível pelo terminal</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>Comandos:
                <ul>
                  <SlideLi>Acesse README_REACT_SEM_CREATE no repositório do projeto</SlideLi>
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

export default Slide9