import { makeStyles } from "@material-ui/core/styles";

const colors = [
    "#c62828d5",
    "#ad1457d5",
    "#6a1b9ad5",
    "#1565c0d5",
    "#c6ff00d5",
    "#ef6c00d5",
    "#4527a0d5",
    "#87CEEB",
    "#2e7d32d5",
    "#6200ead5",
];

const arrow_color = "#000000"


const useStylesDec = makeStyles((theme) => ({
    button: {
        margin: "5px",
        marginLeft: "20px",
        padding: "0.5rem",
    },
    
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    
    bits: {
        backgroundColor: "#455a64d5",
        height: '50px',
        width: '50px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "30px",
    },

    // KEY BITS -----------------------------------------------------
    cipher_text_bits0: {
        backgroundColor: colors[0],
    },
    cipher_text_bits1: {
        backgroundColor: colors[1],
    },
    cipher_text_bits2: {
        backgroundColor: colors[2],
    },
    cipher_text_bits3: {
        backgroundColor: colors[3],
    },
    cipher_text_bits4: {
        backgroundColor: colors[4],
    },
    cipher_text_bits5: {
        backgroundColor: colors[5],
    },
    cipher_text_bits6: {
        backgroundColor: colors[6],
    },
    cipher_text_bits7: {
        backgroundColor: colors[7],
    },

    // PERMUTATION BITS -----------------------------------------------------
    perm_bits: {
        height: '35px',
        width: '35px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "12px",
        marginTop: "30px",
        marginBottom: "30px",
    },

    permutation_bits0: {
        backgroundColor: colors[0], 
    },
    permutation_bits1: {
        backgroundColor: colors[1], 
    },
    permutation_bits2: {
        backgroundColor: colors[2], 
    },
    permutation_bits3: {
        backgroundColor: colors[3], 
    },
    permutation_bits4: {
        backgroundColor: colors[4], 
    },
    permutation_bits5: {
        backgroundColor: colors[5], 
    },
    permutation_bits6: {
        backgroundColor: colors[6], 
    },
    permutation_bits7: {
        backgroundColor: colors[7], 
    },
    permutation_bits8: {
        backgroundColor: colors[8], 
    },
    permutation_bits9: {
        backgroundColor: colors[9], 
    },


    margin_top: {
        marginTop: "40px",
    },

    label: {
        display: "flex",
        flexGrow: '1',
        justifyContent: "center",  
        marginTop: "30px",
        marginBottom: "30px",      
    },

    // S-BOX -----------------------------------------------------------

    s_box: {
        backgroundColor: "#00CD66",
        height: '50px',
        width: '50px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "30px",
    },

    // ARROWS ----------------------------------------------------------
    arrow_path_dec: {
        // stroke: colors[0],
        fill: "transparent",
        strokeDasharray: "1000",
        strokeDashoffset: "1000",
        // animation: `$dash 4s 1 forwards`,
        strokeWidth: "0.2rem",
        // animationDelay: "1s",
    },

    arrow_path_dec1: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "1s",
    },

    arrow_path_dec2: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "2s",
    },

    arrow_path_dec3: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "3s",
    },

    arrow_path_dec4: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "4s",
    },

    arrow_path_dec5: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "5s",
    },

    arrow_path_dec6: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "6s",
    },

    arrow_path_dec7: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "7s",
    },

    arrow_path_dec8: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "8s",
    },

    arrow_path_dec9: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "9s",
    },

    arrow_path_dec10: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "10s",
    },

    arrow_path_dec11: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "11s",
    },

    arrow_path_dec12: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "12s",
    },

    arrow_path_dec13: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "13s",
    },

    arrow_path_dec14: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "14s",
    },

    arrow_path_dec15: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "15s",
    },

    arrow_path_dec16: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "16s",
    },

    arrow_path_dec17: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "17s",
    },

    arrow_path_dec18: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "18s",
    },

    arrow_path_dec19: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "19s",
    },

    arrow_path_dec20: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "20s",
    },

    arrow_path_dec21: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "21s",
    },

    "@keyframes dash": {
        "to": {
            strokeDashoffset: "0",
        }
    }
}));



export { colors, useStylesDec };