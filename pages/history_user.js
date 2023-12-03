import Header from './components/Header'
import React, { useState } from 'react'
const printer = () => {
  return(
    <>
    <Header></Header>
    <div className='ct-page'>
        <div className='title'>LỊCH SỬ IN</div>
        <div className='content'>
            <div className='profile_code'>Mã hồ sơ: <span>PA001N450</span></div>
            <div className='profile_code'>Tên file: <span>FileDauTien.pdf</span></div>
            <div className='profile_code'>Thời gian đăng ký: <span>20/10/2023 3:15</span></div>
            <div className='profile_code'>MThời gian nhận: <span>20/10/2023 3:50</span></div>
            <div className='profile_code'>Số trang: <span>15</span></div>
            <div className='profile_code'>Số copy: <span>1</span></div>
            <div className='profile_code'>Tên máy in: <span>PrinterA001</span></div>
            <div className='profile_code'>Loại giấy: <span>A4</span></div>
            <div className='profile_code'>Đánh giá: <span>PA001N450</span></div>
            <div className='profile_code'>Mã hồ sơ: <span>PA001N450</span></div>
            <div className='profile_code'>Nhận xét: <span>Thêm nhận xét</span></div>
        </div>
        <div className='button-history'>
            <button type='button' className='prev'>Quay lại</button>
            <button type='button' className='next'>In lần nữa</button>
        </div>
    </div>
    </>
  ); 
};
export default printer;