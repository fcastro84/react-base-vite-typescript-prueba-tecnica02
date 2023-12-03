import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useFact } from './hooks/useFact';





function App() {
  const { fact, refreshFact } = useFact();
  const { urlImage } = useCatImage( { fact } );
  

  

  const handleClick = async () => {
    refreshFact();
  } 
  
  

  return (
    <>
      <h1>Ejemplo de gatos</h1>
      <button onClick={handleClick}>Cambiar Texto e Imagen</button>
      { fact &&  <p>{fact}</p> }
      { urlImage && <img src={urlImage} alt={`Imagen relacionada con la palabra: ${fact}`} />}
    </>
  )
}

export default App
