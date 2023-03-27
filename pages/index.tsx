import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import { Button } from '@mantine/core'
import { Grid, Card, Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useMediaQuery } from './useMediaQuery.js'
import { RealmCard } from '../components/RealmCard.jsx'
import { MantineRealmCard } from "../components/MantineRealmCard.jsx"
import WikiRealms from '../WikiRealms.json';
import Link from 'next/link'




const inter = Inter({ subsets: ['latin'] })



export default function Home()
{

  return (
    <>
      <Head>
        <title>Wiki Realms | Realms</title>
      </Head>



      <main className={styles.main}>

        <div className={styles.center}>
          <Text h1 color="secondary">Wiki Realms</Text>
        </div>

        {/* <div className={styles.center}>
          <Button color="secondary" ghost auto>Hello there!</Button>
        </div> */}

        <Grid.Container gap={4} justify="center">

          {WikiRealms.realms.map((realm) => (

              <Grid xs={12} sm={8} md={8} lg={8} key={realm['realm-id']} justify='center' >
                  <RealmCard realmId={realm['realm-id']} title={realm['realm-name']} imageUrl={realm['realm-header-image']} />
              </Grid>

          ))}

          {/* <Grid xs={12} md={10} lg={8} >
            <MantineRealmCard imageUrl="https://i.pinimg.com/564x/cd/94/4e/cd944edf167bff52e49bd24777e5bd15.jpg"/>
          </Grid> */}

        </Grid.Container>

      </main>
    </>
  );
}
