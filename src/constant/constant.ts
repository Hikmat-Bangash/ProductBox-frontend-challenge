export const LOGO_TITLE = "ProductBox";
export const ORDER_PAGE_TITLE = "Shipping Detail";
export const SHIPPING_FORM_TITLE = "Shipping Address";
export const SHIPPING_FORM_BUTTON = "Continue";
export const ADD_ITEM_PAGE_TITLE = "Add New Item";
export const ADD_ITEM_PAGE_BUTTON = "Submit";
export const CART_EMPTY_TITLE = "Your Shopping cart is empty!";
export const REMOVE_ITEM_BUTTON = "remove";
export const ORDER_SUMMARY_HEADING = "Order Summary";
export const CHECKOUT_BUTTON = "Checkout";
export const ADD_TO_CART_BUTTON = "Add to cart";
export const BASKET_ITEMS = "Items:";
export const SUB_TOTAL_HEADING = "Subtotal";
export const PLACED_ORDER_BUTTON = "Place Order";
export const USERNAME_LABEL = "Name:";
export const EMAIL_LABEL = "Email:";
export const HOME_ADDRESS_LABEL = "Home Address:";
export const POSTAL_CODE_LABEL = "Postal Code:";
export const CITY_LABEL = "City:";
export const NOT_FOUND_ERROR = "Error";
export const NOT_FOUND_ERROR_CODE = "404";
export const NOT_FOUND_MESSAGE = "Sorry, we couldn't find this page.";
export const NOT_FOUND_BACK_TO_HOME = "Back to Home";

export const LOGO_URL = "https://media.licdn.com/dms/image/C4D0BAQE3o3NS8S9Yzg/company-logo_200_200/0/1638522763263/productbox_logo?e=1706745600&v=beta&t=_OyqA-jjeNeLcWe5amPPI9e1sMyy4sjZM66uAZ1ctg8";


export const NAVIGATION_TABS = [
    {
        index: 1,
        name: "Home",
        redirectTo: "/"
    },
    {
        index: 2,
        name: "View items",
        redirectTo: "/items"
    },
    {
        index: 3,
        name: "Add item",
        redirectTo: "/addItem"
    },
]

export const HOMEPAGE_BUTTONS = [
    {
        index: 1,
        name: "View items",
        redirectTo: "/items"
    },
    {
        index: 2,
        name: "Cart",
        redirectTo: "/cart"
    },
    {
        index: 3,
        name: "Add Item",
        redirectTo: "/addItem"
    },
]


export const ADD_ITEM_INPUTS = [
    {
        label: "name",
        name: "name",
        type: "text",
        placeholder: "Enter item name",
    },
    
    {
        label: "price",
        name: "price",
        type: "text",
        placeholder: "Enter item price",
    },
    {
        label: "imageURL",
        name: "img",
        type: "text",
        placeholder: "Enter Image URL",
    },
]

export const SHIPPING_FORM = [
    {
        label: "Enter Fullname",
        name: "FullName",
        type: "text",
        placeholder: "Your's good name",
    },
    {
        label: "Email Address",
        name: "email",
        type: "email",
        placeholder: "example@gmail.com",
    },
    {
        label: "City",
        name: "city",
        type: "text",
        placeholder: "your city",
    },
    {
        label: "Enter Home address",
        name: "HomeAddress",
        type: "text",
        placeholder: "Your's residence address"
    },
    {
        label: "Postal Code",
        name: "PostalCode",
        type: "number",
        placeholder: "****"
    }

]