import {atom} from "recoil";

export type Theme = "light" | "vs-dark"

export const Theme = atom<Theme>({
    key: "ThemeAtom",
    default: "vs-dark"
})