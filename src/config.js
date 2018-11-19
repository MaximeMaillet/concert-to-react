export default {
  user: {
    roles: {
      user: {
        name: 'ROLE_USER',
        value: 1 << 1,
      },
      admin: {
        name: 'ROLE_ADMIN',
        value: 1 << 2,
      },
      superAdmin: {
        name: 'ROLE_SUPER_ADMIN',
        value: 1 << 3,
      }
    }
  }
};