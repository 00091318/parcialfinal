const User = require('../models/users');
const userControllers = {};


userControllers.index = async function (req, res, next) {
    let users = await User.find();
    return res.status(200).json(users);
}

userControllers.findUser = async function (req, res, next) {
    let { id } = req.params;
    let user = await User.findById(id).catch(err => {
        return next(res);
    });
    return res.status(200).json(user);
}

userControllers.store = async function (req, res, next) {
    let user = new User();
    user.userName = req.body.user;
    user.rol = req.body.rol;

    try {
        await user.save();
        return res.status(200).json({ "message": "pokemon agregado con exito" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }

}

userControllers.update = async function (req, res, next) {
    let { id } = req.params;
    let user = {
        pokename: req.body.user,
        type: req.body.type,
        evolution:req.body.evolution,
        ability: req.body.ability,
        ability2: req.body.ability2
    }
    console.log(user);
    try {
        await User.update({ _id: id }, user);
        res.status(200).json({ "message": "pokemon actualizado con exito" });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }
}

userControllers.delete = async function (req, res, next) {
    let { id } = req.params;
    await User.remove({ _id: id });
    res.status(200).json({ "message": "pokemon Eliminado con exito" });
}


module.exports = userControllers;