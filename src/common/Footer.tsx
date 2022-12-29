import styled from 'styled-components';

const Footer = () => {
	return (
		<Footer.Container>
			<Footer.TextName>Alexandre Werneck Andreza</Footer.TextName>
			<Footer.Text>Software Engineer - Genius - Medialab</Footer.Text>
			<Footer.Text>Mestre em Informática - PUC-Rio</Footer.Text>
		</Footer.Container>
	)
}

Footer.Container = styled.div`
	width: 100%;
	position: fixed;
	bottom: 0;
	border-bottom: solid 30px #f4c095;
	padding-bottom: 10px;
`
Footer.TextName = styled.h5`
	font-size: 1.2rem;
	font-weight: bold;
	text-align: right;
	margin-bottom: 5px;
	margin-right: 5px;
	color: #eaeaea;
`
Footer.Text = styled.h6`
	font-size: 1rem;
	color: #000000;
	text-align: right;
	margin-right: 5px;
	color: #eaeaea;
`

export default Footer
