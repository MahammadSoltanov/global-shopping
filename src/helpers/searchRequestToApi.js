import updateOnSearchRequest from '../redux/actions/updateOnSearchRequest';

export default async function searchRequestToApi(queryText, dispatch) {
    await fetch(`http://localhost:3001/${queryText}`)
        .then(res => res.json())
        .then((data) => {
            const dataWithExtraProperty = data.map((item) => {
                return { ...item, isAdded: false }
            })
            
            dispatch(updateOnSearchRequest(dataWithExtraProperty));
        });
}
