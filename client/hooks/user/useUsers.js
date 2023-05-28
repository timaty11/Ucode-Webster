import { useQuery } from 'react-query';
import { UsersService } from '../../services/users.service.js';

const useUsers = () => {
  const { isLoading, data: users } = useQuery('users', () => UsersService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, users };
};

export { useUsers };
