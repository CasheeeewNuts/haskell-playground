import {useMemo, useRef} from "react";
import {Terminal} from "xterm";
import {useMount} from "./useMount";

export function useTerminal() {
    const terminal = useMemo(() => {
        const terminal = new Terminal()

        terminal.onKey(key => {
            switch (key.key) {
                case "Backspace":
                    console.log(1)
                    console.log(key.domEvent.key)

                    return terminal.write("\b")
                default:
                    terminal.write(key.domEvent.key)
            }
        })

        return terminal
    }, [])
    const terminalRef = useRef()

    useMount(() => {
        if (terminalRef.current) {
            terminal.open(terminalRef.current)
        }

        return () => {
            console.log("disposed")
            terminal.dispose()
        }
    })

    return {
        terminal,
        terminalRef
    }
}