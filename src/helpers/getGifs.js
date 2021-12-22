export const getGifs = async (name) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=DIGqb8LtQigfjO6on47CtIk2IgAr9obJ&limit=10&q=${encodeURI(name)}`;
    const request = await fetch(url);
    const {data} = await request.json();
    const gifs = data.map( gif => {
        const maxLength = 20;
        const titleTrimmed = gif.title.length > maxLength ?
            gif.title.substring(0, maxLength - 3) + "..." :
            gif.title.substring(0, maxLength);
        return {
            id: gif.id,
            title: gif.title,
            titleTrimmed: titleTrimmed,
            thumb_url: gif.images?.fixed_width.webp,
            url: gif.images?.original.webp,
        }
    });
    return gifs;
}