# Déploiement Vercel - Anaka.ma

## 🚀 Guide de Déploiement

### 1. Prérequis
- Compte Vercel (vercel.com)
- Intégration Vercel MCP dans Builder.io

### 2. Configuration Automatique

Tous les fichiers de configuration Vercel sont déjà créés :

- ✅ `vercel.json` - Configuration principale
- ✅ `.vercelignore` - Fichiers à ignorer
- ✅ `api/index.ts` - Fonctions serverless
- ✅ Scripts de build optimisés

### 3. Déploiement via Builder.io

1. [Connectez-vous à Vercel](#open-mcp-popover) via les MCP Servers
2. Sélectionnez votre projet
3. Vercel détectera automatiquement la configuration
4. Le déploiement se lancera automatiquement

### 4. Configuration Recommandée

**Build Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist/spa`
- Node.js Version: 18.x

**Environment Variables** (optionnelles):
```
SITE_URL=https://votre-domaine.vercel.app
SITE_NAME=Anaka.ma
```

### 5. Fonctionnalités Incluses

- ✅ **SPA Routing** - Toutes les routes React Router fonctionnent
- ✅ **API Routes** - Endpoints `/api/*` disponibles
- ✅ **Optimisations** - Cache et compression automatiques
- ✅ **Sécurité** - Headers de sécurité configurés
- ✅ **Performance** - Assets optimisés pour la vitesse

### 6. Post-Déploiement

Après le déploiement :
- Votre site sera accessible via l'URL Vercel
- Configurez un domaine personnalisé si souhaité
- Activez les analytics Vercel pour le monitoring

### 7. Maintenance

Pour les mises à jour :
1. Modifiez votre code dans Builder.io
2. Vercel redéploiera automatiquement
3. Vérifiez le nouveau déploiement

## 📞 Support

En cas de problème de déploiement :
- Vérifiez les logs dans le dashboard Vercel
- Consultez la documentation Vercel
- Contactez le support Builder.io si nécessaire

---
🌟 **Votre boutique Anaka.ma sera en ligne en quelques minutes !**
