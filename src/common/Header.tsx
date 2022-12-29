import styled from 'styled-components'
const Header = () => {
	return (
		<Header.Container>
			<Header.Title>Projeto de Interfaces com React</Header.Title>
		</Header.Container>
	)
}


Header.Container = styled.div`
	padding: 10px;
	background-color: #1d7874;
`
Header.Title = styled.h1`
	font-size: 1.8rem;
	color: #ffffff;
	text-align: center;
	font-family: 'Caveat', cursive;
`

export default Header
