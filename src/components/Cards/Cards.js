import React from 'react';
import {Card,Typography,CardContent,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {  
    if(!confirmed){
        return "Loading ...."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card} className={cx(styles.card, styles.infected)} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography varient="h5">
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator={","}/>
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of Active Cases</Typography>
                    </CardContent>

                </Grid>

                <Grid item component = {Card} className={cx(styles.card, styles.recovered)} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varient="h5">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator={","}/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of Recovered Cases</Typography>
                    </CardContent>

                </Grid>

                <Grid item component = {Card} className={cx(styles.card, styles.deaths)} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varient="h5">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator={","}/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of Death Cases</Typography>
                    </CardContent>

                </Grid>
            </Grid>

        </div>
    )
}

export default Cards
