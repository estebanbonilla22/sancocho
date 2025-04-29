function log(mensaje) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${mensaje}</p>`;
}

// --- Callbacks ---
function prepararIngredientes(callback) {
    log("1. 🧅 Pelando y picando los ingredientes...");
    setTimeout(() => {
        log("2. ✅ Ingredientes listos.");
        callback();
    }, 2000);
}

function cocinarCarne(callback) {
    log("3. 🍖 Cocinando la carne...");
    setTimeout(() => {
        log("4. ✅ Carne cocida.");
        callback();
    }, 3000);
}

// --- Promesas ---
function agregarVerduras() {
    log("5. 🥬 Agregando verduras al caldo...");
    return new Promise((resolve) => {
        setTimeout(() => {
            log("6. ✅ Verduras cocidas.");
            resolve();
        }, 2500);
    });
}

function sazonarSancocho() {
    log("7. 🧂 Sazonando el sancocho...");
    return new Promise((resolve) => {
        setTimeout(() => {
            log("8. ✅ Sancocho sazonado.");
            resolve();
        }, 1500);
    });
}

// --- Async/Await ---
async function servirSancocho() {
    log("9. 🍽️ Sirviendo el sancocho...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    log("10. 🎉 ¡Sancocho servido! ¡Buen provecho!");
}

// --- Ejecutar todo ---
function hacerSancocho() {
    document.getElementById("log").innerHTML = ""; // Limpiar log anterior
    prepararIngredientes(() => {
        cocinarCarne(() => {
            agregarVerduras()
                .then(() => sazonarSancocho())
                .then(() => servirSancocho());
        });
    });
}
