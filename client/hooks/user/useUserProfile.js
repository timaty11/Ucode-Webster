import { useQuery } from 'react-query';
import { UsersService } from '../../services/users.service.js';

const useUserProfile = () => {
  const { isLoading, data: userInfo, isError } = useQuery('user-profile', () => UsersService.getInfoUser(), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data,
  });
  return { isLoading, userInfo, isError };
};

export { useUserProfile };
