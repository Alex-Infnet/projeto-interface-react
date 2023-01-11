import styled from 'styled-components'
import React from 'react' 

type RowType = {
	children : React.ReactElement
}

const Row = (props : RowType) => {

	return (
		<Row.Container>
			{props.children}
		</Row.Container>
	)
}

Row.Container = styled.div`
	display: flex;
	flex-direction: column;
`

export default Row
