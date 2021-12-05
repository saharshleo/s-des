import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Arrow, { DIRECTION } from 'react-arrows';

import {useStylesEnc} from '../../configEnc';


const Encryption = (props) => {
    const classes = useStylesEnc();

    // Animate arrows after form submit
    useEffect(() => {
        
        let arrows = document.querySelectorAll(".arrow_enc");
        if(arrows && arrows.length) {
            arrows.forEach(arrow => {
                arrow.style.animation = "none";
                setTimeout(() => {
                    arrow.style.animation = "";
                });
            })
        }

    }, [props.plainTextArray]);

    function getArrowName(v) {
        return "arrow_path_enc"+v;
    }

    function getPlainTextName(v) {
        return "plain_text_bits"+v;
    }

    function getPermName(v) {
        return "permutation_bits"+v;
    }

    return (
        <>

        <Grid container spacing={2}>
            
            {/* plaintext bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Plaintext Bits</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.plainTextArray.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`pt_bit_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`ip_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Bits after IP */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After IP</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.initialPermOutput.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.initialPerm[index]-1)]}`} id={`after_ip_enc_${index+1}`}>{value}</div>
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
                    {props.r4Iter1.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index+4)]}`} id={`rh_enc_${index+1+4}`}>{value}</div>
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
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ep_enc_${value}`} >{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            

            {/* Bits after E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Bits after E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.expansionIter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.expansion[index]-1)]}`} id={`after_ep_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`k1_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* (Bits after E/P) XOR (Key 1) */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.expXORKey1Iter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ep_xor_k1_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.bits} ${classes.s_box}`} id={`s_box_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Box Output*/}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Box Output</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.sboxIter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPermName(index)]}`} id={`s_box_output_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`perm_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Left Half and After Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.l4Iter1.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.perm4[index]-1)]}`} id={`lh_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                    {props.perm4Iter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.perm4[index]-1)]}`} id={`after_perm_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* permutation XOR with left half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR with left half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.leftXORPerm4Iter1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.perm4[index]-1)]}`} id={`after_perm_xor_lh_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Output of Fk */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Output of Fk</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.fk1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`fk_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Swap */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Swap</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.swapOutput.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`swap_enc_${index+1}`}>{value}</div>
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
                    {props.r4Iter2.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index+4)]}`} id={`rh_2_enc_${index+1+4}`}>{value}</div>
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
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ep_2_enc_${value}`} >{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            

            {/* Bits after E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Bits after E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.expansionIter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.expansion[index]-1)]}`} id={`after_ep_2_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`k2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* (Bits after E/P) XOR (Key K2) */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.expXORKey2Iter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ep_xor_k2_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.bits} ${classes.s_box}`} id={`s_box_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Box Output*/}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Box Output</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.sboxIter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPermName(index)]}`} id={`s_box_output_2_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`perm_2_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Left Half and After Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.l4Iter2.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.perm4[index]-1)]}`} id={`lh_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                    {props.perm4Iter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.perm4[index]-1)]}`} id={`after_perm_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* permutation XOR with left half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR with left half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.leftXORPerm4Iter2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.perm4[index]-1)]}`} id={`after_perm_xor_lh_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Output of Fk */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Output of Fk</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.fk2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`fk_2_enc_${index+1}`}>{value}</div>
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
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`ip_inv_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Bits after IP inverse */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After IP inverse</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.cipherText.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(props.inverseIP[index]-1)]}`} id={`after_ip_inv_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>


        {/* -----------------------------Arrows for 1st iteration---------------------------------- */}


        {/* MAKE Plaintext --> IP ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(1)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`pt_bit_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ip_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE After IP --> Right Half ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(2)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ip_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`rh_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Right Half --> E/P #1 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(3)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_enc_${value-4}`)[0],
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Right Half --> E/P #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(3)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_enc_${value-4}`)[1],
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After E/P --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(4)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_enc_${value}`),
                    translation: [-0.5, 0],
                }}
                to={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_xor_k1_enc_${value}`),
                    translation: [-0.5, 0],
                }}
            />

        ))}

        {/* MAKE Key K1 --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(4)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`k1_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_ep_xor_k1_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR --> S-Box ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(5)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ep_xor_k1_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_enc_${Math.ceil(value / 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box --> S-Box Output ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(6)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_enc_${Math.ceil(value / 2)}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_output_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box Output --> Permutation ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(7)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_output_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`perm_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After Permutation --> XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(8)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Left Half --> Permutation XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(8)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`lh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR with left half --> Output of Fk ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(9)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_xor_lh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`fk_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Output of Fk --> Swap #1 ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(10)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`swap_enc_${(value + 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Output of Fk --> Swap #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(10)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`swap_enc_${(value - 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


         {/* -----------------------------Arrows for 2st iteration---------------------------------- */}


        {/* MAKE Swap --> RH ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(11)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`swap_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`rh_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Right Half --> E/P #1 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(12)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_2_enc_${value-4}`)[0],
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Right Half --> E/P #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(12)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_2_enc_${value-4}`)[1],
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After E/P --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(13)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_2_enc_${value}`),
                    translation: [-0.5, 0],
                }}
                to={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_xor_k2_enc_${value}`),
                    translation: [-0.5, 0],
                }}
            />

        ))}

        {/* MAKE Key K1 --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(13)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`k2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_ep_xor_k2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR --> S-Box ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(14)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ep_xor_k2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_2_enc_${Math.ceil(value / 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box --> S-Box Output ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(15)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_2_enc_${Math.ceil(value / 2)}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_output_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box Output --> Permutation ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(16)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_output_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`perm_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After Permutation --> XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(17)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Left Half --> Permutation XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(17)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`lh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR with left half --> Output of Fk ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(18)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_xor_lh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`fk_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Output of Fk --> IP inverse ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow_enc ${classes[getArrowName(19)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ip_inv_enc_${(value)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        

        </>
    );
}


export default Encryption;
