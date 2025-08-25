import { useFetch } from "@/hooks/useFetch"
export default async function card(api : string){
    const data= await useFetch(api)
    return(
        <div>
            
        </div>
    )
}