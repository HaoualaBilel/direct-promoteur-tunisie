
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  tags?: string[];
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  date,
  imageUrl,
  category,
  tags
}) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };
  
  // Category color
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'habitation':
        return 'bg-blue-100 text-blue-800';
      case 'commercial':
        return 'bg-purple-100 text-purple-800';
      case 'evenement':
        return 'bg-amber-100 text-amber-800';
      case 'partenaire':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <Link to={`/actu-promoteur/${id}`} className="block overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(category)}`}>
            {category}
          </span>
          
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(date)}</span>
          </div>
        </div>
        
        <Link to={`/actu-promoteur/${id}`}>
          <h3 className="text-lg font-medium text-mineral hover:text-sage transition-colors mb-2">{title}</h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-4 flex-grow">{excerpt}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          to={`/actu-promoteur/${id}`}
          className="mt-4 text-sm font-medium text-sage hover:text-mineral transition-colors inline-block"
        >
          Lire la suite →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
