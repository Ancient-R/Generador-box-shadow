import { useEffect, useRef, useState } from "react";

import Header from "./components/header/Header";
import Generator from "./components/ui/Generator";
import Circle from "./components/figures/Circle";
import Rectangle from "./components/figures/Rectangle";
import Square from "./components/figures/Square";

function App() {

  // Estado para cambiar la figura
  const [figure, setFigure] = useState('rectangle');

  // Estado del formulario
  const [formValues, setFormValues] = useState({
    x: '10',
    y: '10',
    blur: '5',
    spreed: '0',
    color: '#000000'
  });

  const { x, y, blur, spreed, color } = formValues;

  // useRef para referenciar al container y aplicar estilos al hijo
  const  figureRef = useRef();

  useEffect( () => {
    figureRef.current.children[1].style.boxShadow = `${x}px ${y}px ${blur}px ${spreed}px ${color}`

    // eslint-disable-next-line
  }, [ formValues, figure ]);

  return (
    <div className="App">
      <Header />

      <div 
        className="container"
        ref={ figureRef }
      >
        <Generator 
          figure = { figure }
          setFigure={ setFigure }
          formValues = { formValues }
          setFormValues = { setFormValues }
          
        />
        { figure === 'square' ? 
          <Square />
          : figure === 'circle' ?
            <Circle />
            : <Rectangle />
        }
      </div>
    </div>
  );
}

export default App;
