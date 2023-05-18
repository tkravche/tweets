import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import { StyledUserList } from './UserList.styled';
import { selectFilter } from 'redux/usersSelectors';

const UserList = ({usersToShow}) => {
  const filterValue = useSelector(selectFilter);
  let usersFiltered = usersToShow;
  console.log(usersFiltered)
  console.log(filterValue)
  // if(filterValue === 'follow')
  // {usersFiltered = usersToShow.filter(user => user.isFollowing === false)}
  // else if (filterValue === 'following')
  // {usersFiltered = usersToShow.filter(user => user.isFollowing === true)}
  // if(filterValue === 'all') return usersFiltered;
  // console.log(usersFiltered)
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
