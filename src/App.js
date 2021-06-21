import {useDispatch, useSelector} from 'react-redux';

function App() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  console.log(store);

  return (
    <div>
      redux-saga tutorial
      <button
        onClick={() => dispatch({type: 'LOAD_DATA'})}
      >
        click me
      </button>
    </div>
  );
}

export default App;
