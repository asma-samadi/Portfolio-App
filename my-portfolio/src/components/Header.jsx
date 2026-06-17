import '../styles/about.css'

export default function Header({ message }) {
  return (
    <div className='header'>
      <h1>{message}</h1>
    </div>
  );
}
