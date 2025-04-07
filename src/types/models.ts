
// Project-related types
export interface Project {
  id: string;
  title: string;
  promoter: string;
  promoterId: string;
  location: string;
  fullAddress: string;
  handoverDate: string;
  propertyType: string;
  imageUrl: string;
  description: string;
  features: string[];
  gallery: string[];
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
  variants?: UnitVariant[];
  availability?: string;
}

export interface UnitVariant {
  id: string;
  name: string;
  area: string;
  floor: number;
  price: string;
  planImage: string;
  orientation: string;
  features?: string[];
}

export interface Professional {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  specialty: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  logo?: string;
}

export interface ProfessionalCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

// Promoter-related types
export interface Promoter {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  email: string;
  phone: string;
  website?: string;
  address: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  certifications?: string[];
  values?: string[];
}
