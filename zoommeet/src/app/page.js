import Image from 'next/image'
import styles from './page.module.css'
import { Typography, AppBar } from '@mui/material'
import VideoPlayer from '../components/VideoPlayer'
import Options from '../components/Options'
import Notifications from '../components/Notifications'
import makeStyles from '@mui/material'
import { ContextProvider } from './SocketContext'

export default function Home() {
  return (
    <>
      <ContextProvider>
        <div className={styles.wrapper}>
          <AppBar className={styles.appBar} position="static" color='inherit'>
            <Typography variant="h2" align='center'>
              Video Chat App
            </Typography>
          </AppBar>
          <VideoPlayer />
          <Options >
            <Notifications />
          </Options>
        </div>
      </ContextProvider>
    </>
  )
}
