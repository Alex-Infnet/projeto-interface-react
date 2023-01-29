import React, {useState, createContext} from 'react';
import Aula from './aulas/aula-2/Aula'

export const AulaContext = createContext<{ slide: number, setSlide: Function }>({slide: 1, setSlide: () => {}})

function App() {
  const [slide, setSlide] = useState(1)

  return (
	<AulaContext.Provider value={{slide, setSlide}}>
		<Aula />
	</AulaContext.Provider>
  );
}

export default App;
