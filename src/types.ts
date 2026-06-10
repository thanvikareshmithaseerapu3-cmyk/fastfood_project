export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Burgers' | 'Pizza' | 'French Fries' | 'Sandwiches' | 'Fried Chicken' | 'Beverages' | 'Desserts';
  image: string;
  tags: string[];
  isPopular?: boolean;
  isSpicy?: boolean;
  isVeg?: boolean;
  calories?: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
