const rotateLeft = (arr) => {
    let first = arr.shift();
    arr.push(first);
    return arr;
};

const applyPermutation = (k, perm) => {
    let output = [];
    for(let i = 0; i < perm.length; i++){
        output[i] = k[perm[i] - 1];
    }

    return output;
};

const XOR = (a, b) => {
    let output = [];
    for(let i = 0; i < a.length; i++){
        if (a[i] === b[i]) output[i] = 0;
        else output[i] = 1;
    }

    return output;
};

const applySBox = (s, data) => {    
    let row = parseInt((data[0].toString() + data[3].toString()), 2);
    let col = parseInt((data[1].toString() + data[2].toString()), 2);
    let op = (s[row][col] >>> 0).toString(2);
    op = "00".substr(op.length) + op; 
    return op;
};

const fk = (expansion, s0, s1, key, msg, perm4) => {
    let left = msg.slice(0, 4);
    let right = msg.slice(4, 8);
    let temp = applyPermutation(right, expansion);
    let expansionOutput = temp;

    temp = XOR(temp, key);
    let expXORKeyOutput = temp;
    
    let l = applySBox(s0, temp.slice(0, 4));
    let r = applySBox(s1, temp.slice(4, 8));
    l = l.split("").map((value) => (Number(value)));
    r = r.split("").map((value) => (Number(value)));
    let sboxOutput = l.concat(r);

    temp = applyPermutation(l.concat(r), perm4);
    let perm4Output = temp;

    temp = XOR(left, temp);
    let leftXORPerm4Output = temp;
    
    return {
        "expansionOutput": expansionOutput,
        "expXORKeyOutput": expXORKeyOutput,
        "sboxOutput": sboxOutput,
        "perm4Output": perm4Output,
        "leftXORPerm4Output": leftXORPerm4Output,
        "fkOutput": temp.concat(right),
    };
};

const getKeyGenOutputs = (keyBits, perm10, perm8) => {
    // p10 output
    let p10Output = applyPermutation(keyBits, perm10);

    // Left Shift 1
    let ls1Output = [];
    let leftSubKey = p10Output.slice(0, 5);
    let rightSubKey = p10Output.slice(5, 10);
    ls1Output = rotateLeft(leftSubKey).concat(rotateLeft(rightSubKey));

    // p8 output or Key 1
    let key1 = applyPermutation(ls1Output, perm8);

    // Left Shift 2
    let ls2Output = [];
    leftSubKey = ls1Output.slice(0, 5);
    rightSubKey = ls1Output.slice(5, 10);
    ls2Output = rotateLeft(rotateLeft(leftSubKey)).concat(rotateLeft(rotateLeft(rightSubKey)));

    // p8 output or Key 2
    let key2 = applyPermutation(ls2Output, perm8);

    return {
        "p10Output": p10Output,
        "ls1Output": ls1Output,
        "key1": key1,
        "ls2Output": ls2Output,
        "key2": key2,
    }
};


