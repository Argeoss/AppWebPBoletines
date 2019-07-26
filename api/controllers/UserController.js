/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    new: function(req, res) {
        console.log('Entre al formulario SingUp');
        res.view();
    },
    create: function(req, res) {
        var userObj = {
            name: req.param('name'),
            username: req.param('username'),
            email: req.param('email'),
            password: req.param('password'),
        }
        User.create(userObj, function(err, user) {
            if (err) {
                console.log('ocurrio un error al grbar los registros');
                return res.redirect('User/new');
            }
            res.redirect('/User/sho/' + user.id)
        });
    },
    sho: function(req, res, next) {
        user.findOne(req.param('id'), function BoletinFounded(err, User) {
            if (err)
                return next(err);
            res.view({ user: User });
        });
    }

};