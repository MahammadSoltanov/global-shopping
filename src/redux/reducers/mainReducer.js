const initialState = {
  currentProducts: [
    {
      position: 1,
      title: "Dell OptiPlex 7010 Desktop PC, 3.2 GHz Intel i5 Quad Core Gen 3, 8GB DDR3 Ram ...",
      link: "https://www.walmart.com/ip/Dell-OptiPlex-7010-Desktop-Computer-PC-3-20-GHz-Intel-i5-Quad-Core-Gen-3-8GB-DDR3-RAM-250GB-Hard-Disk-Drive-HDD-SATA-Drive-Windows-10-Home-64bit/988663741?wmlspartner=wlpa&selectedSellerId=101015178",
      product_link: "https://www.google.com/shopping/product/5125544525013867373?gl=",
      product_id: "5125544525013867373",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=5125544525013867373",
      source: "Walmart - Bervieelectronics",
      price: "$140.00",
      extracted_price: 140,
      rating: 4.2,
      reviews: 781,
      extensions: [
        "Windows",
        "Quad-core",
        "Black"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTX8FnUdB8o_tVRQVFE5l-rmqAagdmjzTfbt20u2PKTqAG_4JotHz7bllwWuC2UtPzoDkZ1osBuRWuPEkie0KuR0P0yC0uxbLNgqcoloqottVJbWpgSfvaL&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 4,
      title: "Fast Dell OptiPlex 7010 Desktop PC i5-3470 Quad Core 3.2GHz 8GB 500GB Dvdrw ...",
      link: "https://www.neweggbusiness.com/Product/Product.aspx?Item=9SIV2RUETN3096&nm_mc=knc-googlebiz&cm_mmc=knc-googlebiz-_-desktop%20pc-_-dell-_-9SIV2RUETN3096&source=region",
      product_link: "https://www.google.com/shopping/product/2219829308040569379?gl=",
      product_id: "2219829308040569379",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2219829308040569379",
      source: "Newegg Business - US-Tecno",
      price: "$189.99",
      extracted_price: 189.99,
      rating: 4.2,
      reviews: 781,
      extensions: [
        "Windows",
        "Quad-core",
        "Black"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcJYNSgxTE2b1QUpzGhXJRs-6MwHw6TGMacJ96w4EXef4N5CQM-gDt3-YV-aSKtWzEMcPHMvYA-GN60h1uHxYETJCIckTQpbqz2niknWK6PZuhMDlJpRZuww&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 6,
      title: "HP Pavilion Gaming Desktop TG01-2003w, Black",
      link: "https://www.amazon.com/HP-Pavilion-Gaming-Desktop-Processor/dp/B09FZ41WP7?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=AGKMQGQ5GSR01",
      product_link: "https://www.google.com/shopping/product/12756781954810050330?gl=",
      product_id: "12756781954810050330",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12756781954810050330",
      source: "Amazon.com - Seller",
      price: "$549.99",
      extracted_price: 549.99,
      rating: 3.9,
      reviews: 418,
      extensions: [
        "AMD GPU",
        "Windows",
        "AMD CPU"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRtY_H2l0qMWz3uonnvYRRN1X5yy3gCueykGd1kNXnRBihreOA5szIBRtRxpNNuWWMu0ELBpIU2g-sv_toEvjklCLhfkcLpB1ht84Lu0lzxAKX0AYZZOJ7&usqp=CAE",
      delivery: "$21.08 delivery",
      isAdded: false
    },
    {
      position: 7,
      title: "HP Chromebook 11A G8 EE 11.6\" 32GB/4GB 16W64UT#ABA",
      link: "https://vipoutlet.com/product/hp-16w64ut-11a-g8-11-6-hd-a4-9120c-1-6ghz-amd-radeon-graphics-4gb-ram-32gb-ssd-chrome-os-chalkboard-grey/",
      product_link: "https://www.google.com/shopping/product/12754877158357228339?gl=",
      product_id: "12754877158357228339",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12754877158357228339",
      source: "vipoutlet.com",
      price: "$81.00",
      extracted_price: 81,
      rating: 3.6,
      reviews: 644,
      extensions: [
        "LOW PRICE",
        "Chrome OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhpGJF1Fkgg--Zh-mU09sYkftsdvEbrg91bG8VgrGern9WI2Xpom9y2ldfGajIIAYK6ZpK3S1QETRDUGZyN2Dv5jUVRzIl4Dk54UR_sI8&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "Free delivery by Fri, Jan 6",
      isAdded: false
    }
  ],
  productsInCard: []
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

    return {
      ...state,
      productsInCard
    }
  }

  if (action.type === "UPDATE_IS_ADDED_PROPERTY") {
    console.log("mainReducer returned UPDATE_IS_ADDED_PROPERTY state");
    const id = action.payload.id;
    let currentProducts = [...state.currentProducts];

    currentProducts = currentProducts.map((product) => {
      const currentProductID = product.product_id + product.source + product.title + product.position;
      console.log("map works")
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


  console.log("mainReducer returned default state");
  return {
    ...state,
  }

}
