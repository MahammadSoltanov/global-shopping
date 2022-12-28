export default function decrementAmountAction(id){
    return {
        type: "DECREMENT_AMOUNT",
        payload: {
            id: id
        }
    }
}