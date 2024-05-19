// 'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {localAxios} from "@/apiConfig";
import MainLayout from '@/app/mainLayout'


export default async function About() {
    const {data} = await localAxios.get(`api/localStorage?section=about`)

    return (
        <MainLayout theme="--light">
            <>
                <div>About</div>
                {JSON.stringify(data)}
            </>
        </MainLayout>
    )
}