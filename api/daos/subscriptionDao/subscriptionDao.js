const Subscription = require('../../models/Subscription');
const userDao = require('../userDao/userDao');

const mongoose = require('mongoose');


const createSubscription = async (data, res) => {
    const result = {
        error: '',
        isSaved: false,
    };

    try {
        const users = await userDao.getUsersShortInfo([data.userId, data.subscribeToUserId]);
        if (users.length == 2) {
            const isSubscriptionAlreadyExists = await Subscription.exists({ user: data.userId, subscribeToUserId: data.subscribeToUserId });
            if (!isSubscriptionAlreadyExists) {
                const sub = new Subscription({
                    _id: new mongoose.Types.ObjectId,
                    user: data.userId,
                    subscribeToUserId: data.subscribeToUserId,
                });

                const saved = await sub.save();
                if (saved._id) {
                    result.isSaved = true;
                }
            } else {
                result.error = 'Subscription already exists';
            }

        } else {
            result.error = 'Invalid userIds';
        }
    } catch (error) {
        console.log('createSubscription Err ', error);
        result.error = 'Internal Server occured, while creating subscription';
    }
    return result;
}

const getListOfSubscibers = async (userId) => {
    const result = {
        errors: [],
        data: [],
    }

    try {
        const user = await userDao.getUserById(userId);
        if (user != null) {
            const subscriberIds = await Subscription.find({ user: userId }, { _id: 0, subscribedBy: 1 });
            if (subscriberIds.length) {
                result.data = await userDao.getUsersShortInfo(subscriberIds.map(s => s.subscribedBy));
            }
        } else {
            result.errors.push('User not found');
        }
    } catch (error) {
        console.log('getListOfSubscibers: Err', error);
        result.errors.push('Internal server occured');
    }

    return result;
}
module.exports = {
    createSubscription,
    getListOfSubscibers,
}