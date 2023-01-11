import styled from 'styled-components'
import React from 'react' 

type SlideType = {
	children : React.ReactElement
}

const Slide = (props : SlideType) => {

	return (
		<Slide.Container>
			{props.children}
		</Slide.Container>
	)
}

Slide.Container = styled.div`
	margin: 1em 5em;
`

export default Slide
