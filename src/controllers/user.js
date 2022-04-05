// import model here
const { user } = require('../../models');

exports.addUsers = async (req, res) => {
  const data = req.body;

  await user.create(data);

  res.send({
    status: 'success',
    message: 'Insert user data finished!',
  });
};
