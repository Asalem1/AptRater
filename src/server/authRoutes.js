import express from 'express';
import passport from 'passport';
import config from '../config';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/login/facebook',
  passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false }),
);
router.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
  (req, res) => {
    console.log('here is the FB req: ', req)
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.json({ user: req.user })
    res.redirect('/');
  },
);

router.get('/login/google',
  passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
    ], session: false }
  )
);
router.get('/login/google/return',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const user = {
      id: req.user.id,
      email: req.user.email,
    };
    console.log('GOOGLE REQ: ', req);
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.json({ user: req.user })
    res.redirect('/');
  },
);

// router.get('/logged-in', userController.ensureAuthenticated, userController.getAuthUser);
// router.get('/logout', userController.logout);

export default router;