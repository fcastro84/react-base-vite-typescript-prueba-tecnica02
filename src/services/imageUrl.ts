const URL_ENDPOINT_CAT_IMAGE= 'https://cataas.com/cat/says/';

export const fetchUrlImage = async ( word: string ): Promise<string> => {
    const resp = await fetch(`${URL_ENDPOINT_CAT_IMAGE}${word}?size=50&color=red&json=true`);
    
    const data = await resp.json();
    const { _id } = data;
    return _id;
}
