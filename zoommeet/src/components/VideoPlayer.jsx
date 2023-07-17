'use client'

import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@mui/material'
import { SocketContext } from '../app/SocketContext'
import styles from './VideoPlayer.module.css'

export default function VideoPlayer() {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  return (
    <Grid container className={styles.gridContainer}>
        {stream && (<Paper className={styles.paper}>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                    {name || 'Name'}
                </Typography>
                <video playsInline={true} muted={true} ref={myVideo} autoPlay className={styles.video}/>
            </Grid>
        </Paper>)}
        {callAccepted && !callEnded && (<Paper className={styles.paper}>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                    {call.Name || 'Name'}
                </Typography>
                <video playsInline={true} ref={userVideo} autoPlay className={styles.video}/>
            </Grid>
        </Paper>)}
    </Grid>
  )
}
