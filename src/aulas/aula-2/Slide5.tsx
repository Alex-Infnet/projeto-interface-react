import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide5 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>[EXERCÍCIO] Dentro do projeto Nossa Obra, crie um componente chamado Login, contendo:
                <ul>
                  <SlideLi>Um componente <b>Card</b> que faz wrap dos demais elementos</SlideLi>
                  <SlideLi>O Login deve conter dois campos de input <b>{'> Email > Senha'}</b></SlideLi>
                  <SlideLi>Adicione um botão na interface com a label: <b>"Entrar"</b></SlideLi>
                  <SlideLi>Ao clicar no botão adicione um evento que imprima na tela:
                    <ul>
                      <SlideLi><u>OK</u>, se email = login@nossaobra.com.br e senha = Login@</SlideLi>
                      <SlideLi><u>Autenticação não autorizada</u>, se diferente da situação anterior</SlideLi>
                    </ul>
                  </SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>
                <h6>* Excalidraw para visualização do componente a ser construído</h6>
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