const getEncryptOutputs = (msg, initialPerm, s0, s1, expansion, perm4, inverseIP, key1, key2) => {
    let temp = applyPermutation(msg, initialPerm);
    let initialPermOutput = temp;
    // console.log(initialPermOutput);
    let l4Iter1 = initialPermOutput.slice(0, 4), r4Iter1 = initialPermOutput.slice(4, 8);

    temp = fk(expansion, s0, s1, key1, temp, perm4);
    let expansionIter1Output = temp["expansionOutput"];
    let expXORKey1Iter1Output = temp["expXORKeyOutput"];
    let sboxIter1Output = temp["sboxOutput"];
    let perm4Iter1Output = temp["perm4Output"];
    let leftXORPerm4Iter1Output = temp["leftXORPerm4Output"];
    let fk1Output = temp["fkOutput"];
    temp = temp["fkOutput"];

    temp = temp.slice(4, 8).concat(temp.slice(0, 4));
    let swapOutput = temp;
    let l4Iter2 = swapOutput.slice(0, 4), r4Iter2 = swapOutput.slice(4, 8);

    temp = fk(expansion, s0, s1, key2, temp, perm4);
    let expansionIter2Output = temp["expansionOutput"];
    let expXORKey2Iter2Output = temp["expXORKeyOutput"];
    let sboxIter2Output = temp["sboxOutput"];
    let perm4Iter2Output = temp["perm4Output"];
    let leftXORPerm4Iter2Output = temp["leftXORPerm4Output"];
    let fk2Output = temp["fkOutput"];
    temp = temp["fkOutput"];

    let cipherText = applyPermutation(temp, inverseIP);

    // let ee = {
    //     "initialPermOutput": initialPermOutput,
    //     "l4Iter1": l4Iter1,
    //     "r4Iter1": r4Iter1,
    //     "expansionIter1Output": expansionIter1Output,
    //     "expXORKey1Iter1Output": expXORKey1Iter1Output,
    //     "sboxIter1Output": sboxIter1Output,
    //     "perm4Iter1Output": perm4Iter1Output,
    //     "leftXORPerm4Iter1Output": leftXORPerm4Iter1Output,
    //     "fk1Output": fk1Output,
    //     "swapOutput": swapOutput,
    //     "l4Iter2": l4Iter2,
    //     "r4Iter2": r4Iter2,
    //     "expansionIter2Output": expansionIter2Output,
    //     "expXORKey2Iter2Output": expXORKey2Iter2Output,
    //     "sboxIter2Output": sboxIter2Output,
    //     "perm4Iter2Output": perm4Iter2Output,
    //     "leftXORPerm4Iter2Output": leftXORPerm4Iter2Output,
    //     "fk2Output": fk2Output,
    //     "cipherText": cipherText,
    // };
    // console.log(ee);

    return {
        "initialPermOutput": initialPermOutput,
        "l4Iter1": l4Iter1,
        "r4Iter1": r4Iter1,
        "expansionIter1Output": expansionIter1Output,
        "expXORKey1Iter1Output": expXORKey1Iter1Output,
        "sboxIter1Output": sboxIter1Output,
        "perm4Iter1Output": perm4Iter1Output,
        "leftXORPerm4Iter1Output": leftXORPerm4Iter1Output,
        "fk1Output": fk1Output,
        "swapOutput": swapOutput,
        "l4Iter2": l4Iter2,
        "r4Iter2": r4Iter2,
        "expansionIter2Output": expansionIter2Output,
        "expXORKey2Iter2Output": expXORKey2Iter2Output,
        "sboxIter2Output": sboxIter2Output,
        "perm4Iter2Output": perm4Iter2Output,
        "leftXORPerm4Iter2Output": leftXORPerm4Iter2Output,
        "fk2Output": fk2Output,
        "cipherText": cipherText,
    };
};


const getDecryptOutputs = (msg, initialPerm, s0, s1, expansion, perm4, inverseIP, key1, key2) => {
    let temp = applyPermutation(msg, initialPerm);
    let initialPermOutput = temp;
    // console.log(initialPermOutput);
    let l4Iter1 = initialPermOutput.slice(0, 4), r4Iter1 = initialPermOutput.slice(4, 8);

    temp = fk(expansion, s0, s1, key2, temp, perm4);
    let expansionIter1Output = temp["expansionOutput"];
    let expXORKey1Iter1Output = temp["expXORKeyOutput"];
    let sboxIter1Output = temp["sboxOutput"];
    let perm4Iter1Output = temp["perm4Output"];
    let leftXORPerm4Iter1Output = temp["leftXORPerm4Output"];
    let fk1Output = temp["fkOutput"];
    temp = temp["fkOutput"];

    temp = temp.slice(4, 8).concat(temp.slice(0, 4));
    let swapOutput = temp;
    let l4Iter2 = swapOutput.slice(0, 4), r4Iter2 = swapOutput.slice(4, 8);

    temp = fk(expansion, s0, s1, key1, temp, perm4);
    let expansionIter2Output = temp["expansionOutput"];
    let expXORKey2Iter2Output = temp["expXORKeyOutput"];
    let sboxIter2Output = temp["sboxOutput"];
    let perm4Iter2Output = temp["perm4Output"];
    let leftXORPerm4Iter2Output = temp["leftXORPerm4Output"];
    let fk2Output = temp["fkOutput"];
    temp = temp["fkOutput"];

    let plainText = applyPermutation(temp, inverseIP);

    let ee = {
        "initialPermOutput": initialPermOutput,
        "l4Iter1": l4Iter1,
        "r4Iter1": r4Iter1,
        "expansionIter1Output": expansionIter1Output,
        "expXORKey1Iter1Output": expXORKey1Iter1Output,
        "sboxIter1Output": sboxIter1Output,
        "perm4Iter1Output": perm4Iter1Output,
        "leftXORPerm4Iter1Output": leftXORPerm4Iter1Output,
        "fk1Output": fk1Output,
        "swapOutput": swapOutput,
        "l4Iter2": l4Iter2,
        "r4Iter2": r4Iter2,
        "expansionIter2Output": expansionIter2Output,
        "expXORKey2Iter2Output": expXORKey2Iter2Output,
        "sboxIter2Output": sboxIter2Output,
        "perm4Iter2Output": perm4Iter2Output,
        "leftXORPerm4Iter2Output": leftXORPerm4Iter2Output,
        "fk2Output": fk2Output,
        "plainText": plainText,
    };
    // console.log(ee);

    return {
        "initialPermOutput": initialPermOutput,
        "l4Iter1": l4Iter1,
        "r4Iter1": r4Iter1,
        "expansionIter1Output": expansionIter1Output,
        "expXORKey1Iter1Output": expXORKey1Iter1Output,
        "sboxIter1Output": sboxIter1Output,
        "perm4Iter1Output": perm4Iter1Output,
        "leftXORPerm4Iter1Output": leftXORPerm4Iter1Output,
        "fk1Output": fk1Output,
        "swapOutput": swapOutput,
        "l4Iter2": l4Iter2,
        "r4Iter2": r4Iter2,
        "expansionIter2Output": expansionIter2Output,
        "expXORKey2Iter2Output": expXORKey2Iter2Output,
        "sboxIter2Output": sboxIter2Output,
        "perm4Iter2Output": perm4Iter2Output,
        "leftXORPerm4Iter2Output": leftXORPerm4Iter2Output,
        "fk2Output": fk2Output,
        "plainText": plainText,
    };
};


