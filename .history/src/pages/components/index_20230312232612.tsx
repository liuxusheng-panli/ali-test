import yayJpg from '../assets/yay.jpg';
import React,{useState} from 'react';
import './index.less'
export default function CouponBanner() {
  return (
    <div>
      <div className='couponBanner'>
        <div className='left-info'>
            <div className='right-info-text'>
                <span>Eniny now your favorite brands with</span>
            </div>
            <div>
                30% off
            </div>
        </div>
        <div className='right-info'>
            
        </div>
      </div>
    </div>
  );
}
