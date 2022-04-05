const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./../config/db');
const User = db.User;
const validator = require('validator');

const register = async (req, res, next) => {
    try{
        const {name, email, password, confirmPassword} = req.body;
        let errors = [];
        if(password !== confirmPassword){
            errors.push('Password not matched!');
        }
        if(!validator.isEmail(email)){
            errors.push('Invalid email!');
        }

        if(errors.length !== 0){
            return res.status(400).json({message: errors});
        }
        bcrypt.hash(password, 10, async (err, hashedPassword) => {
            if (err) {
                throw err;
            }
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (user) {
                errors.push('Email already exist!');
            }
            if(errors.length !== 0){
                return res.status(400).json({message: errors});
            }
            const newPassword = hashedPassword;
            const refreshToken = '';
            const status = false;
            const role = 1;
            const newUser = {
                name, email, password: newPassword, refreshToken, role, status
            }
            await User.create(newUser);
            res.json({message: "User successfully created!"});
        });
    }
    catch(err){
        res.status(400).json({message: err.toString()});
    }
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        let errors = [];
        if(!validator.isEmail(email)){
            errors.push('Invalid email!')
        }

        if(errors.length !== 0){
            return res.status(400).json({message: errors});
        }

        const user = await User.findOne({
            where: {
                email
            }
        })

        if(!user){
            throw 'User not found!';
        }

        const validPassword = await bcrypt.compare(password, user.dataValues.password);
        if (!validPassword) {
            const message = `User ${user.dataValues.name}, password does not matched!`;
            throw message;
        }
        const token = generateToken(user);
        const refreshToken = jwt.sign({ userID: user.dataValues.id, email: user.dataValues.email, name: user.dataValues.name }, process.env.REFRESH_TOKEN_KEY);
        await User.update(
            {
                refreshToken
            },
            {
                where: {
                    id: user.dataValues.id
                }
            }
        )

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({token});
    } catch (err) {
        res.status(400).json({message: [err.toString()]});
    }
}

const generateToken = (user) => {
    return jwt.sign({ userID: user.dataValues.id, email: user.dataValues.email, name: user.dataValues.name }, process.env.SECRET_KEY, { expiresIn: '20s' });
}

const getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'status', 'role', 'updatedAt', 'createdAt']
        });
        res.json(users);
    } catch (error) {
        res.status(400).json({message: [error.toString()]});
    }
}

const token = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401)
        const users = await User.findAll({
            where: {
                refreshToken: refreshToken
            }
        });
        if(!users[0]) return res.sendStatus(403);

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, decode) => {
            if(err) return res.sendStatus(403)
            const token = generateToken(users[0]);
            res.json({token});
        });

    } catch (error) {
        res.status(400).json({message: [error.toString()]});
    }
}

const logout = async (req, res,next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401)
        const users = await User.findAll({
            where: {
                refreshToken: refreshToken
            }
        });
        if(!users[0]) return res.sendStatus(403);
        const userID = users[0].id;
        await User.update({refreshToken: null},{
            where: {
                id: userID
            }
        });

        res.clearCookie('refreshToken');
        return res.json({message: 'User successfully logout!'})
    } catch (error) {
        res.status(400).json({message: [error.toString()]});
    }
}

const getUserByID = async (req, res, next) => {
    try {
        const userID = req.params.userID;
        const user = await User.findOne({
            where:{
                id: userID
            },
            attributes: ['id', 'name', 'email', 'status', 'role', 'updatedAt', 'createdAt']
        });
        if(!user){
            throw 'User not found!';
        }
        res.json(user);
        
    } catch (error) {
        res.status(400).json({message: [error.toString()]});
    }
}

const resetPassword = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).json({message: [error.toString()]});
    }
}

module.exports = {
    register,
    login,
    getUsers,
    token,
    logout,
    getUserByID
}