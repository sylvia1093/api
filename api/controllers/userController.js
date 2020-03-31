const userService = require('../services/userServices/index');

createNewAccount = (req, res, next) => {
    userService.createNewAccountService.addNewUser(req, req.body, res);
}

validateAccount = (req, res, next) => {
    userService.validateEmailAccount.validateEmailAccount(req.body.data, res);
}

isCodeValid = (req, res, next) => {
    userService.isCodeValidService.isCodeValid(req.body.data, res);
}

loginUser = (req, res, next) => {
    userService.userLoginService.userLogin(req.body.data, res);
}

const createNewSubscription = async (req, res, next) => {
    return userService.createSubscription(req.body.data, res);
}

const getListOfSubcribers = (req, res, next) => {
    return userService.getListOfSubscibers(req.params.userId, res);
}

const getUserInfo = (req, res, next) => {
    return userService.getUserInfo(req.params.userId, res);
}

const getListOfUsersWhoDidReaction = (req, res, next) => {
    return userService.getListOfUsersWhoDidReaction(req.params.contentId, res);
}

const getListOfUsersWhoDidPromotion = (req, res, next) => {
    return userService.getListOfUsersWhoDidPromotion(req.params.contentId, res);
}

module.exports = {
    createNewAccount,
    validateAccount,
    isCodeValid,
    loginUser,
    createNewSubscription,
    getListOfSubcribers,
    getUserInfo,
    getListOfUsersWhoDidReaction,
    getListOfUsersWhoDidPromotion,
}