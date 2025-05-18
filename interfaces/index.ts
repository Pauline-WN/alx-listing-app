export interface CardProps {
  title: string;
  image: string;
  price: number;
  location: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}
