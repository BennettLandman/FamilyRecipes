export function SiteFooter({ hideWhenPrinting = false }) {
  return (
    <footer className={`site-footer${hideWhenPrinting ? ' no-print' : ''}`}>
      <div className="wrap">
        <p>Made around one well-used kitchen table.</p>
        <div className="site-footer-legal">
          <span>Brentwood Bunch Recipes · Online since 2026</span>
          <small>© 2026 Brentwood Bunch Recipes. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
