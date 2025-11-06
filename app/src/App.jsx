import './App.css'

function App() {
  return (
    <div className="app">
      <header className="top-nav">
        <div className="brand">
          <span className="brand-badge">Z</span>
          <span className="brand-name">ZipGrocer</span>
        </div>
        <nav>
          <a href="#categories">Shop</a>
          <a href="#deals">Deals</a>
          <a href="#delivery">Delivery</a>
          <a href="#app">Get the App</a>
        </nav>
        <button className="account-btn">Sign In</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">10-minute grocery delivery</p>
            <h1>Fresh groceries at your doorstep before the kettle boils.</h1>
            <p className="subhead">
              From midnight cravings to weekly hauls, ZipGrocer brings premium produce,
              essentials, and gourmet treats faster than you can write a list.
            </p>
            <div className="hero-actions">
              <div className="search">
                <span role="img" aria-label="search">🔍</span>
                <input type="text" placeholder="Search for fruits, snacks, beverages..." />
                <button>Find</button>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>2M+</strong>
                  <span>Happy households</span>
                </div>
                <div>
                  <strong>4.9★</strong>
                  <span>App store rating</span>
                </div>
                <div>
                  <strong>700+</strong>
                  <span>Micro-warehouses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="delivery-timer">
              <span role="img" aria-label="stopwatch">⏱️</span>
              <p>Delivering to <strong>Indiranagar, Bengaluru</strong></p>
              <p>ETA · <strong>08:45</strong> minutes</p>
            </div>
            <div className="mini-basket">
              <div className="item">
                <span role="img" aria-label="berries">🫐</span>
                <div>
                  <p>Blueberries - 125g</p>
                  <small>₹179 · Farm fresh</small>
                </div>
              </div>
              <div className="item">
                <span role="img" aria-label="milk">🥛</span>
                <div>
                  <p>Organic A2 Milk</p>
                  <small>₹89 · Arrives chilled</small>
                </div>
              </div>
              <div className="item">
                <span role="img" aria-label="bread">🥖</span>
                <div>
                  <p>Sourdough Loaf</p>
                  <small>₹129 · Baked today</small>
                </div>
              </div>
            </div>
            <button className="prime-btn">Start 30-day ZipPrime</button>
          </div>
        </section>

        <section className="quick-features" id="delivery">
          <div className="feature-card">
            <span>🚴</span>
            <h3>Lightning-fast riders</h3>
            <p>Local rider fleet geared up to deliver in under 10 minutes.</p>
          </div>
          <div className="feature-card">
            <span>❄️</span>
            <h3>Chill chain intact</h3>
            <p>Temperature-controlled crates keep greens crisp and dairy cool.</p>
          </div>
          <div className="feature-card">
            <span>🎧</span>
            <h3>24/7 concierge</h3>
            <p>Need help with substitutions? Our chat crew is always online.</p>
          </div>
        </section>

        <section className="categories" id="categories">
          <div className="section-heading">
            <h2>Shop by cravings</h2>
            <p>Scroll once, fill your basket with curated micro-selections.</p>
          </div>
          <div className="category-grid">
            {[
              { title: 'Fresh Produce', items: 'Greens, berries & exotics', emoji: '🥬' },
              { title: 'Everyday Essentials', items: 'Flours, oils & staples', emoji: '🛒' },
              { title: 'Breakfast Club', items: 'Cereals, spreads & milk', emoji: '🥣' },
              { title: 'Late-night Fix', items: 'Instant noodles & munchies', emoji: '🍜' },
              { title: 'Beverage Bar', items: 'Cold brews & mocktails', emoji: '🥤' },
              { title: 'Personal Care', items: 'Bath, beauty & wellness', emoji: '🧴' },
            ].map((category) => (
              <article className="category-card" key={category.title}>
                <div className="category-icon" aria-hidden="true">{category.emoji}</div>
                <h3>{category.title}</h3>
                <p>{category.items}</p>
                <button>Browse</button>
              </article>
            ))}
          </div>
        </section>

        <section className="deals" id="deals">
          <div className="section-heading">
            <h2>Tonight's lightning deals</h2>
            <p>Drop-everything discounts. Limited stock, refreshed hourly.</p>
          </div>
          <div className="deal-list">
            {[
              {
                title: 'Exotic Fruit Crate',
                description: 'Kiwi, dragon fruit, passion fruit variety box',
                price: '₹499',
                tag: '40% OFF',
              },
              {
                title: 'Protein Breakfast Bundle',
                description: 'Granola, Greek yogurt, almond butter combo',
                price: '₹349',
                tag: 'Best Seller',
              },
              {
                title: 'Zero Sugar Hydration Pack',
                description: 'Electrolyte coolers & vitamin water',
                price: '₹219',
                tag: 'New Drop',
              },
            ].map((deal) => (
              <article className="deal-card" key={deal.title}>
                <div className="deal-tag">{deal.tag}</div>
                <h3>{deal.title}</h3>
                <p>{deal.description}</p>
                <div className="deal-footer">
                  <span className="deal-price">{deal.price}</span>
                  <button>Add</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline" aria-label="How deliveries work">
          <h2>Zip speed promises</h2>
          <div className="timeline-steps">
            {[
              {
                title: 'Picked in 2 minutes',
                detail: 'Smart route picking inside our micro-fullfillment hubs.',
              },
              { title: 'Packed in chill pods', detail: 'Insulated totes segregated by temperature bands.' },
              {
                title: 'Rider out in 5',
                detail: 'AI-dispatched riders choose the fastest lane every time.',
              },
              {
                title: 'Drop-off check',
                detail: 'Contactless delivery & instant receipts on the app.',
              },
            ].map((step) => (
              <div className="timeline-card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="app-section" id="app">
          <div className="app-copy">
            <h2>Skip the line, tap the app</h2>
            <p>
              Track riders live, set pantry reminders, create shared family carts, and earn ZipCoins on
              every order.
            </p>
            <div className="store-buttons">
              <button className="store-btn">
                <span className="store-icon" aria-hidden="true"></span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="store-btn">
                <span className="store-icon" aria-hidden="true">▶</span>
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className="app-card">
            <p className="app-quote">
              “ZipGrocer nails the 2am cravings. The delivery ETA is freakishly accurate and the produce is
              consistently good.”
            </p>
            <div className="quote-meta">
              <div className="avatar" aria-hidden="true">👩‍💻</div>
              <div>
                <strong>Anika Mehra</strong>
                <span>Product Designer · Bengaluru</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>ZipGrocer</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">FAQs</a>
            <a href="#">Partner with us</a>
            <a href="#">Help center</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Licenses</a>
          </div>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} ZipGrocer Technologies Pvt. Ltd.</p>
      </footer>
    </div>
  )
}

export default App
