import React from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/",

	},
{
	title: "Branded Foods",
	path: "/",

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Dark Chocalates",
		path: "/",
	
	



	},
	{
		title: "Milk Chocalates",
		path: "/",
	
	},
	{
		title: "Nutty Chocalates",
		path: "/",
	
	},
	],
},

{
	title: "Chocolate",
	path: "/",

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Elite Chocalate",
		path: "/",
		iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	

	},
	{
		title: "Divine Creations",
		path: "/",
	
	},
	{
		title: "Cocoa Magic Fudge",
		path: "/",
	
	},
	],
},
{
	title: "Gift Boxes",
	path: "/",

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: " Choco Chocolate",
		path: "/",
	},
	{
		title: "Cokie Cholate",
		path: "/",
	},
	{
		title: "Cream Cholate",
		path: "/",
	},
	{
		title: "Crunchy Cholate",
		path: "/",
	},
	],
},


{
	title: "Pages",
	path: "/pages",
	// icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "About US",
		path: "/",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Services",
		path: "/",
		// icon: <IoIcons.IoIosPaper />,
		icon: <IoIcons.IoMdHelpCircle />,

		cName: "sub-nav",
	},
	{
		title: "FAQ",
		path: "/",
		icon: <FaIcons.FaEnvelopeOpenText />,

		// icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "News",
		path: "/",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Contact Us",
		path: "",
		icon: <FaIcons.FaPhone />,

		// icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "New Collection",
	path: "/newcollection",
},
];
