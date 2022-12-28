const initialState = {
  currentProducts: [],
  productsInCard: [],
  allMoney: 0
}

export default function mainReducer(state = initialState, action) {
  if (action.type === "UPDATE_ON_SEARCH_REQUEST") {
    state.currentProducts = [];
    console.log("mainReducer returned UPDATE_ON_SEARCH_REQUEST state");
    console.log(action.payload.products);
    const currentProducts = [...action.payload.products];
    return {
      ...state,
      currentProducts
    }
  }

  if (action.type === "ADD_TO_CARD") {
    console.log("mainReducer returned ADD_TO_CARD state");
    const productToAdd = action.payload.productToAdd;
    const productsInCard = [...state.productsInCard, productToAdd];
    let allMoney = 0;
    productsInCard.forEach((product) => {
      allMoney += product.extracted_price * product.amount;
    })
    return {
      ...state,
      productsInCard,
      allMoney
    }
  }

  if (action.type === "DELETE_FROM_CARD") {
    console.log("mainReducer returned DELETE_FROM_CARD state")
    let productsInCard = [...state.productsInCard];
    let indexOfElementToDelete;

    productsInCard.forEach((product, index) => {
      let productID = product.product_id + product.source + product.title + product.position;
      if (productID === action.payload.id)
        indexOfElementToDelete = index;
    })

    productsInCard.splice(indexOfElementToDelete, 1);

    let allMoney = 0;
    productsInCard.forEach((product) => {
      allMoney += product.extracted_price * product.amount;
    })

    return {
      ...state,
      productsInCard, 
      allMoney
    }
  }

  if (action.type === "UPDATE_IS_ADDED_PROPERTY") {
    console.log("mainReducer returned UPDATE_IS_ADDED_PROPERTY state");
    const id = action.payload.id;
    let currentProducts = [...state.currentProducts];

    currentProducts = currentProducts.map((product) => {
      const currentProductID = product.product_id + product.source + product.title + product.position;
      if (currentProductID === id) {
        let isAdded = !(product.isAdded);
        return {
          ...product,
          isAdded
        }
      }

      return { ...product }
    })

    return {
      ...state,
      currentProducts
    }
  }

  if (action.type === "INCREMENT_AMOUNT") {
    console.log("mainReducer returned INCREMENT_AMOUNT state");

    const id = action.payload.id;
    let productsInCard = [...state.productsInCard];

    productsInCard = productsInCard.map((product) => {

      const currentProductID = product.product_id + product.source + product.title + product.position;
      console.log(currentProductID);
      console.log(id);
      if (currentProductID === id) {
        console.log(product.amount);
        let amount = product.amount + 1;
        return {
          ...product,
          amount
        }
      }

      return { ...product }
    })

    let allMoney = 0;
    productsInCard.forEach((product) => {
      allMoney += product.extracted_price * product.amount;
    })

    return {
      ...state,
      productsInCard,
      allMoney
    }
  }
  if (action.type === "DECREMENT_AMOUNT") {
    console.log("mainReducer returned DECREMENT_AMOUNT state");

    const id = action.payload.id;
    let productsInCard = [...state.productsInCard];

    productsInCard = productsInCard.map((product) => {
      const currentProductID = product.product_id + product.source + product.title + product.position;
      if (currentProductID === id) {
        let amount = product.amount;
        if (product.amount > 1) amount = product.amount - 1;
        return {
          ...product,
          amount
        }
      }
      return { ...product }
    })

    let allMoney = 0;
    productsInCard.forEach((product) => {
      allMoney += product.extracted_price * product.amount;
    })
    return {
      ...state,
      productsInCard,
      allMoney
    }
  }



  console.log("mainReducer returned default state");
  return {
    ...state,
  }

}
