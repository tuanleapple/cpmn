import Header from './components/Header'
import React, { useState } from 'react'
const printer = () => {
  return(
    <>
    <Header></Header>
    <div className='ct-page'>
        <div className='title'>THÔNG TIN CÁ NHÂN</div>
        <div className='content'>
            <div className='profile_code'>Họ và tên: <span>Nguyễn Lễ Văn A</span></div>
            <div className='profile_code'>Mstv: <span>12345678</span></div>
            <div className='profile_code'>Khoa: <span>Khoa học và Kỹ thuật Máy tính</span></div>
            <div className='profile_code'>Khoá: <span>2019</span></div>
            <div className='profile_code'>Số trang in khả dụng: <span>100</span></div>
            <div className='profile_code'>Số trang in màu khả dụng: <span>100</span></div>
            <div className='profile_code'>Số trang đã in: <span>1500</span></div>
            <div className='profile_code'>Số tài liệu đã in: <span>50</span></div>
            <div className='profile_code'>Danh hiệu: <span>Thành viên Bạc</span></div>
        </div>
    </div>
    </>
  ); 
};
export default printer;