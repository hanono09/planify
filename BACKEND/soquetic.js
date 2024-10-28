import { onEvent, sendEvent, startServer } from "soquetic";

function darplan() {
    return {
        plan: "aguante boca"
    }
}

onEvent("planfavorito", darplan)

startServer()