import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifferApp() {
    const [queries, setQueries] = useState([]);

    return (
        <>
            <h1>Giffer</h1>
            <AddCategory setQueries={setQueries} />
            <hr />

            <ul>
                {queries.map((query) => (
                    <GifGrid key={query} name={query} />
                ))}
            </ul>
        </>
    );
}
