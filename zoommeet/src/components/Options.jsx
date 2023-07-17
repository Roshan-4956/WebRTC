'use client'
import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material'
import CopyToClipboard from 'react-copy-to-clipboard';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import AssignmentIcon from '@mui/icons-material/Assignment';
import styles from './Options.module.css'

import { SocketContext } from '../app/SocketContext';

export default function Options({ children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    return (
        <Container className={styles.container}>
            <Paper elevation={10} className={styles.paper}>
                <form className={styles.root} noValidate autoComplete='off'>
                    <Grid className={styles.gridContainer}>
                        <Grid item xs={12} md={6} className={styles.padding}>
                            <Typography gutterBottom variant='h6'>
                                Account Info
                            </Typography>
                            <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            {console.log(me)}
                            <CopyToClipboard text={me} className={styles.margin}>
                                <Button variant='contained' color='primary' fullWidth startIcon={<AssignmentIcon fontSize='large' />}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                    </Grid>
                    <Grid className={styles.gridContainer}>

                        <Grid item xs={12} md={6} className={styles.padding}>
                            <Typography gutterBottom variant='h6'>
                                Make a Call
                            </Typography>
                            <TextField label='ID to Call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button variant='contained' fullWidth color='secondary' startIcon={<PhoneDisabledIcon fontSize='large' />} onClick={leaveCall} className={styles.margin}>
                                    Hang Up
                                </Button>
                            ) : (
                                <Button variant='contained' fullWidth color='primary' startIcon={<PhoneIcon fontSize='large' />} onClick={() => callUser(idToCall)} className={styles.margin}>
                                    Call
                                </Button>
                            )
                            }
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}
