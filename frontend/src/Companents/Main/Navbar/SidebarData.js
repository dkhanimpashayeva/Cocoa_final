import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
    
      {
        title: "Home page",
        path: "/",
      },
    
    ],
  },
  {
    title: "Pages",
    path: "/pages",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "About US",
        path: "/pages/aboutus",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Services",
        path: "/pages/services",
        icon: <IoIcons.IoMdHelpCircle />,

        cName: "sub-nav",
      },
      {
        title: "FAQ",
        path: "/pages/faq",
        icon: <FaIcons.FaEnvelopeOpenText />,
      },
      {
        title: "News",
        path: "/pages/news",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Contact Us",
        path: "pages/contactus",
        icon: <FaIcons.FaPhone />,
      },
    ],
  },

  {
    title: "Branded Foods",
    path: "/",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Dark Chocalates",
        path: "/pages/aboutus",
      },
      {
        title: "Milk Chocalates",
        path: "/product/63f8a72cac34e5283067f1e5",
      },
      {
        title: "Nutty Chocalates",
        path: "/product/63f8a55aac34e5283067f1c0",
      },
    ],
  },

  {
    title: "Chocolate",
    path: "/product/63f8a1d1ac34e5283067f18f",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Elite Chocalate",
        path: "/product/63f8a3baac34e5283067f19f",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
      },
      {
        title: "Divine Creations",
        path: "/product/63f8a46fac34e5283067f1af",
      },
      {
        title: "Cocoa Magic Fudge",
        path: "http://localhost:3000/product/63f8a46fac34e5283067f1af",
      },
    ],
  },
  {
    title: "Gift Boxes",
    path: "/",
	subNav: [
		{
		  title: "Products",
		  path: "/products",
		},
	]

  },

  {
    title: "New Collection",
    path: "/",
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
		{
		  title: "Collections",
		  path: "/newcollection",
		},
	]
  },
];
