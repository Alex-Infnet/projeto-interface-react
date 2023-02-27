import {useContext} from 'react'
import {Header, Footer, Nav} from '../../common'
import {AulaContext} from '../../App'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'

const Aula = () => {
	const {slide} = useContext(AulaContext)
	return (
		<>
			<Header />
			<Nav />
			{slide === 1 && <Slide1 />}
			{slide === 2 && <Slide2 />}
			{slide === 3 && <Slide3 />}
			{slide === 4 && <Slide4 />}
			{slide === 5 && <Slide5 />}
			{slide === 6 && <Slide6 />}
			{slide === 7 && <Slide7 />}
			<Footer />
		</>		
	)
}

export default Aula
