import Head from 'next/head'
import { useRouter } from 'next/router';
import WikiRealms from '../WikiRealms.json';

export default function RealmPage() {
  const router = useRouter();
  const { realmId } = router.query;

  // Find the realm with the matching ID
  const realm = WikiRealms.realms.find((realm) => realm['realm-id'] === Number(realmId));

  // Render the appropriate components based on the realm data
  return (
    <>
      <Head>
        <title>{realm?.['realm-name']}</title>
      </Head>


      <h1>{realm?.['realm-name']}</h1>

      <h2>Settings:</h2>
      <ul>
        {realm?.settings.map((setting) => (
          <li key={setting['setting-id']}>{setting['setting-name']}</li>
        ))}
      </ul>

      <h2>Characters:</h2>
      <ul>
        {realm?.characters.map((character) => (
          <li key={character['character-id']}>
            {character['character-fname']} {character['character-lname']}
          </li>
        ))}
      </ul>

      <h2>Plot Arcs:</h2>
      <ul>
        {realm?.['plot-arcs'].map((plotArc) => (
          <li key={plotArc['plot-arc-id']}>{plotArc['plot-arc-name']}</li>
        ))}
      </ul>
    </>
  );
}
