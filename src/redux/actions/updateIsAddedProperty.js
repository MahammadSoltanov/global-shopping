export default function updateIsAddedPropertyAction(id){
    return{
        type: "UPDATE_IS_ADDED_PROPERTY",
        payload: {
            id: id
        }
    }
}