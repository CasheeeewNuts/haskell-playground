import React from "react";
import {useTerminal} from "./hooks/useTerminal";

export const Terminal: React.VFC = () => {
    const {terminalRef} = useTerminal()

    return <div ref={terminalRef}/>
}
