import { Col, GridItem } from "../../common"
import Slide, { SlideLi } from "../../common/Slide"

const Slide5 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Caso de uso - <b>Nossa Obra</b></SlideLi>
              <SlideLi>
                Continuando o estudo para entendimento do nosso problema, vamos agora olhar para o protótipo do projeto no Figma. Este conteúdo será enviado a vocês no canal do Teams através de arquivos PDF e estará acessível no Github vinculado ao projeto.
              </SlideLi>
              <SlideLi>
                LINK DO FIGMA:
                <ul>
                  <SlideLi>
                    <a href="https://www.figma.com/file/HkAq57SYtyPNvX79NSHg8Z/Login?node-id=1%3A3&t=og1FuZ0apOFL5lWx-0">Figma access</a>
                  </SlideLi>
                </ul>
              </SlideLi>
              <SlideLi>
                <h6>* Figma - Prototipagem</h6>
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