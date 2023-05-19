import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/usersSelectors';
import { setFilter } from 'redux/usersSlice';

export const DropDown = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <select
        onChange={e => dispatch(setFilter(e.target.value))}
        id="showTweets"
        name="showTweets"
        defaultValue={filter}
      >
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
    </>
  );
};
