import { assetPath } from '@/lib/recipes';

export function SiteFooter({ hideWhenPrinting = false }) {
  return (
    <footer className={`site-footer${hideWhenPrinting ? ' no-print' : ''}`}>
      <div className="wrap">
        <div className="site-footer-about">
          <p>Made around one well-used kitchen table.</p>
          <a href={`${assetPath}/about`}>About this cookbook →</a>
        </div>
        <div className="site-footer-legal">
          <span>Brentwood Bunch Recipes · Online since 2026</span>
          <small>© 2026 Brentwood Bunch Recipes. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
