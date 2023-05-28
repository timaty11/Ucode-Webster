import { useQuery } from 'react-query';
import { UsersService } from '../../services/users.service.js';

const useUser = (id) => {
  const { isLoading, data: user } = useQuery(['user', id], () => UsersService.getById(id || ''), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data.values,
    enabled: !!id,
  });
  return { isLoading, user };
};

export { useUser };
