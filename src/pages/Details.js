import {useSelector} from 'react-redux';
import {selectPeopleDetails} from '../redux/reducers/peopleDetails/selectors';

export default function Details() {
    const details = useSelector(selectPeopleDetails);

    if (details.loading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    const {name, birth_year, skin_color, mass} = details.data

    return (
        <div>
            <h1>{name}</h1>
            <h4>{birth_year}</h4>
            <p>Skin: {skin_color}</p>
            <p>Mass: {mass}</p>
        </div>
    );
}