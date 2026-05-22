export default function Panel({ title, text, bgimage,radius }) {
  return (
    <div 
      className="panel" 
      style={{ 
        backgroundImage: `url(${bgimage})`,
        minHeight: '1200px', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        borderRadius:radius,
      }}
    >
      <h2 className="panel-title">{title}</h2>
      <div className="panel-content">{text}</div>
    </div>
  );
}