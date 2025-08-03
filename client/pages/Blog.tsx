import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Heart, Share2 } from 'lucide-react';

export default function Blog() {
  const mainArticle = {
    id: 'harmonie-hijab-decoration',
    title: 'Comment harmoniser sa tenue hijab avec sa décoration intérieure',
    excerpt: 'Découvrez l\'art subtil de créer une harmonie parfaite entre votre style vestimentaire et votre décoration intérieure...',
    author: 'Fatima Zahra',
    date: '2024-01-15',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    category: 'Style & Déco'
  };

  const otherArticles = [
    {
      id: 'tendances-hijab-2024',
      title: 'Les tendances hijab du printemps 2024',
      excerpt: 'Découvrez les couleurs et styles qui feront sensation cette saison...',
      author: 'Aicha M.',
      date: '2024-01-10',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/1644947/pexels-photo-1644947.jpeg',
      category: 'Tendances'
    },
    {
      id: 'guide-stores-modernes',
      title: 'Guide complet des stores modernes pour votre salon',
      excerpt: 'Tout ce que vous devez savoir pour choisir les parfaits stores...',
      author: 'Khadija L.',
      date: '2024-01-05',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/8490204/pexels-photo-8490204.jpeg',
      category: 'Décoration'
    },
    {
      id: 'entretien-hijab-soie',
      title: 'Comment entretenir vos hijabs en soie',
      excerpt: 'Conseils d\'expertes pour préserver la beauté de vos hijabs premium...',
      author: 'Salma B.',
      date: '2023-12-28',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/8935894/pexels-photo-8935894.jpeg',
      category: 'Conseils'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-rose-powder to-brand-rose-powder/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Notre Blog</h1>
            <p className="text-xl opacity-90">
              Conseils, tendances et inspirations pour votre style et votre intérieur
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Article */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={mainArticle.image} 
                alt={mainArticle.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-brand-rose-powder/10 text-brand-rose-powder text-sm font-semibold rounded-full">
                  {mainArticle.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {mainArticle.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {mainArticle.excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {mainArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(mainArticle.date).toLocaleDateString('fr-FR')}
                  </div>
                  <span>{mainArticle.readTime} de lecture</span>
                </div>
              </div>
              <Link 
                to={`/blog/${mainArticle.id}`}
                className="inline-flex items-center text-brand-rose-powder font-semibold hover:text-brand-rose-powder/80 transition-colors"
              >
                Lire l'article complet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Comment harmoniser sa tenue hijab avec sa décoration intérieure
                </h1>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8 pb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Fatima Zahra
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    15 janvier 2024
                  </div>
                  <span>8 min de lecture</span>
                  <div className="flex items-center space-x-2 ml-auto">
                    <button className="p-1 text-gray-400 hover:text-brand-rose-powder transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-brand-rose-powder transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Dans l'art de vivre marocain moderne, l'harmonie entre le style vestimentaire et l'environnement domestique 
                  n'est pas qu'une question d'esthétique - c'est une philosophie de vie qui reflète notre identité profonde 
                  et notre recherche d'équilibre.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  L'Art de l'Harmonie Textile
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Commencez par observer les couleurs dominantes de votre intérieur. Si votre salon arbore des tons neutres 
                  comme le beige et le gris perle, vos hijabs dans ces mêmes teintes créeront une continuité visuelle 
                  apaisante. Cette approche monochrome permet de créer un cocon harmonieux où vous vous sentez parfaitement 
                  à votre place.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  L'intégration de couleurs complémentaires peut également enrichir votre palette. Un hijab rose poudré 
                  avec des coussins assortis, ou des rideaux jaune pastel qui reprennent la couleur de votre foulard préféré 
                  - ces petits détails transforment votre maison en extension naturelle de votre style personnel.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Matières et Textures : Créer une Symphonie Sensorielle
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  La richesse des matières joue un rôle essentiel dans cette harmonie. Un hijab en soie naturelle trouvera 
                  son écho dans des rideaux de même matière, créant un jeu de reflets lumineux. Les textures matelassées 
                  de vos coussins peuvent rappeler la structure délicate d'un hijab jersey, unifiant l'ensemble par le toucher 
                  autant que par la vue.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Espaces de Transition : Votre Dressing comme Pont Stylistique
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Votre espace dressing mérite une attention particulière. C'est ici que s'opère la magie de la transformation 
                  quotidienne. Organisez vos hijabs par couleurs pour créer un dégradé visuel, installez des éclairages doux 
                  qui mettent en valeur les nuances, et choisissez des rangements qui s'intègrent à l'esthétique générale de 
                  votre chambre.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Conseils Pratiques pour une Harmonie Réussie
                </h2>
                
                <div className="bg-brand-rose-powder/5 p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Règle des 3 couleurs :</strong> Limitez-vous à trois couleurs principales pour maintenir l'équilibre</li>
                    <li><strong>Éclairage adapté :</strong> La lumière naturelle révèle mieux les nuances de vos textiles</li>
                    <li><strong>Rotation saisonnière :</strong> Adaptez vos choix chromatiques aux saisons</li>
                    <li><strong>Points focaux :</strong> Créez des zones visuelles qui lient vêtements et décoration</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Conclusion : Votre Style, Votre Sanctuaire
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  L'harmonie entre votre hijab marocain et votre décoration intérieure transcende la simple coordination 
                  esthétique. Elle crée un environnement où chaque élément raconte votre histoire, respecte vos valeurs, 
                  et célèbre votre féminité. Dans cet équilibre subtil entre tradition et modernité, vous construisez 
                  un lifestyle authentique qui vous ressemble.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Souvenez-vous : il n'y a pas de règles absolues, seulement des guidances pour vous aider à créer 
                  l'harmonie qui vous correspond. Faites confiance à votre instinct, expérimentez avec plaisir, 
                  et laissez votre style maison femme s'épanouir naturellement.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Mots-clés : hijab marocain, décoration intérieure, harmonie textile, style maison femme
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-brand-rose-powder transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-brand-rose-powder transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Bio */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">À propos de l'auteur</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-brand-rose-powder/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-rose-powder font-semibold">FZ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fatima Zahra</div>
                  <div className="text-sm text-gray-500">Consultante en style</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Spécialiste en mode féminine modeste et décoration d'intérieur, 
                Fatima aide les femmes à créer leur style unique.
              </p>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Articles similaires</h3>
              <div className="space-y-4">
                {otherArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.id}`}
                    className="block group"
                  >
                    <div className="flex space-x-3">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-brand-rose-powder transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(article.date).toLocaleDateString('fr-FR')} • {article.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-brand-rose-powder to-brand-rose-powder/80 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Newsletter Style</h3>
              <p className="text-sm opacity-90 mb-4">
                Recevez nos derniers conseils style et déco directement dans votre boîte mail.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-brand-rose-powder font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
