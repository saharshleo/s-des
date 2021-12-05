import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Arrow, { DIRECTION } from 'react-arrows';

import {useStylesDec} from '../../configDec';


const Decryption = (props) => {
    const classes = useStylesDec();

    useEffect(() => {
        let arrows = document.querySelectorAll(".arrow_dec");
        if(arrows && arrows.length) {
            arrows.forEach(arrow => {
                arrow.style.animation = "none";
                setTimeout(() => {
                    arrow.style.animation = "";
                });
            })
        }

    }, [props.cipherTextArray]);

    function getArrowName(v) {
        return "arrow_path_dec"+v;
    }

    function getCipherTextName(v) {
        return "cipher_text_bits"+v;
    }

    function getPermName(v) {
        return "permutation_bits"+v;
    }

    return (
        <>

        <Grid container spacing={2}>
            
            {/* plaintext bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Ciphertext Bits</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.cipherTextArray.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`ct_bit_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* IP for plaintext bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>IP</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.initialPerm.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`ip_dec_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Bits after IP */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After IP</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decinitialPermOutput.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.initialPerm[index]-1)]}`} id={`after_ip_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            
            {/* ---------------------------------1st iteration---------------------------------- */}
            <Grid item xs={2} className={`${classes.label} text__header1`}>Iteration #1</Grid>
            <Grid item xs={10}></Grid>

            {/* Right half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Right Half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decr4Iter1.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index+4)]}`} id={`rh_dec_${index+1+4}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.expansion.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ep_dec_${value}`} >{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            

            {/* Bits after E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Bits after E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decexpansionIter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.expansion[index]-1)]}`} id={`after_ep_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Key K2 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Key K2</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.key2.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`k2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* (Bits after E/P) XOR (Key 2) */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decexpXORKey1Iter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`after_ep_xor_k2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Boxes */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Boxes</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {['S0', 'S1'].map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes.s_box}`} id={`s_box_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Box Output*/}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Box Output</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decsboxIter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPermName(index)]}`} id={`s_box_output_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.perm4.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`perm_dec_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Left Half and After Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decl4Iter1.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.perm4[index]-1)]}`} id={`lh_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                    {props.decperm4Iter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.perm4[index]-1)]}`} id={`after_perm_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* permutation XOR with left half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR with left half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decleftXORPerm4Iter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`after_perm_xor_lh_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Output of Fk */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Output of Fk</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decfk1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`fk_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Swap */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Swap</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decswapOutput.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`swap_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* ---------------------------------2nd iteration---------------------------------- */}
            <Grid item xs={2} className={`${classes.label} text__header1`}>Iteration #2</Grid>
            <Grid item xs={10}></Grid>
            
            {/* Right half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Right Half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decr4Iter2.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index+4)]}`} id={`rh_2_dec_${index+1+4}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.expansion.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ep_2_dec_${value}`} >{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            

            {/* Bits after E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Bits after E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decexpansionIter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.expansion[index]-1)]}`} id={`after_ep_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Key K1 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Key K1</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.key1.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`k1_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* (Bits after E/P) XOR (Key K1) */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decexpXORKey2Iter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`after_ep_xor_k1_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Boxes */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Boxes</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {['S0', 'S1'].map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes.s_box}`} id={`s_box_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Box Output*/}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Box Output</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decsboxIter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPermName(index)]}`} id={`s_box_output_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.perm4.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`perm_2_dec_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Left Half and After Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decl4Iter2.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.perm4[index]-1)]}`} id={`lh_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                    {props.decperm4Iter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.perm4[index]-1)]}`} id={`after_perm_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* permutation XOR with left half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR with left half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decleftXORPerm4Iter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`after_perm_xor_lh_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Output of Fk */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Output of Fk</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.decfk2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(index)]}`} id={`fk_2_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* IP inverse */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>IP inverse</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.inverseIP.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`ip_inv_dec_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Bits after IP inverse */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After IP inverse</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.plainText.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getCipherTextName(props.inverseIP[index]-1)]}`} id={`after_ip_inv_dec_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>


        {/* -----------------------------Arrows for 1st iteration---------------------------------- */}


        {/* MAKE Plaintext --> IP ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(1)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`ct_bit_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ip_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE After IP --> Right Half ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(2)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ip_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`rh_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Right Half --> E/P #1 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(3)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_dec_${value-4}`)[0],
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Right Half --> E/P #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(3)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_dec_${value-4}`)[1],
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After E/P --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(4)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_dec_${value}`),
                    translation: [-0.5, 0],
                }}
                to={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_xor_k2_dec_${value}`),
                    translation: [-0.5, 0],
                }}
            />

        ))}

        {/* MAKE Key K1 --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(4)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`k2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_ep_xor_k2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR --> S-Box ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(5)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ep_xor_k2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_dec_${Math.ceil(value / 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box --> S-Box Output ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(6)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_dec_${Math.ceil(value / 2)}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_output_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box Output --> Permutation ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(7)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_output_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`perm_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After Permutation --> XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(8)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Left Half --> Permutation XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(8)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`lh_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR with left half --> Output of Fk ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(9)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_xor_lh_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`fk_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Output of Fk --> Swap #1 ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(10)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`swap_dec_${(value + 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Output of Fk --> Swap #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(10)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`swap_dec_${(value - 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


         {/* -----------------------------Arrows for 2st iteration---------------------------------- */}


        {/* MAKE Swap --> RH ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(11)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`swap_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`rh_2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Right Half --> E/P #1 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(12)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_2_dec_${value-4}`)[0],
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Right Half --> E/P #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(12)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_2_dec_${value-4}`)[1],
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After E/P --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(13)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_2_dec_${value}`),
                    translation: [-0.5, 0],
                }}
                to={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_xor_k1_dec_${value}`),
                    translation: [-0.5, 0],
                }}
            />

        ))}

        {/* MAKE Key K1 --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(13)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`k1_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_ep_xor_k1_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR --> S-Box ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(14)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ep_xor_k1_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_2_dec_${Math.ceil(value / 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box --> S-Box Output ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(15)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_2_dec_${Math.ceil(value / 2)}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_output_2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box Output --> Permutation ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(16)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_output_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`perm_2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After Permutation --> XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(17)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Left Half --> Permutation XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(17)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`lh_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR with left half --> Output of Fk ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(18)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_xor_lh_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`fk_2_dec_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Output of Fk --> IP inverse ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_dec ${classes[getArrowName(19)]} ${classes.arrow_path_dec}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_2_dec_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ip_inv_dec_${(value)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        

        </>
    );
}


export default Decryption;
