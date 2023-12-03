'use client';
import Image from 'next/image';
import Logo from "../public/logoLogin.svg"
import { FormEvent } from 'react'
import Google from "../public/download.png"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
function Login() {
    const router = useRouter();
    const [localStorageData, setLocalStorageData] = useState('');
    useEffect(() => {
        const storedData = localStorage.getItem('token');
        if (storedData) {
            setLocalStorageData(storedData);
        }
    }, []);
    function onSubmit(event) {
        event.preventDefault()
        const formData = new FormData()
        formData.append('password', event.target[1].value);
        formData.append('email', event.target[0].value);
        try {
            const res = fetch(process.env.NEXT_PUBLIC_API_URL + '/login', {
                method: 'POST',
                body: formData,
                headers: { "Access-Control-Allow-Origin": "*", 'Accept': 'application/json' }
            }).then((res) => {
                return res.json()
            }).then(function (json) {
                localStorage.setItem('token', json.authorisation.token);
                localStorage.setItem('is_admin', json.user.is_admin);
                console.log(json.user.is_admin)
                if (json.user.is_admin === 1) {
                    const redirectTimer = setTimeout(() => {
                        router.push('/history');
                    }, 1000);
                } else {
                    const redirectTimer = setTimeout(() => {
                        router.push('/history_user');
                    }, 1000);
                }
            }).catch((err) => alert(err.message))
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='logo'>
            <Image
            priority
            className='logo-image'
            src={Logo}
            alt="truong bach khoa hcm"
            />
        </div>
        <div className='form'>
            <form className='form-data' onSubmit={onSubmit}>
                <div className='text'>Username: </div>
                <input className='input-name' type="text" placeholder="Nhập Username"/>
                <div className='text'>Password: </div>
                <input className='input-name' type="password" placeholder="Nhập Password"/>
                <div className="buttons">
                    <button type="submit" className="login-button">Login in</button>
                </div>           
            </form>
        </div>
        </>
    )
}
export default Login