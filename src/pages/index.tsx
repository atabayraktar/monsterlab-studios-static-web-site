import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monster Lab | Boo Busters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="page-wrapper">
        <div className="steam">
          <img src="/images/steam-temp.webp" />
        </div>
        <div className="discord">
          <img src="/images/discord.webp" />
          <img src="/images/steam-more-info-temp.png" />
        </div>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/e9ASqhs9770"
        />
        <div className="press-kit">press kit img gelcek</div>
        <div className="about-us">ekin çok güzel askimmmmm benimmmmm</div>
      </div>
      <Footer />
    </>
  );
}
