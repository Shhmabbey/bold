import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from 'react-router';

const SearchResults = () => {
  const items = useSelector(state => state.entities.items);

  let dispatch = useDispatch();
  // let location = useLocation();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      <div className="Search_Results">
        <div className="item-list-container">
          <p>TODO: Add Related Items Container</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;