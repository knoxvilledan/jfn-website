import Head from 'next/head';

function ComingSoonPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', textAlign: 'center', paddingTop: '20%' }}>
      <Head>
        <title>Coming Soon</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1>My Website</h1>
      <p>Coming soon...</p>
    </div>
  );
}

export default ComingSoonPage;
