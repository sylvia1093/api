const subscriptionDao = require('../../daos/subscriptionDao/subscriptionDao');

const createSubscription = async (data, res) => {
    const result = await subscriptionDao.createSubscription(data, res);

    if (result.isSaved) {
        return res.status(200).json({
            success: true,
            data: {
                msg: "Subscription created with success",
            },
            code: 200
        });
    }

    return res.status(500).json({
        success: false,
        error: {
            msg: result.error,
        },
        code: 500
    });


}

const getListOfSubscibers = async (userId, res) => {
    const result = await subscriptionDao.getListOfSubscibers(userId, res);
    if (result.data.length) {
        return res.status(200).json({
            success: true,
            data: result.data,
            code: 200
        })
    }

    return res.status(500).json({
        success: false,
        error: {
            msg: result.errors[0],
        },
        code: 500
    })

}

module.exports = {
    createSubscription,
    getListOfSubscibers
};