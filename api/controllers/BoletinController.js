/**
 * BoletinController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    ini: function(req, res) {
        console.log('Entre al formumlario de crearBoletin');
        res.view('Boletin/Crear');
    },
    vini: function(req, res) {
        console.log('Entre al formumlario de Inicio');
        res.view('Boletin/Inicio');
    },
    created: function(req, res) {


        var filename = req.file('Img').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images/')
        }, function(err, uploadedFiles) {
            if (err) return res.serverError(err);
            //return res.redirect('/Boletin/Inicio')

        });
        var userObjB = {
            Titulo: req.param('Titulo'),
            Descripcion: req.param('Descripcion'),
            Imag: '/assets/images/' + filename,
            like: 0
        }
        Boletin.create(userObjB, function(err, boletin) {
            if (err) {
                console.log('ocurrio un error al grbar los registros' + err);
                return res.redirect('/Boletin/show/' + boletin.id);

            }

        });

    },
    show: function(req, res, next) {
        Boletin.findOne(req.param('id'), function BoletinFounded(err, boletin) {
            if (err)
                return next(err);
            res.view({ boletin: boletin });
        });
    }
};