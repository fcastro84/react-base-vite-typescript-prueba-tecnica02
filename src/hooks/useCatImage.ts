import { useEffect, useState } from "react";
import { fetchUrlImage } from "../services/imageUrl";

const URL_CAT_IMAGE= 'https://cataas.com/cat/';

export const useCatImage = ( { fact }:{ fact: string | undefined} )  =>{

    const [image, setImage] = useState<string>();

    //Para cargar la imagen del cat

        useEffect(() => {
            if(!fact) return

            const word = fact.split(' ', 3).join(' ').toString();
            
                fetchUrlImage(word)
                    .then(setImage)
            
        }, [fact]);

        return { urlImage: image && `${URL_CAT_IMAGE}${image}`}

 
}


