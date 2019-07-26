/**
 * Boletin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        Titulo: {
            type: 'string',
            required: true
        },
        Descripcion: {
            type: 'string',
            required: true
        },
        Imag: {
            type: 'string',
            required: true
        },
        like: {
            type: 'number'
        }
    },

};