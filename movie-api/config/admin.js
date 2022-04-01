module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd0fa42d17fa1030ce5a37edfda738fce'),
  },
});
