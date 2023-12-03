const URL_ENDPOINT_FACT = 'https://catfact.ninja/fact';

export const getALLFact = async (): Promise<string> =>  {
    
    const resp = await fetch(URL_ENDPOINT_FACT);
    const data = await resp.json();
    const { fact } = data;
    return fact
}
