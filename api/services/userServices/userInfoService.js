const userDeo = require('../../daos/userDao/userDao');
const passionDeo = require('../../daos/passionDao/pasionDao');


const getUserInfo = async (userId, res) => {
    const user = await userDeo.getUserById(userId);

    if (user != null) {
        const passion = await passionDeo.getPassionById(user.passion);
        res.status(200).json({
            success: true,
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                fullname: user.fullname,
                email: user.email,
                profilePhoto: user.profilePhoto,
                passion: {
                    title: passion.passionTitle,
                    description: passion.passionDescription,
                    image: passion.passionImage,
                }
            },
            code: 200
        });
    }

    res.status(200).json({
        success: false,
        data: null,
        code: 404,
    })
}

module.exports = getUserInfo;