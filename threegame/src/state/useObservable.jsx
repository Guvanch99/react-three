import {useRef} from "react";
import constate from "constate";
const useObservable=()=>{
    const girlRef=useRef()

    return girlRef
}

export const [ObservableProvider, useObservableContext] = constate(useObservable);