const stringToBinary = (str) => {
    let res = '';
    res = str.map(char => {
        let op = char.charCodeAt(0).toString(2)
        op = "00000000".substr(op.length) + op; 
        return op;
    }).join('');
    
    res = res.split("").map((value) => (Number(value)));
    return res;
};


const binaryToString = (bin_data) => {
    let res = "";

    let temp_data = "";
    for(let i = 0; i < bin_data.length; i++){
        temp_data = bin_data.slice(i*8, i*8+8).join("");
        let op = temp_data.split(' ').map(letter=>String.fromCharCode(parseInt(letter, 2))).join('')
        res += op;
    }
    // console.log(res);
    return res;
};


const getStringEncryptionOutput = (msg, initialPerm, s0, s1, expansion, perm4, inverseIP, key1, key2) => {
    let cipher = [];

    let bin_msg = stringToBinary(msg);
    console.log(bin_msg);

    let temp_msg = [];
    for(let i = 0; i < bin_msg.length / 8; i++) {
        temp_msg = bin_msg.slice(i*8, i*8+8);

        let temp = applyPermutation(temp_msg, initialPerm);
        temp = fk(expansion, s0, s1, key1, temp, perm4);
        temp = temp["fkOutput"];
        temp = temp.slice(4, 8).concat(temp.slice(0, 4));
        temp = fk(expansion, s0, s1, key2, temp, perm4);
        temp = temp["fkOutput"];
        temp = applyPermutation(temp, inverseIP);

        cipher = cipher.concat(temp);
    }

    return {
        "cipher_binary": cipher,
        "cipher_string": binaryToString(cipher),
    };
};


const getStringDecryptionOutput = (cipher, initialPerm, s0, s1, expansion, perm4, inverseIP, key1, key2) => {
    let plain = [];

    let temp_cipher = [];
    for(let i = 0; i < cipher.length / 8; i++) {
        temp_cipher = cipher.slice(i*8, i*8+8);

        let temp = applyPermutation(temp_cipher, initialPerm);
        temp = fk(expansion, s0, s1, key2, temp, perm4);
        temp = temp["fkOutput"];
        temp = temp.slice(4, 8).concat(temp.slice(0, 4));
        temp = fk(expansion, s0, s1, key1, temp, perm4);
        temp = temp["fkOutput"];
        temp = applyPermutation(temp, inverseIP);

        plain = plain.concat(temp);
    }

    // console.log(plain);
    return {
        "plain_binary": plain,
        "plain_string": binaryToString(plain),
    };
};

export {getKeyGenOutputs, getEncryptOutputs, getDecryptOutputs, getStringEncryptionOutput, getStringDecryptionOutput}