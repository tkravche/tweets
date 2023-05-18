import styled from 'styled-components';

export const StyledMoreButton = styled.div`
cursor:pointer;
 text-align: center;
 margin: 70px auto 50px auto;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background-color: var(--btn-bc-follow);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: var(--btn-text);
  transition: var(--animation);
    &:hover,:focus{
    background-color: var(--btn-bc-following);
    outline: unset;
  }
`;
