import { MenuItem, ServiceItem, WhyChooseItem, GalleryItem, TestimonialItem, TeamMemberItem, FAQItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Supreme Beef Burger',
    description: 'Double flame-grilled black angus beef patties, double melted cheddar, signature house relish, crispy lettuce, ripe tomatoes on a toasted brioche bun.',
    price: 349,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    tags: ['Best Seller', 'Double Patty'],
    isPopular: true,
    calories: 780
  },
  {
    id: 'b2',
    name: 'Spicy Zinger Chicken Burger',
    description: 'Crispy, hand-breaded spicy chicken breast, melted pepper jack cheese, jalapeños, spicy chipotle mayo, and fresh house slaw.',
    price: 299,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    tags: ['Spicy', 'Crispy'],
    isSpicy: true,
    calories: 620
  },
  {
    id: 'p1',
    name: 'Loaded Pepperoni Pizza',
    description: 'Rich tomato marinara base, loaded with 100% premium mozzarella cheese, cured beef pepperoni, and finished with dry Italian oregano and chili flakes.',
    price: 499,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    tags: ['Cheesy', 'Classic'],
    isPopular: true,
    calories: 940
  },
  {
    id: 'p2',
    name: 'Garden Fresh Veggie Pizza',
    description: 'San Marzano tomato sauce, fresh buffalo mozzarella, roasted bell peppers, red onions, pitted kalamata olives, sweet corn, and cherry tomatoes.',
    price: 449,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian', 'Healthy Choice'],
    isVeg: true,
    calories: 680
  },
  {
    id: 'f1',
    name: 'Classic Golden Fries',
    description: 'Thick-cut, sea-salted premium Idaho potatoes, fried to a perfect golden crisp, served with our specialty dipping garlic aioli.',
    price: 129,
    category: 'French Fries',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegan', 'Classic Side'],
    isVeg: true,
    calories: 320
  },
  {
    id: 'f2',
    name: 'Cheesy Loaded Bacon Fries',
    description: 'Our classic golden fries drenched in warm liquid cheddar cheese, topped with crispy hickory-smoked beef bacon bits and freshly chopped chives.',
    price: 199,
    category: 'French Fries',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    tags: ['Cheesy', 'Load-up'],
    isPopular: true,
    calories: 590
  },
  {
    id: 's1',
    name: 'Ultimate Club Sandwich',
    description: 'Triple-decker premium toasted sourdough bread filled with smoked turkey breast, honey ham, crispy bacon, iceberg lettuce, ripe tomatoes, and herb mayo.',
    price: 249,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=600&q=80',
    tags: ['Club Classic', 'Filling'],
    calories: 540
  },
  {
    id: 's2',
    name: 'Avocado Caprese Panini',
    description: 'Fresh pulled mozzarella cheese, ripe sliced tomatoes, creamy Hass avocado, homemade wild basil pesto, pressed crispy in standard Italian manner.',
    price: 229,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1540713434306-585de53d4c02?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian', 'Pesto Fresh'],
    isVeg: true,
    calories: 460
  },
  {
    id: 'c1',
    name: 'Golden Crispy Chicken Tenders',
    description: '6 pieces of hand-dipped, cornflake-crusted chicken breast tenders fried to stellar crispness, served with sweet honey mustard dip.',
    price: 279,
    category: 'Fried Chicken',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80',
    tags: ['Crunchy', 'All-Time Fav'],
    isPopular: true,
    calories: 550
  },
  {
    id: 'c2',
    name: 'Spicy Buffalo Wings',
    description: '8 pieces of plump, golden-fried chicken wings tossed in our signature buttery cayenne buffalo hot sauce, served with blue cheese crema and celery sticks.',
    price: 329,
    category: 'Fried Chicken',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
    tags: ['Spicy', 'Wings'],
    isSpicy: true,
    calories: 610
  },
  {
    id: 'be1',
    name: 'Strawberry Bliss Milkshake',
    description: 'Rich, thick blend of fresh sweet strawberries, dynamic premium whole-bean vanilla bean ice cream, topped with real whipped cream and a cherry.',
    price: 149,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=600&q=80',
    tags: ['Sweet Refresh', 'Ice Cold'],
    calories: 450
  },
  {
    id: 'be2',
    name: 'Iced Caramel Macchiato',
    description: 'Double shot of rich espresso layered over chilled whole milk, sweet vanilla-infused syrup, topped with thick real caramel sauce grid and ice.',
    price: 139,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    tags: ['Caffeine Boost', 'Caramel'],
    calories: 220
  },
  {
    id: 'd1',
    name: 'Molten Lava Chocolate Cake',
    description: 'Hot baked chocolate pudding cake with a rich liquid truffle center that oozes upon spooning, served with a clean scoop of whipped cream.',
    price: 179,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tags: ['Hot Dessert', 'Chocolate Heavy'],
    calories: 490
  },
  {
    id: 'd2',
    name: 'Crispy Cinnamon Churros',
    description: '4 golden heritage churro sticks deep-fried, rolled in thick cinnamon brown sugar, served hot alongside warm dipping milk chocolate fudge.',
    price: 149,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1596701062351-df1f8d4cf043?auto=format&fit=crop&w=600&q=80',
    tags: ['Cinnamon Dust', 'Great to Share'],
    calories: 380
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's_dine',
    title: 'Dine-In Service',
    description: 'Enjoy your favorite fast-food in our modern, atmospheric, fully air-conditioned aesthetic diner with soft ambient music and friendly service.',
    icon: 'Utensils'
  },
  {
    id: 's_online',
    title: 'Online Ordering',
    description: 'Browse our full rich menu online, place custom modifications, and securely pay with your debit card or pay cash upon pickup.',
    icon: 'Smartphone'
  },
  {
    id: 's_deliv',
    title: 'Home Delivery',
    description: 'Super-fast home delivery service right to your doorstep. We guarantee hot and intact delivery in less than 30 minutes or your food is free.',
    icon: 'Truck'
  },
  {
    id: 's_take',
    title: 'Convenient Takeaway',
    description: 'Pre-order online or on-the-go and pull up to our express dedicated takeaway counters to grab your delicious meal in seconds.',
    icon: 'ShoppingBag'
  },
  {
    id: 's_party',
    title: 'Party Catering',
    description: 'Elevate your birthdays, celebrations, and friendly get-togethers with custom platters of sliders, gourmet wings, and loaded fries.',
    icon: 'Gift'
  },
  {
    id: 's_corp',
    title: 'Corporate Food Services',
    description: 'High-quality executive lunch boxes, sandwich platters, and custom hot burger buffet setups for office meetings and corporate seminars.',
    icon: 'Briefcase'
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'w1',
    title: 'Fresh Ingredients',
    description: 'We source farm-fresh organic produce, local premium cheese, and never-frozen 100% pure angus beef to compile our meals daily.',
    icon: 'Leaf'
  },
  {
    id: 'w2',
    title: 'Fast Delivery',
    description: 'Powered by our highly optimized routing systems, our delivery champions get food to your table sizzling hot in minutes.',
    icon: 'Zap'
  },
  {
    id: 'w3',
    title: 'Affordable Prices',
    description: 'Premium gourmet-level food items priced budget-friendly so you can treat yourself and your family without breaking the bank.',
    icon: 'DollarSign'
  },
  {
    id: 'w4',
    title: 'Hygienic Kitchen',
    description: 'We hold a spotless 5-star health rating. Our kitchen is sterilized multiple times daily and operates under premium hospitality guidelines.',
    icon: 'ShieldCheck'
  },
  {
    id: 'w5',
    title: 'Experienced Chefs',
    description: 'Our kitchen team includes certified expert culinarians who bring years of dynamic kitchen design and seasoning pairing to each recipe.',
    icon: 'UserCheck'
  },
  {
    id: 'w6',
    title: 'Excellent Service',
    description: 'Customer satisfaction is our ultimate fuel. We offer hassle-free refunds and a super-friendly support hotline for any dining query.',
    icon: 'Heart'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Signature Supreme Burger Plating',
    category: 'Signature Dishes',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g2',
    title: 'Double Hot Pepperoni Stretch',
    category: 'Signature Dishes',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g3',
    title: 'Cozy Retro Modern Diner Seating',
    category: 'Restaurant Interior',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g4',
    title: 'Flame-Searing Premium Angus Beef Patties',
    category: 'Food Preparation',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g5',
    title: 'Friends Overjoyed and Sharing Platters',
    category: 'Customer Experiences',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g6',
    title: 'Gourmet Sliders Table Catering Event',
    category: 'Catering Events',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Melissa Vance',
    role: 'Food Blogger & Critic',
    rating: 5,
    review: 'Honestly, the Supreme Beef Burger is the single best burger in the city. The brioche bun is sweet and cloud-like, and the patty is incredibly juicy and perfectly seared. FastFood Center never disappoints!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Jonathan Miller',
    role: 'Tech Executive',
    rating: 5,
    review: 'We hired FastFood Center to cater our company outdoor team launch party. The slider baskets, gourmet loaded fries, and spicy zinger burgers were the talk of the team. Exceptional service and impeccable delivery timing!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Sarah Peterson',
    role: 'Fitness Enthusiast',
    rating: 5,
    review: 'I love their Garden Fresh Veggie Pizza! The crust is beautifully thin and authentic, and they are incredibly generous with fresh toppings. Its so fresh, hygienic, and incredibly satisfying without being overly heavy.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't4',
    name: 'Kaleb Thompson',
    role: 'University Student',
    rating: 5,
    review: 'As deep-fried chicken fans, my friends and I adore the Spicy Buffalo Wings and Crispy Tenders from FastFood Center. The dipping sauces are next-level. Super fast delivery and extremely affordable prices for student pockets.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const TEAM: TeamMemberItem[] = [
  {
    id: 'tm1',
    name: 'Marcus Bell',
    role: 'Head Chef',
    description: 'With over 12 years of culinary expertise in premium American and European bistros, Marcus designs custom blend seasonings and handles flavor quality controls.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'tm2',
    name: 'Elena Rostova',
    role: 'Kitchen Manager',
    description: 'Elena ensures our kitchen layout, raw food sourcing speed, hygiene standards, and chef coordination operate in beautiful, ultra-efficient harmony.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'tm3',
    name: 'Oliver Vance',
    role: 'Customer Service Manager',
    description: 'Oliver oversees guest experience, feedback integrations, custom dietary modifications, and training our dine-in staff for outstanding warm hospitality.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'tm4',
    name: 'Darnell Carter',
    role: 'Delivery Coordinator',
    description: 'Darnell runs our dispatch center, geolocating drivers and optimizing packaging configurations to guarantee hot-box fast home deliveries.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What are your operational business hours and delivery timing?',
    answer: 'FastFood Center is open daily from 10:00 AM to 11:00 PM for dine-in, takeaway, and takeaway picking. Our online ordering and home delivery operations run continuously up to 11:30 PM so you can enjoy satisfying late night meals.'
  },
  {
    id: 'faq2',
    question: 'Which delivery areas do you cover, and does it require a fee?',
    answer: 'We deliver within a 15-km radius of our flagship street location. For orders over ₹499.00, delivery is completely free! For orders below ₹499.00, a small flat-rate dispatch fee of ₹49.00 is added at check-out.'
  },
  {
    id: 'faq3',
    question: 'How do I request custom party catering or corporate food bundles?',
    answer: 'We provide specialized catering packages for events of all scales! You can directly customize a menu or place request callbacks through our dynamic Contact Form on this website, or call our 24/7 catering coordinator at +1 (555) 789-3210.'
  },
  {
    id: 'faq4',
    question: 'What payment methods do you accept online and in-store?',
    answer: 'For your security and comfort, we accept all major debit & credit cards (Visa, MasterCard, American Express), Apple Pay, Google Wallet, and cash-on-delivery or contactless tap-to-pay terminals in our diner.'
  },
  {
    id: 'faq5',
    question: 'Are there gluten-free, vegan or dairy-free options available?',
    answer: 'Absolutely! Our menu features labeled items (e.g. Vegetarian, Healthy Choice). When adding objects to your shopping cart drawer, you can specify custom ingredients removal or select gluten-free crust modifications easily.'
  }
];
