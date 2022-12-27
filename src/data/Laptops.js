const laptops = [
    {
      position: 1,
      title: "Microsoft 12.4\" Surface Laptop Go i5 4GB Ram, 64gb Storage",
      link: "https://www.walmart.com/ip/Microsoft-Surface-Laptop-Go-12inch-i5-4GB-64GB-Platinum/752680796?wmlspartner=wlpa&selectedSellerId=149",
      product_link: "https://www.google.com/shopping/product/8253619164633486341?gl=",
      product_id: "8253619164633486341",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=8253619164633486341",
      source: "Walmart - Beach Camera",
      price: "$259.99",
      extracted_price: 259.99,
      rating: 4.5,
      reviews: 1371,
      extensions: [
        "LOW PRICE",
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuOb-ci1sI3_Q3I3YLq9cCf3vxQJ0r7InWRBVukCU6e3WeRThK0jjnlm3bcale_v-6-BTWGFftDfUkyP8r91Ys-YOjAlbA8hYqmR5cFR_1&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 2,
      title: "Lenovo IdeaPad 1I, 14.0 inch Laptop, Intel Pentium N5030, 4GB Ram, 128GB eMMC ...",
      link: "https://www.target.com/p/lenovo-ideapad-1i-14-hd-laptop-intel-pentium-n5030-4gb-ram-128gb-emmc-windows-11-in-s-mode-cloud-grey/-/A-88200862?ref=tgt_adv_XS000000&AFID=google_pla_df_free_online&CPNG=storefront&adgroup=56-1",
      product_link: "https://www.google.com/shopping/product/5290870128726941417?gl=",
      product_id: "5290870128726941417",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=5290870128726941417",
      source: "Target",
      price: "$199.99",
      extracted_price: 199.99,
      rating: 4.5,
      reviews: 11221,
      extensions: [
        "Windows OS",
        "Quad Core"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQA_NZnXjYONcSla3nYV4eguGA6t6Mdcxx_mQo0oJkX2wRud2s_q3roNYSKeK8Zop65rXPAqTXawIbMZ0UbcFt17cRxevkGHN4-jpzJa-8&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 3,
      title: "HP - Envy x360 2-in-1 15.6\" Touch-Screen Laptop - AMD Ryzen 5 5625U - 8GB Memory ...",
      link: "https://www.bestbuy.com/site/hp-envy-x360-2-in-1-15-6-touch-screen-laptop-amd-ryzen-5-5625u-8gb-memory-256gb-ssd-nightfall-black/6502184.p?skuId=6502184&ref=212&loc=1&extStoreId=187",
      product_link: "https://www.google.com/shopping/product/8568060275346853314?gl=",
      product_id: "8568060275346853314",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=8568060275346853314",
      source: "Best Buy",
      price: "$799.99",
      extracted_price: 799.99,
      rating: 4.5,
      reviews: 6137,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNIUXS7SWsTAgWYvacF1PpWE1Smk5YdpBpbeDfwgs_ymDru6RuhioYqKUKleZKJgp5O3Dk_GdTWaOSTvh42ibD4n-H1tEuJauJXCRGXsmy&usqp=CAE",
      tag: "CURBSIDE",
      delivery: "2.8 mi · In stock",
      isAdded: false
    },
    {
      position: 4,
      title: "Microsoft Surface Laptop Go 12.4\" Intel i5-1035G1 8GB/128GB SSD Touchscreen ...",
      link: "https://www.amazon.com/Microsoft-Surface-Laptop-Touchscreen-Sandstone/dp/B08GZPDSF5?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A6M8DY8MREDF4",
      product_link: "https://www.google.com/shopping/product/11818754963736057054?gl=",
      product_id: "11818754963736057054",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=11818754963736057054",
      source: "Amazon.com - Seller",
      price: "$551.77",
      extracted_price: 551.77,
      rating: 4.5,
      reviews: 1371,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSpVMY6l5KRzWqqnGAIGNDFfc3oBYl-cjnZkRdFn7dDuNYJCD9HnufjGBfMBQGbnl2GlHXilnamfXxyHVYes44AjX1tQcn_ZDFdTrGbwN_SHhF-JKDd-i6f0A&usqp=CAE",
      delivery: "$12.71 delivery",
      isAdded: false
    },
    {
      position: 5,
      title: "Lenovo 3 Core i3-1115G4 256GB SSD 8GB Touchscreen Win11 S Almond",
      link: "https://www.newegg.com/p/1TS-000E-0YN27?item=9SIB8HTJBU4719&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-notebooks-_-lenovo-_-9SIB8HTJBU4719&source=region&srsltid=AeTuncrGHxBqA8Yu6-R-MGyfO61wFj0x6C2zueMdArACz7OXj-ShHqO1tmM",
      product_link: "https://www.google.com/shopping/product/12982291352014995488?gl=",
      product_id: "12982291352014995488",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12982291352014995488",
      source: "Newegg.com - Save Right",
      price: "$380.00",
      extracted_price: 380,
      rating: 4.4,
      reviews: 10809,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVj9mftF2i4aQMnP2JwFzc27f4cg2CPuLtKT0sP18tOifljHnQXNhvtb5Cb-mmZVuMwWw11DpXP5jYqamdLu6qlUwkP-WHTYwWIfKP3PuKT4RfD_6IHzXR&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 6,
      title: "Asus ZenBook Duo 14 Ux482ear-eh51t 14\" Notebook, Intel Core i5-1155G7, 8GB Memory ...",
      link: "https://www.adorama.com/asux482eh51t.html?refby=inc-google-shop-o&utm_source=google&utm_medium=organic&utm_campaign=organicshopping",
      product_link: "https://www.google.com/shopping/product/13357090102331558322?gl=",
      product_id: "13357090102331558322",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=13357090102331558322",
      source: "Adorama",
      price: "$1,199.99",
      extracted_price: 1199.99,
      rating: 4.5,
      reviews: 210,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0oU-DPd3XCik727dNK4htGhd9nBpbST9D1mo0EQ0lVk-5v5XK1rZg4M1O0VvHd42ReaHEVq0VOI9nTzEeZ51v80nbrd5wFnvOuVHHAovZ&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 7,
      title: "Lenovo 3 14itl05 Core i3-1115G4 128GB SSD 4GB Win11 S Platinum Gray",
      link: "https://www.thepcwholesale.com/product/lenovo-3-14itl05-core-i3-1115g4-128gb-ssd-4gb-14-1920x1080-win11-s-platinum-gray-for-north-america-sales-only/",
      product_link: "https://www.google.com/shopping/product/12535406813646927391?gl=",
      product_id: "12535406813646927391",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12535406813646927391",
      source: "Thepcwholesale.com",
      price: "$299.00",
      extracted_price: 299,
      rating: 4.5,
      reviews: 11221,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRytp6C4e192ExhX_s508pl-FtjOFa8cbJ6Hdo_XGp-Hc6aFDbuZieYb9TWcgwDIrS9OY9CNc2AKpL0-pSwdiF1AdTECOVj1CCiIeDFRBsdOkyGHshUIHDu7Q&usqp=CAE",
      delivery: "Delivery by Wed, Jan 11",
      isAdded: false
    },
    {
      position: 8,
      title: "HP 14-ed0123 Qualcomm Snapdragon 7C 128GB eMMC 8GB Touchscreen Win11 Silver FP ...",
      link: "https://vipoutlet.com/product/hp-14-ed0123wm-14-fhd-touchscreen-snapdragon-7c-gen-2-2-55ghz-qualcomm-adreno-618-4gb-ram-128gb-ssd-win-11-home-silver/",
      product_link: "https://www.google.com/shopping/product/14284089833164157853?gl=",
      product_id: "14284089833164157853",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=14284089833164157853",
      source: "vipoutlet.com",
      price: "$209.00",
      extracted_price: 209,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbAD-5vvs5agkAKMWsls3Zo_h8QRb2DbY4-Pexz781ph-QMnn8kq_v5UuWJhQ22GDOa0iXt5HnVYvFsyazLdji-Zra_S64YbNoQxl4-SvcrLdGPEIEqP1oBIc&usqp=CAE",
      delivery: "Free delivery by Fri, Jan 6",
      isAdded: false
    },
    {
      position: 9,
      title: "Microsoft Surface Go 2 - 128GB - Platinum",
      link: "https://www.ebay.com/itm/275569552240?chn=ps&mkevt=1&mkcid=28&srsltid=AeTuncpn4d-toVfcSZmLXiC43uyUq0I-5T1zzUbTVKp6eA6-prA1h2ivXzI",
      product_link: "https://www.google.com/shopping/product/2025294266678384326?gl=",
      product_id: "2025294266678384326",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2025294266678384326",
      source: "eBay - estoreva1",
      price: "$324.99",
      extracted_price: 324.99,
      rating: 4.3,
      reviews: 689,
      extensions: [
        "Windows",
        "4G",
        "Platinum"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpadv3rDXzfa1J_jiuEUsn7Hz9PA3Ko7dZcntsro0EYLJ-Yrou2CX41cuXQftH3vvg8LU16fYoxjFauyhrZgntCOpfBSA88M1zLUgIjis&usqp=CAE",
      delivery: "Free delivery by Thu, Jan 5",
      isAdded: false
    },
    {
      position: 10,
      title: "Lenovo IdeaPad 1I, 14.0 inch Laptop, Intel Pentium N5030, 4GB Ram, 128GB eMMC ...",
      link: "https://www.target.com/p/lenovo-ideapad-1i-14-hd-laptop-intel-pentium-n5030-4gb-ram-128gb-emmc-windows-11-in-s-mode-cloud-grey/-/A-88200862?ref=tgt_adv_XS000000&AFID=google_pla_df_free_online&CPNG=storefront&adgroup=56-1",
      product_link: "https://www.google.com/shopping/product/5290870128726941417?gl=",
      product_id: "5290870128726941417",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=5290870128726941417",
      source: "Target",
      price: "$199.99",
      extracted_price: 199.99,
      rating: 4.5,
      reviews: 11221,
      extensions: [
        "Windows OS",
        "Quad Core"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQA_NZnXjYONcSla3nYV4eguGA6t6Mdcxx_mQo0oJkX2wRud2s_q3roNYSKeK8Zop65rXPAqTXawIbMZ0UbcFt17cRxevkGHN4-jpzJa-8&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 11,
      title: "Lenovo - Chromebook Duet - 10.1\"- Tablet - 128GB - with Keyboard",
      link: "https://www.buyr.com/product/lenovo-chromebook-duet-2-in-1-10-1-wuxga-1920-x-1200-display-mediatek-helio-p60t-4gb-lpddr4x-ram-128gb-emcp-ssd-integrated-arm-g72-mp3-graphics-chrome-os-za6f0031us-ice-blue-iron-grey/bp/POHR3SI",
      product_link: "https://www.google.com/shopping/product/4224119517548582118?gl=",
      product_id: "4224119517548582118",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=4224119517548582118",
      source: "Buyr.com",
      price: "$280.29",
      extracted_price: 280.29,
      rating: 4.4,
      reviews: 13315,
      extensions: [
        "Touchscreen",
        "1920 x 1200"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLDKMORJ8TkXRGBil_0Nm916D1rUQ7Y4JUSVwPa4tKMp9ugz5HkvcqD1Yl-TNFYsVkAJDK2g_JQs7TJBC9Zao3ZS6W96tgDMq7n-sQjmI9&usqp=CAE",
      delivery: "Free delivery & Free 30-day returns",
      isAdded: false
    },
    {
      position: 12,
      title: "Refurbished Apple MacBook Pro Retina Display 13.3\" i5 [2.7] [128gb] [8gb] MF839LL ...",
      link: "https://www.walmart.com/ip/UsedApple-MacBook-Pro-13-3-inch-Notebook-Computer-Retina-Display-2015-MF839LL-A-2-7-GHz-Intel-Core-i5-8GB-RAM-MacOS-128GB-SSD-Grade-B-Silver/179042518?wmlspartner=wlpa&selectedSellerId=1112",
      product_link: "https://www.google.com/shopping/product/3326466763272022668?gl=",
      product_id: "3326466763272022668",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=3326466763272022668",
      source: "Walmart - BuySPRY",
      price: "$291.89",
      extracted_price: 291.89,
      rating: 4.8,
      reviews: 18971,
      extensions: [
        "Mac OS",
        "Dual Core",
        "HDMI"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOkSKD0CPjFf1ReWpTji5_jHUUcOlVligsb_-JOJLTXxnf6aoQnDwEdIfff0KuRDGDQebiPE7CIvuy_YZlGVpSbwMfjbUGK5S9HyaTO7yGTpT7z-KLAC_XE9s&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 13,
      title: "HP - Envy x360 2-in-1 15.6\" Touch-Screen Laptop - AMD Ryzen 5 5625U - 8GB Memory ...",
      link: "https://www.bestbuy.com/site/hp-envy-x360-2-in-1-15-6-touch-screen-laptop-amd-ryzen-5-5625u-8gb-memory-256gb-ssd-nightfall-black/6502184.p?skuId=6502184&ref=212&loc=1&extStoreId=187",
      product_link: "https://www.google.com/shopping/product/8568060275346853314?gl=",
      product_id: "8568060275346853314",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=8568060275346853314",
      source: "Best Buy",
      price: "$799.99",
      extracted_price: 799.99,
      rating: 4.5,
      reviews: 6137,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNIUXS7SWsTAgWYvacF1PpWE1Smk5YdpBpbeDfwgs_ymDru6RuhioYqKUKleZKJgp5O3Dk_GdTWaOSTvh42ibD4n-H1tEuJauJXCRGXsmy&usqp=CAE",
      tag: "CURBSIDE",
      delivery: "2.8 mi · In stock",
      isAdded: false
    },
    {
      position: 14,
      title: "HP Laptop - 15z-ef3000|AMD Ryzen 5|Windows 11 Home|128 GB SSD|AMD Radeon Graphics ...",
      link: "https://www.hp.com/us-en/shop/pdp/4x379av-1-4x379av-1?&a=1",
      product_link: "https://www.google.com/shopping/product/7357864810563543977?gl=",
      product_id: "7357864810563543977",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=7357864810563543977",
      source: "hp.com",
      price: "$379.99",
      extracted_price: 379.99,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "SALE",
        "Windows OS",
        "Hexa Core"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVdZ0u57wKSG8fnLkA2O2rBEawUgJf6wLDiNA4mAY0kz3YUFnWCcyJcVZLu7DjoJDMOwwzeWekPmXlZ8o15q3lyZfhefCo0Q&usqp=CAE",
      tag: "SALE",
      delivery: "Delivery by Thu, Jan 5",
      isAdded: false
    },
    {
      position: 15,
      title: "HP - 14 inch Laptop - AMD Ryzen 3 - 8GB Memory - 128GB SSD - Natural Silver",
      link: "https://www.tanga.com/deals/1558ce099478/hp-14-fq-14-amd-ryzen-3-3250u-2-60ghz-8gb-128gb-windows-11-home-s",
      product_link: "https://www.google.com/shopping/product/12386267671266274802?gl=",
      product_id: "12386267671266274802",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12386267671266274802",
      source: "Tanga.com",
      price: "$250.49",
      extracted_price: 250.49,
      rating: 4.4,
      reviews: 555,
      extensions: [
        "Windows OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuXknSJVFvEY9lAhlSqt97_ndLnPjRL515fBEH6swj6uv96ewMxTmW3aFudZif5Z2BhLHHiqB27CpnwL6IGJXTa3K4KbIjz7gtL1r7fd8&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 16,
      title: "HP Envy x360 15-ew0023 2-in-1 Convertible Core i7-1255U 512gb SSD 16GB ...",
      link: "https://www.klickonline.net/hp-envy-x360-2-in-1-laptop-core-i7-1255u-16gb-ram-512gb-ssd-15-6-full-hd-ips-touchscreen/?setCurrencyId=1",
      product_link: "https://www.google.com/shopping/product/6831209016382757794?gl=",
      product_id: "6831209016382757794",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=6831209016382757794",
      source: "Klick Online",
      price: "$949.99",
      extracted_price: 949.99,
      rating: 4.5,
      reviews: 6137,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmk4YGkSVIyGxQMF1sF7K67Zf_HGeF1089GgRSyicXCKvxOff4ebicXU5Dc5h-AGyvvGzexi2fSKJRo1-ghWCaEQEqkYVWVTKBBGDw-fhAv2sZUA-RY8sB9g&usqp=CAE",
      delivery: "Free delivery by Thu, Jan 5",
      isAdded: false
    },
    {
      position: 17,
      title: "Asus - ZenBook 14\" 2.8K OLED Laptop - Intel Evo Platform - 12th Gen Core i5 ...",
      link: "https://www.bestbuy.com/site/asus-zenbook-14-2-8k-oled-laptop-intel-evo-platform-12th-gen-core-i5-processor-8gb-memory-256gb-ssd-ponder-blue/6494331.p?skuId=6494331&ref=212&loc=1&extStoreId=187",
      product_link: "https://www.google.com/shopping/product/17345990087058263792?gl=",
      product_id: "17345990087058263792",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17345990087058263792",
      source: "Best Buy",
      price: "$599.99",
      extracted_price: 599.99,
      rating: 4.4,
      reviews: 2059,
      extensions: [
        "LOW PRICE",
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNvwm3mLmzHSVqRNDvNxztTDb7uJNCqiJwlccLC2fH1LqrAQSMb9GbVPF5AoSlsaeUN67n1xl0MAwHa1Y9w_F1n_nxLujeClrhZer6aVP_x38xtjBLSf_u&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "2.8 mi · In stock · Curbside",
      isAdded: false
    },
    {
      position: 18,
      title: "HP - Victus 15.6\" Gaming Laptop - Intel Core i5-12450H - 8GB Memory - Nvidia ...",
      link: "http://shop.computeroverhauls.com/products/brand-new-15-6-hp-victus-15-fa0000-i5-12450h-1-50ghz-8gb-512gb-ssd-gtx-1650?utm_source=Google&utm_medium=Shopping&utm_campaign=DesktopAds&srsltid=AeTuncqo27Ifv47HoZk2UDL8vqjC1kKb0esQ-m3CXZ7JL9P9CWF-xi0r7gI",
      product_link: "https://www.google.com/shopping/product/10422769192982116286?gl=",
      product_id: "10422769192982116286",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=10422769192982116286",
      source: "Computer Overhauls",
      price: "$599.95",
      extracted_price: 599.95,
      rating: 4.5,
      reviews: 1059,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRdEzceIfslHSY8RzzcZtQNCTvVBUwdL0r7-1iSInwvI7VkIwP8_osxJ8aWuPwpLKCYCTktRABJ9vkHYiOVIdASsG1qdylw8j9lEr1TTtznrQupb94Yoo0eA&usqp=CAE",
      delivery: "Free delivery by Jan 3 & Free 30-day returns",
      isAdded: false
    },
    {
      position: 19,
      title: "Acer Aspire 5 Laptop: AMD Ryzen 3 3200u, 128GB Ssd, 4GB Ram, 15.6\" Full HD IPS ...",
      link: "https://pricewhack.com/products/acer-aspire-5-slim-laptop-15-6-inches-full-hd-ips-display-laptop-silver?currency=USD&variant=33045564686435&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping",
      product_link: "https://www.google.com/shopping/product/13976348223820557911?gl=",
      product_id: "13976348223820557911",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=13976348223820557911",
      source: "Price Whack",
      price: "$449.99",
      extracted_price: 449.99,
      rating: 4.3,
      reviews: 3478,
      extensions: [
        "Windows OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjD57gsh5TDDAJ4yf4nrkVruerP8gW3lWxpVYu5TUH7WLSpp9tTEZlUn9crwbt3zadXVVUdS7Lupa1GhS1tcXVixTLSH1TyliMwR6xENQIi5eTRF27Htv3&usqp=CAE",
      tag: "FREE 5-DAY",
      delivery: "Free delivery by Jan 3 & Free 30-day returns",
      isAdded: false
    },
    {
      position: 20,
      title: "HP Pavilion 15-eh1052 Ryzen 5 5500u 512gb SSD 8GB IPS Win10 Fog Blue",
      link: "https://www.walmart.com/ip/HP-Pavilion-15-6-FHD-AMD-Ryzen-5-5500U-8GB-RAM-512GB-SSD-Horizon-Blue-Windows-11-15-eh1052wm/531869839?wl13=3493&selectedSellerId=0",
      product_link: "https://www.google.com/shopping/product/14262160204536363654?gl=",
      product_id: "14262160204536363654",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=14262160204536363654",
      source: "Walmart",
      price: "$549.00",
      extracted_price: 549,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "Windows OS",
        "Hexa Core"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQuTHtrg1G6n3Px39_Q2ZCuJ2v-PPfawusR7xLLI3WxwbZYj5-N5BrVhWC3qdbiA5I75m7HnpY41b4v0N4kSmusWNksC5dEI8wIbHX8OU&usqp=CAE",
      tag: "CURBSIDE",
      delivery: "24.9 mi · In stock",
      isAdded: false
    },
    {
      position: 21,
      title: "Lenovo - Chromebook Duet - 10.1\"- Tablet - 128GB - with Keyboard",
      link: "https://www.buyr.com/product/lenovo-chromebook-duet-2-in-1-10-1-wuxga-1920-x-1200-display-mediatek-helio-p60t-4gb-lpddr4x-ram-128gb-emcp-ssd-integrated-arm-g72-mp3-graphics-chrome-os-za6f0031us-ice-blue-iron-grey/bp/POHR3SI",
      product_link: "https://www.google.com/shopping/product/4224119517548582118?gl=",
      product_id: "4224119517548582118",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=4224119517548582118",
      source: "Buyr.com",
      price: "$280.29",
      extracted_price: 280.29,
      rating: 4.4,
      reviews: 13315,
      extensions: [
        "Touchscreen",
        "1920 x 1200"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLDKMORJ8TkXRGBil_0Nm916D1rUQ7Y4JUSVwPa4tKMp9ugz5HkvcqD1Yl-TNFYsVkAJDK2g_JQs7TJBC9Zao3ZS6W96tgDMq7n-sQjmI9&usqp=CAE",
      delivery: "Free delivery & Free 30-day returns",
      isAdded: false
    },
    {
      position: 22,
      title: "Asus - 14.0\" Laptop - Intel Celeron N4020 - 4GB Memory - 64gb eMMC - Star Black",
      link: "https://www.microcenter.com/product/661783/E410MA_14%22_Laptop_Computer_-_Black;_Intel_Celeron_N4020_11GHz_Processor;_4GB_DDR4_Onboard_RAM;_64GB_eMMC_Storage;_Intel_UHD_Graphics_600;_Microsoft_Wi",
      product_link: "https://www.google.com/shopping/product/18440872168446679863?gl=",
      product_id: "18440872168446679863",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=18440872168446679863",
      source: "Micro Center",
      price: "$149.99",
      extracted_price: 149.99,
      rating: 4.4,
      reviews: 2533,
      extensions: [
        "Windows OS",
        "1366 x 768"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1-RX5-3QXfqPAdylyRR8dP8AdeBBKTNR3kVzdHJnJAFJDp7GSf-hJYuiFXObAddQ70KonjhECx_c87SfwlsPWOT5XzLw6g1EZjOq4LFk&usqp=CAE",
      delivery: "$19.85 delivery · Free 30-day returns",
      isAdded: false
    },
    {
      position: 23,
      title: "Microsoft Surface Laptop 4 13.5\" AMD Ryzen 5 8GB/256GB Touch, Platinum - 5PB-00027",
      link: "https://www.microsoft.com/en-us/d/surface-laptop-4/946627FB12T1/LZ3D?OCID=AID2200065_seo_omc_goo&source=googleshopping",
      product_link: "https://www.google.com/shopping/product/11714554682577192550?gl=",
      product_id: "11714554682577192550",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=11714554682577192550",
      source: "Microsoft Store",
      price: "$749.99",
      extracted_price: 749.99,
      rating: 4.6,
      reviews: 1146,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbbk6-8QOTMieeNSu8zLYHOLAPYLXYrW5SNVsSLLLTU4KK40ZUdTk7LTA5Gq3LONoBdYi_pzvSWdNYF9inbqUlDPu8c5Jt_LMnzpshOOztNR-OjMFAtuL1jg&usqp=CAE",
      delivery: "Free delivery & Free 30-day returns",
      isAdded: false
    },
    {
      position: 24,
      title: "HP Laptop - 17z-cp100|AMD Ryzen 5|Windows 11 Home|128 GB SSD|AMD Radeon Graphics ...",
      link: "https://www.hp.com/us-en/shop/pdp/hp-laptop-17z-cp100-4v7p2av-1?&a=1",
      product_link: "https://www.google.com/shopping/product/9961463995566312557?gl=",
      product_id: "9961463995566312557",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=9961463995566312557",
      source: "hp.com",
      price: "$399.99",
      extracted_price: 399.99,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "LOW PRICE",
        "Windows OS",
        "Hexa Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaJdrsuYV1A0b6I_p0q7oV1u4fMOHw_YHzHcAie9koJGhNacG5Z3T42wuBWyEzBKJ7I-DSpIUzQ9ZRCadT7cqL2rJorgqUqjpG7kIz-FzAn0o0x30Vq4gT&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "Delivery by Thu, Jan 5",
      isAdded: false
    },
    {
      position: 25,
      title: "Razer - Blade 14- 14\" Gaming Laptop- QHD 165Hz- AMD Ryzen 9 5900HX- Nvidia ...",
      link: "https://www.gamestop.com/pc-gaming/laptop-pc-hardware/products/razer-blade-14-14-in-qhd-165hz-gaming-laptop-amd-ryzen-9-5900hx-nvidia-geforce-rtx-3080-16gb-ram-1tb-ssd-rz09-0370cea3-r3u1/343420.html?utm_source=google&utm_medium=feeds&utm_campaign=unpaid_listings",
      product_link: "https://www.google.com/shopping/product/7506467805208325353?gl=",
      product_id: "7506467805208325353",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=7506467805208325353",
      source: "Gamestop",
      price: "$2,799.99",
      extracted_price: 2799.99,
      rating: 4.4,
      reviews: 58,
      extensions: [
        "Touchscreen",
        "2560 x 1440"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuGUF-T1LBeHtokdyqkbmXLblWXhWNLSzRqcoWl6f2I-hyXFWhWbD5NzetDjgv6LjfyaH3tWwbUrssWXiPAEDC-bgHNkelYBSFIUVxLdRTEyB4PHSEuiW5Wg&usqp=CAE",
      tag: "FREE 2-DAY",
      delivery: "Free delivery by Dec 29 & Free 30-day returns",
      isAdded: false
    },
    {
      position: 26,
      title: "Apple MacBook Air M2 13.6\" - 8GB Ram, 256GB SSD - Midnight",
      link: "https://www.apple.com/us/shop/go/product/MLY33?cid=aos-us-seo-pla",
      product_link: "https://www.google.com/shopping/product/4038444917756773029?gl=",
      product_id: "4038444917756773029",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=4038444917756773029",
      source: "Apple",
      price: "$1,199.00",
      extracted_price: 1199,
      rating: 4.8,
      reviews: 1208,
      extensions: [
        "Mac OS",
        "Octa Core",
        "USB-C"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYeih9quJoMjkWynU7heCxSGDchIXe9_jQ4KNCqFFkpROPGxsff0uaNfRB23_-AFAh3SBvDMMrj3R1mjXQLhUd4qOrhaQwuydr7yb57wU&usqp=CAE",
      tag: "FREE 4-DAY",
      delivery: "Free delivery by Jan 3 & Free 14-day returns",
      isAdded: false
    },
    {
      position: 27,
      title: "Apple MacBook Pro 15 inch Intel Core i7-9750H 16 GB 256gb, Gray",
      link: "https://www.backmarket.com/en-us/p/macbook-pro-retina-154-inch-2019-core-i7-16gb-ssd-256-gb/50c30672-36df-47a5-988f-59d7a7197012?shopping=gmc&srsltid=AeTuncoqgNHKVv49OdbDGs35fVQjgU6KL4oqYmupV8HQ4xNzUZNn4wzy3d0",
      product_link: "https://www.google.com/shopping/product/1136567655037805963?gl=",
      product_id: "1136567655037805963",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=1136567655037805963",
      source: "Back Market",
      price: "$730.00",
      extracted_price: 730,
      rating: 4.7,
      reviews: 1062,
      extensions: [
        "Mac OS",
        "Hexa Core",
        "USB-C"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShVt3yH8Wys_VK43IeEhJk6Cjs97CD8YKMZ6DjLee4IrVLYRxdjDKbMR-D__Sc_svpY_2gOaiMBqTCgki_cEStq9g910DD&usqp=CAE",
      delivery: "Delivery by Mon, Jan 9",
      isAdded: false
    },
    {
      position: 28,
      title: "Lenovo 14\" IdeaPad 1 HD Pentium Silver N5030 128GB Laptop",
      link: "https://stockx.com/lenovo-ideapad-1-laptop-14-hd-display-intel-pentium-silver-n5030-4gb-ram-128gb-nvme-ssd-windows-11-home-s-81vu00d6us?country=US&currencyCode=USD&srsltid=AeTuncqed1_xhOSLOBYr7U9B9noRBo3G664JiZ7i42MUWV5atEDrruhalBo",
      product_link: "https://www.google.com/shopping/product/7928461321633620444?gl=",
      product_id: "7928461321633620444",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=7928461321633620444",
      source: "StockX",
      price: "$200.00",
      extracted_price: 200,
      rating: 4.3,
      reviews: 1101,
      extensions: [
        "Windows OS",
        "Quad Core"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVnJK-eKRWn8-nLcTgWohvX4t5bHKVeJO8IS5jmyC8Tv20aNOuMaeagkz1rpa0WtKsXCTcsL6tSLzLap3kfJUJldi_uQcLVRcin0NtC1VC&usqp=CAE",
      delivery: "$23.95 delivery",
      isAdded: false
    },
    {
      position: 29,
      title: "Lenovo IdeaPad 3i, 14.0\" FHD, Intel Core i5-10210U, 8gb, 512gb Ssd, Platinum Grey ...",
      link: "https://www.colamco.com/product/lenovo-ideapad-3-14iml05-81wa00q7us-notebook-81wa00q7us-2240413?utm_source=froogle&utm_medium=referral",
      product_link: "https://www.google.com/shopping/product/7192580368316026022?gl=",
      product_id: "7192580368316026022",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=7192580368316026022",
      source: "colamco.com",
      price: "$762.69",
      extracted_price: 762.69,
      rating: 4.4,
      reviews: 7918,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdDV6czPCWc9XMwx00TkDiVe2zdeC3RV88o7DUSGHruEn7HruwXQDgu84qjwhVClO2O_lMqnO3L37pelsVFy-Niu4ApMC-&usqp=CAE",
      delivery: "Free delivery by Fri, Jan 6",
      isAdded: false
    },
    {
      position: 30,
      title: "Lenovo - Yoga 9I 14\" 2.8K Touch 2-in-1 Laptop with Pen - Intel Evo Platform ...",
      link: "https://www.hdvisionworks.com/Lenovo-Laptop-p/82LU0001US.htm?utm_source=plas",
      product_link: "https://www.google.com/shopping/product/16357021520262215851?gl=",
      product_id: "16357021520262215851",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=16357021520262215851",
      source: "HDvisionworks.com",
      price: "$1,439.00",
      extracted_price: 1439,
      rating: 4.4,
      reviews: 3438,
      extensions: [
        "Touchscreen",
        "US English"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDV6KAVjijtK99N-R83W51QkjYD7DcTy7wlC3nLvEsLzmUep1S3q-QBlvsoS-mm6KaI1mzZqWhpEBoONw8TF2DZDUhmel214EK_5fjRf_L&usqp=CAE",
      delivery: "Free delivery by Tue, Jan 10",
      isAdded: false
    },
    {
      position: 31,
      title: "Acer Swift x SFX14-41G-R7YT Creator Laptop | 14 inch Full HD 100% sRGB | AMD ...",
      link: "https://store.acer.com/en-us/swift-x-laptop-sfx14-41g-r7yt",
      product_link: "https://www.google.com/shopping/product/2993200175061638505?gl=",
      product_id: "2993200175061638505",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2993200175061638505",
      source: "Acer Store",
      price: "$949.99",
      extracted_price: 949.99,
      rating: 4.5,
      reviews: 35,
      extensions: [
        "Windows OS",
        "Triple Core"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSn6IT--xicYlt8G-mrSYbqYovtqb5pOWSNBtRfQ9PSm19ImFg15vdc7MJmFeYn9X-Ju5pCZqDJB2tvUHKLfcm7IqF_mXnv_DQPiiIjx3QWrU7iXaKXalY&usqp=CAE",
      delivery: "Delivery by Tue, Jan 10",
      isAdded: false
    },
    {
      position: 32,
      title: "Microsoft 13.5\" Surface Laptop 4 Touch - Intel i5, 8gb, 512gb ,Sandstone",
      link: "https://www.bestbuy.com/site/microsoft-surface-laptop-4-13-5-touch-screen-intel-core-i5-8gb-memory-512gb-solid-state-drive-sandstone/6455190.p?skuId=6455190&ref=212&loc=1&extStoreId=187",
      product_link: "https://www.google.com/shopping/product/18367860283201076976?gl=",
      product_id: "18367860283201076976",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=18367860283201076976",
      source: "Best Buy",
      price: "$800.99",
      extracted_price: 800.99,
      rating: 4.6,
      reviews: 1146,
      extensions: [
        "LOW PRICE",
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFHRyfKKRGEivMPQ3vm4hPTsH9Br1zrRRle9sR7Ou2GNf_xr8H0YFEj7mQjrkR7Zy-zohQGIsYK4YTz-MVyRENNMEmY4HyFE-U7NUmH5mh18JBf3KC3O2gzw&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "2.8 mi · In stock · Curbside",
      isAdded: false
    },
    {
      position: 33,
      title: "Asus - ROG 16\" WUXGA 144Hz Gaming Laptop - Intel Core i7 - 16GB Memory - Nvidia ...",
      link: "https://www.sears.com/asus-gu603he-211.zm16-asus-rog-m16-laptop-intel/p-A106797324?sid=ISxMP3xSOxGGxDTxSURF&srsltid=AeTuncohOVMUZDuM8_emSeUHtMxuJh3hnziLZE7r_t4eL-X6Zpph8FnEv3w",
      product_link: "https://www.google.com/shopping/product/12337043851985230685?gl=",
      product_id: "12337043851985230685",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12337043851985230685",
      source: "Sears - MichaelElectronics2",
      price: "$1,499.00",
      extracted_price: 1499,
      rating: 4.2,
      reviews: 1392,
      extensions: [
        "Touchscreen",
        "1920 x 1200"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBR3b2f9E6g5OP0dXPK1TPw6Djvy-0Ct-J5se4aaCTEseTfeDsDqScO1mMVpSHVr3zxGuNtnrpXLcVW_AEeGC18wDbnqKgIdOB6IEOz_I&usqp=CAE",
      delivery: "$9.90 delivery",
      isAdded: false
    },
    {
      position: 34,
      title: "Refurbished Apple MacBook Pro Retina Display 13.3\" i5 [2.7] [128gb] [8gb] MF839LL ...",
      link: "https://www.walmart.com/ip/UsedApple-MacBook-Pro-13-3-inch-Notebook-Computer-Retina-Display-2015-MF839LL-A-2-7-GHz-Intel-Core-i5-8GB-RAM-MacOS-128GB-SSD-Grade-B-Silver/179042518?wmlspartner=wlpa&selectedSellerId=1112",
      product_link: "https://www.google.com/shopping/product/3326466763272022668?gl=",
      product_id: "3326466763272022668",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=3326466763272022668",
      source: "Walmart - BuySPRY",
      price: "$291.89",
      extracted_price: 291.89,
      rating: 4.8,
      reviews: 18971,
      extensions: [
        "Mac OS",
        "Dual Core",
        "HDMI"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOkSKD0CPjFf1ReWpTji5_jHUUcOlVligsb_-JOJLTXxnf6aoQnDwEdIfff0KuRDGDQebiPE7CIvuy_YZlGVpSbwMfjbUGK5S9HyaTO7yGTpT7z-KLAC_XE9s&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 35,
      title: "Asus ROG Flow X13 Ultra Slim 2-in-1 Gaming Laptop, 13.4” 120Hz Fhd+ Display ...",
      link: "https://www.amazon.com/Display-GeForce-LPDDR4X-Windows-GV301QH-DS96/dp/B0B2ZZ1C3K?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ATVPDKIKX0DER",
      product_link: "https://www.google.com/shopping/product/13507436382541461893?gl=",
      product_id: "13507436382541461893",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=13507436382541461893",
      source: "Amazon.com",
      price: "$999.50",
      extracted_price: 999.5,
      rating: 4.4,
      reviews: 478,
      extensions: [
        "LOW PRICE",
        "Touchscreen",
        "For Gaming"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgpZ0tX9YoBxbevTwnSYGK7rnAk4MsC052DuK4835mOtv2bC3MtcPzqQGZonUWRUyGpmtLMiyZeIVMz_NXhVwOMEadJCQUS3UsSdsxnC6g9AIenv0g5sAmLQ&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 36,
      title: "Acer - Aspire 3 – 17.3\" HD+ Laptop – 11th Gen Intel Core i3-1115G4 – 8GB Memory ...",
      link: "https://www.shophq.com/Product/acer-aspire-3-17-3-8gb-ram-256gb-nvme-windows-11-home-laptop/519-760",
      product_link: "https://www.google.com/shopping/product/254583651607652441?gl=",
      product_id: "254583651607652441",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=254583651607652441",
      source: "ShopHQ.com",
      price: "$439.99",
      extracted_price: 439.99,
      rating: 4.3,
      reviews: 2384,
      extensions: [
        "Windows OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzCRot3MuP2C0kfvtz69YGV2pLbJcxGvaO_xTDTFyh5vRVjRUcBrupx7W-MZMp7rqDfkC5MP__uCrsDFVdGsQkCnk-CPblaw&usqp=CAE",
      delivery: "$9.99 delivery",
      isAdded: false
    },
    {
      position: 37,
      title: "Dell XPS 13 9310 Thin and Light Touchscreen Laptop, 13.4 inch Fhd+, Intel Core i7 ...",
      link: "https://www.boxunboxed.com/products/e189359?currency=USD&variant=42481368596637&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&srsltid=AeTuncouoNhxYdmuPCQKAnH6AZdpB2exYXtYi0FYBXOLpVAM75Xi6pBacNs",
      product_link: "https://www.google.com/shopping/product/17824620299244103753?gl=",
      product_id: "17824620299244103753",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17824620299244103753",
      source: "Box Unboxed",
      price: "$1,749.99",
      extracted_price: 1749.99,
      rating: 3.9,
      reviews: 6340,
      extensions: [
        "Touchscreen",
        "USB-C",
        "Blue"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmG28Wh-5tI2-9j8EfHQKSFn_CFVaFHBmCrkSNf70mWhDoSV3FpeEXVg5EmFGyOC7DBjZ_FFYFhQ78j8B9ETlA1--kBofBWBJVXXRii5-0biKyqBAh8SJq&usqp=CAE",
      delivery: "Free delivery by Jan 5 & Free 30-day returns",
      isAdded: false
    },
    {
      position: 38,
      title: "HP 14-ed0010nr 14\" Laptop",
      link: "https://www.microsoft.com/en-us/d/hp-14-ed0010nr-14-laptop/8VMJWGDQ9WQX/5S0W?OCID=AID2200065_seo_omc_goo&source=googleshopping",
      product_link: "https://www.google.com/shopping/product/6246509607333324809?gl=",
      product_id: "6246509607333324809",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=6246509607333324809",
      source: "Microsoft Store",
      price: "$499.99",
      extracted_price: 499.99,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTSHD-vFpPGMTORACKeJSCA4nYL-UOTSiM7DDEUDVZ8mwpfbd3SdfP-6AfYFYSGFGroh_SlIqg_sJpV8vCJ8U15U2YbHWCG1Y_VBexaEx3Mi9EHMEXWC7eJNQ&usqp=CAE",
      delivery: "Free delivery & Free 30-day returns",
      isAdded: false
    },
    {
      position: 39,
      title: "Acer 15.6\" Aspire 3 Notebook (Silver)",
      link: "https://www.bhphotovideo.com/c/product/1722157-REG/acer_nx_k7waa_001_15_6_aspire_3_a315_59_33xy.html?kw=ACA3155933XY&ap=y&smp=y&BI=E6540&srsltid=AeTuncr6TYP2JqLpTatz3IgMnpw__ZZYyAb_AY_JxfYUeVhgRQu5as5nL7I",
      product_link: "https://www.google.com/shopping/product/10176049176715339253?gl=",
      product_id: "10176049176715339253",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=10176049176715339253",
      source: "B&H Photo-Video-Audio",
      price: "$419.00",
      extracted_price: 419,
      rating: 4.3,
      reviews: 2384,
      extensions: [
        "Windows OS",
        "Quad Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPvrnd9nt0Irkx8mbn0iE0z2WFu5xFMouFs07U1Nm8ztWjTgxbi3-faGonwQWr3WtFUkxlcj6d8T0IfAin5Ux4rb8DFM9ZWX2I_1BoxQQ&usqp=CAE",
      tag: "FREE 1-DAY",
      delivery: "Free delivery by Wed, Dec 28",
      isAdded: false
    },
    {
      position: 40,
      title: "Lenovo Chromebook 3 11.6\" HD Laptop, Intel Celeron N4020, 4GB Ram, 64gb eMMC ...",
      link: "https://techtoschool.com/products/lenovo-chromebook-3-11-chromebook-new-in-box?variant=42319510864100&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic",
      product_link: "https://www.google.com/shopping/product/10144674893113821189?gl=",
      product_id: "10144674893113821189",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=10144674893113821189",
      source: "Tech to School",
      price: "$129.00",
      extracted_price: 129,
      rating: 4.5,
      reviews: 770,
      extensions: [
        "Chrome OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUtPOH-PNRm_LdEBv0f3z3dn-95rC4kSe_Se7j0gATltJIFlyA2yplhSgY6HY7Wh3U7sco1tSEdPjtKLLkHxIvna_YtsJHxwEhgZwiJ1XX2p_g3MNlk2Lj&usqp=CAE",
      delivery: "Free delivery by Tue, Jan 10",
      isAdded: false
    },
    {
      position: 41,
      title: "Apple MacBook Retina Laptop 12-Inch Dual-Core M3 1.2GHz - 8GB Ram - 256GB SSD ...",
      link: "https://www.gainsaver.com/used-refurbished-apple-macbook-12-inch-retina-silver-1-2ghz-core-m3-2017-mnyh2ll-a",
      product_link: "https://www.google.com/shopping/product/1741757859299992580?gl=",
      product_id: "1741757859299992580",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=1741757859299992580",
      source: "GainSaver",
      price: "$419.00",
      extracted_price: 419,
      rating: 4.7,
      reviews: 3755,
      extensions: [
        "Mac OS",
        "Dual Core",
        "USB-C"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuXLxIqmbwoKluWLFj53E5d_falz7uHkaWirYWeQi_xFs6WJ_AuBbOhH4DmczOQ75i82v2XAozDPd2xUAjSqXbLWSXgZMyYA&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 42,
      title: "HP - Envy x360 2-in-1 15.6\" Touch-Screen Laptop -amd Ryzen 7 5825u - 12gb Memory ...",
      link: "https://www.newegg.com/p/1TS-000D-0YS36?item=9SIAMRPJHA7290&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-notebooks-_-hp-_-9SIAMRPJHA7290&source=region&srsltid=AeTuncpyQpMrK3dngZE-14ZHLqAoGvG504y2nsJGT3h3zl1YNwQFTrhMg5A",
      product_link: "https://www.google.com/shopping/product/9859236744218001242?gl=",
      product_id: "9859236744218001242",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=9859236744218001242",
      source: "Newegg.com - Apollo Premium Electronics",
      price: "$869.00",
      extracted_price: 869,
      rating: 4.5,
      reviews: 6137,
      extensions: [
        "Touchscreen",
        "1920 x 1080"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSKqv3TdSXCX5kHk1535mg2KTNOTMFpmJsy4wd6oidsIxsReKU_RWGjHt4VWvfTamNFuE4XNk6k2edMTAFkrT6hZ94aAtwchb_cr9LI7-i&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 43,
      title: "Lenovo IdeaPad 1i 14\" HD Laptop, Intel Celeron N4020, 4GB Ram, 64gb eMMC, Cloud Grey",
      link: "https://www.target.com/p/lenovo-ideapad-1i-14-hd-laptop-intel-celeron-n4020-4gb-ram-64gb-emmc-cloud-grey/-/A-88039571?ref=tgt_adv_XS000000&AFID=google_pla_df_free_online&CPNG=storefront&adgroup=56-1",
      product_link: "https://www.google.com/shopping/product/2523272417975695935?gl=",
      product_id: "2523272417975695935",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2523272417975695935",
      source: "Target",
      price: "$169.99",
      extracted_price: 169.99,
      rating: 4.4,
      reviews: 606,
      extensions: [
        "Windows OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQB2_elBeM4nrvjyc9HnrF91ZvTjj3qTeA72II4QWOdl0iFX9w0t9xW4e_tQrSK9tT7DsGO9ftyOh13yCL52zRYG3fKNW-1tv3eu4eRNWZb&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 44,
      title: "Acer Swift 3 Thin & Light Laptop, 14\" Full HD IPS, AMD Ryzen 7 4700u Octa-core ...",
      link: "https://www.sears.com/acer-new-acer-swift-3-laptop-notebook-sf314/p-A085641482?sid=ISxMP3xSOxGGxDTxSURF&srsltid=AeTunco1N862TwqtasHCQv9Ky46QjimfPMEDi0Ibcz7D40un4gVHgG_vMio",
      product_link: "https://www.google.com/shopping/product/13257256446964027251?gl=",
      product_id: "13257256446964027251",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=13257256446964027251",
      source: "Sears - FastMedia",
      price: "$759.13",
      extracted_price: 759.13,
      rating: 4.5,
      reviews: 2043,
      extensions: [
        "Windows OS",
        "Octa Core"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScgjls6lCWyVewJI2CsOcOZWP7XTf10OmNAoZlluVZ5gQVXchK-8Noauiov9UMpPRt6v4HIfpU1kim3k4qqqGJVj782K_izSLV8gH26EBrFxqDlF5mkR33Zg&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 45,
      title: "MacBook Air 13-inch - M1 Chip, 8GB Ram, 256GB SSD - Apple - Space Gray",
      link: "https://www.bkstr.com/keiserstore/product/macbook-air-13---laptop---apple-m1-chip---8gb-memory---256gb-ssd---space-gray-99295-1",
      product_link: "https://www.google.com/shopping/product/1434325277585982111?gl=",
      product_id: "1434325277585982111",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=1434325277585982111",
      source: "Keiser University Online Bookstore",
      price: "$924.00",
      extracted_price: 924,
      rating: 4.8,
      reviews: 30350,
      extensions: [
        "Mac OS",
        "Octa Core",
        "USB-C"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKMzXFGaRNgAR7ljvDAMvFhr4Eq0-hYbgSjROaBDHA9FTMOh322pGvD1flnMzrY9ksg4MLqTwDh-VwuSVtfjCQLvkaLaoq5yRSHag5i3KgyGxUSvZbXBh0Hg&usqp=CAE",
      delivery: "Delivery by Fri, Jan 6",
      isAdded: false
    },
    {
      position: 46,
      title: "Lenovo ThinkPad X1 Yoga Gen 6 Intel Laptop, 14.0 inch IPS Touch ePrivacy Filter ...",
      link: "https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/x1-yoga-g6/20xy00bbus",
      product_link: "https://www.google.com/shopping/product/5775032597678154127?gl=",
      product_id: "5775032597678154127",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=5775032597678154127",
      source: "Lenovo",
      price: "$1,399.00",
      extracted_price: 1399,
      rating: 4.5,
      reviews: 795,
      extensions: [
        "Touchscreen",
        "1920 x 1200"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRECDzc8VSnnutBHtaIdil9mkoP_vwQlDTyoukD8HNzS819am3E832GckbL7WuP2g5ZQwYbfw12JLwUnlixluuJ47iQLJvI7suatnPjSNRsQPXYV1YI_M40&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 47,
      title: "Acer C738T-C44Z Chromebook Touchscreen 360 Hinge 4GB Ram 11.6 Laptop In-plane ...",
      link: "https://www.amazon.com/Acer-Touchscreen-Chromebook-C738T-C44Z-Refurbished/dp/B07FWPHDD5?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=AHBAQH5P0EYIZ",
      product_link: "https://www.google.com/shopping/product/12919123324738369001?gl=",
      product_id: "12919123324738369001",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12919123324738369001",
      source: "Amazon.com - Seller",
      price: "$89.90",
      extracted_price: 89.9,
      rating: 4.3,
      reviews: 167,
      extensions: [
        "Touchscreen",
        "1366 x 768"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSF5FaHG-Cxr2FQAxtxPuPxfS34T2dvczE_Y-2c2G7OkVrTxdREg7AOOh31225HsNiajwcoqqJZtNj2xcts1NocCPtS7ofjl5-_v8ISRtI&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 48,
      title: "Surface Laptop Go 2, 128gb, Corei5, 8GB Ram, Sage, Microsoft",
      link: "https://www.bestbuy.com/site/microsoft-surface-laptop-go-2-12-4-touch-screen-intel-core-i5-8gb-memory-128gb-ssd-latest-model-sage/6505200.p?skuId=6505200&ref=212&loc=1&extStoreId=187",
      product_link: "https://www.google.com/shopping/product/18045325390485514085?gl=",
      product_id: "18045325390485514085",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=18045325390485514085",
      source: "Best Buy",
      price: "$599.99",
      extracted_price: 599.99,
      rating: 4.4,
      reviews: 1149,
      extensions: [
        "SALE",
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlt6kSFYDrEiMyBanF6vdSb0GZ1n4zpdd1eb56mcT7R8WkfzfYFjNFvqOPt52JfAKwoLdDi9NzpQIC8m_905zPMkW-RTuPnyf1SroJmg_HG_AkvI7j_ski&usqp=CAE",
      tag: "SALE",
      delivery: "2.8 mi · In stock · Curbside",
      isAdded: false
    },
    {
      position: 49,
      title: "HP Pavilion Laptop - 15z-eh200 PC|AMD Ryzen 5|Windows 11 Home|256 GB SSD|AMD ...",
      link: "https://www.hp.com/us-en/shop/pdp/hp-pavilion-laptop-15z-eh200-pc-touch-optional-4v3l8av-1?&a=1",
      product_link: "https://www.google.com/shopping/product/13677576482604667755?gl=",
      product_id: "13677576482604667755",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=13677576482604667755",
      source: "hp.com",
      price: "$429.99",
      extracted_price: 429.99,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "SALE",
        "Hexa Core",
        "HDMI",
        "AMD GPU"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0lBs6ehMhD852Xs0PMxFdXl5ORTYBZJd8oIQ8YNzlqF1NSHT8QdPwQmLwvp_FzbRlqgIo9gCThnVI-7FNRvwJWE60cWgYGJB52DAKvWZcLL4MmjFG93cJJw&usqp=CAE",
      tag: "SALE",
      delivery: "Delivery by Thu, Jan 5",
      isAdded: false
    },
    {
      position: 50,
      title: "Microsoft Surface Book 13.5\" - Core i7 6600U 2.6 GHz - 16 GB RAM - 512 GB SSD ...",
      link: "https://www.newegg.com/silver-microsoft-surface-book-cr7-00001/p/N82E16834735163?item=9SIAEWJ8F18044&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-2-in-1%20laptops-_-microsoft-_-9SIAEWJ8F18044&source=region&srsltid=AeTuncpa7uswOTIdCuNr9nOd5uPKn1BTRZyuaJXxuz1z8cu5k_97bPGPip4",
      product_link: "https://www.google.com/shopping/product/1893015036065696036?gl=",
      product_id: "1893015036065696036",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=1893015036065696036",
      source: "Newegg.com - Shop Red tag Sales",
      price: "$699.00",
      extracted_price: 699,
      rating: 4.4,
      reviews: 761,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwn_yxFRaZx4kJDkJo7XCjJow2WgYJfKtEuDOTEwBdB-1_gqwyEG3EON5SxuIFjrVf19ZPwA3sQhsPHCXaAWO6ezuKhP_ZaPh46FaKOUHQqb0W6bdXayT03A&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 51,
      title: "Dell XPS 13 7390 2-in-1 Laptop 13.4\" Touch Intel i7-1065G7 1TB SSD 32GB Ram",
      link: "https://www.shop.com/DELL+XPS+7390+2+in+1+13+4+UHD+i7+1065G7+32+1TB+SSD+XPS7390+7916SLV+PUS+Open+Box-1954002407-p+.xhtml?fg=1",
      product_link: "https://www.google.com/shopping/product/12136874863811020268?gl=",
      product_id: "12136874863811020268",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12136874863811020268",
      source: "shop.com",
      price: "$1,649.63",
      extracted_price: 1649.63,
      rating: 3.8,
      reviews: 771,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSjbHxs_z4RWE4a68-X78BwzJk-5Fblrcsb2GohO1Uriza_2hUjPAAPf2QSrqMt_C_2JZjlY5U-UNLlLs32XaPBGdPgg3aWhy3wD9chJQATNsYtCCaGh6AU&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 52,
      title: "HP 15.6\" Laptop, Intel Core i3-1125G4, 8GB Memory, 256GB Ssd, Windows 11 Home ...",
      link: "https://www.staples.com/hp-15-dw3363st-15-6-laptop-intel-i3-8gb-memory-256gb-ssd-4z3a9ua-aba/product_24504670",
      product_link: "https://www.google.com/shopping/product/6454538161872183825?gl=",
      product_id: "6454538161872183825",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=6454538161872183825",
      source: "Staples",
      price: "$249.99",
      extracted_price: 249.99,
      rating: 4.6,
      reviews: 306,
      extensions: [
        "LOW PRICE",
        "Windows OS",
        "Quad Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNqJRLLRIEoe_k_kqvxaIOrYaiYQj2v6-hLlB2lib0TMxCzxToYv9laKShuk-vQd2SfSMxHPLQThW21ggEUqUsukaoUOUETuwZ-JrtMSY&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "17.6 mi · Limited stock",
      isAdded: false
    },
    {
      position: 53,
      title: "ThinkPad X1 Carbon Gen 10 Intel (14\") - Black",
      link: "https://www.ebid.net/us/for-sale/196379701416-lenovo-thinkpad-x1-carbon-gen-10-intel-14-black-part-number-21cb000dus-214029648.htm?from=googleshop_us",
      product_link: "https://www.google.com/shopping/product/5567719333533959417?gl=",
      product_id: "5567719333533959417",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=5567719333533959417",
      source: "eBid - musttech",
      price: "$1,765.00",
      extracted_price: 1765,
      rating: 4.4,
      reviews: 678,
      extensions: [
        "LOW PRICE",
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3rhXROYPWD4qOOeIw7wjS0COG81ZrJe1vBVsqvuojm-f8XBMRvThy6VA5d9cecLhijL7bjtsfWsecU6kY7zjqrM9FfiVQ_e4c8CEd62dIZYRqY0OjQdCzBw&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 54,
      title: "Asus - ROG Zephyrus 14 WQXGA 120Hz Gaming Laptop AMD Ryzen 9 16GB Ddr5 Memory AMD ...",
      link: "https://www.thepcwholesale.com/product/asus-rog-zephyrus-ga402rj-gaming-amd-ryzen-r9-6900hs-1tb-ssd-16gb-14-wqxga-2560x1600-120hz-win11-amd-radeon-rx-6700s-8192mb-mooonlight-white-backlit-keyboard-7-thin-3-64-lbs/",
      product_link: "https://www.google.com/shopping/product/7959793787669738877?gl=",
      product_id: "7959793787669738877",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=7959793787669738877",
      source: "Thepcwholesale.com",
      price: "$1,599.00",
      extracted_price: 1599,
      rating: 4.2,
      reviews: 635,
      extensions: [
        "With Backlit Keyboard"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLmmRiWh9sz0aIafJngzz9_KA0tAr1fyEg_AeRF3K8yUv59p3Wiy4aQ6QutB3MbQZ830MYtFoSlQb8eVQNB6pb5X6za6rY3nIjN5F90hwTJ5ZhRC-uWqV3&usqp=CAE",
      delivery: "Delivery by Wed, Jan 11",
      isAdded: false
    },
    {
      position: 55,
      title: "Samsung Chromebook 4 XE310XBA 11.6\" Rugged Chromebook - HD - 1366 x 768 - Intel ...",
      link: "https://www.cdw.com/product/samsung-chromebook-4-11.6-celeron-n4020-4-gb-ram-32-gb-emmc/6428357?cm_ven=acquirgy&cm_cat=google&cm_pla=NA-NA-Samsung_NB&cm_ite=6428357",
      product_link: "https://www.google.com/shopping/product/13526030955177919532?gl=",
      product_id: "13526030955177919532",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=13526030955177919532",
      source: "CDW",
      price: "$233.50",
      extracted_price: 233.5,
      rating: 3.9,
      reviews: 1674,
      extensions: [
        "Chrome OS",
        "Dual Core"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR15GbfzdGKEccbtvwP7A4zriAPuId_RQvSmUxIZ_R5VbjXk12FUEkFOZPv6jV8pMz2zJ3_7xTXP6MahTUxbQOzqbMlgkAbXrhlGIBiGVY&usqp=CAE",
      delivery: "Delivery by Fri, Dec 30",
      isAdded: false
    },
    {
      position: 56,
      title: "Dell Inspiron 15 3525 Laptop, 15.6\" Touch Screen, AMD Ryzen 7, 16GB Memory, 512gb ...",
      link: "https://www.officedepot.com/a/products/8360546/Dell-Inspiron-15-3525-Laptop-156/?utm_source=google&utm_medium=sag",
      product_link: "https://www.google.com/shopping/product/16302947570912675606?gl=",
      product_id: "16302947570912675606",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=16302947570912675606",
      source: "Office Depot",
      price: "$749.99",
      extracted_price: 749.99,
      rating: 3.8,
      reviews: 45162,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTHHcq8IlsguhSO4LTtzVn4Zyq4ZOx-1i_YIqwuoLEsw5i-e4NHwdlB08r6MVs9DCakEBC00wNrkXyzoYhT8XAGSQMccBLeZgXpkSbYeKjB0kFMr4FWeRb&usqp=CAE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 57,
      title: "Microsoft Surface Laptop Go - 12.4-inch - Core i5 1035g1 - 4 GB Ram - 64 GB eMMC",
      link: "https://nebumax.com/Products/overview/M023093111?srsltid=AeTuncr0bLvp7JcdTy0eoMhZMmRM8q5HoRiXx7L_IWmoUm9fiZH7akKM1Yk",
      product_link: "https://www.google.com/shopping/product/2686969049152172011?gl=",
      product_id: "2686969049152172011",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2686969049152172011",
      source: "NEBuMAX Business",
      price: "$262.89",
      extracted_price: 262.89,
      rating: 4.6,
      reviews: 76,
      extensions: [
        "LOW PRICE",
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTO7otWYX_-8d7VV9z4WYFIDx72yln2LU-E9HjoqMZaYd3Rbsi3EPv9fosan9BD0YGHE6ZFwNsys76Uhi0gkvXchyc568b1hcMpNi_bqJvI5XKSfgjqIOGKWQ&usqp=CAE",
      tag: "LOW PRICE",
      delivery: "$16.00 delivery",
      isAdded: false
    },
    {
      position: 58,
      title: "HP Pavilion Aero Laptop - 13z-be100|AMD Ryzen 5|Windows 11 Home|256 GB SSD|13.3 ...",
      link: "https://www.hp.com/us-en/shop/pdp/hp-pavilion-aero-laptop-13z-be100-502q9av-1?&a=1",
      product_link: "https://www.google.com/shopping/product/12573199950499925519?gl=",
      product_id: "12573199950499925519",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=12573199950499925519",
      source: "hp.com",
      price: "$529.99",
      extracted_price: 529.99,
      rating: 4.4,
      reviews: 1709,
      extensions: [
        "SALE",
        "Hexa Core",
        "1920 x 1200"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTP9YX0nA9ID5AVz_iY7mAoU4mRhmVKCGS0_pMVzB4QhogMKYwIhsDrE4t8sYQTtaNE_LCD0HOQbbeHjMZfagfXTqUgZ3AXHces5OKJjgzUkP-_0sE-yQF7sQ&usqp=CAE",
      tag: "SALE",
      delivery: "Delivery by Thu, Jan 5",
      isAdded: false
    },
    {
      position: 59,
      title: "Apple MacBook Pro 13.3\" with Retina Display, M2 Chip with 8-Core CPU and 10-Core ...",
      link: "https://www.tigerdirect.com/applications/searchtools/item-details.asp?EdpNo=1345024&SRCCODE=3WGOOGLEBASE&cm_mmc_o=VRqCjC7BBTkwCjCECjCE",
      product_link: "https://www.google.com/shopping/product/14771499133080565150?gl=",
      product_id: "14771499133080565150",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=14771499133080565150",
      source: "TigerDirect.com",
      price: "$2,499.00",
      extracted_price: 2499,
      rating: 4.7,
      reviews: 1062,
      extensions: [
        "Mac OS",
        "Octa Core",
        "USB-C"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRg7Nte2IBlt0tfQePe6NzzURvQjm01ma6FtdxS5_ED2lG_FQIyCYEM6BqhP3iNua5SktpZXDTITXwGaHLGG1Nxf6lp7shRYcbRsVmvkgFZngZo14fROqdX&usqp=CAE",
      delivery: "$6.99 delivery",
      isAdded: false
    },
    {
      position: 60,
      title: "Gateway 15.6 inch Ultra Slim Notebook, FHD, AMD Ryzen 7 with Radeon RX Vega 10 ...",
      link: "/shopping/product/14250919440054036949?q=laptop&sourceid=chrome&ie=UTF-8&prds=eto:13808390014540799380_1,pid:15559284178634445310,rsk:PC_17573773958492145643",
      product_link: "https://www.google.com/shopping/product/14250919440054036949?gl=",
      product_id: "14250919440054036949",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=14250919440054036949",
      source: "pro-distributing.com",
      price: "$389.00",
      extracted_price: 389,
      rating: 3.8,
      reviews: 88,
      extensions: [
        "HDMI",
        "1920 x 1080",
        "AMD CPU"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQw5dnc6540b09CBdB_TRFpnopuWIGoRtOpv-N9bhGCP-2iPoFdKZBw3GErPVdm7a6YPCbjzvLo8TJ96c9Sa5HeAUf1zIAS&usqp=CAE",
      delivery: "Google Guarantee",
      isAdded: false
    },
    {
      position: 61,
      title: "MacBook Pro 14-inch - M1 Pro, 16GB Ram, 512gb SSD - Space Gray - Apple",
      link: "https://www.insight.com/en_US/shop/product/MKGP3LL%2FA/APPLE/MKGP3LL%2FA/Apple-MacBook-Pro---14-2----M1-Pro---16-GB-RAM---512-GB-SSD---US/",
      product_link: "https://www.google.com/shopping/product/17174452880080940004?gl=",
      product_id: "17174452880080940004",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17174452880080940004",
      source: "Insight",
      price: "$1,999.00",
      extracted_price: 1999,
      rating: 4.8,
      reviews: 4235,
      extensions: [
        "Mac OS",
        "Octa Core",
        "USB-C"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlOOA8z0wTSPFzLcszsPq8m0-nmYirzTPHB5aMLa3dt2BQzYWEePxVpDdE05yEISgaQu8k_cOElI4bU9cLMsgTFOwglq-QiMIZ45f87pGo_60RMHs5pkgJY_g&usqp=CAE",
      delivery: "$25.38 delivery",
      isAdded: false
    },
    {
      position: 62,
      title: "Asus ROG Zephyrus G15 15.6\" AMD R9 16g 512G W10p",
      link: "https://www.ssense.com/en-us/everything-else/product/asus/black-rog-zephyrus-g15-ga503-gaming-laptop/11300121",
      product_link: "https://www.google.com/shopping/product/16361163236205680246?gl=",
      product_id: "16361163236205680246",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=16361163236205680246",
      source: "ssense.com",
      price: "$1,500.00",
      extracted_price: 1500,
      rating: 4.2,
      reviews: 1620,
      extensions: [
        "With Backlit Keyboard"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQuFbwjmjoL5HEte6vPgMiJtVmTvx81ORrjIYR2g1VK_johzjWgBKejVWC29vbcwNpgIZfG2ie_vhIhYRyM8QnwFzVUCQdCcPCXUvg7ImJP3dhB8LqDTzV0&usqp=CAE",
      delivery: "Free delivery by Jan 4 & Free 30-day returns",
      isAdded: false
    },
    {
      position: 63,
      title: "Microsoft Surface Go 3 10.5\" Intel Core I3, 8GB Ram, 128GB SSD",
      link: "https://icuracao.com/default/microsoft-surface-go-3-10-5-touchscreen-intel-core-i3-8gb-memory-128gb-ssd-device-only.html",
      product_link: "https://www.google.com/shopping/product/14524752048095512661?gl=",
      product_id: "14524752048095512661",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=14524752048095512661",
      source: "Curacao",
      price: "$639.99",
      extracted_price: 639.99,
      rating: 4.2,
      reviews: 541,
      extensions: [
        "Windows",
        "With Wi-Fi Only"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBGmtO8KX2tJ1GnEDr6Il21C058OFtTYFBqL1voVBO_J0Oc2cDnp_24vRynaNcgzF9Irz2WouigNrhpTI3wez_mohOgSEApt1kg9rHeCkr&usqp=CAE",
      delivery: "Free delivery est. by Jan 10",
      isAdded: false
    },
    {
      position: 64,
      title: "Acer Swift 5 SF514-55TA-74EC 14\" Laptop",
      link: "https://www.adorama.com/us1487230.html?refby=inc-google-shop-o&utm_source=google&utm_medium=organic&utm_campaign=organicshopping",
      product_link: "https://www.google.com/shopping/product/4595241081814603765?gl=",
      product_id: "4595241081814603765",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=4595241081814603765",
      source: "Adorama",
      price: "$799.00",
      extracted_price: 799,
      rating: 4.6,
      reviews: 177,
      extensions: [
        "Touchscreen",
        "Windows OS"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7veLiK8xgvFlGRLC4UN1nhqpOyQ7XvQISw5wQGvryy1COMw8vQEtqMXzPHquR7JI8Bwjj30DlXMc_8BYRYRkDCMvL428FPvWk1mEgtlomblM4Hs_AloKFOw&usqp=CAE",
      delivery: "$13.80 delivery",
      isAdded: false
    },
    {
      position: 65,
      title: "Asus - ZenBook 14\" 2.8K OLED Laptop - Intel Evo Platform - 12th Gen Core i5 ...",
      link: "https://www.bestbuy.com/site/asus-zenbook-14-2-8k-oled-laptop-intel-evo-platform-12th-gen-core-i5-processor-8gb-memory-256gb-ssd-ponder-blue/6494331.p?skuId=6494331&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/17345990087058263792?gl=",
      product_id: "17345990087058263792",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17345990087058263792",
      source: "Best Buy",
      price: "$599.99",
      extracted_price: 599.99,
      rating: 4.4,
      reviews: 2059,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNvwm3mLmzHSVqRNDvNxztTDb7uJNCqiJwlccLC2fH1LqrAQSMb9GbVPF5AoSlsaeUN67n1xl0MAwHa1Y9w_F1n_nxLujeClrhZer6aVP_x38xtjBLSf_u&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 66,
      title: "Acer Swift x SFX14-41G-R7YT Creator Laptop | 14 inch Full HD 100% sRGB | AMD ...",
      link: "https://www.newegg.com/p/1TS-000X-03CU0?item=9SIA8X5J601766&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-notebooks-_-acer%20america-_-9SIA8X5J601766&source=region&srsltid=AeTuncoEnaelhbAYxxzjEOBkXAeVQDUUXowapvQLuyM25nUxoZtBb6FI5Kk",
      product_link: "https://www.google.com/shopping/product/2993200175061638505?gl=",
      product_id: "2993200175061638505",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2993200175061638505",
      source: "Newegg.com - DemProductSales",
      price: "$844.99",
      extracted_price: 844.99,
      rating: 4.5,
      reviews: 35,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSn6IT--xicYlt8G-mrSYbqYovtqb5pOWSNBtRfQ9PSm19ImFg15vdc7MJmFeYn9X-Ju5pCZqDJB2tvUHKLfcm7IqF_mXnv_DQPiiIjx3QWrU7iXaKXalY&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 67,
      title: "Microsoft Surface Laptop 4 13.5\" AMD Ryzen 5 8GB/256GB Touch, Platinum - 5PB-00027",
      link: "https://www.thepcwholesale.com/product/microsoft-surface-4-amd-ryzen-5-4680u-256gb-8gb-13-5-2256x1504-touchscreen-win10-platinum-with-alcantara-material-palm-rest-backlit-keyboard-0-57-thin-2-79-lbs/",
      product_link: "https://www.google.com/shopping/product/11714554682577192550?gl=",
      product_id: "11714554682577192550",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=11714554682577192550",
      source: "Thepcwholesale.com",
      price: "$349.00",
      extracted_price: 349,
      rating: 4.6,
      reviews: 1146,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbbk6-8QOTMieeNSu8zLYHOLAPYLXYrW5SNVsSLLLTU4KK40ZUdTk7LTA5Gq3LONoBdYi_pzvSWdNYF9inbqUlDPu8c5Jt_LMnzpshOOztNR-OjMFAtuL1jg&usqp=CAE",
      tag: "SALE",
      delivery: "Delivery by Wed, Jan 11",
      isAdded: false
    },
    {
      position: 68,
      title: "HP - Victus 15.6\" Gaming Laptop - Intel Core i7-12650H - 16GB Memory - Nvidia ...",
      link: "https://www.bestbuy.com/site/hp-victus-15-6-gaming-laptop-intel-core-i7-12650h-16gb-memory-nvidia-geforce-rtx-3050-ti-512gb-ssd-mica-silver/6502943.p?skuId=6502943&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/1684404031213565408?gl=",
      product_id: "1684404031213565408",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=1684404031213565408",
      source: "Best Buy",
      price: "$849.99",
      extracted_price: 849.99,
      rating: 4.5,
      reviews: 1059,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdNjRfIWWYSwxx84W--HbgekM5vzriVuR4NjZZAMhKIlfFjgcg3Yc4RUXBb9cVFvx-fSFI1yCk0LEtSIpdEqwv0yT7_VXUIyiwEnYdznEx&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 69,
      title: "Lenovo Yoga 7 14IAL7 82QE000KUS 14\" Touchscreen Convertible 2 in 1 Not",
      link: "https://www.bestbuy.com/site/lenovo-yoga-7i-14-2-2k-touch-2-in-1-laptop-intel-evo-platform-core-i7-1255u-16gb-memory-512gb-ssd-stone-blue/6502222.p?skuId=6502222&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/10044931345328015459?gl=",
      product_id: "10044931345328015459",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=10044931345328015459",
      source: "Best Buy",
      price: "$999.99",
      extracted_price: 999.99,
      rating: 4.5,
      reviews: 1732,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSC8Xnyi4tvTogexYs_XTc6anMplco9Gtc6iS9AZzfZhN3vOxGa9CyHPb0AakNK9c9oQXvhwumgTxrb-OVMVDjVvplf9m8Ixj-9ChcMM2N-&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 70,
      title: "Asus - ROG Zephyrus 14 WQXGA 120Hz Gaming Laptop AMD Ryzen 9 16GB Ddr5 Memory AMD ...",
      link: "https://www.bestbuy.com/site/asus-rog-zephyrus-14-wqxga-120hz-gaming-laptop-amd-ryzen-9-16gb-ddr5-memory-amd-radeon-rx-6700s-1tb-pcie-4-0-ssd/6494638.p?skuId=6494638&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/7959793787669738877?gl=",
      product_id: "7959793787669738877",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=7959793787669738877",
      source: "Best Buy",
      price: "$1,099.99",
      extracted_price: 1099.99,
      rating: 4.2,
      reviews: 635,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLmmRiWh9sz0aIafJngzz9_KA0tAr1fyEg_AeRF3K8yUv59p3Wiy4aQ6QutB3MbQZ830MYtFoSlQb8eVQNB6pb5X6za6rY3nIjN5F90hwTJ5ZhRC-uWqV3&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 71,
      title: "Dell - G16 16.0\" QHD 165Hz Gaming Laptop - 12th Generation Intel Core i7 - 16GB ...",
      link: "https://www.bestbuy.com/site/dell-g16-16-0-qhd-165hz-gaming-laptop-12th-generation-intel-core-i7-16gb-memory-nvidia-geforce-rtx-3060-1tb-ssd-obsidian-black/6519388.p?skuId=6519388&ref=NS&loc=101",
      product_link: "https://www.google.com/shopping/product/17920584888952081503?gl=",
      product_id: "17920584888952081503",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17920584888952081503",
      source: "Best Buy",
      price: "$1,099.99",
      extracted_price: 1099.99,
      rating: 4.1,
      reviews: 22002,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEY0hO9jwmLDpqdDnTuemhkiPO8dPAsgd1p6B2zy_JYTCxI28ci7uuJs7NbBQaVIKkWDtx3toOwqolZ1UX3t2Yx7W5Xr7qA2zVImXxXco&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery by Thu, Dec 29",
      isAdded: false
    },
    {
      position: 72,
      title: "Asus ZenBook 14 UM425QA-XH99 - 14-inch - Ryzen 9 5900hx - 16 GB Ram - 1 TB SSD",
      link: "https://www.adorama.com/as425qaxh99.html?refby=inc-google-shop-o&utm_source=google&utm_medium=organic&utm_campaign=organicshopping",
      product_link: "https://www.google.com/shopping/product/9462244315486509127?gl=",
      product_id: "9462244315486509127",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=9462244315486509127",
      source: "Adorama",
      price: "$1,019.99",
      extracted_price: 1019.99,
      rating: 4.3,
      reviews: 35,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSb8JYF10CZNa6NxRzy7TEeDuAHXaKJDERBSreY40YsZ3F-3S3Di2QWqhVd0Mj0ZeZJpRsjXH7_kxFI8e9OvegrlSHuO7QvWEsRu_POUuU&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery by Fri, Dec 30",
      isAdded: false
    },
    {
      position: 73,
      title: "Samsung - Galaxy Book2 Pro 360 - 15.6\" Touchscreen Laptop - Intel Core i7 1260P ...",
      link: "https://www.bestbuy.com/site/samsung-galaxy-book2-pro-360-2-in-1-15-6-amoled-touch-screen-laptop-intel-12th-gen-evo-core-i7-16gb-ddr5-memory-1tb-ssd-silver/6501593.p?skuId=6501593&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/2474341877264994951?gl=",
      product_id: "2474341877264994951",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2474341877264994951",
      source: "Best Buy",
      price: "$999.99",
      extracted_price: 999.99,
      rating: 4.4,
      reviews: 585,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfEj3R_XUwepUgXMzpzYVWbn3TJGJkJifAV76hiebdf2ElV7w-xylw4M5ed5F3vw0NKN5Fs8-A7Ii5ExWGdjUiU5bVczb_5DZr-yXAqUo&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 74,
      title: "Lenovo IdeaPad Gaming 3 Ryzen 5 8GB 256GB 15.6\" Laptop",
      link: "https://www.adorama.com/le82sb15us.html?refby=inc-google-shop-o&utm_source=google&utm_medium=organic&utm_campaign=organicshopping",
      product_link: "https://www.google.com/shopping/product/4930836369115606739?gl=",
      product_id: "4930836369115606739",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=4930836369115606739",
      source: "Adorama",
      price: "$799.99",
      extracted_price: 799.99,
      rating: 4.1,
      reviews: 1527,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_5l8DG8GRQmN1GkrcsqzAGfvz4D1VoXOIdeIPDhTflOr9qOknURkkXD04ju9rwv2mUVlXTEzXxKtlESzi6G-YPD3BiaC-FbfRCFZNYKE&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery by Fri, Dec 30",
      isAdded: false
    },
    {
      position: 75,
      title: "Acer - Chromebook Spin 514 Laptop - 14.0\" Full HD 2-in-1 Touchscreen - AMD Ryzen ...",
      link: "https://www.bestbuy.com/site/acer-chromebook-spin-514-laptop-14-0-full-hd-2-in-1-touchscreen-amd-ryzen-3-5125c-8gb-128gb-wifi-6-silver/6513115.p?skuId=6513115&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/2924503750205632291?gl=",
      product_id: "2924503750205632291",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=2924503750205632291",
      source: "Best Buy",
      price: "$429.00",
      extracted_price: 429,
      rating: 4.3,
      reviews: 335,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpAQmxiCPIMZf_NKAoCbyhjQLY2olOQGVt7mEshd-RoTKCkkLADSyxXUv0O5jCA1qGJ8FIcV0llvt9vZN4B38RVSlYNLIT1g&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 76,
      title: "Lenovo IdeaPad Flex 5 16ALC7 16\" Touchscreen Convertible 2 in 1 Notebook - 82RA000DUS",
      link: "https://www.electronicexpress.com/catalog/204670/lenovo-82ra000dus-16-ideapad-flex-5-touchscreen-adaptable-2-in-1-notebook-amd-ryzen-75700u-16gb-512gb",
      product_link: "https://www.google.com/shopping/product/17157667914982162428?gl=",
      product_id: "17157667914982162428",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17157667914982162428",
      source: "Electronic Express",
      price: "$829.00",
      extracted_price: 829,
      rating: 4.4,
      reviews: 770,
      extensions: [
        "5% OFF"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIA3xPrKJrEraBSp7X0o443JR7wptVt_R7lgsHt9kamWDsLXyEtwjIsregZuEdJckgHpZIe70UWugl0lKTUw_D5oJROkHyJqvUu9A2-fM&usqp=CAE",
      tag: "5% OFF",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 77,
      title: "Microsoft Surface Pro 7 Tablet - 12.3 - 8 GB Ram - 128 GB SSD - Windows 10 Home ...",
      link: "https://www.newegg.com/platinum-microsoft-surface-pro-7-vdv-00001/p/N82E16834736092?item=9SIB71PGPR5185&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-2-in-1%20laptops-_-microsoft-_-9SIB71PGPR5185&source=region&srsltid=AeTuncqgVOuQeAuFi4n4AZW49rkXKumgD-KEx9q5s5MK_GjN6lIDs36dD1Y",
      product_link: "https://www.google.com/shopping/product/11219264899438425545?gl=",
      product_id: "11219264899438425545",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=11219264899438425545",
      source: "Newegg.com - Pro Price",
      price: "$549.00",
      extracted_price: 549,
      rating: 4.4,
      reviews: 1978,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRug_AdI5UglGNfBeX-myoqmaTujHBOl12jgI3yxjNkPfeUWYJdbvV4WxbBhRlSvMmnUJq1djy6HBoFk_N9tdFM-_PPTeBGTSJvLwoIr2c&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 78,
      title: "MSI - Sword 15.6\" 144Hz Gaming Laptop - Intel Core i7 - Nvidia GeForce RTX 3060 ...",
      link: "https://www.bestbuy.com/site/msi-sword-15-6-144hz-gaming-laptop-intel-core-i7-nvidia-geforce-rtx-3060-1tb-ssd-16gb-memory-black/6496176.p?skuId=6496176&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/17657275232939026774?gl=",
      product_id: "17657275232939026774",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17657275232939026774",
      source: "Best Buy",
      price: "$999.99",
      extracted_price: 999.99,
      rating: 4.3,
      reviews: 351,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTp5O3hoEJk0GVmNmJ8UU3JaB4rT_WmiplTwi8D5m0_wfflAFk19yXNLtu2JTFAvZuLQaf8dImY52eSwZ-ANKEZip6avXuGi7Wp-aPNVlub&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 79,
      title: "Samsung Chromebook 4+ 15.6\" Celeron N4000 4GB Ram 128GB eMMC",
      link: "https://www.bestbuy.com/site/samsung-15-6-chromebook-intel-celeron-4gb-memory-128gb-emmc-flash-memory-platinum-titan/6398412.p?skuId=6398412&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/17114097204492904686?gl=",
      product_id: "17114097204492904686",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=17114097204492904686",
      source: "Best Buy",
      price: "$299.00",
      extracted_price: 299,
      rating: 4.3,
      reviews: 2994,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnvSHMbkVyWBdjY1L9AgipZox3RWCIYaGpgXEYkfSMjAnIp6cuJ9Jq4nJ2zBm84m3MSGD6BbDkzF3t41aO5vOsyudG5caEBEyV-vLYFALJLapVteFyZK7c&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 80,
      title: "MSI GS66 Stealth 11UE-662 Gaming Laptop",
      link: "https://www.newegg.com/core-black-msi-gs-series-gs66-stealth-11ue-662-gaming/p/N82E16834156377?item=N82E16834156377&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-gaming%20laptops-_-msi-_-34156377&source=region",
      product_link: "https://www.google.com/shopping/product/5630648265917668832?gl=",
      product_id: "5630648265917668832",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=5630648265917668832",
      source: "Newegg.com",
      price: "$1,149.00",
      extracted_price: 1149,
      rating: 4.4,
      reviews: 845,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5yuSYqZjeBCutx4OKmEtD0KaG1sOpjPS70Zd83sOxiotYw2p--TopJPd6IiRl-IA4Gw-_vypnet6uZHOk9O8uD-NsOyKRkMP6wJK2y4raWlOk7Icn4-Ui&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery",
      isAdded: false
    },
    {
      position: 81,
      title: "HP - 2-in-1 14\" Touch-Screen Chromebook - Intel Celeron - 4GB Memory - 64gb eMMC ...",
      link: "https://www.bestbuy.com/site/hp-2-in-1-14-touch-screen-chromebook-intel-celeron-4gb-memory-64gb-emmc-natural-silver/6504562.p?skuId=6504562&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/9867294024650991417?gl=",
      product_id: "9867294024650991417",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=9867294024650991417",
      source: "Best Buy",
      price: "$279.00",
      extracted_price: 279,
      rating: 4.4,
      reviews: 3583,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSViD90-4h8cbqzixHIsXTTwio8G92imSWiHUy7e38nhM0jgXZcN7IIeb9zns76S-X0tOq6euwpoPA01bFXn8jjaVQIxO8sWGkLM_LeLzE&usqp=CAE",
      tag: "SALE"
    },
    {
      position: 82,
      title: "C433TA-YS344T - Asus C433 Chromebook Flip - 4 GB - Core m3-8100Y",
      link: "https://www.spaceboundsolutions.com/product/910622",
      product_link: "https://www.google.com/shopping/product/10841580288080943248?gl=",
      product_id: "10841580288080943248",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=10841580288080943248",
      source: "SpaceBoundSolutions.com",
      price: "$279.99",
      extracted_price: 279.99,
      rating: 4.4,
      reviews: 344,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_LQSH9XmdQ_1anC3lqGMlhtJhFJMPAB7Aa6lQn8fdw-PJPsaHg-kKBKV4W_LO-d2txcR07Hh5EiifSYYTjaq_k34l7qAUgoXYIn7PqHw&usqp=CAE",
      tag: "SALE",
      delivery: "Google Guarantee",
      isAdded: false
    },
    {
      position: 83,
      title: "HP EliteBook 650 G9 15.6\" Notebook - Full HD - 1920 x 1080 - Intel Core i7 12th",
      link: "https://www.bhphotovideo.com/c/product/802612675-USE/hp_6c0z7ut_aba_15_6_elitebook_650_g9.html",
      product_link: "https://www.google.com/shopping/product/14954308320225518719?gl=",
      product_id: "14954308320225518719",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=14954308320225518719",
      source: "B&H Photo Video Used",
      price: "$999.95",
      extracted_price: 999.95,
      rating: 4.2,
      reviews: 645,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKo1Ex9d_GWSyW0u4f4VFftuy3FcWeP04qCt67HAN_Tf1FZi9dUHx37num4spZxurzLPVHsBKh7N1O7oYIh8A1tlUMMtOtIgjk5FdMm4xx&usqp=CAE",
      tag: "SALE",
      delivery: "Free delivery by Fri, Dec 30",
      isAdded: false
    },
    {
      position: 84,
      title: "Asus - 17.3\" Chromebook - Intel Celeron N4500 - 4GB Memory - 64gb eMMC ...",
      link: "https://www.bestbuy.com/site/asus-17-3-chromebook-intel-celeron-n4500-4gb-memory-64gb-emmc-transparent-silver/6504419.p?skuId=6504419&ref=212&loc=1",
      product_link: "https://www.google.com/shopping/product/16909145348075270241?gl=",
      product_id: "16909145348075270241",
      serpapi_product_api: "https://serpapi.com/search.json?device=desktop&engine=google_product&google_domain=google.com&product_id=16909145348075270241",
      source: "Best Buy",
      price: "$189.00",
      extracted_price: 189,
      rating: 4.3,
      reviews: 387,
      extensions: [
        "SALE"
      ],
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIPzD9tTzA3K_DFxfiXxfqokBDIC4Ypm1wDwgqdMKRAGb5bVREE7F4rDxWOcmEJqzuZeNFB9pPedIqQVAUtj4PkJyrbyk1lNigA0IUan8&usqp=CAE",
      tag: "SALE"
    }
  ];
  

  export default laptops;