// --- Callbacks ---
function prepararIngredientes(callback) {
    console.log("1. Pelando y picando los ingredientes...");
    setTimeout(() => {
        console.log("2. Ingredientes listos.");
        callback();
    }, 2000);
}

function cocinarCarne(callback) {
    console.log("3. Cocinando la carne...");
    setTimeout(() => {
        console.log("4. Carne cocida.");
        callback();
    }, 3000);
}

// --- Promesas ---
function agregarVerduras() {
    return new Promise((resolve) => {
        console.log("5. Agregando verduras al caldo...");
        setTimeout(() => {
            console.log("6. Verduras cocidas.");
            resolve();
        }, 2500);
    });
}

function sazonarSancocho() {
    return new Promise((resolve) => {
        console.log("7. Sazonando el sancocho...");
        setTimeout(() => {
            console.log("8. Sancocho sazonado.");
            resolve();
        }, 1500);
    });
}

// --- Async/Await ---
async function servirSancocho() {
    console.log("9. Sirviendo el sancocho...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("10. ¡Sancocho servido! ¡Buen provecho!");
}

// --- Ejecutar todo ---
function hacerSancocho() {
    prepararIngredientes(() => {
        cocinarCarne(() => {
            agregarVerduras()
                .then(() => sazonarSancocho())
                .then(() => servirSancocho());
        });
    });
}

// Iniciar el proceso
hacerSancocho();