export const PRODUCT_CATEGORIES = [
  {
    label: "Home & Living",
    value: "home-living" as const,
    featured: [
      {
        name: "Best Sellers",
        href: "/products?category=home-living&subcategory=bestsellers",
        imageSrc: "/images/navbar/home-living_bestsellers.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=home-living&subcategory=newarrivals",
        imageSrc: "/images/navbar/home-living_new-arrivals.jpg",
      },
      {
        name: "Editor pics",
        href: "/products?category=home-living&subcategory=editorpics",
        imageSrc: "/images/navbar/home-living_editor-pics.jpg",
      },
    ],
  },
  {
    label: "Health & Beauty",
    value: "health-beauty" as const,
    featured: [
      {
        name: "Best Sellers",
        href: "/products?category=health-beauty&subcategory=bestsellers",
        imageSrc: "/images/navbar/health-beauty_bestsellers.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=health-beauty&subcategory=newarrivals",
        imageSrc: "/images/navbar/health-beauty_new-arrivals.jpg",
      },
      {
        name: "Editor pics",
        href: "/products?category=health-beauty&subcategory=editorpics",
        imageSrc: "/images/navbar/health-beauty_editor-pics.jpg",
      },
    ],
  },
  {
    label: "Jewelry & Accessories",
    value: "jewelry-accessories",
    featured: [
      {
        name: "Best Sellers",
        href: "/products?category=jewelry-accessories&subcategory=bestsellers",
        imageSrc: "/images/navbar/jewelry-accessories_bestsellers.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=jewelry-accessories&subcategory=newarrivals",
        imageSrc: "/images/navbar/jewelry-accessories_new-arrivals.jpg",
      },
      {
        name: "Editor pics",
        href: "/products?category=jewelry-accessories&subcategory=editorpics",
        imageSrc: "/images/navbar/jewelry-accessories_editor-pics.jpg",
      },
    ],
  },
];
