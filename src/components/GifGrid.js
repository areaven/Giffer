import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
export default function GifGrid({name}) {

    const {loading, data} = useFetchGifs(name);

    return (
        <>
        <h3 id="searchname">{name}</h3>
        { loading && <p>Loading...</p> }
        <div className="card-grid">
            {
                data.map(({id, title, titleTrimmed, thumb_url, url}) => (
                    <GifGridItem
                            key={id}
                            title={title}
                            thumbnail={thumb_url}
                            url={url}
                            titleTrimmed={titleTrimmed}
                            />)
                )
            }
        </div>
        </>
    )
}
