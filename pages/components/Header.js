'use client';
import Image from 'next/image';
import Vector from "../../public/vector.svg"
import Text from "../../public/logoText.svg"
import LogoHeader from "../../public/logoheader.svg"
import Plus from "../../public/vector-plus.svg"
import Notification from "../../public/vector-no.svg"
import IconP from "../../public/people.svg"
import Navi from "./Menu"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
function IndexPage() {
  const router = useRouter();
  const [localStorageData, setLocalStorageData] = useState('');
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    const redirectTimer = setTimeout(() => {
        router.push('/login');
      }, 1000);
  }
  return (
    <>
    <div className="signUp">
      <div className="price">
        <Image
          priority
          className='logo-image'
          src={Vector}
          alt="truong bach khoa hcm"
        />
        <div className="price-font">100</div>
        <Image
          priority
          className='logo-image'
          src={Plus}
          alt="truong bach khoa hcm"
        />
      </div>
      <div className="price-2">
        <Image
          priority
          className='logo-image'
          src={Vector}
          alt="truong bach khoa hcm"
        />
        <div className="price-font">100</div>
        <Image
          priority
          className='logo-image'
          src={Plus}
          alt="truong bach khoa hcm"
        />
      </div>
      <Image
          priority
          className='logo-notifation'
          src={Notification}
          alt="truong bach khoa hcm"
        />
      <div className="text-signup" onClick={logout}>Đăng Xuất</div>
    </div>
    <div className="main-header">
        <div className="logo-header">
          <Image
            priority
            className='logo-image'
            src={LogoHeader}
            alt="truong bach khoa hcm"
          />
          <Image
            priority
            className='logo-image'
            src={Text}
            alt="truong bach khoa hcm"
          />
          <Image
            priority
            className='logo-people'
            src={IconP}
            alt="truong bach khoa hcm"
          />
        </div>
    </div>
    <Navi></Navi>
    </>
  )
}

export default IndexPage