import { useState } from 'react';

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

const UserCard = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(null);
  const [followers, setFollowers] = useState(user.followers);
  
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
        <StyledFollowers>{followers.toLocaleString()} followers</StyledFollowers>
        {isFollowed ? (
          <StyledButton
            onClick={() => {
              setIsFollowed(!isFollowed);
              setFollowers(followers - 1);
            }}
            type="button"
            isFollowed={isFollowed}
          >
            Following
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() => {
              setIsFollowed(!isFollowed);
              setFollowers(followers + 1);
            }}
            type="button"
            isFollowed={isFollowed}
          >
            Follow
          </StyledButton>
        )}
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default UserCard;
