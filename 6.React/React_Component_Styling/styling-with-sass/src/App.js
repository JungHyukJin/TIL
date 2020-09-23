import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large"> Button </Button>
        <Button> Button </Button>
        <Button size="small"> Button </Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          Button
        </Button>
        <Button color="gray"> Button </Button>
        <Button color="gray" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink"> Button </Button>
        <Button color="pink" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline={true}>
          Button
        </Button>
        <Button color="gray" outline>
          Button
        </Button>
        <Button color="pink" size="small" outline>
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth={true} className="customized-button">
          {/* className으로 따로 설정해주고, App.scss에서 스타일을 추가하면 된다. */}
          Button
        </Button>
        <Button size="large" color="gray" fullWidth>
          Button
        </Button>
        <Button
          size="large"
          color="pink"
          fullWidth
          onClick={() => {
            console.log('click!');
          }}
          onMouseMove={() => {
            console.log('Mouse Move!');
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
