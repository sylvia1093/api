const userDao = require('../../daos/userDao/userDao');
const contentDao = require('../../daos/contentDao/contentDao');

const getListOfUsersWhoDidReaction = async (contentId, res) => {
    let users = [];

    const reactions = await contentDao.getAllReactionContentByContentId(contentId);
    const userIds = reactions.map(r => r.user);
    if (userIds.length) {
        users = await userDao.getUsersShortInfo(userIds);
    }
    return res.status(200).json({
        success: true,
        data: users,
        code: 200,
    });
}


module.exports = {
    getListOfUsersWhoDidReaction,
};