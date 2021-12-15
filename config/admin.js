module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '081e3287afc8397242c31ad2dee57b88'),
  },
});
