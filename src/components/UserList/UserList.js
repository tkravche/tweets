import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import { StyledUserList } from './UserList.styled';
import { selectFilter } from 'redux/usersSelectors';

const UserList = ({usersToShow}) => {
  const filterValue = useSelector(selectFilter);
  let usersFiltered = usersToShow;
  console.log(usersFiltered)
  console.log(filterValue)
 
  return (   
    <StyledUserList>
      {usersToShow && (
        <>
          {usersFiltered?.map(user => (
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
