<script>
    import {onMount} from "svelte";
    import {Terminal} from "xterm";
    import "xterm/css/xterm.css"

    const terminal = new Terminal()
    let terminalRef = null

    onMount(() => {
        if (terminalRef) {
            terminal.open(terminalRef)
        }
    })
</script>

<div bind:this={terminalRef} class=""></div>