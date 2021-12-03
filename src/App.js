import './App.css';

import NavBar from './Components/NavBar/NavBar';
import KeyGeneration from './Components/KeyGeneration/KeyGeneration';
import Encryption from './Components/Encryption/Encryption';
import Decryption from './Components/Decryption/Decryption';

import { Container } from '@material-ui/core';

function App() {
  return (
    <>
    <NavBar />

    <Container className="container">    
      <div className="text__header">
        
        <h1>Key Generation</h1>
        <KeyGeneration />
        <h1>Encryption</h1>
        <Encryption />
        <h1>Decryption</h1>
        <Decryption />
      </div>
    
    </Container>
    </>
  );
}

export default App;
