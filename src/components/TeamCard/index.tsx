interface TeamCardProps {
  img: string;
  name: string;
  title: string;
}
export default function Header({ img, name, title }: TeamCardProps) {
  return (
    <div className="team-card">
      <img src={img} />
      <div className="name">{name}</div>
      <div className="name title">{title}</div>
    </div>
  );
}
