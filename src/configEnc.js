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
    plain_text_bits0: {
        backgroundColor: colors[0],
    },
    plain_text_bits1: {
        backgroundColor: colors[1],
    },
    plain_text_bits2: {
        backgroundColor: colors[2],
    },
    plain_text_bits3: {
        backgroundColor: colors[3],
    },
    plain_text_bits4: {
        backgroundColor: colors[4],
    },
    plain_text_bits5: {
        backgroundColor: colors[5],
    },
    plain_text_bits6: {
        backgroundColor: colors[6],
    },
    plain_text_bits7: {
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
    arrow_path_enc: {
        // stroke: colors[0],
        fill: "transparent",
        strokeDasharray: "1000",
        strokeDashoffset: "1000",
        // animation: `$dash 4s 1 forwards`,
        strokeWidth: "0.2rem",
        // animationDelay: "1s",
    },

    arrow_path_enc1: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "7s",
    },

    arrow_path_enc2: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "8s",
    },

    arrow_path_enc3: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "9s",
    },

    arrow_path_enc4: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "10s",
    },

    arrow_path_enc5: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "11s",
    },

    arrow_path_enc6: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "12s",
    },

    arrow_path_enc7: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "13s",
    },

    arrow_path_enc8: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "14s",
    },

    arrow_path_enc9: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "15s",
    },

    arrow_path_enc10: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "16s",
    },

    arrow_path_enc11: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "17s",
    },

    arrow_path_enc12: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "18s",
    },

    arrow_path_enc13: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "19s",
    },

    arrow_path_enc14: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "20s",
    },

    arrow_path_enc15: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "21s",
    },

    arrow_path_enc16: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "22s",
    },

    arrow_path_enc17: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "23s",
    },

    arrow_path_enc18: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "24s",
    },

    arrow_path_enc19: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "25s",
    },

    arrow_path_enc20: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "26s",
    },

    arrow_path_enc21: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "27s",
    },

    "@keyframes dash": {
        "to": {
            strokeDashoffset: "0",
        }
    }
}));



export { colors, useStyles };