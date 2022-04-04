import {useRecoilState} from "recoil";
import {Theme} from "../recoil/atoms/theme";

export function useTheme() {
    const [theme, setTheme] = useRecoilState(Theme)

    const toggle = () => setTheme((current) => current == "light" ? "vs-dark" : "light")

    return {
        theme,
        toggle
    }
}