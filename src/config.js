export const IMG_URL_ID =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Old Data - Swiggy API to get Restaurant data with corsanywhere which avoids cors error while opening application in any
//export const swiggy_api_URL =
//"https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";

// Live Data - Below api is using node.js module to fetch the data from swiggy api
export const swiggy_api_URL =
  "https://foodjunctionapi.onrender.com/restaurant?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";

//Old Data
//export const Restaurant_Menu_URL=
//  "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=";

//Live Data
export const Restaurant_Menu_URL =
  "https://foodjunctionapi.onrender.com/menu?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const Github_url = "https://api.github.com/users/shubhamjpakhale";

export const linkdin_url = "https://www.linkedin.com/in/shubhamjpakhale/";

export const github_link = "https://github.com/ShubhamJPakhale";

/* Mock FAQs for food delivery app in india */
export const FAQs = [
  {
    id: 472,
    title: "Why to order food from Food Junction?",
    description:
      "Food Junction is no profit no loss organization which is working for uplifting below from below average to certain level.. and which offers best food deliver at affordable prices and in less time period.. Happy Ordering !!!",
  },
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description: `We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number: 1800 47512  OR
        You can reach out us on Mobile no : +91 9999999999  ). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.`,
  },
  {
    id: 475,
    title: "Will Food Junction be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurant's responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "Yes, we have minimum amount for food order on our app which is ₹ 99 ",
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
];

