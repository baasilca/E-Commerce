const _offers = [
    {
        id: 1,
        title: "60% OFF up to Rs120",
        description: "Use code ZCRICKET",
        icon: require('../assets/ThemeImages/discount.png')
    },
    {
        id: 2,
        title: "60% OFF up to Rs120",
        description: "Use code ZCRICKET",
        icon: require('../assets/ThemeImages/discount.png')
    },
    {
        id: 3,
        title: "60% OFF up to Rs120",
        description: "Use code ZCRICKET",
        icon: require('../assets/ThemeImages/discount.png')
    },
    {
        id: 4,
        title: "60% OFF up to Rs120",
        description: "Use code ZCRICKET",
        icon: require('../assets/ThemeImages/discount.png')
    },
];
const _categories = [
    {
        id: 1,
        title: "Rice",
        image: require('../assets/CategoryImages/rice.png'),
        category: "rice"
    },
    {
        id: 2,
        title: "Tea",
        image: require('../assets/CategoryImages/tea.png'),
        category: "tea"
    },
    {
        id: 3,
        title: "Drink",
        image: require('../assets/CategoryImages/drinks.png'),
        category: "drinks"
    },
    {
        id: 4,
        title: "Others",
        image: require('../assets/CategoryImages/others.png'),
        category: "others"
    },
];
const _rice = [
    {
        id: "R1",
        item_name: "Mogra Rice",
        sale_price: "₹379/kg",
        original_price: "₹405",
        offer_tag: "-6%",
        image: require('../assets/ProductImages/rice_1.png'),
        price_for_calculations: 379,
        offer: true
    },
    {
        id: "R2",
        item_name: "Brown Rice",
        sale_price: "₹304/kg",
        original_price: "₹360",
        offer_tag: "-15%",
        price_for_calculations: 304,
        image: require('../assets/ProductImages/rice_2.png'),
        offer: false
    },
    {
        id: "R3",
        item_name: "Wild Rice",
        sale_price: "₹475/kg",
        original_price: "₹695",
        offer_tag: "-31%",
        price_for_calculations: 475,
        image: require('../assets/ProductImages/rice_3.png'),
        offer: true
    },
    {
        id: "R4",
        item_name: "Jasmine Rice",
        sale_price: "₹267/kg",
        original_price: "₹400",
        offer_tag: "-33%",
        price_for_calculations: 267,
        image: require('../assets/ProductImages/rice_4.png'),
        offer: true
    },
    {
        id: "R5",
        item_name: "Poha Rice",
        sale_price: "₹71/kg",
        original_price: "₹109",
        offer_tag: "-34%",
        price_for_calculations: 71,
        image: require('../assets/ProductImages/rice_5.png'),
        offer: true
    },
];
const _tea = [
    {
        id: "T1",
        item_name: "Pure Tea",
        sale_price: "₹183/kg",
        original_price: "₹220",
        offer_tag: "-16%",
        image: require('../assets/ProductImages/tea1.png'),
        price_for_calculations: 183,
        offer: true
    },
    {
        id: "T2",
        item_name: "Green Tea",
        sale_price: "₹348/kg",
        original_price: "348",
        offer_tag: "-0%",
        price_for_calculations: 348,
        image: require('../assets/ProductImages/tea2.png'),
        offer: false
    },
    {
        id: "T3",
        item_name: "Gold Tea",
        sale_price: "₹305/kg",
        original_price: "₹470",
        offer_tag: "-35%",
        price_for_calculations: 305,
        image: require('../assets/ProductImages/tea3.png'),
        offer: true
    },
    {
        id: "T4",
        item_name: "Loyd Cylone Tea",
        sale_price: "₹307/kg",
        original_price: "₹362",
        offer_tag: "-15%",
        price_for_calculations: 307,
        image: require('../assets/ProductImages/tea4.png'),
        offer: true
    },
    {
        id: "T5",
        item_name: "Masala Tea",
        sale_price: "₹159/kg",
        original_price: "₹199",
        offer_tag: "-20%",
        price_for_calculations: 159,
        image: require('../assets/ProductImages/tea5.png'),
        offer: true
    },
];
const _drinks = [
    {
        id: "D1",
        item_name: "7up",
        sale_price: "₹84/kg",
        original_price: "₹99",
        offer_tag: "-15%",
        image: require('../assets/ProductImages/drinks1.png'),
        price_for_calculations: 84,
        offer: true
    },
    {
        id: "D2",
        item_name: "Thums up",
        sale_price: "₹132/kg",
        original_price: "₹160",
        offer_tag: "-17%",
        price_for_calculations: 132,
        image: require('../assets/ProductImages/drinks2.png'),
        offer: true
    },
    {
        id: "D3",
        item_name: "Cocacola",
        sale_price: "₹132/kg",
        original_price: "₹160",
        offer_tag: "-17%",
        price_for_calculations: 132,
        image: require('../assets/ProductImages/drinks3.png'),
        offer: true
    },
    {
        id: "D4",
        item_name: "Mirinda",
        sale_price: "₹40/kg",
        original_price: "₹40",
        offer_tag: "-0%",
        price_for_calculations: 40,
        image: require('../assets/ProductImages/drinks4.png'),
        offer: false
    },
];
const _others = [
    {
        id: "O1",
        item_name: "Fish",
        sale_price: "₹84/kg",
        original_price: "₹99",
        offer_tag: "-15%",
        image: require('../assets/ProductImages/product_1.png'),
        price_for_calculations: 84,
        offer: true
    },
    {
        id: "O2",
        item_name: "Chicken",
        sale_price: "₹132/kg",
        original_price: "₹160",
        offer_tag: "-17%",
        price_for_calculations: 132,
        image: require('../assets/ProductImages/product_2.png'),
        offer: true
    },
    {
        id: "O3",
        item_name: "Kora Fish ",
        sale_price: "₹132/kg",
        original_price: "₹160",
        offer_tag: "-17%",
        price_for_calculations: 132,
        image: require('../assets/ProductImages/product_3.png'),
        offer: true
    },
    {
        id: "O4",
        item_name: "Whole Chicken",
        sale_price: "₹40/kg",
        original_price: "₹40",
        offer_tag: "-0%",
        price_for_calculations: 40,
        image: require('../assets/ProductImages/product_4.png'),
        offer: false
    },
    {
        id: "O5",
        item_name: "Cut Fish",
        sale_price: "₹40/kg",
        original_price: "₹40",
        offer_tag: "-0%",
        price_for_calculations: 40,
        image: require('../assets/ProductImages/product_5.png'),
        offer: false
    },
    {
        id: "O6",
        item_name: "Chillie",
        sale_price: "₹40/kg",
        original_price: "₹40",
        offer_tag: "-0%",
        price_for_calculations: 40,
        image: require('../assets/ProductImages/product_6.png'),
        offer: false
    },
    {
        id: "O7",
        item_name: "Cut Chicken",
        sale_price: "₹40/kg",
        original_price: "₹40",
        offer_tag: "-0%",
        price_for_calculations: 40,
        image: require('../assets/ProductImages/product_7.png'),
        offer: false
    },
    {
        id: "O8",
        item_name: "Tomato",
        sale_price: "₹40/kg",
        original_price: "₹40",
        offer_tag: "-0%",
        price_for_calculations: 40,
        image: require('../assets/ProductImages/product_8.png'),
        offer: false
    },
];

const _cart_timeline = [
    {
        id:1,
        time:"Morning",
        timeline:"10AM to 11AM",
        icon:"sunny-outline"
    },
    {
        id:2,
        time:"Evening",
        timeline:"2PM to 3PM",
        icon:"moon-outline"
    },
    {
        id:3,
        time:"Evening",
        timeline:"6PM to 7PM",
        icon:"moon-outline"
    },
]

const dummyDB = {
    offers: _offers,
    categories: _categories,
    rice: _rice,
    tea: _tea,
    drinks: _drinks,
    others: _others,
    cartTimeline: _cart_timeline,
};

export default dummyDB;
