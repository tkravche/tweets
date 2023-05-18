import picture from '../../img/picture.png';
import logo from '../../img/logo.png';
import rectangle from '../../img/rectangle.svg';
import ellipse from '../../img/ellipse.png';

import {
  StyledWrapper,
  StyledCardWrapper,
  StyledLogo,
  StyledAvatar,
  StyledEllipse,
  StyledBar,
  StyledTweets,
  StyledFollowers,
  StyledButton,
} from './UserCard.styled';
import { useDispatch } from 'react-redux';
import { follow, unfollow } from 'redux/usersSlice';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <StyledLogo src={logo} alt="GoIT logo" />
      <StyledCardWrapper>
        <img
          src={picture}
          alt="green tick and yellow question mark on the purple background"
          width="308"
          height="168"
        />
        <StyledBar src={rectangle} alt="rectangle" />
        <StyledAvatar src={user.avatar} alt={user.user} width="72" />
        <StyledEllipse src={ellipse} alt="ellipse" />
        <StyledTweets>{user.tweets} tweets</StyledTweets>
        <StyledFollowers>{user.followers.toLocaleString()} followers</StyledFollowers>
        {user.isFollowing ? (
          <StyledButton
            onClick={() => dispatch(unfollow(user.id))}
            type="button"
            isFollowed={user.isFollowing}>
            Following
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() => dispatch(follow(user.id))}
            type="button"
            isFollowed={user.isFollowing}
          >
            Follow
          </StyledButton>
        )}
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default UserCard;
