import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: var(--main-bc);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const StyledLogo = styled.img`
  padding-top: 20px;
  padding-left: 22px;
`;
export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledBar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
export const StyledEllipse = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledTweets = styled.p`
  margin-top: 88px;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: var(--btn-bc-follow);
`;
export const StyledFollowers = styled.p`
  margin-top: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: var(--btn-bc-follow);
`;
export const StyledButton = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 26px;
  padding: 14px 28px;
  background-color: ${props =>
    props.isFollowed ? 'var(--btn-bc-following)' : 'var(--btn-bc-follow)'};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: var(--btn-text);
  outline: unset;
  transition: var(--animation);
  &:hover{
    background-color: var(--btn-bc-following);
     }
`;
