const User = require("../Model/user");

exports.registrationController = (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    emailId,
    contactNumber,
    dateOfBirth,
    password,
    confirmPassword,
    programmingSkills,
    gender,
    country,
    state,
    city,
    address,
    qualification,
  } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    emailId: emailId,
    contactNumber: contactNumber,
    dateOfBirth: dateOfBirth,
    password: password,
    confirmPassword: confirmPassword,
    programmingSkills: programmingSkills,
    gender: gender,
    country: country,
    state: state,
    city: city,
    address: address,
    qualification: qualification,
  });
  User.findOne({ emailId: emailId }).then((result) => {
    if (!result) {
      user.save();
      res.status(202).json({ message: "data added successfully!" });
    } else {
      res.status(404).json({ message: "Email Id already exist!" });
    }
  });
};

exports.loginController = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ $and: [{ emailId: email }, { password: password }] }).then(
    (result) => {
      if (result != null) {
        res.status(202).json({ message: "User found!" });
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    }
  );
};
