export default function deleteFromCardAction(id){
    return{
        type: "DELETE_FROM_CARD",
        payload: {
            id: id
        }
    }
}