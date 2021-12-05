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


const useStyles = makeStyles((theme) => ({
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
    key_bits0: {
        backgroundColor: colors[0],
    },
    key_bits1: {
        backgroundColor: colors[1],
    },
    key_bits2: {
        backgroundColor: colors[2],
    },
    key_bits3: {
        backgroundColor: colors[3],
    },
    key_bits4: {
        backgroundColor: colors[4],
    },
    key_bits5: {
        backgroundColor: colors[5],
    },
    key_bits6: {
        backgroundColor: colors[6],
    },
    key_bits7: {
        backgroundColor: colors[7],
    },
    key_bits8: {
        backgroundColor: colors[8],
    },
    key_bits9: {
        backgroundColor: colors[9],
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "30px"      
    },


    // ARROWS ----------------------------------------------------------
    arrow_path: {
        // stroke: colors[0],
        fill: "transparent",
        strokeDasharray: "1000",
        strokeDashoffset: "1000",
        // animation: `$dash 4s 1 forwards`,
        strokeWidth: "0.2rem",
        // animationDelay: "1s",
    },

    arrow_path1: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "1s",
    },

    arrow_path2: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "2s",
    },

    arrow_path3: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "3s",
    },

    arrow_path4: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "4s",
    },

    arrow_path5: {
        stroke: arrow_color,
        animation: `$dash 4s 1 forwards`,
        animationDelay: "5s",
    },

    "@keyframes dash": {
        "to": {
            strokeDashoffset: "0",
        }
    }
}));



export { colors, useStyles };