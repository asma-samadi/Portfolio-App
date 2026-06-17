import '../styles/hero.css'

export default function Header({ message }) {
  return (
    <div className='header'>
      <h2>{message}</h2>
    </div>
  );
}
