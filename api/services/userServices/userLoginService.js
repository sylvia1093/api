const User = require('../../models/User');
const utils = require('../../utils/utils');
const AccessToken = require('../../class/accessTokenClass');
const verifyPwd = require('../../utils/passwordMatchVerification');

async function userLogin(userInfo, res) {
    const accessTokenDao = new AccessToken();

    User.find({
        "email": userInfo.email
    })
        .exec()
        .then(async userData => {
            if (userData.length === 0) {
                res.status(200).json({
                    success: true,
                    code: 406,
                    data: {
                        msg: "Account does not exists"
                    }
                })
            } else if (await verifyPwd.passwordMatchVerification(userInfo.password, userData[0].password)) {
                const token = await accessTokenDao.generateToken(userData[0].email, userData[0]._id);
                const accessTokenValue = await accessTokenDao.saveTokenAndGetAccessToken(token, userData[0]._id);
                const basedAccesstoken = await accessTokenDao.generateToken(accessTokenValue, userData[0]._id);
                console.log("userData :", userData);
                res.status(200).json({
                    success: true,
                    code: 200,
                    data: {
                        token: basedAccesstoken,
                        userId: userData[0]._id,
                        imageUrl: userData[0].profilePhoto,
                        fullname: userData[0].fullname,
                        passion: userData[0].passion,
                        dateOfCreation: userData[0].dateOfCreation
                    }
                })
            } else {
                res.status(200).json({
                    success: true,
                    code: 407,
                    data: {
                        msg: "Password and/or email is not correct"
                    }
                })

            }


        })
        .catch(err => utils.defaultError(res, err))
}

module.exports = {
    userLogin
}