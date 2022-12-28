import {useState} from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const Aula = () => {
	const [slide, setSlide] = useState<Number>(1)
	return (
		<>
			<Header />
			{slide === 1 &&(
				<div>Slide 1</div>
			)}
			<Footer />
		</>		
	)
}

export default Aula
