const { handleError } = require("../utils/handleError");

const checkRole = (role) => (req, res, next) => {
  try {
    const { user } = req;
    const userrole = user.role;
    console.log(userrole);

    const check = role.some((i) => userrole.includes(i));

    if (!check) {
      handleError(res, "Role Permission error...", 403);
      return;
    }

    next();
  } catch (error) {
    handleError(res, "Permission error...", 403);
  }
};

module.exports = checkRole;
