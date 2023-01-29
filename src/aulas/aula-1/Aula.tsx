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
import Slide8 from './Slide8'
import Slide9 from './Slide9'
import Slide10 from './Slide10'
import Slide11 from './Slide11'
import Slide12 from './Slide12'

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
			{slide === 8 && <Slide8 />}
			{slide === 9 && <Slide9 />}
			{slide === 10 && <Slide10 />}
			{slide === 11 && <Slide11 />}
			{slide === 12 && <Slide12 />}
			<Footer />
		</>		
	)
}

export default Aula
