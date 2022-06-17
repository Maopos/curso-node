const { handleError } = require("../utils/handleError");

/**
 * It takes a role as an argument, and returns a function that takes a request, response, and next as
 * arguments
 * @param role - This is an array of roles that are allowed to access the route.
 * @returns A function that takes in a role and returns a function that takes in a request, response,
 * and next.
 */
const checkRole = (role) => (req, res, next) => {
  try {
    const { user } = req;
    const userrole = user.role;

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
