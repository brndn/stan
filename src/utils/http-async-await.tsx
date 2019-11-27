import http from 'http';
import {getEntry, cacheSet, cacheHas} from "../domain-models/volatile-cache";

export const DATA_TYPES = {
    JSON: "JSON",
    IMAGE_BASE_64_STRING: "IMAGE_BASE_64_STRING",
    IMAGE_BASE_64_BUFFER: "IMAGE_BASE_64_BUFFER"
};

function resolveDataType(body, type){
    switch(type) {
        case DATA_TYPES.JSON:
            return JSON.parse(body);
        case DATA_TYPES.IMAGE_BASE_64_BUFFER:
           return new Buffer(body, 'base64');
        case DATA_TYPES.IMAGE_BASE_64_STRING:
            return body.toString('base64')
    }
}

export async function get(url, type){
    return new Promise(function(resolve, reject) {
        http.get(url, function(res) {
            let body = '';
            res.on('data', function(chunk){
                body += chunk;
            });
            res.on('end', function(){
                resolve(resolveDataType(body, type) as any)
            });
        }).on('error', function(e){
            reject(e);
        });
    }).catch(e => console.error(e));
}

export async function resolveCacheOrGet(url, type){
    let has: boolean = cacheHas(url);
    let data: any = has ? await getEntry(url) :  await get(url, type);
    cacheSet(url, data);
    return data;
}

