const Group  = require('../models/group');
const User  = require('../models/user');
const Socket  = require('../models/socket');

exports.getGroupChats = (req,res) => {
    const senderId = req.params.senderId;
    const groupId = req.params.groupId;
    Group.find({ 'group._id': groupId}, (err, chats) => {
        if(err || !chats){
            return res.status(400).json({
                error: err
            });
        }
        res.json(chats);
    });
};

exports.getAllGroupsRn = (req, res) => {
    Group.find()
    .then(chats => {
        res.json(chats)
    })
    .catch(err => console.log(err));
};

exports.GroupsList = async (req,res) => {
    const senderId = req.params.senderId;
    let groupList = await User.findById(senderId, (err, user) => {
        if(err || !user){
            res.status(400).json({
                error: err
            })
        }
        res.json(data);

    })
    // let distinctChatList = [...new Set(chatList)]
    // User.find({ _id: { $in: distinctChatList } })
    // .select('name email created updated notificationToken')
    // .exec((err,data) => {
    //     if(err || !data){
    //         res.status(400).json({
    //             error: err
    //         })
    //     }
    //     res.json(data);
    // });
};

// exports.getOnlineUsers = (req,res) => {
//     Socket.find()
//     .select('user._id')
//     .exec((err, result) => {
//         if(err || !result){
//             return res.status(400).json({
//                 error: err
//             });
//         }
//         res.json(result);
//     });
// };