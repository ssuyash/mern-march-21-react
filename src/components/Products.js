import React, { useState } from 'react'
import Product from './Product'

const products = [
  {
    "offer_code": "a36ad0bd60f33b6b",
    "sku": "N14020231V",
    "sku_config": "N14020231V",
    "brand": "ACUVUE",
    "name": "Pack Of 90 Moist Daily Disposable Clear Lenses ",
    "plp_specifications": {},
    "price": 264,
    "sale_price": null,
    "url": "pack-of-90-moist-daily-disposable-clear-lenses",
    "image_key": "v1522154364/N14020231A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N14020231V",
    "product_rating": {
      "value": 4.7,
      "count": 12
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "e47afa09c2e731ac",
    "sku": "N36538902A",
    "sku_config": "N36538902A",
    "brand": "Bella",
    "name": "Elite Cloudy Grey 3 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 160,
    "sale_price": 68.4,
    "url": "elite-cloudy-grey-3-months-disposable-contact-lenses",
    "image_key": "v1588592004/N36538902A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N36538902A",
    "product_rating": {
      "value": 4.6,
      "count": 8
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "e5e4422b0082062c",
    "sku": "N13958891V",
    "sku_config": "N13958891V",
    "brand": "FRESHLOOK",
    "name": "Pack Of 30 One Day Color Pure Hazel Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 215,
    "sale_price": 159,
    "url": "pack-of-30-one-day-color-pure-hazel-disposable-contact-lenses",
    "image_key": "v1522674811/N13958891A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13958891V",
    "product_rating": {
      "value": 5,
      "count": 2
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "ba5461c009c1162b",
    "sku": "N13824665A",
    "sku_config": "N13824665A",
    "brand": "Dahab",
    "name": "Creamy 9 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 69.75,
    "sale_price": null,
    "url": "creamy-9-months-disposable-contact-lenses",
    "image_key": "v1522147967/N13824665A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13824665A",
    "product_rating": {
      "value": 4.3,
      "count": 7
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "c1939af4d0378a2c",
    "sku": "N15344772V",
    "sku_config": "N15344772V",
    "brand": "Alcon",
    "name": "Pack Of 90 Total 1 Daily Disposable Clear Lenses ",
    "plp_specifications": {},
    "price": 362,
    "sale_price": null,
    "url": "pack-of-90-total-1-daily-disposable-clear-lenses",
    "image_key": "v1529392474/N15344740A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N15344772V",
    "product_rating": {
      "value": 5,
      "count": 2
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "dd44efc55e7319fe",
    "sku": "N21480858V",
    "sku_config": "N21480858V",
    "brand": "ACUVUE",
    "name": "Pack Of 6 Two Weeks Disposable Oasys Contact Lenses ",
    "plp_specifications": {},
    "price": 189,
    "sale_price": null,
    "url": "pack-of-6-two-weeks-disposable-oasys-contact-lenses",
    "image_key": "v1588249699/N21480858A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N21480858V",
    "product_rating": {
      "value": 5,
      "count": 4
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "abe12948652a4eec",
    "sku": "N15501382V",
    "sku_config": "N15501382V",
    "brand": "Bausch + Lomb",
    "name": "Pack Of 6 SofLens 59 Monthly Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 75,
    "sale_price": null,
    "url": "pack-of-6-soflens-59-monthly-disposable-contact-lenses",
    "image_key": "v1530081834/N15501382A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N15501382V",
    "product_rating": {
      "value": 4.7,
      "count": 7
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "c3ed28b01d05b99a",
    "sku": "N13824693A",
    "sku_config": "N13824693A",
    "brand": "Dahab",
    "name": "Lumirere Blue 9 Months Contact Lenses ",
    "plp_specifications": {},
    "price": 69.95,
    "sale_price": null,
    "url": "lumirere-blue-9-months-contact-lenses",
    "image_key": "v1522147981/N13824693A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13824693A",
    "product_rating": {
      "value": 4.6,
      "count": 11
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f8b0aaf127033b8f",
    "sku": "N37775877V",
    "sku_config": "N37775877V",
    "brand": "Bausch + Lomb",
    "name": "Pack Of 30 Biotrue One Day Contact Lenses ",
    "plp_specifications": {},
    "price": 105,
    "sale_price": null,
    "url": "pack-of-30-biotrue-one-day-contact-lenses",
    "image_key": "v1588606464/N37775877A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N37775877V",
    "product_rating": {
      "value": 5,
      "count": 1
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "ea2fa7fc6cfebfec",
    "sku": "N19602522A",
    "sku_config": "N19602522A",
    "brand": "Bella",
    "name": "3 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 160,
    "sale_price": 88.95,
    "url": "3-months-disposable-contact-lenses",
    "image_key": "v1588578700/N19602522A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N19602522A",
    "product_rating": {
      "value": 4.8,
      "count": 5
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "fbc73bb220ff795b",
    "sku": "N21120203A",
    "sku_config": "N21120203A",
    "brand": "Fresh",
    "name": "Eye Look Lens Care Solution ",
    "plp_specifications": {},
    "price": 34,
    "sale_price": 13.5,
    "url": "eye-look-lens-care-solution",
    "image_key": "v1605095756/N21120203A_2",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N21120203A",
    "product_rating": {
      "value": 4.9,
      "count": 7
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "a6da82df410c6a1b",
    "sku": "N13254375A",
    "sku_config": "N13254375A",
    "brand": "OUTAD",
    "name": "Eyeglasses Chain ",
    "plp_specifications": {},
    "price": 9.9,
    "sale_price": null,
    "url": "eyeglasses-chain",
    "image_key": "v1517930973/N13254375A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13254375A",
    "product_rating": {
      "value": 4.1,
      "count": 38
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "dc4d2e9c0bcf3e1f",
    "sku": "N36538903A",
    "sku_config": "N36538903A",
    "brand": "Bella",
    "name": "Elite Wild Honey 3 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 160,
    "sale_price": 76.65,
    "url": "elite-wild-honey-3-months-disposable-contact-lenses",
    "image_key": "v1588592004/N36538903A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N36538903A",
    "product_rating": {
      "value": 4.8,
      "count": 6
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "a95decad182156db",
    "sku": "N45702340A",
    "sku_config": "N45702340A",
    "brand": "Komono",
    "name": "Sonic Eyeglass Chain ",
    "plp_specifications": {},
    "price": 110,
    "sale_price": 71,
    "url": "sonic-eyeglass-chain",
    "image_key": "v1622123858/N45702340A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702340A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "e2fd23785c4a746d",
    "sku": "N45702342A",
    "sku_config": "N45702342A",
    "brand": "Komono",
    "name": "Lenox Eyeglass Chain ",
    "plp_specifications": {},
    "price": 70,
    "sale_price": 49,
    "url": "lenox-eyeglass-chain",
    "image_key": "v1622123858/N45702342A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702342A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f907793cddb68edf",
    "sku": "N40449008A",
    "sku_config": "N40449008A",
    "brand": "OXYGEN",
    "name": "6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 199,
    "sale_price": 120,
    "url": "6-months-disposable-contact-lenses",
    "image_key": "v1603352205/N40449008A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40449008A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "e58a20cd3023213c",
    "sku": "N20971948A",
    "sku_config": "N20971948A",
    "brand": "Sharpdo",
    "name": "Sunglass Case ",
    "plp_specifications": {},
    "price": 12,
    "sale_price": 8.2,
    "url": "sunglass-case",
    "image_key": "v1615985483/N20971948A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N20971948A",
    "product_rating": {
      "value": 4.8,
      "count": 5
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f7b6eb05422a798e",
    "sku": "N45702339A",
    "sku_config": "N45702339A",
    "brand": "Komono",
    "name": "Sonic Eyeglass Chain ",
    "plp_specifications": {},
    "price": 110,
    "sale_price": 71,
    "url": "sonic-eyeglass-chain",
    "image_key": "v1622123857/N45702339A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702339A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "ac664e2b9ad7cc2e",
    "sku": "N45702341A",
    "sku_config": "N45702341A",
    "brand": "Komono",
    "name": "Lenox Eyeglass Chain ",
    "plp_specifications": {},
    "price": 70,
    "sale_price": 49,
    "url": "lenox-eyeglass-chain",
    "image_key": "v1622123858/N45702341A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702341A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f7685c37ed3d4acc",
    "sku": "N45702346A",
    "sku_config": "N45702346A",
    "brand": "Komono",
    "name": "Boa Eyeglass Chain ",
    "plp_specifications": {},
    "price": 70,
    "sale_price": 49,
    "url": "boa-eyeglass-chain",
    "image_key": "v1622123859/N45702346A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702346A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "ddb35d2c6a3671dc",
    "sku": "N45702344A",
    "sku_config": "N45702344A",
    "brand": "Komono",
    "name": "Boa Eyeglass Chain ",
    "plp_specifications": {},
    "price": 70,
    "sale_price": 49,
    "url": "boa-eyeglass-chain",
    "image_key": "v1622123859/N45702344A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702344A",
    "product_rating": {
      "value": 5,
      "count": 1
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "dd8a080e503d66de",
    "sku": "N40112970A",
    "sku_config": "N40112970A",
    "brand": "BOSE",
    "name": "Interchangeable Polarized Lenses For Bose Frames Soprano ",
    "plp_specifications": {},
    "price": 223,
    "sale_price": 189,
    "url": "interchangeable-polarized-lenses-for-bose-frames-soprano",
    "image_key": "v1615986102/N40112970A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40112970A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f55a635425aa2bed",
    "sku": "N40112958A",
    "sku_config": "N40112958A",
    "brand": "BOSE",
    "name": "Interchangeable Polarized Square Eyeglass Lenses ",
    "plp_specifications": {},
    "price": 223,
    "sale_price": 189,
    "url": "interchangeable-polarized-square-eyeglass-lenses",
    "image_key": "v1615986102/N40112958A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40112958A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f92f3e972d0ded9f",
    "sku": "N40112957A",
    "sku_config": "N40112957A",
    "brand": "BOSE",
    "name": "Tempo Style Interchangeable Lens ",
    "plp_specifications": {},
    "price": 223,
    "sale_price": 189,
    "url": "tempo-style-interchangeable-lens",
    "image_key": "v1615986102/N40112957A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40112957A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "bc55d3053c9767bf",
    "sku": "N40112969A",
    "sku_config": "N40112969A",
    "brand": "BOSE",
    "name": "Tempo Style Interchangeable Lens ",
    "plp_specifications": {},
    "price": 223,
    "sale_price": 189,
    "url": "tempo-style-interchangeable-lens",
    "image_key": "v1615986102/N40112969A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40112969A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "cd4f2f69f000a76f",
    "sku": "N40112964A",
    "sku_config": "N40112964A",
    "brand": "BOSE",
    "name": "Mirrored Replacement Lenses ",
    "plp_specifications": {},
    "price": 223,
    "sale_price": 189,
    "url": "mirrored-replacement-lenses",
    "image_key": "v1615986103/N40112964A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40112964A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "c738a3f8052e1f0d",
    "sku": "N40112960A",
    "sku_config": "N40112960A",
    "brand": "BOSE",
    "name": "Replacement Aviator Interchangeable Eyeglass Lenses ",
    "plp_specifications": {},
    "price": 167,
    "sale_price": 139,
    "url": "replacement-aviator-interchangeable-eyeglass-lenses",
    "image_key": "v1615986102/N40112960A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40112960A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "b048127b3d4e56ca",
    "sku": "N45702345A",
    "sku_config": "N45702345A",
    "brand": "Komono",
    "name": "Boa Eyeglass Chain ",
    "plp_specifications": {},
    "price": 70,
    "sale_price": null,
    "url": "boa-eyeglass-chain",
    "image_key": "v1622123859/N45702345A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N45702345A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "d7d4588fc77f1afc",
    "sku": "N13254795A",
    "sku_config": "N13254795A",
    "brand": "OUTAD",
    "name": "Anti-Skid Eyeglasses Chain Holder Strap ",
    "plp_specifications": {},
    "price": 7.9,
    "sale_price": null,
    "url": "anti-skid-eyeglasses-chain-holder-strap",
    "image_key": "v1565173989/N13254795A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13254795A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "be9d2589719bd68e",
    "sku": "N13254444A",
    "sku_config": "N13254444A",
    "brand": "OUTAD",
    "name": "Eyeglass Storage Case Holder ",
    "plp_specifications": {},
    "price": 11.88,
    "sale_price": 7.95,
    "url": "eyeglass-storage-case-holder",
    "image_key": "v1517931046/N13254444A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13254444A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f5ab9de7da1455ba",
    "sku": "N40714310A",
    "sku_config": "N40714310A",
    "brand": "IME",
    "name": "6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "6-months-disposable-contact-lenses",
    "image_key": "v1603352207/N40714310A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40714310A",
    "product_rating": {
      "value": 5,
      "count": 1
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "cc7622623f47236d",
    "sku": "N39886696A",
    "sku_config": "N39886696A",
    "brand": "AFLE",
    "name": "Original Cosmetic Contact Lens AFL-AGATE ",
    "plp_specifications": {},
    "price": 399,
    "sale_price": 117.9,
    "url": "original-cosmetic-contact-lens-afl-agate",
    "image_key": "v1597827420/N39886696A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N39886696A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "d16f429f50b26b0b",
    "sku": "N13254524A",
    "sku_config": "N13254524A",
    "brand": "OUTAD",
    "name": "Band Strap Sunglasses Cord Holder ",
    "plp_specifications": {},
    "price": 8.95,
    "sale_price": null,
    "url": "band-strap-sunglasses-cord-holder",
    "image_key": "v1599483966/N13254524A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13254524A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "a83f265c690a384d",
    "sku": "N35093498A",
    "sku_config": "N35093498A",
    "brand": "Alwan",
    "name": "Beaded Eyeglass Strap Rope ",
    "plp_specifications": {},
    "price": 75,
    "sale_price": 44.9,
    "url": "beaded-eyeglass-strap-rope",
    "image_key": "v1585725868/N35093498A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N35093498A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "dbb841a27d33361d",
    "sku": "N10997388A",
    "sku_config": "N10997388A",
    "brand": "ReadeREST",
    "name": "I-Ensa Eyeglass Holder ",
    "plp_specifications": {},
    "price": 39,
    "sale_price": 27.75,
    "url": "i-ensa-eyeglass-holder",
    "image_key": "v1502741269/N10997388A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N10997388A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "a75ad477114bc9ea",
    "sku": "N13958906V",
    "sku_config": "N13958906V",
    "brand": "Bella",
    "name": "Diamond Grey Green Monthly Disposable Contact Lenses 909000786035 ",
    "plp_specifications": {
      "Lens Type": "UV Protection"
    },
    "price": 170,
    "sale_price": 69,
    "url": "diamond-grey-green-monthly-disposable-contact-lenses-909000786035",
    "image_key": "v1522674823/N13958906A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N13958906V",
    "product_rating": {
      "value": 5,
      "count": 2
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f39ad9997c0488df",
    "sku": "N19602520A",
    "sku_config": "N19602520A",
    "brand": "Bella",
    "name": "3 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 195,
    "sale_price": 84.5,
    "url": "3-months-disposable-contact-lenses",
    "image_key": "v1542708876/N19602520A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N19602520A",
    "product_rating": {
      "value": 4.8,
      "count": 4
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "aad768f882f8433b",
    "sku": "N40714307A",
    "sku_config": "N40714307A",
    "brand": "IME",
    "name": "6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "6-months-disposable-contact-lenses",
    "image_key": "v1603352207/N40714307A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40714307A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "b24efea762625ecc",
    "sku": "N18946891A",
    "sku_config": "N18946891A",
    "brand": "Anesthesia",
    "name": "Anesthetic Tan (Brown And Hazel) 6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 72.3,
    "sale_price": null,
    "url": "anesthetic-tan-brown-and-hazel-6-months-disposable-contact-lenses",
    "image_key": "v1542024300/N18946891A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N18946891A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "bbb792bfefa95dbd",
    "sku": "N18946888A",
    "sku_config": "N18946888A",
    "brand": "Anesthesia",
    "name": "Anesthetic Mar (Turquoise) 6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 319,
    "sale_price": 108.5,
    "url": "anesthetic-mar-turquoise-6-months-disposable-contact-lenses",
    "image_key": "v1542024289/N18946888A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N18946888A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "e49e94eec5e2ff9f",
    "sku": "N40228893A",
    "sku_config": "N40228893A",
    "brand": "Dahab",
    "name": "10-Pieces One Day Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 129,
    "url": "10-pieces-one-day-disposable-contact-lenses",
    "image_key": "v1603352199/N40228893A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40228893A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f06e499fe02221cd",
    "sku": "N40449004A",
    "sku_config": "N40449004A",
    "brand": "Dahab",
    "name": "10-Pieces One Day Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "10-pieces-one-day-disposable-contact-lenses",
    "image_key": "v1603352203/N40449004A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40449004A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "cb65600ace7d9faf",
    "sku": "N39886697A",
    "sku_config": "N39886697A",
    "brand": "AFLE",
    "name": "Original Cosmetic Contact Lens AFL-VELD ",
    "plp_specifications": {},
    "price": 399,
    "sale_price": 117.9,
    "url": "original-cosmetic-contact-lens-afl-veld",
    "image_key": "v1597827420/N39886697A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N39886697A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "ddc6e0a0687142af",
    "sku": "N14020483V",
    "sku_config": "N14020483V",
    "brand": "ACUVUE",
    "name": "Pack Of 30 TruEye Daily Disposable Clear Lenses ",
    "plp_specifications": {},
    "price": 160,
    "sale_price": null,
    "url": "pack-of-30-trueye-daily-disposable-clear-lenses",
    "image_key": "v1522154527/N14020483A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N14020483V",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "b603451f2b97ee0a",
    "sku": "N40228886A",
    "sku_config": "N40228886A",
    "brand": "Dahab",
    "name": "10-Pieces One Day Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "10-pieces-one-day-disposable-contact-lenses",
    "image_key": "v1603352200/N40228886A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40228886A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "d5abc1b92b90d99b",
    "sku": "N40228901A",
    "sku_config": "N40228901A",
    "brand": "Dahab",
    "name": "10-Pieces One Day Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 129,
    "url": "10-pieces-one-day-disposable-contact-lenses",
    "image_key": "v1603352204/N40228901A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40228901A",
    "product_rating": {
      "value": 4,
      "count": 2
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "f7f59b89f2d6e1bd",
    "sku": "N15227991A",
    "sku_config": "N15227991A",
    "brand": "Anesthesia",
    "name": "6 Months Disposable Coloured Contact Lens Addict Oro ",
    "plp_specifications": {},
    "price": 325,
    "sale_price": 119,
    "url": "6-months-disposable-coloured-contact-lens-addict-oro",
    "image_key": "v1528701201/N15227991A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N15227991A",
    "product_rating": {
      "value": 4.3,
      "count": 10
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "e4e067c2866ab86d",
    "sku": "N40228890A",
    "sku_config": "N40228890A",
    "brand": "Dahab",
    "name": "10-Pieces One Day Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "10-pieces-one-day-disposable-contact-lenses",
    "image_key": "v1603352200/N40228890A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40228890A",
    "product_rating": {
      "value": 5,
      "count": 1
    },
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "ddf7fb2377e9b0ce",
    "sku": "N40714311A",
    "sku_config": "N40714311A",
    "brand": "IME",
    "name": "6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "6-months-disposable-contact-lenses",
    "image_key": "v1603352207/N40714311A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40714311A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  },
  {
    "offer_code": "a75626c2ffa850ee",
    "sku": "N40714313A",
    "sku_config": "N40714313A",
    "brand": "IME",
    "name": "6 Months Disposable Contact Lenses ",
    "plp_specifications": {},
    "price": 249,
    "sale_price": 99,
    "url": "6-months-disposable-contact-lenses",
    "image_key": "v1603352207/N40714313A_1",
    "is_buyable": true,
    "product_badges": [],
    "plp_product_group_code": "N40714313A",
    "flags": [
      "fbn"
    ],
    "delivery": "Arrives <em>Tomorrow, Aug 11</em>",
    "groups": []
  }
]

export default function Products() {
  const [prods, setProds] = useState(products)
  const [brandFilter, setBrandFilter] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [cart, setCart] = useState([])

  let handleAddToCart = (offerId) => {
    console.log(`Added to cart ${offerId}`)
    let cartData = [...cart]
    cartData.push({ itemId: offerId, qnty: 1 })
    setCart(cartData)

    //TODO : if item is already in cart then increase it's qnty
  }

  
  let handleCheckbox = (brand) => {
    let selectedBrands = [...brandFilter]
    if (brandFilter.includes(brand)) {
      selectedBrands.splice(brandFilter.indexOf(brand), 1)
    } else {
      selectedBrands.push(brand)
    }

    setBrandFilter(selectedBrands)
    //alert(`click working ${brand}`)
  }


  let getBrands = () => {
    let brands = []
    products.forEach(product => {
      if (!brands.includes(product.brand)) {
        brands.push(product.brand)
      }
    })
    return brands
  }


  let handleFilter = () => {
    console.log("we are here")
    let filtered = products.filter(prod => {
      console.log("inside filter")
      let cond = (
        brandFilter.includes(prod.brand)
        && prod.price >= parseInt(minPrice)
        && prod.price <= parseInt(maxPrice)
      )
      console.log(cond)
      return cond
    })
    setProds(filtered)
    console.log(brandFilter, minPrice, maxPrice)

  }
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-3">
          <div>
            <p className="h4">Brands</p>
            {getBrands().map(brand => {
              return <div>
                <input
                  type="checkbox"
                  checked={brandFilter.includes(brand)}
                  onChange={() => handleCheckbox(brand)}
                /> {brand}
              </div>
            })}
          </div>


          <div className="mt-5">
            <p className="h5">Price</p>

            <div className="d-flex">
              <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />-
              <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            </div>

          </div>

          <div className="mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={handleFilter}>Apply Filter</button>

          </div>



        </div>
        <div className="col-md-7">
          <p>Showing Results : {prods.length}</p>
          <div className="row">
            {prods.map(product => <div className="col-md-3">
              <Product product={product} handleAddToCart={handleAddToCart} />
            </div>)}
          </div>
        </div>

        <div className="col-md-2">
          Cart
            {cart.map(cartItem => {

          let item = products.find(product => product.offer_code == cartItem.itemId)

          return (<div className="row border">
            <div className="col-md-3">
              <img />
            </div>
            <div className="col-md-9">
              <p className="h5">{item.name}</p>
              <p>{item.brand}</p>
              <p>{item.price}</p>
              <p>Qnty : {cartItem.qnty}</p>
            </div>
          </div>)
        })}
        </div>
      </div>
    </div>
  )
}
