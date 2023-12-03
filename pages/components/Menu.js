import Link from "next/link";
import React, { useState, useEffect } from 'react';
const Navbar = () => {
  const [localStorageData, setLocalStorageData] = useState('');
  useEffect(() => {
    const current = localStorage.getItem('is_admin');
    if(current){
      setLocalStorageData(current)
   }
  }, []);
  const link_admin = [
    {
      id: 6,
      link: "Lịch Sử",
      slug: "history",
      is_admin: true
    },
  ]
  const links = [
    {
      id: 3,
      link: "Lịch Sử",
      slug: "history_user",
      is_admin: false
    },
    {
      id: 4,
      link: "Máy In",
      slug: "printer",
      is_admin: false
    },
    {
      id: 5,
      link: "Hồ sơ",
      slug: "profile",
      is_admin: false
    },
  ];
  if (localStorageData === '0') {
    console.log(localStorageData)
    return (
      <div className="menu-parent">
        <ul className="menu">
            {
              links.map(({ id, link, slug, is_admin }) => (
                <li
                  key={id}
                  className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                >
                  <div>{is_admin}</div>
                  <Link href={slug}>{link}</Link>
                </li>
              ))
          }
        </ul>
      </div>
    );
  } else {
    return (
      <div className="menu-parent">
        <ul className="menu">
            {
              link_admin.map(({ id, link, slug, is_admin }) => (
                <li
                  key={id}
                  className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                >
                  <div>{is_admin}</div>
                  <Link href={slug}>{link}</Link>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }

};
export default Navbar;