import Image from 'next/image'
import styles from './page.module.css'
import MainLayout from '@/app/mainLayout'
import Desktop from "@/components/Pages/Contacts/Desktop";
import {localAxios} from "@/apiConfig";

export default async function Contacts() {
    const {data} = await localAxios.get(`api/localStorage?section=contacts`)
      return (
          <MainLayout theme="--dark">
                <Desktop value={data}/>
          </MainLayout>
      )
}
