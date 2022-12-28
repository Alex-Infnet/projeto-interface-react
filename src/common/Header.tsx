import styled from 'styled-components'
const Header = () => {
	return (
		<Header.Container>
			<div>Projeto de Interfaces com React</div>
		</Header.Container>
	)
}


Header.Container = styled.div`
	padding: 5px;
	background-color: #ff0000;
`

export default Header
