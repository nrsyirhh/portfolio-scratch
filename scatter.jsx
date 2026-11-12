import './Scatter.css';
const buttons = [
  { id: 1, img: '/icons/project.png', top: '10%', left: '15%', target: 'projects' },
  { id: 2, img: '/icons/award.png',   top: '40%', left: '70%', target: 'achievements' },
  { id: 3, img: '/icons/about.png',   top: '70%', left: '30%', target: 'about' },
];

export default function Scatter() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scatter">
      {buttons.map((b) => (
        <button
          key={b.id}
          className="img-btn"
          style={{ top: b.top, left: b.left }}
          onClick={() => goTo(b.target)}
        >
          <img src={b.img} alt={b.target} />
        </button>
      ))}
    </div>
  );
}