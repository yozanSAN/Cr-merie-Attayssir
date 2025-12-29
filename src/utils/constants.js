export const RESTAURANT_INFO = {
    name: "Crèmerie Attayssir",
    tagline: "More Than Just Lunch.",
    subtitle: "It's Crèmerie Attayssir.",
    description: "Born from a passion for culinary excellence and the need for a peaceful midday escape. We bring the bistro experience to your daily break, offering a sanctuary where flavor meets tranquility.",

    // Contact Information
    contact: {
        phone: "+33 1 23 45 67 89",
        email: "contact@cremerieattayssir.com",
        address: {
            street: "123 Foodie Lane",
            city: "Paris",
            postalCode: "75001",
            country: "France",
            full: "123 Foodie Lane, 75001 Paris, France"
        }
    },

    // Opening Hours
    hours: {
        weekday: {
            label: "Mon - Fri",
            open: "11:00 AM",
            close: "11:00 PM"
        },
        saturday: {
            label: "Saturday",
            open: "10:00 AM",
            close: "11:00 PM"
        },
        sunday: {
            label: "Sunday",
            open: "10:00 AM",
            close: "10:00 PM"
        },
        dailyLabel: "Daily: 11 AM - 10 PM"
    },

    // Social Media
    social: {
        instagram: "https://instagram.com/cremerieattayssir",
        facebook: "https://facebook.com/cremerieattayssir",
        twitter: "https://twitter.com/cremerieattayssir"
    }
};

// Core Values
export const CORE_VALUES = [
    {
        id: 1,
        icon: "🔥",
        title: "Fresh Ingredients",
        description: "Farm-to-table ingredients selected daily for maximum flavor and nutritional value."
    },
    {
        id: 2,
        icon: "🍽️",
        title: "Calm Atmosphere",
        description: "A sound-scaped interior designed for decompression, focus, and genuine conversation."
    },
    {
        id: 3,
        icon: "⚡",
        title: "Fast Service",
        description: "Gourmet quality meals served efficiently, respecting the speed of your lunch hour."
    }
];

// Chef Information
export const CHEF_INFO = {
    name: "Chef Antoine",
    quote: "Food should energize you, not weigh you down. My philosophy is simple: fresh, fast, and full of flavor. We cook with the rhythm of the city but the soul of the countryside.",
    image: "/images/chef-antoine.jpg",
    specialty: "Modern French Cuisine"
};

// Navigation Links
export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
];

// Menu Categories
export const MENU_CATEGORIES = [
    { id: "all", name: "All", value: "all" },
    { id: "breakfast", name: "Breakfast", value: "breakfast" },
    { id: "lunch", name: "Lunch", value: "lunch" },
    { id: "dinner", name: "Dinner", value: "dinner" },
    { id: "drinks", name: "Drinks", value: "drinks" }
];

// Sample Menu Items (will be replaced with Supabase data later)
export const SAMPLE_MENU_ITEMS = [
    {
        id: 1,
        name: "Truffle Angus Burger",
        description: "Premium Angus beef patty topped with black truffle mayo, caramelized onions, arugula, and aged cheddar on a toasted brioche bun.",
        price: 18.00,
        category: "lunch",
        image: "/images/menu/burger.jpg",
        tags: ["beef", "truffle", "popular"],
        isPopular: true
    },
    {
        id: 2,
        name: "Green Goddess Bowl",
        description: "A refreshing mix of quinoa, avocado, cucumber, edamame, and baby spinach, drizzled with our signature lemon-tahini dressing.",
        price: 14.50,
        category: "lunch",
        image: "/images/menu/bowl.jpg",
        tags: ["vegan", "gluten-free"],
        isPopular: false
    },
    {
        id: 3,
        name: "Classic Caesar",
        description: "Crisp romaine lettuce tossed in creamy Caesar dressing, topped with garlic croutons, shaved parmesan, and grilled chicken breast.",
        price: 13.00,
        category: "lunch",
        image: "/images/menu/caesar.jpg",
        tags: ["chicken"],
        isPopular: false
    },
    {
        id: 4,
        name: "Spiced Orange Spritz",
        description: "A refreshing blend of prosecco, aperol, sparkling water, and a hint of cinnamon-infused orange syrup.",
        price: 9.50,
        category: "drinks",
        image: "/images/menu/spritz.jpg",
        tags: ["cocktail", "new"],
        isPopular: false
    },
    {
        id: 5,
        name: "Artisan Avocado Toast",
        description: "Smashed avocado on sourdough with feta cheese, chili flakes, and a perfectly poached free-range egg.",
        price: 12.50,
        category: "breakfast",
        image: "/images/menu/avocado-toast.jpg",
        tags: ["breakfast", "vegetarian"],
        isPopular: false
    },
    {
        id: 6,
        name: "Crispy Chicken Sando",
        description: "Buttermilk fried chicken breast with spicy slaw, house pickles, and chipotle mayo on a soft brioche bun.",
        price: 16.00,
        category: "lunch",
        image: "/images/menu/chicken-sando.jpg",
        tags: ["chicken", "spicy"],
        isPopular: true
    }
];

// Gallery Images
export const GALLERY_IMAGES = [
    {
        id: 1,
        url: "/images/gallery/interior.jpg",
        caption: "Cozy Interior",
        category: "interior"
    },
    {
        id: 2,
        url: "/images/gallery/plating.jpg",
        caption: "Chef's Artistry",
        category: "food"
    },
    {
        id: 3,
        url: "/images/gallery/bread.jpg",
        caption: "Fresh Baked Daily",
        category: "food"
    },
    {
        id: 4,
        url: "/images/gallery/dining.jpg",
        caption: "Dining Experience",
        category: "atmosphere"
    }
];

