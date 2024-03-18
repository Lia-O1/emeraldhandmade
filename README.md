# Project Title - EmeraldHandmade
An online shop for unique, handcrafted goods.

EmeraldHandmade is an online platform where enthusiasts can discover unique handmade items.

## Code Showcase

This project is built with Next.js, React.js, TypeScript, Tailwind CSS, and other technologies. 

- Navbar: The project features an intuitive navigation bar. Users can explore various categories, each opening into a dropdown with three subcategories - Best Sellers, New Arrivals, and Editor Picks. Each dropdown menu displays an image and name for the subcategory. On small and medium screens, mobile menu opens  when a hamburger icon is clicked. Each category is represented as a list of subcategories, each of them includes an image and a name.
- The mobile version of the navigation displays a list of product categories when a hamburger icon is clicked. Each category is represented as a list item with a title and a grid of featured items. Each featured item includes an image and a link.
- ImageSlider: This component is used to display product images in a slider format. It uses the swiper library. The slider includes next and previous buttons for navigation, and styles for active and inactive states, providing visual feedback to the user.
- useCart: This is a custom hook that provides functionality for a shopping cart. It uses Zustand for state management and persists the cart state in local storage. The hook provides functions to add items to the cart, remove items from the cart, and clear the cart.
- Product page: This page displays the details of a specific product, it uses dynamic routing to handle different product IDs.


### Prerequisites

You need to have the latest version of Node.js and Yarn installed. If not, you can download Node.js from the official Node.js website [here](https://nodejs.org/en/download) and Yarn from the official Yarn website [here](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

### Dependencies

This project uses the following dependencies which will be installed automatically when you run `yarn install`:
- clsx
- lucide-react
- sonner
- swiper
- tailwind-merge
- zustand
- And others (refer to `package.json` for the full list)

### Installing

Follow these steps to get a development environment running:
1. Clone the repo: `git clone https://github.com/Lia-O1/emeraldhandmade`
2. Install Yarn packages: `yarn install`
3. Start the server: `yarn dev` (this will start the development server and open the app in a web browser)

## Live Version

A live version of the project is hosted on Vercel and can be accessed [here](https://emeraldhandmade.vercel.app/).
