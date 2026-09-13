import { assetPath } from '@/lib/recipes';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a
          className="wordmark"
          href={`${assetPath}/`}
          aria-label="Brentwood Bunch Recipes home"
        >
          <span className="wordmark-mark" aria-hidden="true">
            BB
          </span>
          <span>
            <strong>Brentwood Bunch</strong>
            <small>Family recipes</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href={`${assetPath}/#recipes`}>Recipes</a>
          <a href={`${assetPath}/#browse-title`}>Browse</a>
          <a href={`${assetPath}/book`}>Recipe book</a>
        </nav>
      </div>
    </header>
  );
}
