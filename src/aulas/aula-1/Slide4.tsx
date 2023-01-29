import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide4 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Caso de uso - <b>Nossa Obra</b></SlideLi>
              <SlideLi>Vamos construir o <u>projeto de interface</u> para o aplicativo <b>Nossa Obra</b>. Este aplicativo destina-se a construtores, mestres de obras, e construtoras no apoio desde a montagem do orçamento com detalhamento das atividades ao rastreio de cada etapa concluída.</SlideLi>
              <SlideLi>Para facilitar o entendimento, seguem os requisitos do projeto:
                <ul>
                  <SlideLi>O aplicativo deve fazer o registro dos clientes.</SlideLi>
                  <SlideLi>Cada cliente pode ter diferentes usuários associados.</SlideLi>
                  <SlideLi>O orçamento pertence ao cliente, desse forma, apenas usuários desse cliente podem acompanhar as etapas de execução da obra.</SlideLi>
                  <SlideLi>Um orçamento é composto por várias atividades.</SlideLi>
                  <SlideLi>Cada atividade contempla o responsável pela execução, bem como os custos e previsão de execução.</SlideLi>
                  <SlideLi>O total das atividades representa a montagem final do orçamento.</SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>
                <h6>* Excalidraw - Modelagem do sistema</h6>
              </SlideLi>
              <SlideLi>
                <h6>* Postman - Endpoints</h6>
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

export default Slide4