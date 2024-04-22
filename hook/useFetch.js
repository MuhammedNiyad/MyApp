import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ()=>{
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
}