import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CityData } from '../styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxShadow: 'none'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    flexDirection: 'column'
  }
}));

export default function SimpleAccordion({ 
  id, 
  heading, 
  details, 
  expanded, 
  getCityDetails, 
  setExpanded 
}) {
  const classes = useStyles();

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    getCityDetails(id);
  };

  const body = () => (
    <>
      <CityData>Population: {details?.population}</CityData>
      <CityData>Elevation: {details?.elevation}m</CityData>
      <CityData>Timezone: {details?.timezone}</CityData>
    </>
  )

  return (
    <div key={id} className={classes.root}>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`city-${id}-content`}
          id={`city-${id}-content`}
        >
          <Typography className={classes.heading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {body()}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
