import Desktop from '@/components/Pages/Manifest/Desktop'
import MainLayout from '@/app/mainLayout'
import {localAxios} from "@/apiConfig";
import axios from "axios";


export default async function Manifest() {
    const {data} = await localAxios.get(`api/localStorage?section=manifest`)

      return (
          <MainLayout theme="--light">
            <div>
                <Desktop title={data.title} description={data.description}/>
            </div>
          </MainLayout>
      )
}
