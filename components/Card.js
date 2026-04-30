export default function Card({ title, value }) {
  return (
    <div style={{padding:20, border:"1px solid #ddd", marginBottom:10}}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}