import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * -logo
 * -nav items
 * 
 * body
 * -search
 * -restruantContainer
 * -restruantCard
 * 
 * 
 * footer
 * -copyright
 * -links
 * address
 * contact
 * 
 */


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



const RestaurantCard = (props) => {
    const {resData}=props;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData.card.card.info.cloudinaryImageId}/>
            <h3>{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.cuisines }</h4>
            <h4>{resData.card.card.info.avgRating} stars</h4>
            <h4>{resData.card.card.info.costForTwo}</h4>
            <h4>{resData.card.card.info.sla.deliveryTime} minutes</h4>
            
        </div>
    ); 
};



const resList= [
     {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "41100",
              "name": "Nagarjuna - Since 1984",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/12/2/eb171618-c898-4d1b-bc66-9ce45afdd433_ba43594e-940c-4e00-8545-37858edda753.png",
              "locality": "Residency Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Andhra",
                "South Indian",
                "Biryani",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.5,
              "parentId": "509973",
              "avgRatingString": "4.5",
              "totalRatingsString": "50K+",
              "promoted": true,
              "adTrackingId": "cid=530b9223-a64f-4181-be13-056171042807~p=0~adgrpid=530b9223-a64f-4181-be13-056171042807#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=41100~plpr=COLLECTION~eid=4fc58430-53ea-48be-9bb1-d073f219dd2e~srvts=1781256579976~collid=83649",
              "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-13 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                    "description": "Top-rated for Andhra Food, based on user votes."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                          "description": "Top-rated for Andhra Food, based on user votes.",
                          "theme": ""
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "22K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "530b9223-a64f-4181-be13-056171042807",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=41100&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1117348",
              "name": "Yum Biryani Bowls - Customize Your Biryani",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/28/2af3ff84-faa1-4f28-812a-b069a247cc4c_a0691c51-2e28-4488-bd5d-0a33ce3b4f61.jpg",
              "locality": "Hebbala",
              "areaName": "R.T. Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "North Indian"
              ],
              "avgRating": 3.5,
              "parentId": "473603",
              "avgRatingString": "3.5",
              "totalRatingsString": "9",
              "promoted": true,
              "adTrackingId": "cid=d071f111-bb6e-430f-b76f-a7c5ddb1c9d7~p=2~adgrpid=d071f111-bb6e-430f-b76f-a7c5ddb1c9d7#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1117348~plpr=COLLECTION~eid=2cfd9755-3352-468d-a5fe-5ae5eddad272~srvts=1781256579976~collid=83649",
              "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 5.7,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "5.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-12 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "d071f111-bb6e-430f-b76f-a7c5ddb1c9d7",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1117348&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "30529",
              "name": "Karama",
              "cloudinaryImageId": "d2174e76ee28d6798770ba69470a7200",
              "locality": "Mosque Road",
              "areaName": "Frazer Town",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Arabian",
                "Biryani",
                "Desserts",
                "Mughlai",
                "North Indian"
              ],
              "avgRating": 4.4,
              "parentId": "9722",
              "avgRatingString": "4.4",
              "totalRatingsString": "16K+",
              "promoted": true,
              "adTrackingId": "cid=dd75dd8d-1ef1-434a-9121-370d7fb84aeb~p=3~adgrpid=dd75dd8d-1ef1-434a-9121-370d7fb84aeb#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30529~plpr=COLLECTION~eid=ee74e6c2-763a-49fe-b921-96ce471d08ad~srvts=1781256579976~collid=83649",
              "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-13 03:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "23K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "dd75dd8d-1ef1-434a-9121-370d7fb84aeb",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=30529&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1240924",
              "name": "Chickpet Donne  Biryani House",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/12/269d3e90-7681-4c9e-9502-27e25fff1dea_58c9edb9-ace5-4fe8-9518-1b2fc043300f.",
              "locality": "Basavanagudi",
              "areaName": "Basavanagudi",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.2,
              "parentId": "5634",
              "avgRatingString": "4.2",
              "totalRatingsString": "40",
              "promoted": true,
              "adTrackingId": "cid=870d3db4-fb78-4915-a998-3061fc670675~p=4~adgrpid=870d3db4-fb78-4915-a998-3061fc670675#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1240924~plpr=COLLECTION~eid=19f70c05-27f1-43cd-a48c-12b2c8611ed1~srvts=1781256579976~collid=83649",
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-12 17:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "870d3db4-fb78-4915-a998-3061fc670675",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1240924&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
       {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1270866",
              "name": "Wendy's Flavor Fresh Burgers",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/25/2ac54ba7-42d3-4243-acb5-4aef6e19bbef_1270866.JPG",
              "locality": "Ashok Nagar",
              "areaName": "St. Marks Road",
              "costForTwo": "₹750 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.1,
              "parentId": "470493",
              "avgRatingString": "4.1",
              "totalRatingsString": "6",
              "promoted": true,
              "adTrackingId": "cid=41e68551-d187-4045-bbef-b3217db5786e~p=7~adgrpid=41e68551-d187-4045-bbef-b3217db5786e#ag2~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1270866~plpr=COLLECTION~eid=1a6db25b-0979-45b6-90cd-c9eb1f8376f8~srvts=1781256579976~collid=83649",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-12 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹54",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "41e68551-d187-4045-bbef-b3217db5786e",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1270866&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "575160",
              "name": "Veg Darbar by Behrouz Biryani",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/5e5449c6-f897-4325-9541-d9eac10cd185_575160.JPG",
              "locality": "Malleshwaram",
              "areaName": "Seshadripuram",
              "costForTwo": "₹700 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 3.9,
              "veg": true,
              "parentId": "344904",
              "avgRatingString": "3.9",
              "totalRatingsString": "58",
              "promoted": true,
              "adTrackingId": "cid=a422c7c0-e486-45b6-8d6f-7d70ef3c6393~p=8~adgrpid=a422c7c0-e486-45b6-8d6f-7d70ef3c6393#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=575160~plpr=COLLECTION~eid=75aee524-962c-45c7-9526-0da5765260fd~srvts=1781256579976~collid=83649",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-12 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "Serves only 100% vegetarian food, with no non-veg items."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Serves only 100% vegetarian food, with no non-veg items.",
                          "theme": "",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "a422c7c0-e486-45b6-8d6f-7d70ef3c6393",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=575160&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
        {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "464509",
              "name": "Leon's - Burgers & Wings (Leon Grill)",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/e639700c-05f9-42d4-a761-ce481fc1cfda_464509.jpg",
              "locality": "Frazer Town",
              "areaName": "Frazer Town",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
              ],
              "avgRating": 4.3,
              "parentId": "371281",
              "avgRatingString": "4.3",
              "totalRatingsString": "12K+",
              "promoted": true,
              "adTrackingId": "cid=d480f254-6426-4b64-bb62-e373e92ebbd5~p=1~adgrpid=d480f254-6426-4b64-bb62-e373e92ebbd5#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=464509~plpr=COLLECTION~eid=4501a7a0-88e1-48ad-855b-b3896590b0e3~srvts=1781257032145~collid=83648",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-13 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                    "description": "Top-rated for Burger, based on user votes."
                  },
                  {
                    "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                    "description": "Top-rated among Local Gems, based on user votes."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                          "description": "Top-rated for Burger, based on user votes.",
                          "theme": ""
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                          "description": "Top-rated among Local Gems, based on user votes.",
                          "theme": ""
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                "secondaryDiscountCallout": "₹30 Cashback",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.6",
                  "ratingCount": "873"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "d480f254-6426-4b64-bb62-e373e92ebbd5",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=464509&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "868477",
              "name": "Haldiram's Restaurant",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/9/2d9b0b64-b9e7-4bad-9783-cc41b831b941_7d47c99e-697a-413a-b58f-8b403812f019.jpg_compressed",
              "locality": "Sampige Road",
              "areaName": "Malleshwaram",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Chaat",
                "Chinese",
                "South Indian",
                "Fast Food",
                "Snacks",
                "sandwich",
                "Burger",
                "pizza",
                "Pasta"
              ],
              "avgRating": 4.1,
              "parentId": "351771",
              "avgRatingString": "4.1",
              "totalRatingsString": "1.6K+",
              "promoted": true,
              "adTrackingId": "cid=c23ba16d-6353-4b2c-bcdc-4a859a7edd35~p=2~adgrpid=c23ba16d-6353-4b2c-bcdc-4a859a7edd35#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=868477~plpr=COLLECTION~eid=58634adc-3f36-4a17-b939-5775c03a5a3a~srvts=1781257032145~collid=83648",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-12 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "Exclusively available on Swiggy — you won't find it elsewhere."
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "Serves only 100% vegetarian food, with no non-veg items."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                          "description": "Exclusively available on Swiggy — you won't find it elsewhere.",
                          "theme": ""
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "Serves only 100% vegetarian food, with no non-veg items.",
                          "theme": ""
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "1.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "c23ba16d-6353-4b2c-bcdc-4a859a7edd35",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=868477&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "234701",
              "name": "BOSS Burger",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/b1ebeee0-3e74-4df7-a7b7-84d4c18bcf14_234701.jpg",
              "locality": "Ashok Nagar",
              "areaName": "Lavelle Road",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Burgers",
                "American",
                "Fast Food",
                "Snacks"
              ],
              "avgRating": 4.4,
              "parentId": "8594",
              "avgRatingString": "4.4",
              "totalRatingsString": "2.5K+",
              "promoted": true,
              "adTrackingId": "cid=75786977-41a4-462b-b727-6137ef52bccd~p=4~adgrpid=75786977-41a4-462b-b727-6137ef52bccd#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=234701~plpr=COLLECTION~eid=9df2c5de-d18e-4592-808c-914c6ee00c6d~srvts=1781257032145~collid=83648",
              "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-12 23:30:00",
                "opened": true
              },
              "badges": {

              },
              "select": true,
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                "secondaryDiscountCallout": "₹30 Cashback",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "75786977-41a4-462b-b727-6137ef52bccd",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=234701&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "505897",
              "name": "Big Bites",
              "cloudinaryImageId": "jvy2lz38rjpmskfdy9p4",
              "locality": "Hare Krishna Road",
              "areaName": "Malleshwaram",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Fast Food",
                "Snacks"
              ],
              "avgRating": 4,
              "parentId": "45509",
              "avgRatingString": "4.0",
              "totalRatingsString": "14",
              "promoted": true,
              "adTrackingId": "cid=3c83850c-0273-45ff-90eb-85ce08d8542a~p=5~adgrpid=3c83850c-0273-45ff-90eb-85ce08d8542a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=505897~plpr=COLLECTION~eid=da9839a6-67d9-495e-b0ba-7bbe724d0c95~srvts=1781257032145~collid=83648",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-13 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "3c83850c-0273-45ff-90eb-85ce08d8542a",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=505897&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1037841",
              "name": "Mr Phillys American Cheeseburgers",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/24/5944233f-a638-45fe-a5f7-8a0206c83a9d_5480c883-aeb3-43bb-be8b-4bf5d80431af.jpg",
              "locality": "Frazer Town",
              "areaName": "Frazer Town",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Burgers",
                "American",
                "Biryani",
                "Fast Food"
              ],
              "avgRating": 4.3,
              "parentId": "766605",
              "avgRatingString": "4.3",
              "totalRatingsString": "3.8K+",
              "promoted": true,
              "adTrackingId": "cid=88491f8b-d4c6-4b47-be5f-a0a7f5490d66~p=6~adgrpid=88491f8b-d4c6-4b47-be5f-a0a7f5490d66#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1037841~plpr=COLLECTION~eid=f2333038-3feb-48c2-919a-b95575c9e05f~srvts=1781257032145~collid=83648",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-06-13 05:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                "secondaryDiscountCallout": "₹30 Cashback",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "352"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "88491f8b-d4c6-4b47-be5f-a0a7f5490d66",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1037841&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">searching item</div>
            <div className="res-container"> 

               { resList.map((restaurant)=>(
                <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))}

            </div>
        </div>
    );
};

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);




