
// Navbar tabs
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

// ----- home page buttons ------
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


// Form Inputs
export const ADD_ITEM_INPUTS = [
    {
        label: "name",
        name: "Name",
        type: "text",
        placeholder: "Enter item name",
    },
    
    {
        label: "price",
        name: "Price",
        type: "number",
        placeholder: "Enter item price",
    },
    {
        label: "imageURL",
        name: "Image URL",
        type: "text",
        placeholder: "Enter Image URL",
    },
]