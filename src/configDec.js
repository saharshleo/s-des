import { makeStyles } from "@material-ui/core/styles";

const colors = [
    "#c62828d5",
    "#ad1457d5",
    "#6a1b9ad5",
    "#1565c0d5",
    "#c6ff00d5",
    "#ef6c00d5",
    "#4527a0d5",
    "#455a64d5",
    "#2e7d32d5",
    "#6200ead5",
];

const arrow_color = "#000000"


const useStyles = makeStyles((theme) => ({
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
        marginBottom: "40px",
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
        height: '25px',
        width: '25px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "12px",
        marginTop: "20px",
        marginBottom: "20px",
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
        justifyContent: "flex-end",        
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
        animationDelay: "29s",
    },

    arrow_path_dec2: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "30s",
    },

    arrow_path_dec3: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "31s",
    },

    arrow_path_dec4: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "32s",
    },

    arrow_path_dec5: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "33s",
    },

    arrow_path_dec6: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "34s",
    },

    arrow_path_dec7: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "35s",
    },

    arrow_path_dec8: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "36s",
    },

    arrow_path_dec9: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "37s",
    },

    arrow_path_dec10: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "38s",
    },

    arrow_path_dec11: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "39s",
    },

    arrow_path_dec12: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "40s",
    },

    arrow_path_dec13: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "41s",
    },

    arrow_path_dec14: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "42s",
    },

    arrow_path_dec15: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "43s",
    },

    arrow_path_dec16: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "44s",
    },

    arrow_path_dec17: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "45s",
    },

    arrow_path_dec18: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "46s",
    },

    arrow_path_dec19: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "47s",
    },

    arrow_path_dec20: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "48s",
    },

    arrow_path_dec21: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "49s",
    },

    "@keyframes dash": {
        "to": {
            strokeDashoffset: "0",
        }
    }
}));



export { colors, useStyles };