import Head from 'next/head'
import { useRouter } from 'next/router';
import { Container, Grid, Card, Col, Text, Position } from "@nextui-org/react";
import WikiRealms from '../../WikiRealms.json';
import LinksCard from '../../components/LinksCard.jsx';

export default function RealmPage() {
  const router = useRouter();
  const { realmId } = router.query;

  // Find the realm with the matching ID
  const realm = WikiRealms.realms.find((realm) => realm['realm-id'] === Number(realmId));

  // Define the style for the Text component that contains the realm name
  const realmNameStyle = {
    height: "300px",
    width: "100%",
    Position: "absolute",
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    backgroundImage: `url(${realm?.['realm-header-image']})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundWidth: "100%",
    backgroundWrap: "no-wrap",
    color: "#fff",
    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
  };



  // Render the appropriate components based on the realm data
  return (
    <>
      <Head>
        <title>{realm?.['realm-name']}</title>
      </Head>

      <Container justify="center" css={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2rem" }}>

        <Text size={45} weight="bold" style={realmNameStyle}>
          {realm?.['realm-name']}
        </Text>

        <Text size={30} weight="bold" css={{ marginTop: "2rem" }}>
          Other Links
        </Text>


        <Grid.Container gap={4} justify="center">
          <Grid>
            {realm && <LinksCard title={"Settings"} links={realm.settings} />}
          </Grid>
          <Grid>
            {realm && <LinksCard title={"Characters"} links={realm.characters} />}
          </Grid>
          <Grid>
            {realm && <LinksCard title={"Plot Points"} links={realm['plot-arcs']} />}
          </Grid>
        </Grid.Container>

        <div style={{ marginTop: "auto" }}></div>

      </Container>
    </>
  );
}
