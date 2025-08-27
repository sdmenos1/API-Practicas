
import { useGetCharacterFilterQuery} from '../app/services/api'
import { useState } from 'react';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import CharacterCard from './CharacterCard'
import { Filters } from './Filters';
import type { FilterType } from '../app/types/filterType';
export default function Card(){
    const [page, setPage] = useState<number>(1);
    const [filters,setFilters] = useState<FilterType>({});
    const {data,error,isLoading} = useGetCharacterFilterQuery({page , ...filters});
    const handlePage = (_event: React.ChangeEvent<unknown>, newPage: number) => setPage(newPage);
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading characters</p>
    return(
        <>
        <Filters onChange={(filters) => setFilters(filters)}/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 w-3/4">
            {data?.results?.map((item : any) => (
                    <CharacterCard key={item.id} item={item}/>
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