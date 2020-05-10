let userList = [{name: 'John'}, {name: 'Milly'}, {name: 'Tyler'}];
let message = '';

exports.getUsers = (req, res, next) => {
    const msg = message;
    message = '';
    res.render('pages/team/week02/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: userList,
        message: msg
    });
};

exports.postAddUser = (req, res, next) => {
    if (userList.find(user => user.name === req.body.name) === undefined)
        userList.push({name: req.body.name});
    else
        message = `User ${req.body.name} already exists!`;
    res.redirect('/ta02');
};

exports.postRemoveUser = (req, res, next) => {
    if (userList.find(user => user.name === req.body.name) === undefined)
        message = `Could not find user ${req.body.name}!`;
    else
        userList = userList.filter(item => item.name !== req.body.name);
    res.redirect('/ta02')
};