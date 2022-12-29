import {useContext} from 'react'
import {AulaContext} from '../App'
import styled from 'styled-components'

const Nav = () => {
	const {slide, setSlide} = useContext(AulaContext)

	const toLeft = () => {
		if(slide===1) return

		setSlide(slide - 1)
	}
	const toRight = () => {
		setSlide(slide + 1)
	}
	return (
		<Nav.Container>
			<Nav.Left onClick={toLeft}>Prev</Nav.Left>
			<Nav.Right onClick={toRight}>Next</Nav.Right>
		</Nav.Container>
	)
}

Nav.Container = styled.div``

Nav.Left = styled.button`
	position: fixed;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background-color: #eaeaea;
	top: calc(50%);
	left: 10px;
	font-size: 0.8rem;
	opacity: 0.5;
	text-align: center;
`
Nav.Right = styled.button`
        position: fixed;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: #eaeaea;
	top: calc(50%);
	right: 10px;
	font-size: 0.8rem;
	opacity: 0.5;
	text-align: center;
`


export default Nav
