import React from "react";

export default function GifGridItem({ title, titleTrimmed, url, thumbnail }) {
    const changeImage = (e) => {
        if (e.target.src === thumbnail) {
            e.target.src = url;
            e.target.className="full-image";
        } else {
            e.target.src = thumbnail;
            e.target.className="thumbnail";
        }
    };
    return (
        <li className="card animate__animated animate__backInRight">
            <p>{titleTrimmed}</p> <br/>
            <img
            onClick={changeImage}
            src={thumbnail}
            alt={title} 
            className="thumbnail"
            title={title}
            />
        </li>
    );
}
