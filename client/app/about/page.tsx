// 'use client'
import Image from 'next/image'
import styles from './page.module.css'
import axios from "axios";
import MainLayout from '@/app/mainLayout'


export default async function About() {
    const data = await axios.get(`http://localhost:3000/api/localStorage?section=asd`)

    return (
        <MainLayout theme="--light">
            <>
                <div>About</div>
                {JSON.stringify(data.data)}
            </>
        </MainLayout>
    )
}