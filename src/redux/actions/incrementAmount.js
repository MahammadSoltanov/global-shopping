export default function incrementAmountAction(id) {
    return {
        type: "INCREMENT_AMOUNT",
        payload: {
            id: id
        }
    }
}