export default function updateOnSearchRequest(productsCollection){    
    return{
        type: "UPDATE_ON_SEARCH_REQUEST",
        payload:{
            products: productsCollection
        }
    }

}