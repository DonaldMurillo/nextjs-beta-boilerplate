import { makeStyles, Theme, createStyles, Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import MatButtons from "../MatSnipets/Buttons/MatButtons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);


export default function MatLayout({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    const classes = useStyles();
    return (
      <div style={{ maxWidth: 1000, margin: 'auto'}}>
        <header>
        </header>
        <main>
            <h2>TODOS</h2>
        <ul>
            <li>Themeing</li>
            <li>Add accordions</li>
            <li>Add pages/tabs</li>
            <li>Buttons</li>
            <li>Tables</li>
            <li>Inputs</li>
            <li>Progress bars</li>
            <li>App bars</li>
            <li>toggles</li>
        </ul>
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={classes.heading}>Buttons</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MatButtons></MatButtons>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography className={classes.heading}>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </div>

            {children}
        </main>
      </div>
    )
  }