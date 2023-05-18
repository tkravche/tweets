import UserCard from '../UserCard/UserCard';
import { StyledUserList } from './UserList.styled';

const UserList = ({usersToShow}) => {
  
  return (
    <StyledUserList>
      {usersToShow && (
        <>
          {usersToShow?.map(user => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </>
      )}
    </StyledUserList>
  );
};

export default UserList;
