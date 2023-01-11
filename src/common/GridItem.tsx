import styled from 'styled-components'
import React from 'react' 

type GridItemType = {
	children : React.ReactElement
}

const GridItem = (props : GridItemType) => {

	return (
		<GridItem.Container>
			{props.children}
		</GridItem.Container>
	)
}

GridItem.Container = styled.div`
	display: flex;
	flex-grow: 1;
	margin: 1em;
	justify-content: center;
	align-items: center;
`

export default GridItem
