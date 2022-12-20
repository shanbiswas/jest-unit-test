import {useState} from 'react';

const changeText = () => {
  const [textChanged, setTextChanged] = useState(false);

  return (
    <div className="App">
      <p>Hello world</p>

      { !textChanged && <p>Good to see you</p> }
      { textChanged && <p>Changed</p> }

      <button onClick={() => setTextChanged(true)}>Change Text</button>
    </div>
  );
}

export default changeText;
