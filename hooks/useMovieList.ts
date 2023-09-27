import useSWR from '../node_modules/swr/core/dist/index.js'
import fetcher from '../lib/fetcher';

const useMovieList = ()=>{
    const {data , error , isLoading}= useSWR("/api/movies" , fetcher,{
        revalidateIfStale :false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })

    return {
        data , error , isLoading
    }
}

export default useMovieList;