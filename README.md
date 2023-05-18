Tweets | Test task GoIT
Implementation of the project

    The project was compiled with create-react-app.
    Redux was used
    Components are styled using the library styled-components
    Mockapi.io was used as backend


Implemented:

    The Tweets page displays cards with information about tweets (avatar, number of tweets and followers, the button with the option
    to start following the tweet)
    Pagination is implemented with button "Load more" drawing 3 new cards on the page after being pressed. In case when all existing tweets 
    are shown the button disappears.
    Back button to return to the home page.
    Dropdown with the ability to filter cards by follow status.
    Automatic redirection of the user in case of switching to a non-existent route.
    Global state includes not only user info from backend but also isFollowing status and filter.
    Information about the follow status is not stored on the backend, but locally for each user.

