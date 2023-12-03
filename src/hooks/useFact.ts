import { useEffect, useState } from "react";
import { getALLFact } from "../services/fact";


export  const useFact = () =>{
  
    const [fact, setFact] = useState<string>();

    const refreshFact = () => {

        getALLFact().then(setFact);
    }

    //Para cargar la fact cuando se carga la pagina
    useEffect(refreshFact, []);

    return { fact, refreshFact };


  
}
