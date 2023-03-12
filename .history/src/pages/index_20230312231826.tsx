import yayJpg from '../assets/yay.jpg';
import React,{useState} from 'react';
import CouponBanner from './components/index'

export default function HomePage() {
  const [num,setNum] = useState(0)
  return (
    <div>
      <CouponBanner/>
    </div>
  );
}
