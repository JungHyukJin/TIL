import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top:4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      {/* ThemeProvider로 감싸주고 theme이라는 객체를 설정해주면 된다. */}
      <AppBlock>
        <Button>Button</Button>
        <Button color="gray">Button</Button>
        <Button color="pink">Button</Button>
      </AppBlock>
    </ThemeProvider>
  )
}

export default App;