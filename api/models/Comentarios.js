/**
 * Comentarios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {


        id_boletin: {
            type: 'string',
            required: true
        },
        usuario: {
            type: 'string',
            required: true
        },
        Contenido: {
            type: 'string',
            required: true
        }
    },


};