/* Mock Data for restaurant card */
export const restaurantdata = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "200193",
      name: "Bebe Di Rasoi - Punjabi",
      uuid: "72a41fbe-920c-43c9-983a-ae74ff0e5df7",
      city: "6",
      area: "Senapati Bapat Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "qwokyvfzdond2snolvzw",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "bebe-di-rasoi-shivaji-nagar-shivaji-nagar",
        city: "pune",
      },
      cityState: "6",
      address:
        "NICE Foods, ETERNIA Rooftop, Terrace Level, B Wing, MCCIA Trade Tower, Next to Pavilion Mall, SB Road, Pune ",
      locality: "SB Road",
      parentId: 230548,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4200,
        message: "",
        title: "Delivery Charge",
        amount: "4200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6141741~p=1~eid=00000186-f5d5-8c50-170e-828a00600176",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "200193",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "34715",
      name: "Kok Pa Chinese",
      uuid: "24206c2c-604c-467c-ac29-6004c2d5f504",
      city: "6",
      area: "Shivaji Nagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "gvvdbegf1guwzww6rsbh",
      cuisines: ["Chinese", "Asian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "kok-pa-chinese-fc-road-shivaji-nagar",
        city: "pune",
      },
      cityState: "6",
      address: "1216, Patil Bungalow, FC Road, Pune",
      locality: "FC Road",
      parentId: 18863,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "34715",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "25486",
      name: "MH 12 Pav Bhaji",
      uuid: "0a27c1f4-36d9-4741-b403-395fd3f9f59f",
      city: "6",
      area: "Rasta Peth",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "cgf7qsoqsvfwletamxt4",
      cuisines: ["Snacks", "Pizzas", "Beverages", "Street Food"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "mh-12-pav-bhaji-rasta-peth-swargate",
        city: "pune",
      },
      cityState: "6",
      address: "326, Near Laxmi Sugandhalay, Rasta Peth, Pune",
      locality: "Rasta Peth",
      parentId: 8970,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "25486",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "6239",
      name: "Chaitanya Paranthas",
      uuid: "4d77127d-9e97-4f7b-b854-6785ee75e8a7",
      city: "6",
      area: "Shivajinagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "xofljpukrkkbftsjospa",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Chinese",
        "Thalis",
        "Beverages",
        "Desserts",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: "chaitanya-paranthas-fc-road-shivaji-nagar",
        city: "pune",
      },
      cityState: "6",
      address:
        "Opposite Fergusson College gate 3, Tukaram Paduka Chowk, FC Road, Pune",
      locality: "FC Road",
      parentId: 236,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "6239",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "21001",
      name: "Pizza Hut",
      uuid: "cfeb4576-6cd3-4edf-bee3-8f305caa54ca",
      city: "6",
      area: "Shivajinagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "vlad1u6uhq5pd8ta9o5d",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "pizza-hut-opposite-f-c-college-shivaji-nagar",
        city: "pune",
      },
      cityState: "6",
      address:
        "Pizza Hut, Millennium Plaza, cts no 1216/2/1216/3, opposite F C college, FC Road shivaji Nagar ,Pune",
      locality: "FC Road",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "21001",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "420757",
      name: "Biryani King",
      uuid: "fecbc197-a9c9-4050-a167-539f3e77ac35",
      city: "6",
      area: "Dhanori",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "fmzj5gavyo7xe2e7uypn",
      cuisines: ["North Indian", "Chinese", "Mughlai"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 9.100000381469727,
      slugs: {
        restaurant: "biryani-king-bhosari-bhosari",
        city: "pune",
      },
      cityState: "6",
      address:
        "shop no .01/02, zaika hotal, opp hp gas agency near mad momos lan no -13, tingre nagar , dhanori, pune -411015 ,pune",
      locality: "Adarsh Colony",
      parentId: 1573,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "65% off",
        shortDescriptionList: [
          {
            meta: "65% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
          {
            meta: "Free Veg Manchow Soup on orders above ₹809",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "65% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
          {
            meta: "Free Veg Manchow Soup on orders above ₹809",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "65% OFF",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "65% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
          {
            meta: "Free Veg Manchow Soup on orders above ₹809",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 9000,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 9000,
        message: "",
        title: "Delivery Charge",
        amount: "9000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6190822~p=7~eid=00000186-f5d5-8c50-170e-828c00600716",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "420757",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 9.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.5",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "25396",
      name: "Oven Story Pizza",
      uuid: "608536e5-cfb3-415c-883a-b1defe8b1adb",
      city: "6",
      area: "Narayan Peth",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
      cuisines: ["Pizzas", "Italian"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "ovenstory-pizza-model-colony-swargate",
        city: "pune",
      },
      cityState: "6",
      address:
        "S.no 457, Near V S Waikar & Sons Jewellers, Shaniwar Peth ,Pune 411030",
      locality: "Shaniwar Peth",
      parentId: 3534,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "25396",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "18802",
      name: "Faasos - Wraps & Rolls",
      uuid: "27843dc9-d9b4-4b4d-a5c9-802132ceb44b",
      city: "6",
      area: "Baner",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "pjpfluu0owz8pypzxyut",
      cuisines: ["Fast Food", "North Indian", "Street Food", "Desserts"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 9.899999618530273,
      slugs: {
        restaurant: "fassos-house-no-2-baner",
        city: "pune",
      },
      cityState: "6",
      address:
        "Sr. No. 182/2, Near Baner Nagari Bank, Baner Road, Baner Gaon, Pune, Maharashtra - 411045",
      locality: "Baner Road",
      parentId: 21809,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 9000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 9000,
        message: "",
        title: "Delivery Charge",
        amount: "9000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6214854~p=10~eid=00000186-f5d5-8c50-170e-828d00600a12",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "18802",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 9.899999618530273,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "561999",
      name: "La Pino'z Pizza",
      uuid: "8e4d5369-6a1c-4132-afbe-0d8521c894f7",
      city: "6",
      area: "Camp",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "xadtoeciwxfly4rdx79i",
      cuisines: ["Pizzas", "Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 2.700000047683716,
      slugs: {
        restaurant: "lapino’z-pizza-camp-camp",
        city: "pune",
      },
      cityState: "6",
      address: "Shop no5 Lapinoz Pizza Sterling CentreMGRoadPune411001",
      locality: "MG Road",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6206160~p=13~eid=00000186-f5d5-8c50-170e-828e00600d60",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "561999",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 2.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "32443",
      name: "Natural Ice Cream",
      uuid: "d8532707-f498-4f41-9f17-d7e85f5c26ae",
      city: "6",
      area: "Shivajinagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "p8af4xnqjzsei0umtgnn",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "natural-ice-cream-opp-tata-home-finance-shivaji-nagar",
        city: "pune",
      },
      cityState: "6",
      address:
        "Shop No.5, Pragati Bhavan, Opp. Tata Home Finance, Ghole Road, Nea Bal gandharva Chowk",
      locality: "JM Road",
      parentId: 2093,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "32443",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];