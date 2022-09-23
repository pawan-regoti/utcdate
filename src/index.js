if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker && navigator.serviceWorker.register("./service-worker.js");
    });
}

window.onload = async () => {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById("utcDate").innerHTML = new Date().toUTCString();
    }
}
