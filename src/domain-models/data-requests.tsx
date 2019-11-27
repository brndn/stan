import {get, resolveCacheOrGet, DATA_TYPES} from '../utils/http-async-await';

export const FILTER_TYPES = {
    SERIES: "series",
    MOVIES: "movie",
};

export const TITLES_URL = 'http://localhost:5000/feed/sample.json';

export async function getDataByProgramType(type) {
    let response : any = await resolveCacheOrGet(TITLES_URL, DATA_TYPES.JSON);

    const ret = new Set();

    for (const item of response.entries) {
        if ((item.programType as string) == type && (item.releaseYear as number) >= 2010) {
            ret.add(item);
        }
    }
    return Promise.resolve(ret);
}


async function loadImage(str:string){
    let response : any = await fetch(str);
    let responseBlob : any = await response.blob();
    return str;
}


export async function downloadImageData() {
    let response : any = await resolveCacheOrGet(TITLES_URL, DATA_TYPES.JSON);
    console.log(response);

    const ret = new Set();
    const prommiseArray : any = [];
    for (const item of response.entries) {
        if ((item.releaseYear as number) >= 2010) {
            ret.add(item);
            prommiseArray.push(
                loadImage(item.images["Poster Art"].url).then(data => {
                    item.srcPath = item.images["Poster Art"].url;
                })
            );
        }
    }
    await Promise.all(prommiseArray);
    return Promise.resolve(ret);
}