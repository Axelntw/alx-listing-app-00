export interface CardProps {
  children: React.ReactNode;
  // Add more properties as needed, such as:
  // title?: string;
  // image?: string;
  // price?: number;
  // rating?: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}