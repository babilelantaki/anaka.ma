import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Maison & Déco', href: '/maison-deco' },
    { name: 'Mode & Hijab', href: '/mode-hijab' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-brand-soft-gray">
        {/* Top bar */}
        <div className="bg-brand-rose-powder text-white text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 text-center">
            Livraison gratuite à partir de 300 DH • Retours gratuits sous 30 jours
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-brand-rose-powder">anaka</div>
              <div className="text-sm text-gray-500">.ma</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-rose-powder ${
                    isActive(item.href)
                      ? 'text-brand-rose-powder border-b-2 border-brand-rose-powder pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-brand-rose-powder transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-brand-rose-powder transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-brand-rose-powder transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-brand-rose-powder transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-brand-rose-powder text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-brand-rose-powder transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-rose-powder bg-brand-rose-powder/10'
                      : 'text-gray-700 hover:text-brand-rose-powder'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl font-bold text-brand-rose-powder">anaka</div>
                <div className="text-sm text-gray-400">.ma</div>
              </div>
              <p className="text-gray-400 text-sm">
                Votre destination pour la mode féminine modeste et la décoration intérieure au Maroc.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Catégories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/mode-hijab" className="hover:text-white transition-colors">Mode & Hijab</Link></li>
                <li><Link to="/maison-deco" className="hover:text-white transition-colors">Maison & Déco</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Service Client</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/livraison" className="hover:text-white transition-colors">Livraison</Link></li>
                <li><Link to="/retours" className="hover:text-white transition-colors">Retours</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-rose-powder transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-rose-powder transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Anaka.ma. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
