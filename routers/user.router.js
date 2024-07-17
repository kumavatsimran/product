const { Router } = require("express");
const {
  home,
  signup,
  update,
  deletedata,
  indexPage,
  signupPage,
  login,
  loginPage,
  logout,
  local,
  profile,
  changepassword,
  resetPassword,
  verifyOTP,
  password,
  tablepage,
} = require("../controllers/user.controller");
const { userAuth, isAuth, localAuth } = require("../middleware/user.Auth");
const passport = require("passport");
const router = Router();

router.get("/", isAuth, indexPage);
router.get("/data", home);
router.get("/tables", tablepage);
router.post("/signup", userAuth, signup);
router.get("/signup", signupPage);

router.patch("/update/:id", update);
router.delete("/delete/:id", deletedata);

router.post("/login", login);
router.get("/login", loginPage);

router.get("/logout", logout);


router.post(
  "/local",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get('/profile',isAuth,profile);
router.get('/changepassword',isAuth,changepassword)
router.post('/changepassword',isAuth,password)

router.post('/forget',resetPassword)

router.post('/verify',verifyOTP)

module.exports = { router };
