const {
    // signUp,
    inviteAdmin,
    signInUser,
    requestResetPassword,
    resetPassword,
    signInAdmin,
    signUpAdmin
  } = require("../services/auth.service");
  
  const signUpController = async (req, res, next) => {
    const signUpService = await signUp(req.body);
    return res.json(signUpService);
  };

  const inviteComtrollerAdmin = async(req,res,next)=>{
    const {email,role} = req.body
    const inviteService = await inviteAdmin(email,role)
    return res.json(inviteService)
  }

  const signUpControllerAdmin = async (req, res, next) => {
    // const signUpService = await signUpAdmin(req.body);
    const {token,email,name,password} = req.body

    const signUpService = await signUpAdmin(token,email,name,password)
    return res.json(signUpService);
  };
  
  const signInControllerUser = async (req, res, next) => {
      const { email, password } = req.body
      const signInService = await signInUser(email, password)
      return res.json(signInService)
  }

  const signInControllerAdmin = async (req, res, next) => {
    const { email, password } = req.body
    console.log( email+"----"+ password )
    const signInService = await signInAdmin(email, password)
    return res.json(signInService)
}
  
  const resetPasswordRequestController = async (req, res, next) => {
      const re = await requestResetPassword(req.body.email)
      console.log(re);
  
      return res.json({ message: "Please check your email for verification"})
  }
  
  const resetPasswordController = async (req, res, next) => {
      const { userId, token, password } = req.body
      const resetPasswordService = await resetPassword(userId, token, password)
      return res.json(resetPasswordService)
  }
  
  module.exports = {
    signUpController,
    signInControllerUser,
    inviteComtrollerAdmin,
    resetPasswordRequestController,
    resetPasswordController,
    signInControllerAdmin,
    signUpControllerAdmin
  };
  