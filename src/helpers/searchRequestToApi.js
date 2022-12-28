import updateOnSearchRequest from '../redux/actions/updateOnSearchRequest';

export default async function searchRequestToApi(queryText, dispatch, productsInCard) {
    await fetch(`http://localhost:3001/${queryText}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            const dataWithExtraProperty = data.map((item) => {
                return { ...item, isAdded: false, amount: 1 }
            })

            if (productsInCard.length > 0) {
                for (let i = 0; i < productsInCard.length; i++) {
                    let cardProductID = productsInCard[i].product_id + productsInCard[i].source + productsInCard[i].title + productsInCard[i].position;
                    for (let j = 0; j < dataWithExtraProperty.length; j++) {
                        let allProductID = dataWithExtraProperty[j].product_id + dataWithExtraProperty[j].source + dataWithExtraProperty[j].title + dataWithExtraProperty[j].position;
                        if (cardProductID === allProductID)
                            dataWithExtraProperty[j].isAdded = true;
                    }
                }
            }

            dispatch(updateOnSearchRequest(dataWithExtraProperty));
        });
}
