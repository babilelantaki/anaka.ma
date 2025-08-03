import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app this would come from API
  const products = {
    'hijab-fluide-uni': {
      id: 'hijab-fluide-uni',
      name: 'Hijab Fluide Uni - Collection Élégance',
      price: '120 DH',
      originalPrice: '150 DH',
      discount: '20%',
      rating: 4.8,
      reviews: 24,
      inStock: true,
      images: ['https://images.pexels.com/photos/1644947/pexels-photo-1644947.jpeg', 'https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg', 'https://images.pexels.com/photos/8935894/pexels-photo-8935894.jpeg'],
      colors: [
        { name: 'Rose poudré', class: 'bg-brand-rose-powder' },
        { name: 'Gris perle', class: 'bg-brand-pearl-gray' },
        { name: 'Jaune pastel', class: 'bg-brand-pastel-yellow' },
        { name: 'Blanc cassé', class: 'bg-gray-100' }
      ],
      material: 'Mousseline de soie',
      dimensions: '180cm x 70cm',
      care: 'Lavage à la main à froid',
      description: 'Ce hijab fluide en mousseline de soie allie élégance et confort pour un look sophistiqué au quotidien. Sa texture légère et sa finition soignée en font un accessoire incontournable de votre garde-robe.',
      features: [
        'Matière premium mousseline de soie',
        'Texture fluide et légère',
        'Finitions soignées',
        'Facile à porter et à ajuster',
        'Couleurs résistantes au lavage'
      ],
      styleAdvice: 'Parfait avec nos tuniques de la collection Élégance. Associez-le à des tons neutres pour un look harmonieux, ou osez le contraste avec des couleurs complémentaires.',
      category: 'Hijabs'
    },
    'tunique-legere': {
      id: 'tunique-legere',
      name: 'Tunique Légère - Confort Maison',
      price: '180 DH',
      originalPrice: '220 DH',
      discount: '18%',
      rating: 4.9,
      reviews: 18,
      inStock: true,
      images: ['https://images.pexels.com/photos/19699552/pexels-photo-19699552.jpeg', 'https://images.pexels.com/photos/33271827/pexels-photo-33271827.jpeg', 'https://images.pexels.com/photos/33280342/pexels-photo-33280342.jpeg'],
      colors: [
        { name: 'Rose poudré', class: 'bg-brand-rose-powder' },
        { name: 'Gris perle', class: 'bg-brand-pearl-gray' }
      ],
      material: 'Coton bio',
      dimensions: 'Tailles S à XL disponibles',
      care: 'Lavage machine 30°C',
      description: 'Tunique confortable en coton bio, idéale pour la détente à la maison. Coupe ample et matière douce pour un confort optimal toute la journée.',
      features: [
        'Coton bio certifié',
        'Coupe ample et confortable',
        'Manches longues',
        'Longueur mi-cuisse',
        'Résistant au lavage'
      ],
      styleAdvice: 'Parfaite pour les moments de détente à la maison. Associez-la à nos hijabs assortis pour un ensemble coordonné.',
      category: 'Tuniques'
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-warm-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <Link to="/mode-hijab" className="text-brand-rose-powder hover:underline">
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = [
    {
      id: 'hijab-jersey',
      name: 'Hijab Jersey Premium',
      price: '95 DH',
      image: 'https://images.pexels.com/photos/33280342/pexels-photo-33280342.jpeg',
      rating: 4.7
    },
    {
      id: 'kimono-elegant',
      name: 'Kimono Élégant',
      price: '250 DH',
      image: 'https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg',
      rating: 4.6
    },
    {
      id: 'hijab-soie',
      name: 'Hijab Soie Naturelle',
      price: '200 DH',
      image: 'https://images.pexels.com/photos/8935894/pexels-photo-8935894.jpeg',
      rating: 5.0
    }
  ];

  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-brand-rose-powder">Accueil</Link>
            <span className="text-gray-300">/</span>
            <Link to="/mode-hijab" className="text-gray-500 hover:text-brand-rose-powder">Mode & Hijab</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/mode-hijab"
          className="inline-flex items-center text-brand-rose-powder hover:text-brand-rose-powder/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à la boutique
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
              <img 
                src={product.images[selectedColor]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedColor === index ? 'border-brand-rose-powder' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-brand-rose-powder/10 text-brand-rose-powder text-sm font-semibold rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} avis)</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-brand-rose-powder">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="px-2 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                    -{product.discount}
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Couleur : {product.colors[selectedColor].name}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 ${color.class} ${
                      selectedColor === index ? 'border-gray-900' : 'border-gray-300'
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quantité</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-8">
              <button className="w-full bg-brand-rose-powder text-white font-semibold py-3 rounded-lg hover:bg-brand-rose-powder/90 transition-colors">
                Ajouter au panier - {parseInt(product.price) * quantity} DH
              </button>
              <div className="flex space-x-4">
                <button className="flex-1 border-2 border-brand-rose-powder text-brand-rose-powder font-semibold py-3 rounded-lg hover:bg-brand-rose-powder hover:text-white transition-colors flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Favoris
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Partager
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="h-5 w-5 mr-3 text-brand-rose-powder" />
                  Livraison gratuite à partir de 300 DH
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-5 w-5 mr-3 text-brand-rose-powder" />
                  Garantie qualité 6 mois
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <RotateCcw className="h-5 w-5 mr-3 text-brand-rose-powder" />
                  Retours gratuits sous 30 jours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'care', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-brand-rose-powder text-brand-rose-powder'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'description' && 'Description'}
                  {tab === 'specifications' && 'Caractéristiques'}
                  {tab === 'care' && 'Entretien'}
                  {tab === 'reviews' && 'Avis clients'}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <h3 className="font-semibold text-gray-900 mb-4">À propos de ce produit</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Avantages clés :</h4>
                <ul className="space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-rose-powder mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-brand-rose-powder/5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Conseils de style :</h4>
                  <p className="text-gray-600">{product.styleAdvice}</p>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Matière</h4>
                    <p className="text-gray-600">{product.material}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                    <p className="text-gray-600">{product.dimensions}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="max-w-2xl">
                <h4 className="font-semibold text-gray-900 mb-4">Instructions d'entretien</h4>
                <p className="text-gray-600 mb-4">{product.care}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800 text-sm">
                    💡 <strong>Conseil :</strong> Pour préserver la qualité et les couleurs, évitez l'exposition directe au soleil lors du séchage.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-4xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">Avis clients ({product.reviews})</h4>
                  <div className="flex items-center space-x-2">
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
                    <span className="text-gray-600">{product.rating}/5</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-brand-rose-powder/10 rounded-full flex items-center justify-center">
                        <span className="text-brand-rose-powder font-semibold">S</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-gray-900">Salma K.</h5>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          "Excellent produit ! La qualité est au rendez-vous et la couleur est exactement comme sur la photo. Je recommande vivement !"
                        </p>
                        <span className="text-xs text-gray-500">Il y a 2 semaines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gray-100 rounded-t-xl overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-rose-powder transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-rose-powder">{relatedProduct.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-500 ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
