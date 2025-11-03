import axios from "axios";
import { useEffect } from "react";

function useGetPost() {
    const getPost = async () => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`)
        console.log(res);
    }

    useEffect(() => {
        getPost();
    }, []);
}

export default useGetPost;