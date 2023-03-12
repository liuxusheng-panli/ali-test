import yayJpg from '../assets/yay.jpg';
import React,{useState} from 'react';

export default function HomePage() {
  const [num,setNum] = useState(0)
  return (
    <div>
      <h2>{num}</h2>
    </div>
  );
}
