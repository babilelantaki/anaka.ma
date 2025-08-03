interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-brand-rose-powder/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🏗️</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500">
          Cette page est en cours de développement. Continuez à discuter avec l'assistant pour ajouter du contenu ici.
        </p>
      </div>
    </div>
  );
}
