const clientes = require('./clientes');

module.exports = function(mes) {
    return clientes.filter(cliente => cliente.dtNascimento.split('/')[1] === mes)
} 