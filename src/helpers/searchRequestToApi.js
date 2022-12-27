import updateOnSearchRequest from '../redux/actions/updateOnSearchRequest';

export default function searchRequestToApi(queryText, dispatch) {
    fetch(`http://localhost:3001/${queryText}`, {
        mode: 'no-cors',
    })
        .then(res => res)
        .then(data => data ? dispatch(updateOnSearchRequest(data)) : {});
}
