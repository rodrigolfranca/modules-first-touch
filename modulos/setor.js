const clientes = require('./clientes');

module.exports = function(setor) {
    return clientes.filter(cliente => cliente.setor === setor)
} 