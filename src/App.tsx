import {useState, createContext} from 'react';
import {default as Aula1} from './aulas/aula-1/Aula'
import {default as Aula2} from './aulas/aula-2/Aula'

export const AulaContext = createContext<{ slide: number, setSlide: Function }>({slide: 1, setSlide: () => {}})

function App() {
  const [slide, setSlide] = useState(1)

  return (
	<AulaContext.Provider value={{slide, setSlide}}>
		<Aula2 />
	</AulaContext.Provider>
  );
}

export default App;
