import yayJpg from '../assets/yay.jpg';
import React,{useState} from 'react';
import CouponBanner from './components/index'

export default function HomePage() {
  const [num,setNum] = useState(0)
  return (
    <div>
      {/* 768px样式使用媒体查询，当屏幕宽度小于768的时候，css样式写适配余768的css */}
      <CouponBanner/>
    </div>
  );
}

// import yayJpg from '../assets/yay.jpg';
// import React,{useState} from 'react';

// export default function HomePage() {
//   const [num,setNum] = useState(0)
//   return (
//     <div>
//       <h2>Yay! Welcome to umi!</h2>
//       <p>
//         <img src={yayJpg} width="388" />
//       </p>
//       <p>
//         To get started, edit <code>pages/index.tsx</code> and save to reload.
//       </p>
//     </div>
//   );
// }
