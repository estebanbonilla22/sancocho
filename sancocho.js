// Función para registrar mensajes en el log visual
function log(mensaje) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${mensaje}</p>`;
}

// Preparar ingredientes (callback)
function prepararIngredientes(callback) {
    try {
        log("1. 🧅 Pelando y picando los ingredientes...");
        setTimeout(() => {
            log("2. ✅ Ingredientes listos.");
            callback();
        }, 2000);
    } catch (error) {
        log(`❌ Error en prepararIngredientes: ${error.message}`);
    }
}

//  Cocinar carne (callback)
function cocinarCarne(callback) {
    try {
        log("3. 🍖 Cocinando la carne...");
        setTimeout(() => {
            log("4. ✅ Carne cocida.");
            callback();
        }, 3000);
    } catch (error) {
        log(`❌ Error en cocinarCarne: ${error.message}`);
    }
}

// --- Agregar verduras (promesa) ---
function agregarVerduras() {
    log("5. 🥬 Agregando verduras al caldo...");
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                log("6. ✅ Verduras cocidas.");
                resolve();
            }, 2500);
        } catch (error) {
            reject(new Error(`Error en agregarVerduras: ${error.message}`));
        }
    });
}

// Sazonar sancocho (aca es con promesa)
function sazonarSancocho() {
    log("7. 🧂 Sazonando el sancocho...");
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                log("8. ✅ Sancocho sazonado.");
                resolve();
            }, 1500);
        } catch (error) {
            reject(new Error(`Error en sazonarSancocho: ${error.message}`));
        }
    });
}

//  Servir sancocho (async/await)
async function servirSancocho() {
    try {
        log("9. 🍽️ Sirviendo el sancocho...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        log("10. 🎉 ¡Sancocho servido! ¡Buen provecho!");
    } catch (error) {
        log(`❌ Error en servirSancocho: ${error.message}`);
    }
}

// poner a que corra ya todo el proceso
function hacerSancocho() {
    document.getElementById("log").innerHTML = ""; // Limpiar el log anterior
    prepararIngredientes(() => {
        cocinarCarne(() => {
            agregarVerduras()
                .then(() => sazonarSancocho())
                .then(() => servirSancocho())
                .catch((error) => {
                    log(` Error en la preparación del sancocho: ${error.message}`);
                });
        });
    });
}