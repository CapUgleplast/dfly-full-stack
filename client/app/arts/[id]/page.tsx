import styles from './page.module.css'
import Gallery from "@/components/Pages/Arts/wallGallery/Gallery";
import axios from "@/apiConfig.js";
import {router} from "next/client";
import {useRouter} from "next/router";
import MainLayout from '@/app/mainLayout'
export default async function Art({ params }: { params: { id: number } }, props: any) {

    const arts = await axios.get(`/api/arts/${params.id}`)
    return (
        <MainLayout theme="--light">
            <>
                <div>{arts.data.title}</div>
                <div>
                    {arts.data.content}
                </div>
            </>
        </MainLayout>
    )
}
