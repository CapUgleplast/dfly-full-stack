import type {Metadata, NextPageContext} from 'next'
import Header from '@/components/layout/main/Header/header'
import Footer from "@/components/layout/main/Footer/footer";
import {FC, useEffect, useState, cloneElement, ReactNode, ReactElement} from 'react'
import {inspect} from "util";
import styles from '@/components/layout/main/page.module.css'

export default function MainLayout({children, theme}: {children: React.ReactElement, theme: string}) {

    return (
        <body className={`${styles.body} ${styles[theme]}`}>
            <Header theme={theme}/>
                {children}
            <Footer/>
        </body>
    )
}
