const express = require('express')
const router = express.Router();

const { GroupsList, getAllGroupsRn, getGroupChats } = require('../controllers/group');

router.get('/group/:senderId/:recieverId', getGroupChats);
router.get('/group/chatlist/:senderId', GroupsList);

router.get('/group/rn/allchats',getAllGroupsRn)

module.exports = router;