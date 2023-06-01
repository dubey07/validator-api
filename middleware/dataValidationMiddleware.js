const validate = require("validate");


const validateData = (data) => {
  return validate(data, {
    name: {
      required: true,
      type: 'string'
    },
    email: {
      required: true,
      type: 'string',
      email: true
    }
  });
};


const dataValidationMiddleware = async (req,res,next) => {
    try {
        const data = req.body;
        const validationResult = validateData(data);
        console.log(data);
        console.log("middleware me aa gye");

        if (validationResult.isValid) {
          // Data is valid, move to the next middleware or route handler
          console.log("middleware me aagye");
          next();
        } else {
          // Data is invalid, return an error response
          const errors = validationResult.errors;
          res.status(400).json({ errors });
        }
        
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "middleware is not working"
      });
    }
};

module.exports = dataValidationMiddleware;
