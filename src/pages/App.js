import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function App() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  console.log(store);

  return (
    <div>
      redux-saga tutorial
      <div>
          <Link to={'/blog'}>
              open blog
          </Link>
      </div>
    </div>
  );
}

export default App;
