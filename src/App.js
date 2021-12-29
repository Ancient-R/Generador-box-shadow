import { useState } from "react";

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
    color: '#47454D'
  });

  return (
    <div className="App">
      <Header />

      <div className="container">
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
