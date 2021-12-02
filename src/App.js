import './App.css';

import NavBar from './Components/NavBar/NavBar';
import KeyGeneration from './Components/KeyGeneration/KeyGeneration';

import { Container } from '@material-ui/core';

function App() {
  return (
    <>
    <NavBar />

    <Container className="container">    
      <div className="text__header">
        
        <h1>Key Generation</h1>
        <KeyGeneration />
      </div>
    
    </Container>
    </>
  );
}

export default App;
