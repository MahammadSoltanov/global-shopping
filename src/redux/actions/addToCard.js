export default function addToCardAction(product) {
    return {
        type: "ADD_TO_CARD",
        payload: {
            productToAdd: product
        }
    }
}