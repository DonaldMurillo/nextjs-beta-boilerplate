import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import React from "react";

const styles = {
    width: 600,
    margin: 'auto',
    justifyContent: 'space-between',
    display: 'flex'
}

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             width: 'content',
//             margin: 'auto',

//             '& > *': {
//                 margin: theme.spacing(1),
//                 },
//             },
//         }),
// );

export default function MatButtons() {

    // const classes = useStyles();
    return (
        
        <div style={styles}>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
        </div>
    )
}