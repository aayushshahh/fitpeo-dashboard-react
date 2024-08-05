import {
  ShoppingCartIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  ShoppingBagIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import {
  GlobeAsiaAustraliaIcon,
  FireIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

import TablePhoto1 from "./table-photo1.jpg";
import TablePhoto2 from "./table-photo2.jpg";
import TablePhoto3 from "./table-photo3.jpg";
import TablePhoto4 from "./table-photo4.jpg";
import TablePhoto5 from "./table-photo5.jpg";
import TablePhoto6 from "./table-photo6.jpg";

export const RecentOrderList = [
  {
    image: TablePhoto1,
    name: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    image: TablePhoto2,
    name: "Jonathan McCarthy",
    orderNo: "15478257",
    amount: "$242.00",
    status: "Delivered",
  },
  {
    image: TablePhoto3,
    name: "Bruce Wayne",
    orderNo: "15478258",
    amount: "$1,121.23",
    status: "Cancelled",
  },
  {
    image: TablePhoto4,
    name: "Vincent Maradona",
    orderNo: "15478259",
    amount: "$479.69",
    status: "Pending",
  },
  {
    image: TablePhoto5,
    name: "Paul Rudd King",
    orderNo: "15478260",
    amount: "$999.98",
    status: "Delivered",
  },
  {
    image: TablePhoto6,
    name: "Gurpreet Singh Kaur",
    orderNo: "15478261",
    amount: "$670.45",
    status: "Pending",
  },
];

export const CardListData = [
  {
    mainIcon: <ShoppingCartIcon className="xl:size-8 md:size-7 size-6 text-cardIconBlue" />,
    cardIconBg: "bg-cardBlue",
    headline: "Total Orders",
    number: "75",
    arrowIcon: <ArrowUpCircleIcon className="size-4" />,
    arrowPercentage: "3",
    status: "up",
  },
  {
    mainIcon: <ShoppingBagIcon className="xl:size-8 md:size-7 size-6 text-cardIconGreen" />,
    cardIconBg: "bg-cardGreen",
    headline: "Total Delivered",
    number: "70",
    arrowIcon: <ArrowDownCircleIcon className="size-4" />,
    arrowPercentage: "3",
    status: "down",
  },
  {
    mainIcon: <ShoppingBagIcon className="xl:size-8 md:size-7 size-6 text-cardIconRed" />,
    cardIconBg: "bg-cardRed",
    headline: "Total Cancelled",
    number: "05",
    arrowIcon: <ArrowUpCircleIcon className="size-4" />,
    arrowPercentage: "3",
    status: "up",
  },
  {
    mainIcon: <CircleStackIcon className="xl:size-8 md:size-7 size-6 text-cardIconPink" />,
    cardIconBg: "bg-cardPink",
    headline: "Total Revenue",
    number: "$12k",
    arrowIcon: <ArrowDownCircleIcon className="size-4" />,
    arrowPercentage: "3",
    status: "down",
  },
];

export const ActionsListData = [
  {
    iconBg: "bg-cardRed",
    icon: <GlobeAsiaAustraliaIcon className="md:size-10 size-8" />,
    iconColor: "text-cardIconRed",
    actionTitle: "Goals",
  },
  {
    iconBg: "bg-cardBlue",
    icon: <FireIcon className="md:size-10 size-8" />,
    iconColor: "text-cardIconBlue",
    actionTitle: "Popular Dishes",
  },
  {
    iconBg: "bg-menuBlue",
    icon: <ClipboardDocumentIcon className="md:size-10 size-8" />,
    iconColor: "text-menuIconBlue",
    actionTitle: "Menus",
  },
];

export const CustomerFeedbackData = [
  {
    image: TablePhoto6,
    name: "Jenny Wilson",
    starRating: [1, 1, 1, 1, 0],
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    image: TablePhoto2,
    name: "Daniel Russel",
    starRating: [1, 1, 1, 1, 1],
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
  },
  {
    image: TablePhoto4,
    name: "Devon Lane",
    starRating: [1, 1, 1, 1, 0],
    feedback:
      "The tacos were absolutely amazing! I tried the carne asada and al pastor, both were flavorful and juicy. The guacamole was fresh and perfectly seasoned. The ambiance of the restaurant was vibrant and authentic. Definitely coming back for more!",
  },
  {
    image: TablePhoto1,
    name: "Kate Winslet",
    starRating: [1, 1, 1, 1, 0],
    feedback:
      "The enchiladas were delicious, and the salsa had the perfect amount of heat. The margaritas were top-notch. Service was a bit slow, but the food made up for it. Great spot for a casual night out.",
  },
  {
    image: TablePhoto3,
    name: "Carlos Santiago",
    starRating: [1, 1, 1, 0, 0],
    feedback:
      "The food was good, but a bit too spicy for my taste. The churros for dessert were a highlight – crispy on the outside and soft on the inside. The staff was friendly and attentive.",
  },
  {
    image: TablePhoto5,
    name: "Russel Peters",
    starRating: [1, 1, 1, 1, 1],
    feedback:
      "Best Mexican food I've had in a long time! The burritos were huge and packed with flavor. Loved the atmosphere and the live mariachi band added a nice touch. Highly recommend!",
  },
];