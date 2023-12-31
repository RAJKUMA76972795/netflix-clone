import useSWR from '../node_modules/swr/core/dist/index.js'
import fetcher from '../lib/fetcher';

const useMovie = (id:string)=>{
    const {data , error , isLoading}= useSWR(id?`/api/movies/${id}`:null , fetcher,{
        revalidateIfStale :false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })

    return {
        data , error , isLoading
    }
}

export default useMovie;