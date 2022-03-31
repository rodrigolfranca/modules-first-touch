const clientes = require('./clientes');

module.exports = function() {
    return clientes.sort((atual, proximo) => atual.ramal - proximo.ramal);
}