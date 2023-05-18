import { StyledBackButton } from 'components/pages/TweetsPage.styled';
export const Home = () => {
    return (
      <main>        
          
          <StyledBackButton to="/tweets">
        Tweets
        </StyledBackButton>   
      </main>
    );
  };