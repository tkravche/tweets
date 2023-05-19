import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'redux/usersOperations';
import UserList from '../UserList/UserList';
import { selectLoading, selectAllUsers, selectFilteredUsers } from 'redux/usersSelectors';
import { StyledMoreButton, StyledBackButton } from 'components/pages/TweetsPage.styled';
import { DropDown } from 'components/DropDown/DropDown';

export const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const users = useSelector(selectFilteredUsers);
  const allUsers = useSelector(selectAllUsers);
  const tweetsPerRow = 3;
  const usersNumber = users.length;
  const [next, setNext] = useState(tweetsPerRow);
  const usersToShow = users.slice(0, next);

  useEffect(() => {
    if (!allUsers || allUsers.length === 0) dispatch(fetchUsers());
  }, [dispatch, allUsers]);

  const handleMoreTweets = () => {
    setNext(next + tweetsPerRow);
  };
  return (
    <div>
        <StyledBackButton to="/" end>
         Go Back
        </StyledBackButton>
        <DropDown/>
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
