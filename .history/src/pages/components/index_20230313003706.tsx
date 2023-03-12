import person from '../../assets/person.png';
import React, { useState } from 'react';
import './index.less';
export default function CouponBanner() {
  return (
    <div>
      <div className="couponBanner">
      <img src={person} width="388" />
        <div className="left-info">
          <div className="left-info-text">
            <div>Eniny now your</div>
            <div>favorite brands with</div>
          </div>
          <div className="right-info-number">30% off</div>
        </div>
        <div className="right-info">
          <div className="right-info-number">
            <div>30%</div>
            <div>off</div>
          </div>
          <div className="right-info-text">
            <div className="right-text-header">Welcome Coupon</div>
            <div className="right-detail">
              <div>Aplicable to all Items</div>
              <div>Min.order 10$ Valid 30 days from now</div>
            </div>
            <div className='right-button'>Lo quiero</div>
          </div>
        </div>
      </div>
    </div>
  );
}
