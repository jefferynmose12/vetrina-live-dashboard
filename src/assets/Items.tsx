import { AttachMoneyOutlined, BrushOutlined, ExtensionOutlined, HelpOutlineOutlined, HomeOutlined, LocalShippingOutlined, LogoutOutlined, PersonOutlineOutlined, RemoveRedEyeOutlined, SettingsOutlined, ShareOutlined, ShoppingCartOutlined, TocOutlined, TrackChangesOutlined, VerifiedOutlined, SubscriptionsOutlined } from '@mui/icons-material';

export const ItemsOne = [
    {
        icon : <HomeOutlined />,
        text : "Dashboard",
        path : "/Dashboard",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <ShoppingCartOutlined />,
        text : "Catalogue",
        path : "/Catalogue",
        badge : false,
        arrowdown : true,
    },
    {
        icon : <TocOutlined />,
        text : "Order",
        path : "/Order",
        badge : true,
        arrowdown : false,
    },
    {
        icon : <PersonOutlineOutlined />,
        text : "Customers",
        path : "/Customers",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <TrackChangesOutlined />,
        text : "Marketing",
        path : "/Marketing",
        badge : false,
        arrowdown : false,
        sublist : [ 'Discount codes', 'Exit intent', 'Checkout Features', 'Post-purchases conversion', 'Cart abandoment', 'Timer checkout', 'Sell on Social', 'Special Offer', 'Seasonal Offer' ]
    },
    {
        icon : <LocalShippingOutlined />,
        text : "Delivery Options",
        path : "/DeliveryOptions",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <AttachMoneyOutlined />,
        text : "Payment Options",
        path : "/PaymentOptions",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <BrushOutlined />,
        text : "Store Design",
        path : "/StoreDesign",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <SubscriptionsOutlined />,
        text : "Subscription",
        path : "/Subscription",
        badge : false,
        arrowdown : false
    },
    {
        icon : <VerifiedOutlined />,
        text : "Integrations",
        path : "/Integrations",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <ExtensionOutlined />,
        text : "Extensions",
        path : "/Extensions",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <SettingsOutlined />,
        text : "Settings",
        path : "/Settings",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <LogoutOutlined />,
        text : "Log Out",
        path : "/Logout",
        badge : false,
        arrowdown : false,
    },
]

export const ItemsTwo = [
    {
        icon : <HelpOutlineOutlined />,
        text : "Customer Support",
        path : "/CustomerSupport",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <ShareOutlined />,
        text : "Share your shop",
        path : "/Shareyourshop",
        badge : false,
        arrowdown : false,
    },
    {
        icon : <RemoveRedEyeOutlined />,
        text : "View your shop",
        path : "/Viewyourshop",
        badge : false,
        arrowdown : false,
    }
]