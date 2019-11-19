export const data = require('./../feed/sample.json');
export const filterTypes = {
    SERIES: "series",
    MOVIES: "movie",
};

/**
 *@description fetch was used but hit local host issues loading the resource, in a effort to not spend too much time it seemed easier to require the resource directly.
 * @param type
 * @return {Promise<T>}
 */
export async function getDataByProgramType(type) {

    const ret = new Set();
    for (const item of data.entries) {
        if ((item.programType as string) == type && (item.releaseYear as number) >= 2010) {
            ret.add(item);
        }
    }
    /**
     * @description simulate loading from a cdn.
     */
    return new Promise(function(resolve) {
     resolve(ret);
    });
}
