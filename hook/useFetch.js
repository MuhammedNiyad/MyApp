import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = "37fb479560msh642e91f3824093fp1705c0jsnb59971dc1fc5";
// const rapidApiKey = ''

const useFetch = (endpoint, query)=>{
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        "X-RapidAPI-Key": rapidApiKey ,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request
                (options);
            
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
  
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isloading, error, refetch };

}

export default useFetch;