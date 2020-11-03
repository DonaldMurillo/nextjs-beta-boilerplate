import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import React from "react";
import css from '../Buttons/buttons.module.scss'

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

//TODO: ADD TOGGLE TO CHANGE COLOR/THEME
//TODO: ADD TOGGLE TO CHANGE TYPE
//TODO: ADD TOGGLE TO CHANGE SIZE, FONT SIZE ETC

export default function MatButtons() {

    // const classes = useStyles();
    return (
        
        <div className={css.btnBase}>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
        </div>
    )
}