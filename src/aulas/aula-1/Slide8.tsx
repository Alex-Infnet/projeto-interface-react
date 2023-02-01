import { Col, GridItem } from "../../common"
import Code from "../../common/Code"
import Slide, { SlideLi } from "../../common/Slide"

const Slide8 = () => {
  return (
    <Slide>
      <Col>
        <>
          <GridItem>
            <ul>
              <SlideLi>Mais um pouco de JSX
                <ul>
                  <SlideLi>
                    <Code>
                      const AulaReact = {'<p>'}Esta é uma frase contendo uma instrução JSX!{'</p>'}
                    </Code>
                  </SlideLi>
                  <SlideLi>
                    "... JSX ... é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript."
                  </SlideLi>
                  <SlideLi>
                    Alguns exemplos da sintaxe JSX
                    <ul>
                      <SlideLi>
                        <Code>
                          const name = "Joaquim"
                        </Code>
                        <Code>
                          const AulaReact = {'<p>'}Esta é uma frase contendo o nome {'{name}'}{'</p>'}
                        </Code>
                      </SlideLi>
                      <SlideLi>
                        <Code>
                          const value = -10
                        </Code>
                        <Code>
                          {'<p>'}Seu saldo é {'{value > 0 ? "positivo" : "negativo" }'}{'</p>'}
                        </Code>
                      </SlideLi>
                    </ul>
                  </SlideLi>
                  <SlideLi>
                    <h6>* Os demais conceitos de React vamos vendo ao longo das aulas</h6>
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

export default Slide8