export default function Header({ img, name, title }) {
  return (
    <div className="team-card">
      <img src={img} />
      <div className="name">{name}</div>
      <div className="name title">{title}</div>
    </div>
  );
}
