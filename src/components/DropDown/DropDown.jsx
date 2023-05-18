import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/usersSlice';

export const DropDown = () => {
  const dispatch = useDispatch();

  return (
    <>
      <select
        onChange={e => dispatch(setFilter(e.target.value))}
        id="showTweets"
        name="showTweets"
        defaultValue="all"
      >
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
    </>
  );
};
