import React from "react";
import styled from "styled-components"

type CodeType = {
  children : string[] | string | React.ReactNode
}

const Code = (props : CodeType) => (
  <Code.Container>
    {props.children}
  </Code.Container>
)

Code.Container = styled.div`
  padding: 20px;
  background-color: #eaeaea;
`;


export default Code