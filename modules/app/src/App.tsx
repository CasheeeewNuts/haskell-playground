import React from "react";
import Editor from "@monaco-editor/react";
import {Terminal} from "./Terminal";
import {useTheme} from "./hooks/useTheme";

export const App: React.VFC = () => {
    const {theme} = useTheme()

    return (
        <div style={{display: "flex"}}>
            <Editor
                theme={theme}
                height="100vh"
                width="50%"
                defaultLanguage="typescript"
                options={{
                    minimap: {
                        enabled: false
                    }
                }}
            />
            <Terminal/>
        </div>
    )
}