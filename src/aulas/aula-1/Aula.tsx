import {useContext} from 'react'
import {Header, Footer, Nav, Col, Row} from '../../common'
import {AulaContext} from '../../App'
import Slide1 from './Slide1'
import Slide2 from './Slide2'

const Aula = () => {
	const {slide, setSlide} = useContext(AulaContext)
	return (
		<>
			<Header />
			<Nav />
			{slide === 1 &&(
				<Slide1 />
			)}
			{slide === 2 &&(
				<Slide2 />
			)}
			<Footer />
		</>		
	)
}

export default Aula
