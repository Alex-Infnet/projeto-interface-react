import {useContext} from 'react'
import {Header, Footer, Nav} from '../../common'
import {AulaContext} from '../../App'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

const Aula = () => {
	const {slide} = useContext(AulaContext)
	return (
		<>
			<Header />
			<Nav />
			{slide === 1 && <Slide1 />}
			{slide === 2 && <Slide2 />}
			{slide === 3 && <Slide3 />}
			<Footer />
		</>		
	)
}

export default Aula
