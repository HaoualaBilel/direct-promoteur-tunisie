
export interface Project {
  id: string;
  title: string;
  promoter: string;
  promoterId: string;
  location: string;
  fullAddress?: string;
  handoverDate: string;
  propertyType: 'habitation' | 'commercial' | 'estivale' | 'mixte';
  imageUrl: string;
  description: string;
  features: string[];
  gallery?: string[];
  units: ProjectUnit[];
  propertySpecs: {
    type: string;
    elevators: number;
    basement: string;
    standing: string;
    constructionYear: string;
    status: string;
  };
  nearbyFacilities: string[];
  videoUrl?: string;
  virtualTourUrl?: string;
  professionals?: Professional[];
}

export interface ProjectUnit {
  id: string;
  type: string;
  area: string;
  price: string;
  planImage: string;
  floor?: number;
  rooms?: number;
  bathrooms?: number;
  orientation?: string;
  balcony?: boolean;
  availability?: string;
  variants?: UnitVariant[];
}

export interface UnitVariant {
  id: string;
  name: string;
  area: string;
  floor: number;
  price: string;
  planImage: string;
  orientation: string;
  features: string[];
}

export interface ProfessionalCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Professional {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  specialty: string;
  description?: string;
  location?: string;
  rating?: number;
  projectCount?: number;
  founded?: number;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  logo?: string;
  gallery?: string[];
  projects?: { id: string; name: string }[];
  services?: string[];
  certifications?: string[];
  testimonials?: {
    author: string;
    role?: string;
    content: string;
    rating: number;
  }[];
}
