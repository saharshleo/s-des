import './App.css';

import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";


import NavBar from './Components/NavBar/NavBar';
import KeyGeneration from './Components/KeyGeneration/KeyGeneration';
import Encryption from './Components/Encryption/Encryption';
import Decryption from './Components/Decryption/Decryption';

import {useStyles} from './configKey';
import {useStylesEnc} from './configEnc';
import {useStylesDec} from './configDec';

import {getKeyGenOutputs, getEncryptOutputs} from './utils';

function App() {
    const classesKey = useStyles();
    const classesEnc = useStylesEnc();
    const classesDec = useStylesDec();
    
    // KeyGeneration
    const [keyValue, setKeyValue] = useState("");

    const [keyBitsArray, setKeyBitsArray] = useState([1, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    const [perm10, setPerm10] = useState([3, 5, 2, 7, 4, 10, 1, 9, 8, 6]);
    const [perm8, setPerm8] = useState([6, 3, 7, 4, 8, 5, 10, 9]);

    const [p10Output, setP10Output] = useState([1, 0, 0, 0, 0, 0, 1, 1, 0, 0]);
    const [ls1Output, setLs1Output] = useState([0, 0, 0, 0, 1, 1, 1, 0, 0, 0]);
    const [key1, setKey1] = useState([1, 0, 1, 0, 0, 1, 0, 0]);
    const [ls2Output, setLs2Output] = useState([0, 0, 1, 0, 0, 0, 0, 0, 1, 1]);
    const [key2, setKey2] = useState([0, 1, 0, 0, 0, 0, 1, 1]);

    const handleKeyGenSubmit = () => {        
        // input validation [TODO]
        if(keyValue.length !== 10) {
            alert("Key length should be 10");
            return;
        }
        let tempArray = keyValue.split("").map((value) => (Number(value)));

        for (let i = 0; i < 10; i++) {
            if (!(tempArray[i] === 0 || tempArray[i] === 1)) {
                alert("Key bits should be 1 or 0");
                return;
            }
        }

        setKeyBitsArray(tempArray);

        // calculate output of p10, ls1, p8 or key1, ls2, p8 or key2
        let keyGenOutputs = getKeyGenOutputs(tempArray, perm10, perm8);
        // console.log(keyGenOutputs["p10Output"]);
        // console.log(keyGenOutputs["ls1Output"]);
        // console.log(keyGenOutputs["key1"]);
        // console.log(keyGenOutputs["ls2Output"]);
        // console.log(keyGenOutputs["key2"]);

        setP10Output(keyGenOutputs["p10Output"]);
        setLs1Output(keyGenOutputs["ls1Output"]);
        setKey1(keyGenOutputs["key1"]);
        setLs2Output(keyGenOutputs["ls2Output"]);
        setKey2(keyGenOutputs["key2"]);


    };
    const onKeyChange = (e) => setKeyValue(e.target.value);


    // KeyGeneration
    const [plainTextValue, setPlainTextValue] = useState("");
    const [plainTextArray, setPlainTextArray] = useState([1, 0, 0, 1, 0, 1, 1, 1]);
    const [expansion, setExpansion] = useState([4, 1, 2, 3, 2, 3, 4, 1]);
    const [initialPerm, setInitialPerm] = useState([2, 6, 3, 1, 4, 8, 5, 7]);
    const [inverseIP, setInverseIP] = useState([4, 1, 3, 5, 7, 2, 8, 6]);
    const [perm4, setPerm4] = useState([2, 4, 3, 1]);
    const s0 = [[1, 0, 3, 2], [3, 2, 1, 0], [0, 2, 1, 3], [3, 1, 3, 2]];
    const s1 = [[0, 1, 2, 3], [2, 0, 1, 3], [3, 0, 1, 0], [2, 1, 0, 3]];

    const [initialPermOutput, setInitialPermOutput] = useState([0, 1, 0, 1, 1, 1, 0, 1]);
    const [l4Iter1, setL4Iter1] = useState([0, 1, 0, 1]);
    const [r4Iter1, setR4Iter1] = useState([1, 1, 0, 1]);
    const [expansionIter1Output, setExpansionIter1Output] = useState([1, 1, 1, 0, 1, 0, 1, 1]);
    const [expXORKey1Iter1Output, setExpXORKey1Iter1Output] = useState([0, 1, 0, 0, 1, 1, 1, 1]);
    const [sboxIter1Output, setSboxIter1Output] = useState([1, 1, 1, 1]);
    const [perm4Iter1Output, setPerm4Iter1Output] = useState([1, 1, 1, 1]);
    const [leftXORPerm4Iter1Output, setLeftXORPerm4Iter1Output] = useState([1, 0, 1, 0]);
    const [fk1Output, setFk1Output] = useState([1, 0, 1, 0, 1, 1, 0, 1]);
    const [swapOutput, setSwapOutput] = useState([1, 1, 0, 1, 1, 0, 1, 0]);
    const [l4Iter2, setL4Iter2] = useState([1, 1, 0, 1]);
    const [r4Iter2, setR4Iter2] = useState([1, 0, 1, 0]);
    const [expansionIter2Output, setExpansionIter2Output] = useState([0, 1, 0, 1, 0, 1, 0, 1]);
    const [expXORKey2Iter2Output, setExpXORKey2Iter2Output] = useState([0, 0, 0, 1, 0, 1, 1, 0]);
    const [sboxIter2Output, setSboxIter2Output] = useState([1, 1, 1, 1]);
    const [perm4Iter2Output, setPerm4Iter2Output] = useState([1, 1, 1, 1]);
    const [leftXORPerm4Iter2Output, setLeftXORPerm4Iter2Output] = useState([0, 0, 1, 0]);
    const [fk2Output, setFk2Output] = useState([0, 0, 1, 0, 1, 0, 1, 0]);

    const [cipherText, setCipherText] = useState([0, 0, 1, 1, 1, 0, 0, 0]);

    const handleEncryptSubmit = () => {        
        // input validation [TODO]
        if(plainTextValue.length !== 8) {
            alert("Plaintext length should be 8");
            return;
        }
        let tempArray = plainTextValue.split("").map((value) => (Number(value)));

        for (let i = 0; i < 8; i++) {
            if (!(tempArray[i] === 0 || tempArray[i] === 1)) {
                alert("Plaintext bits should be 1 or 0");
                return;
            }
        }

        setPlainTextArray(tempArray);

        // calculate output of p10, ls1, p8 or key1, ls2, p8 or key2
        let encryptOutputs = getEncryptOutputs(tempArray, initialPerm, s0, s1, expansion, perm4, inverseIP, key1, key2);
        
        setInitialPermOutput(encryptOutputs["initialPermOutput"]);
        setL4Iter1(encryptOutputs["l4Iter1"]);
        setR4Iter1(encryptOutputs["r4Iter1"]);
        setExpansionIter1Output(encryptOutputs["expansionIter1Output"]);
        setExpXORKey1Iter1Output(encryptOutputs["expXORKey1Iter1Output"]);
        setSboxIter1Output(encryptOutputs["sboxIter1Output"]);
        setPerm4Iter1Output(encryptOutputs["perm4Iter1Output"]);
        setLeftXORPerm4Iter1Output(encryptOutputs["leftXORPerm4Iter1Output"]);
        setFk1Output(encryptOutputs["fk1Output"]);
        setSwapOutput(encryptOutputs["swapOutput"]);
        setL4Iter2(encryptOutputs["l4Iter2"]);
        setR4Iter2(encryptOutputs["r4Iter2"]);
        setExpansionIter2Output(encryptOutputs["expansionIter2Output"]);
        setExpXORKey2Iter2Output(encryptOutputs["expXORKey2Iter2Output"]);
        setSboxIter2Output(encryptOutputs["sboxIter2Output"]);
        setPerm4Iter2Output(encryptOutputs["perm4Iter2Output"]);
        setLeftXORPerm4Iter2Output(encryptOutputs["leftXORPerm4Iter2Output"]);
        setFk2Output(encryptOutputs["fk2Output"]);
        setCipherText(encryptOutputs["cipherText"]);

        
    };
    const onPlainTextChange = (e) => setPlainTextValue(e.target.value);
    
    return (
        <>
        <NavBar />

        <Container className="container">    

            {/* ####### KEY GENERATION ############################################## */}
            <h1 className="text__header">Key Generation</h1>
            <Grid item xs={12} className={classesKey.centered}>
                <TextField id="outlined-basic" label="10-bit Key" variant="outlined" value={keyValue} onChange={onKeyChange} />
                <Button className={classesKey.button} variant="contained" size="Large" color="primary" onClick={handleKeyGenSubmit}>Submit</Button>
            </Grid>
            <KeyGeneration 
                keyBitsArray={keyBitsArray} perm10={perm10} perm8={perm8}
                p10Output={p10Output} ls1Output={ls1Output} key1={key1}
                ls2Output={ls2Output} key2={key2} />

            <h1>Key1: </h1>
            <TextField id="outlined-basic" variant="outlined" value={key1.join("")} inputProps={{readOnly: true, }} />
            <h1>Key2: </h1>
            <TextField id="outlined-basic" variant="outlined" value={key2.join("")} inputProps={{readOnly: true, }} />

            {/* ####### ENCRYPTION ############################################## */}
            <h1 className="text__header">Encryption</h1>
            <Grid item xs={12} className={classesEnc.centered}>
                <TextField id="outlined-basic" label="8-bit Plaintext" variant="outlined" value={plainTextValue} onChange={onPlainTextChange} />
                <Button className={classesEnc.button} variant="contained" size="Large" color="primary" onClick={handleEncryptSubmit}>Submit</Button>
            </Grid>
            <Encryption 
                plainTextArray={plainTextArray} key1={key1} key2={key2}
                initialPerm={initialPerm} inverseIP={inverseIP} expansion={expansion} 
                perm4={perm4} s0={s0} s1={s1}
                
                initialPermOutput={initialPermOutput} 
                
                l4Iter1={l4Iter1} r4Iter1={r4Iter1} expansionIter1Output={expansionIter1Output} expXORKey1Iter1Output={expXORKey1Iter1Output} 
                sboxIter1Output={sboxIter1Output} perm4Iter1Output={perm4Iter1Output} leftXORPerm4Iter1Output={leftXORPerm4Iter1Output} 
                fk1Output={fk1Output}
                
                swapOutput={swapOutput}
                
                l4Iter2={l4Iter2} r4Iter2={r4Iter2} expansionIter2Output={expansionIter2Output} expXORKey2Iter2Output={expXORKey2Iter2Output} 
                sboxIter2Output={sboxIter2Output} perm4Iter2Output={perm4Iter2Output} leftXORPerm4Iter2Output={leftXORPerm4Iter2Output} 
                fk2Output={fk2Output}

                cipherText={cipherText} />


        </Container>
        </>
    );
}

export default App;