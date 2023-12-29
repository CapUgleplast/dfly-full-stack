'use client'

import {createContext} from "react";


export default function MainLayout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    )
}
