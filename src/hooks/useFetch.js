import React,{useState,useCallback,useEffect} from 'react'

const useFetch=(url)=>{
  const [loading,setLoading]=useState(true);
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  const ApiCall=useCallback(async ()=>{
    setLoading(true);
    setError(false);
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("Error");
    }
    const result=await response.json();
  setData(result);
   
}
    
    catch(err){
        setError(err.message);
    }
    finally{
        setLoading(false);
    }
},[url])

useEffect(() => {
    ApiCall()
  }, [ApiCall]);
  return {loading,data,error};
}



export default useFetch