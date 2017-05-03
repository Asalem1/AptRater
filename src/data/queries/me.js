import UserType from '../types/UserType';

const me = {
  type: UserType,
  description: 'In the Me query',
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      email: request.user.email,
    };
  },
};

export default me;
