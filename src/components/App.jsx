import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'redux/usersOperations';
import UserList from './UserList/UserList';
import { selectLoading, selectUsers } from 'redux/usersSelectors';
import { StyledMoreButton } from 'App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const users = useSelector(selectUsers);
  const tweetsPerRow = 3;
  const usersNumber = users.length;
  const [next, setNext] = useState(tweetsPerRow);
  const usersToShow = users.slice(0, next);

  useEffect(() => {
    if (!usersToShow || usersToShow.length === 0) dispatch(fetchUsers());
  }, [dispatch, usersToShow]);

  const handleMoreTweets = () => {
    setNext(next + tweetsPerRow);
  };

  return (
    <div>
      {isLoading && <b>In progress</b>}
      <UserList usersToShow={usersToShow} />
      {next < usersNumber && (
        <StyledMoreButton onClick={handleMoreTweets}>
          Load more
        </StyledMoreButton>
      )}
    </div>
  );
};
