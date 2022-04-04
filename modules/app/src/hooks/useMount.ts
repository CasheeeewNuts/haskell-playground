import {EffectCallback, useEffect} from "react";

var c = 0
export function useMount(effect: EffectCallback) {
    useEffect(effect, [])
}