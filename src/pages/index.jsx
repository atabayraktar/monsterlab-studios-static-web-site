import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import { useLocomotiveScroll } from "../hooks/useLocomotiveScroll";

export default function Home() {
  useLocomotiveScroll();
  return (
    <>
      <Head>
        <title>Monster Lab | Boo Busters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-scroll-container>
        <Header />
        <div className="page-wrapper">
          <div className="steam" data-scroll-section>
            <img src="/images/steam-temp.png" data-scroll />
          </div>
          <div className="discord" data-scroll-section>
            <img src="/images/discord.webp" data-scroll />
            <img src="/images/more-info.webp" data-scroll />
          </div>
          <div className="game-info" data-scroll-section>
            <div className="text" data-scroll>
              Boo Busters is a multiplayer simulation - action game. Are you
              ready for a chilling quest? Join a team of Ghost Hunters and
              embark on a journey that will test your courage in a world filled
              with dark forces.
              <br />
              <br />
              Your mission is to explore dangerous territories where ghosts
              reign and hunt them down. Alongside your friends, you will
              encounter thrilling adventures, brimming with suspense, as you
              track supernatural entities.
            </div>
          </div>
          <div data-scroll-section>
            <iframe
              data-scroll
              width="630"
              height="350"
              src="https://www.youtube.com/embed/e9ASqhs9770?autoplay=1&mute=1&enablejsapi=1"
              allowFullScreen
            />
          </div>
          <div className="press-kit" data-scroll-section>
            <img src="/images/Press-kit.webp" data-scroll />
          </div>
        </div>
        <div className="team-wrapper" data-scroll-section>
          <div className="team" data-scroll>
            <TeamCard
              img="/images/team/Ekin.svg"
              name="Ekin Nohutçu"
              title="Game Developer"
            />
            <TeamCard
              img="/images/team/Mustafa.svg"
              name="Mustafa Aydoğan"
              title="Lead Environment Artist"
            />
            <TeamCard
              img="/images/team/Eren.svg"
              name="Eren Ünal"
              title="Technical Artist"
            />
            <TeamCard
              img="/images/team/Batu.svg"
              name="Batu Tozan"
              title="Lead Character Artist"
            />
            <TeamCard
              img="/images/team/Ismail.svg"
              name="İsmail Ak"
              title="Game Developer"
            />
            <TeamCard
              img="/images/team/Buse.svg"
              name="Buse Ergun"
              title="Environment Artist"
            />
            <TeamCard
              img="/images/team/Cem.svg"
              name="Cem Aslaner"
              title="Concept Artist"
            />
            <TeamCard
              img="/images/team/Sinan.svg"
              name="Sinan Berkup"
              title="Character Artist"
            />
            <TeamCard
              img="/images/team/Ulas.svg"
              name="Ulaş Erdemir"
              title="UI Artist"
            />
            <TeamCard
              img="/images/team/Ata.svg"
              name="Ata Bayraktar"
              title="Front-End Developer"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
