import { Link } from 'react-router-dom';
import { Filter, Grid, List, Star } from 'lucide-react';
import { useState } from 'react';

export default function ModeHijab() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);

  const products = [
    {
      id: 'hijab-fluide-uni',
      name: 'Hijab Fluide Uni - Collection Élégance',
      price: '120 DH',
      originalPrice: '150 DH',
      image: 'https://images.pexels.com/photos/1644947/pexels-photo-1644947.jpeg',
      rating: 4.8,
      reviews: 24,
      colors: ['Rose poudré', 'Gris perle', 'Jaune pastel', 'Blanc cassé'],
      category: 'Hijabs',
      material: 'Mousseline de soie',
      description: 'Hijab fluide parfait pour un look élégant au quotidien'
    },
    {
      id: 'tunique-legere',
      name: 'Tunique Légère - Confort Maison',
      price: '180 DH',
      originalPrice: '220 DH',
      image: 'https://images.pexels.com/photos/19699552/pexels-photo-19699552.jpeg',
      rating: 4.9,
      reviews: 18,
      colors: ['Rose poudré', 'Gris perle'],
      category: 'Tuniques',
      material: 'Coton bio',
      description: 'Tunique confortable idéale pour la détente à la maison'
    },
    {
      id: 'hijab-jersey',
      name: 'Hijab Jersey Premium',
      price: '95 DH',
      originalPrice: '',
      image: 'https://images.pexels.com/photos/33280342/pexels-photo-33280342.jpeg',
      rating: 4.7,
      reviews: 31,
      colors: ['Noir', 'Marine', 'Gris perle', 'Blanc'],
      category: 'Hijabs',
      material: 'Jersey premium',
      description: 'Hijab en jersey doux et extensible pour un confort optimal'
    },
    {
      id: 'kimono-elegant',
      name: 'Kimono Élégant - Style Moderne',
      price: '250 DH',
      originalPrice: '300 DH',
      image: 'https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg',
      rating: 4.6,
      reviews: 15,
      colors: ['Rose poudré', 'Beige', 'Gris'],
      category: 'Kimonos',
      material: 'Viscose fluide',
      description: 'Kimono moderne parfait pour toutes les occasions'
    },
    {
      id: 'hijab-soie',
      name: 'Hijab Soie Naturelle - Luxe',
      price: '200 DH',
      originalPrice: '250 DH',
      image: 'https://images.pexels.com/photos/8935894/pexels-photo-8935894.jpeg',
      rating: 5.0,
      reviews: 12,
      colors: ['Champagne', 'Rose poudré', 'Gris perle'],
      category: 'Hijabs',
      material: 'Soie naturelle',
      description: 'Hijab en soie naturelle pour les occasions spéciales'
    },
    {
      id: 'ensemble-coordonne',
      name: 'Ensemble Coordonné - Harmonie',
      price: '320 DH',
      originalPrice: '400 DH',
      image: 'https://images.pexels.com/photos/33271827/pexels-photo-33271827.jpeg',
      rating: 4.8,
      reviews: 9,
      colors: ['Rose poudré', 'Gris perle'],
      category: 'Ensembles',
      material: 'Mélange modal',
      description: 'Ensemble tunique et hijab parfaitement assortis'
    }
  ];

  const categories = ['Tous', 'Hijabs', 'Tuniques', 'Kimonos', 'Ensembles'];
  const priceRanges = ['Moins de 100 DH', '100-200 DH', '200-300 DH', 'Plus de 300 DH'];
  const materials = ['Mousseline', 'Jersey', 'Soie', 'Coton', 'Viscose'];

  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-rose-powder to-brand-rose-powder/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Mode & Hijab</h1>
            <p className="text-xl opacity-90">
              Découvrez notre collection de mode féminine modeste, alliant élégance et confort
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Filtres</h3>
                <Filter className="h-5 w-5 text-gray-500" />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Catégories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        className="text-brand-rose-powder focus:ring-brand-rose-powder"
                      />
                      <span className="ml-2 text-sm text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Prix</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        className="text-brand-rose-powder focus:ring-brand-rose-powder"
                      />
                      <span className="ml-2 text-sm text-gray-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Matières</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        className="text-brand-rose-powder focus:ring-brand-rose-powder"
                      />
                      <span className="ml-2 text-sm text-gray-600">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-lg shadow-md p-4">
              <div className="text-sm text-gray-600">
                {products.length} produits trouvés
              </div>
              <div className="flex items-center space-x-4">
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-brand-rose-powder focus:border-brand-rose-powder">
                  <option>Trier par pertinence</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Nouveautés</option>
                  <option>Meilleures ventes</option>
                </select>
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-brand-rose-powder text-white' : 'text-gray-500'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-brand-rose-powder text-white' : 'text-gray-500'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`${
                    viewMode === 'list' 
                      ? 'w-48 h-48 flex-shrink-0' 
                      : 'aspect-square'
                  } bg-gray-100 rounded-t-xl ${viewMode === 'list' ? 'rounded-l-xl rounded-t-none' : ''} overflow-hidden relative`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-brand-rose-powder text-white text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                          -20%
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-rose-powder transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-brand-rose-powder">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {product.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className={`w-4 h-4 rounded-full border border-gray-200 ${
                              color.includes('Rose') ? 'bg-brand-rose-powder' :
                              color.includes('Gris') ? 'bg-brand-pearl-gray' :
                              color.includes('Jaune') ? 'bg-brand-pastel-yellow' :
                              color.includes('Noir') ? 'bg-gray-900' :
                              color.includes('Marine') ? 'bg-blue-900' :
                              'bg-gray-100'
                            }`}
                            title={color}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{product.material}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-8 py-3 border-2 border-brand-rose-powder text-brand-rose-powder font-semibold rounded-lg hover:bg-brand-rose-powder hover:text-white transition-colors">
                Charger plus de produits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
