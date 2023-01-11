import styled from 'styled-components'
import React from 'react' 

type ColType = {
	children : React.ReactElement
}

const Col = (props : ColType) => {

	return (
		<Col.Container>
			{props.children}
		</Col.Container>
	)
}

Col.Container = styled.div`
	display: flex;
	flex-direction: row;
`

export default Col
