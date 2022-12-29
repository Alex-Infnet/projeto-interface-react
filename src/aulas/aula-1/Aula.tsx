import {useContext} from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Nav from '../../common/Nav'
import {AulaContext} from '../../App'

const Aula = () => {
	const {slide, setSlide} = useContext(AulaContext)
	return (
		<>
			<Header />
			<Nav />
			{slide === 1 &&(
				<div>Slide 1</div>
			)}
			{slide === 2 &&(
				<div>Slide {slide.toString()}</div>
			)}
			<Footer />
		</>		
	)
}

export default Aula
