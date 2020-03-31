const userDao = require('../../daos/userDao/userDao');
const Content = require("../../models/Content");
const ContentClass = require("../../class/ContentClass");
const utils = require("../../utils/utils");

async function createNewContent(req, data, res) {
    // User validation
    if (await userDao.ifExistUserAccountById(data.contentUserId) > 0) {
        // TODO VALIDATE PASSION BY ID
        let photo = req.files && req.files.length > 0 ? req.files[0].path : "Add default photo content";
        let contentData = await Content(await ContentClass.createNewContent(data, photo))
        contentData.save()
            .then(response => {
                res.status(200).json({
                    success: true,
                    data: {
                        msg: "Content created with success",
                    },
                    code: 200
                })
            }).catch(err => utils.defaultError(res, err))
    } else {
        res.status(406).json({
            success: true,
            data: {
                msg: "This account does not exist"
            },
            code: 406
        })
    }
}

async function createNewContentWithContribution(req, data, res) {
    // User validation
    if (await userDao.ifExistUserAccountById(data.contentUserId) > 0) {
        // TODO VALIDATE PASSION BY ID
        let photo = req.files && req.files.length > 0 ? req.files[0].path : "Add default photo content";
        let content = await Content(await ContentClass.createNewContentWithContribution(data, photo))
        content.save()
            .then(response => {
                res.status(200).json({
                    success: true,
                    data: {
                        msg: "Content(Contribution) created with success",
                    },
                    code: 200
                })
            }).catch(err => utils.defaultError(res, err))
    } else {
        res.status(406).json({
            success: true,
            data: {
                msg: "This account does not exist"
            },
            code: 406
        })
    }
}


async function createNewContentWithWork(req, data, res) {
    // User validation
    if (await userDao.ifExistUserAccountById(data.contentUserId) > 0) {
        // TODO VALIDATE PASSION BY ID
        let photo = req.files && req.files.length > 0 ? req.files[0].path : "Add default photo content";
        let content = await Content(await ContentClass.createNewContentWithWork(data, photo))
        content.save()
            .then(response => {
                res.status(200).json({
                    success: true,
                    data: {
                        msg: "Content(Work) created with success",
                    },
                    code: 200
                })
            }).catch(err => utils.defaultError(res, err))
    } else {
        res.status(406).json({
            success: true,
            data: {
                msg: "This account does not exist"
            },
            code: 406
        })
    }
}

async function createNewContentWithReaction(req, data, res) {
    console.log('recived data', data.userId);
    // User validation
    const user = await userDao.getUserById(data.userId);
    if (user != null) {
        // TODO validation of content type 
        let photo = req.files && req.files.length > 0 ? req.files[0].path : "";
        let content = await Content(await ContentClass.createNewContentWithReaction(data, photo))
        content.save()
            .then(response => {
                res.status(200).json({
                    success: true,
                    data: {
                        msg: "Content(Reaction) created with success",
                    },
                    code: 200
                })
            }).catch(err => utils.defaultError(res, err))
    } else {
        res.status(406).json({
            success: true,
            data: {
                msg: "This account does not exist"
            },
            code: 406
        })
    }
}


async function createNewContentWithPromotion(req, data, res) {
    // User validation
    if (await userDao.getUserById(data.userId) != null) {
        // TODO validation of content type 
        let content = await Content(await ContentClass.createNewContentWithPromotion(data))
        content.save()
            .then(response => {
                res.status(200).json({
                    success: true,
                    data: {
                        msg: "Content(Promotion) created with success",
                    },
                    code: 200
                })
            }).catch(err => utils.defaultError(res, err))
    } else {
        res.status(406).json({
            success: true,
            data: {
                msg: "This account does not exist"
            },
            code: 406
        })
    }
}


module.exports = {
    createNewContent,
    createNewContentWithContribution,
    createNewContentWithWork,
    createNewContentWithReaction,
    createNewContentWithPromotion
}