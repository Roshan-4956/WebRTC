'use client'
import React from 'react'
import { useContext } from 'react'
import { Button } from '@mui/material'
import { SocketContext } from '../app/SocketContext'

export default function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call && call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>
            {call.name} is calling;
          </h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  )
}
