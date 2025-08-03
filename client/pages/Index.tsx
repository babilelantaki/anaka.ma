import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';

export default function Index() {
  const featuredProducts = [
    {
      id: 'hijab-fluide-uni',
      category: 'Mode & Hijab',
      name: 'Hijab Fluide Uni - Collection Élégance',
      price: '120 DH',
      originalPrice: '150 DH',
      image: 'https://images.pexels.com/photos/1644947/pexels-photo-1644947.jpeg',
      rating: 4.8,
      reviews: 24,
      colors: ['Rose poudré', 'Gris perle', 'Jaune pastel', 'Blanc cassé']
    },
    {
      id: 'tunique-legere',
      category: 'Mode & Hijab',
      name: 'Tunique Légère - Confort Maison',
      price: '180 DH',
      originalPrice: '220 DH',
      image: 'https://images.pexels.com/photos/19699552/pexels-photo-19699552.jpeg',
      rating: 4.9,
      reviews: 18,
      colors: ['Rose poudré', 'Gris perle']
    },
    {
      id: 'store-enrouleur',
      category: 'Maison & Déco',
      name: 'Store Enrouleur Moderne',
      price: '350 DH',
      originalPrice: '420 DH',
      image: 'https://images.pexels.com/photos/7546600/pexels-photo-7546600.jpeg',
      rating: 4.7,
      reviews: 12,
      colors: ['Blanc', 'Gris', 'Beige']
    },
    {
      id: 'voilage-moderne',
      category: 'Maison & Déco',
      name: 'Voilage Moderne - Style Contemporain',
      price: '280 DH',
      originalPrice: '340 DH',
      image: 'https://images.pexels.com/photos/462197/pexels-photo-462197.jpeg',
      rating: 4.6,
      reviews: 9,
      colors: ['Blanc', 'Écru', 'Gris clair']
    }
  ];

  const testimonials = [
    {
      name: 'Fatima M.',
      location: 'Casablanca',
      text: 'Des produits de qualité exceptionnelle ! Mon hijab est devenu mon préféré.',
      rating: 5
    },
    {
      name: 'Aicha L.',
      location: 'Rabat',
      text: 'Service client au top et livraison rapide. Je recommande vivement !',
      rating: 5
    },
    {
      name: 'Khadija B.',
      location: 'Marrakech',
      text: 'Parfait pour harmoniser ma garde-robe avec ma décoration intérieure.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-rose-powder/20 via-brand-pearl-gray/30 to-brand-pastel-yellow/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Élégance & 
                <span className="text-brand-rose-powder"> Harmonie</span>
                <br />pour Votre Lifestyle
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Découvrez l'art de l'harmonisation entre votre style vestimentaire et votre décoration intérieure. 
                Mode féminine modeste et décoration marocaine contemporaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/mode-hijab"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-rose-powder text-white font-semibold rounded-lg hover:bg-brand-rose-powder/90 transition-colors"
                >
                  Mode & Hijab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/maison-deco"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-rose-powder text-brand-rose-powder font-semibold rounded-lg hover:bg-brand-rose-powder hover:text-white transition-colors"
                >
                  Maison & Déco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-brand-rose-powder/10 to-brand-pastel-yellow/10 rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.pexels.com/photos/16985030/pexels-photo-16985030.jpeg"
                    alt="Femme élégante en tenue traditionnelle moderne"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">anaka.ma</h3>
                      <p className="text-white/90">Votre style, votre maison</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-rose-powder/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Féminité & Élégance Marocaine</h3>
              <p className="text-gray-600">L'art de cultiver sa beauté intérieure et extérieure</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-pearl-gray/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Harmonie Déco & Style</h3>
              <p className="text-gray-600">Quand votre garde-robe rencontre votre intérieur</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-pastel-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇲🇦</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Modernité & Tradition</h3>
              <p className="text-gray-600">L'authenticité marocaine revisitée avec modernité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Coups de Cœur</h2>
            <p className="text-xl text-gray-600">Découvrez notre sélection d'articles tendance</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gray-100 rounded-t-xl overflow-hidden relative">
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
                        -25%
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-rose-powder transition-colors line-clamp-2">
                    {product.name}
                  </h3>
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-brand-rose-powder">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-gray-200 ${
                            color.includes('Rose') ? 'bg-brand-rose-powder' :
                            color.includes('Gris') ? 'bg-brand-pearl-gray' :
                            color.includes('Jaune') ? 'bg-brand-pastel-yellow' :
                            'bg-gray-100'
                          }`}
                          title={color}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/mode-hijab"
              className="inline-flex items-center px-8 py-3 border-2 border-brand-rose-powder text-brand-rose-powder font-semibold rounded-lg hover:bg-brand-rose-powder hover:text-white transition-colors"
            >
              Voir tous les produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-rose-powder/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-brand-rose-powder" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Livraison Gratuite</h3>
              <p className="text-sm text-gray-600">À partir de 300 DH</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-rose-powder/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand-rose-powder" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Retours Gratuits</h3>
              <p className="text-sm text-gray-600">Sous 30 jours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-rose-powder/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-brand-rose-powder" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support Client</h3>
              <p className="text-sm text-gray-600">7j/7 disponible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-rose-powder/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-brand-rose-powder" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Qualité Premium</h3>
              <p className="text-sm text-gray-600">Sélection rigoureuse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce Que Disent Nos Clientes</h2>
            <p className="text-xl text-gray-600">Leurs avis nous motivent chaque jour</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-rose-powder to-brand-rose-powder/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Restez Connectée à Notre Univers
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Recevez nos dernières collections et conseils style directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-brand-rose-powder font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
