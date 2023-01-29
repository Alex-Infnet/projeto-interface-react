import styled from 'styled-components'
import React from 'react' 

type SlideType = {
	children : React.ReactElement
}

type SlideLiType = {
	children : string | React.ReactNode
}

type SlideImageType = {
	src : string
}

export const SlideLi = (props : SlideLiType) => {
	return (
		<SlideLi.Li>
			{props.children}
		</SlideLi.Li>
	)
}

SlideLi.Li = styled.li`
	font-size: 1.6rem;
	margin-bottom: 15px;
`

export const SlideImage = (props : SlideImageType) => {
	return (
		<SlideImage.Image src={props.src} />
	)
}

SlideImage.Image = styled.img`
	min-width: 500px;
	max-width: 500px;
	justify-content: center;
`

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
