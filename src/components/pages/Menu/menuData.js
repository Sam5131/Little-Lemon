// src/components/pages/Menu/menuData.js

const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Greek Salad",
      price: 12.99,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "/images/greek-salad.jpg",
      category: "appetizers",
      vegetarian: true,
      popular: true
    },
    {
      id: 2,
      name: "Bruschetta",
      price: 7.99,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect with tomato and veggies.",
      image: "/images/bruschetta.jpg",
      category: "appetizers",
      vegetarian: true,
      popular: true
    },
    {
      id: 3,
      name: "Grilled Octopus",
      price: 16.99,
      description: "Tender octopus grilled to perfection, served with lemon potatoes and a drizzle of olive oil.",
      image: "/images/octopus.jpg",
      category: "appetizers",
      vegetarian: false,
      popular: false
    },
    {
      id: 4,
      name: "Hummus Platter",
      price: 9.99,
      description: "Creamy hummus served with warm pita bread, olives, and fresh vegetables.",
      image: "/images/hummus.jpg",
      category: "appetizers",
      vegetarian: true,
      popular: false
    }
  ],
  mains: [
    {
      id: 5,
      name: "Lemon Dessert",
      price: 8.99,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "/images/lemon-dessert.jpg",
      category: "mains",
      vegetarian: true,
      popular: true
    },
    {
      id: 6,
      name: "Grilled Fish",
      price: 24.99,
      description: "Fresh Mediterranean sea bass, grilled and served with seasonal vegetables and lemon butter sauce.",
      image: "/images/grilled-fish.jpg",
      category: "mains",
      vegetarian: false,
      popular: true
    },
    {
      id: 7,
      name: "Moussaka",
      price: 18.99,
      description: "Traditional Greek casserole with layers of eggplant, spiced meat sauce, and creamy béchamel.",
      image: "/images/moussaka.jpg",
      category: "mains",
      vegetarian: false,
      popular: false
    },
    {
      id: 8,
      name: "Lamb Kebabs",
      price: 22.99,
      description: "Tender lamb marinated in Mediterranean herbs, grilled and served with rice pilaf and tzatziki.",
      image: "/images/lamb-kebabs.jpg",
      category: "mains",
      vegetarian: false,
      popular: true
    },
    {
      id: 9,
      name: "Vegetarian Pasta",
      price: 16.99,
      description: "Fresh pasta with seasonal vegetables, garlic, olive oil, and herbs.",
      image: "/images/pasta.jpg",
      category: "mains",
      vegetarian: true,
      popular: false
    }
  ],
  desserts: [
    {
      id: 10,
      name: "Baklava",
      price: 6.99,
      description: "Layers of phyllo pastry filled with nuts and honey, a traditional Mediterranean dessert.",
      image: "/images/baklava.jpg",
      category: "desserts",
      vegetarian: true,
      popular: true
    },
    {
      id: 11,
      name: "Tiramisu",
      price: 7.99,
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      image: "/images/tiramisu.jpg",
      category: "desserts",
      vegetarian: true,
      popular: false
    },
    {
      id: 12,
      name: "Panna Cotta",
      price: 6.99,
      description: "Silky Italian custard dessert topped with fresh berries and berry coulis.",
      image: "/images/panna-cotta.jpg",
      category: "desserts",
      vegetarian: true,
      popular: false
    }
  ],
  drinks: [
    {
      id: 13,
      name: "Greek Coffee",
      price: 3.99,
      description: "Traditional Greek coffee, rich and strong, served with a glass of water.",
      image: "/images/greek-coffee.jpg",
      category: "drinks",
      vegetarian: true,
      popular: false
    },
    {
      id: 14,
      name: "Fresh Lemonade",
      price: 4.99,
      description: "Freshly squeezed lemonade with mint, perfectly refreshing.",
      image: "/images/lemonade.jpg",
      category: "drinks",
      vegetarian: true,
      popular: true
    },
    {
      id: 15,
      name: "Mediterranean Wine",
      price: 8.99,
      description: "Selection of fine wines from Greece, Italy, and Turkey. Ask your server for options.",
      image: "/images/wine.jpg",
      category: "drinks",
      vegetarian: true,
      popular: false
    }
  ]
};

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
  { id: 'mains', name: 'Main Courses', icon: '🍖' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'drinks', name: 'Drinks', icon: '🍹' }
];

export const getAllMenuItems = () => {
  return [
    ...menuData.appetizers,
    ...menuData.mains,
    ...menuData.desserts,
    ...menuData.drinks
  ];
};

export const getMenuItemsByCategory = (category) => {
  if (category === 'all') {
    return getAllMenuItems();
  }
  return menuData[category] || [];
};

export const getPopularItems = () => {
  return getAllMenuItems().filter(item => item.popular);
};

export default menuData;