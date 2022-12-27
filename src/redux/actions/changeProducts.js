export default function changeProductsAction(productCategory) {
    return {
        type: "CHANGE_PRODUCTS", 
        payload: {
            productCategory: productCategory
        }
    }
}