const validateEmailAccount = require('./validatAccoutSerice');
const isCodeValidService = require('./isCodeValidService')
const createNewAccountService = require("./createNewAccountService");
const userLoginService = require('./userLoginService');
const { createSubscription, getListOfSubscibers } = require('./subscriptionService');
const getUserInfo = require('./userInfoService');
const { getListOfUsersWhoDidPromotion } = require('./userPromotionService');
const { getListOfUsersWhoDidReaction } = require('./userReactionService');

module.exports = {
    userLoginService,
    createNewAccountService,
    validateEmailAccount,
    isCodeValidService,
    createSubscription,
    getListOfSubscibers,
    getUserInfo,
    getListOfUsersWhoDidPromotion,
    getListOfUsersWhoDidReaction,
}