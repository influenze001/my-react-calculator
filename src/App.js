import React, { useState } from 'react';
import "./App.css";
import "./index.css"

function App() {
  const [calc, setCalc] = useState('');

  function calcc(el){
	setCalc(calc + el.target.value)
  }

  const calculate = () => {
	if(calc.length === 0){
		return;
	}

	try {
		const result = Function(`return (${calc})`)();
		setCalc(result.toString());
	  }
	catch (error) {
		console.error(error);
	  }
  };


  const deleteLast = () => {
    if (calc === " ") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="App">
      <div className="react">
		<input type="text" value={calc} className="inp"/>
        <div className="statements">
          <button onClick={calcc} value="/">/</button>
          <button onClick={calcc} value="*">*</button>
          <button onClick={calcc} value="+">+</button>
          <button onClick={calcc} value="-">-</button>
        </div>
 
        <div className="numbers">
          <button className='clear_buton' id="clera" onClick={(e => setCalc(" "))}>C</button>
          <button onClick={calcc} value="0">0</button>
		  <button onClick={calcc} value="9">9</button>
          <button onClick={calcc} value="8">8</button>
          <button onClick={calcc} value="7">7</button>
          <button onClick={calcc} value="6">6</button>
          <button onClick={calcc} value="5">5</button>
          <button onClick={calcc} value="4">4</button>
          <button onClick={calcc} value="3">3</button>
          <button onClick={calcc} value="2">2</button>
          <button onClick={calcc} value="1">1</button>
          <button onClick={calculate} value="=">=</button>
        </div>
		<button className='deleteLast' onClick={deleteLast}>DEL</button>
      </div>
    </div>
  );
}

export default App;