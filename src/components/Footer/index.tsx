export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/images/logo2.webp" />
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/company/monsterlab-studios"
          target="_blank"
        >
          <img src="/images/social/linkedin.svg" />
        </a>
        <a href="https://twitter.com/monsterlabcorp/" target="_blank">
          <img src="/images/social/x.svg" />
        </a>
        <a href="https://www.instagram.com/monsterlab.studios/" target="_blank">
          <img src="/images/social/instagram.svg" />
        </a>
      </div>
      <div className="rights">
        © 2023 and Monsterlab Studios, Boo Busters. All rights reserved.
      </div>
    </footer>
  );
}
