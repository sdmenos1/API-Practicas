
import { useGetCharacterByPageQuery} from '../app/services/api'
import { useState } from 'react';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
export default function Card(){
    const [page, setPage] = useState(1);
    const {data,error,isLoading} = useGetCharacterByPageQuery(page);
    const handlePage = (_event: React.ChangeEvent<unknown>, newPage: number) => setPage(newPage);
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading characters</p>
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 w-3/4">
            {data?.results?.map((item : any) => (
                    <div key={item.id} className="border-black border rounded-lg gap-3 flex flex-col transform hover:scale-105 transition duration-300 ease-in-out pb-6 w-3/4">
                        <img src={item.image} alt={item.name} className="rounded-lg w-full h-64 object-cover"/>
                        <div className="flex flex-col px-3">
                            <h2 className="text-lg font-bold text-black text-start">{item.name}</h2>
                            <p className="text-xs text-gray-700 pb-1">{item.species}</p>
                            <div className="flex gap-2">
                                <div className="flex bg-green-700 rounded-full w-10 h-7">
                                    <p className="text-sm text-white p-[0.5rem] font-bold text-[10px] relative bottom-[1px]">{item.status}</p>
                                </div>
                                <div className="flex border border-black rounded-full w-13 h-7 items-center justify-center">
                                    <p className="text-sm text-black p-[0.5rem] font-bold text-[10px] ">{item.gender}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">origin {item.origin.name}</p>
                            <p className="text-sm text-gray-500">location {item.location.name}</p>
                        </div>
                    </div>
            ))}
        </div>
        <div className="w-full flex justify-center p-6">
            <Stack spacing={2}>
            <Pagination count={data?.info?.pages || 1} page={page} color="primary" onChange={handlePage} />
            </Stack>
        </div>
        </>
    )
}