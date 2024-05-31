import LikeButton from '@/app/like-button';
import Barchart from '@/app/bar'
 
function Header({ title }:any) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      {/* <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton /> */}
      <Barchart></Barchart>
    </div>
  );
}