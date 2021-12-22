import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = (name) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    })
    useEffect(()=>{
        getGifs(name)
            .then(gifs => {
                setState({
                    data: gifs,
                    loading: false,
                })
            })
    }, [name])
    return state;
}