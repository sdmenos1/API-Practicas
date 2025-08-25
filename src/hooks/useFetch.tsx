import { useState , useEffect, use } from "react";
export function useFetch(apiUrl : string){
    const [doc , setDoc]=useState<string[]>([]);
    useEffect(()=>{
        async function getInfo(){
            const response = await fetch(apiUrl)
            return response.json()
        }  
        getInfo() 
    },[doc])
}