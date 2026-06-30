export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <div className="brand">
          <span>Bogdan&apos;s</span>
          <strong>Recovery Ltd</strong>
        </div>
        <a className="topCall" href="tel:07776462219">Call 07776 462219</a>
      </header>

      <section className="hero">
        <div className="heroImage" />
        <div className="heroShade" />

        <div className="heroContent">
          <p className="eyebrow">24/7 Recovery Service</p>
          <h1>We Tow – You Go</h1>
          <p className="heroText">
            Fast, reliable vehicle recovery and transport across Mansfield and surrounding areas.
          </p>
          <div className="heroActions">
            <a className="callBtn" href="tel:07776462219">CALL NOW</a>
            <a className="whatsappBtn" href="https://wa.me/447776462219">WhatsApp</a>
          </div>
        </div>
      </section>

      <main>
        <section className="strip">
          <div><strong>24/7</strong><span>Service</span></div>
          <div><strong>Fast</strong><span>Response</span></div>
          <div><strong>Fully</strong><span>Insured</span></div>
          <div><strong>TA-NO</strong><span>Trailer</span></div>
        </section>

        <section className="services">
          <div className="sectionTitle">
            <p>Keeping Mansfield Moving</p>
            <h2>Recovery when you need it most</h2>
          </div>

          <div className="cards">
            <article className="card">
              <h3>Breakdown Recovery</h3>
              <p>Quick help when your vehicle lets you down.</p>
            </article>
            <article className="card">
              <h3>Car Transport</h3>
              <p>Safe vehicle collection and delivery.</p>
            </article>
            <article className="card">
              <h3>Local & Long Distance</h3>
              <p>Reliable transport for short and longer journeys.</p>
            </article>
          </div>
        </section>

        <section className="reviews">
          <div className="reviewTitle">
            <p>Customer reviews</p>
            <h2>Trusted by drivers</h2>
          </div>

          <div className="reviewGrid">
            <article className="review">
              <div className="stars">★★★★★</div>
              <p>Fast response, professional service and very careful with the car.</p>
              <strong>— Local customer</strong>
            </article>
            <article className="review">
              <div className="stars">★★★★★</div>
              <p>Good communication, fair price and reliable recovery.</p>
              <strong>— Mansfield driver</strong>
            </article>
            <article className="review">
              <div className="stars">★★★★★</div>
              <p>Arrived quickly and made the whole job easy.</p>
              <strong>— Happy customer</strong>
            </article>
          </div>
        </section>

        <section className="bigCall">
          <h2>Need recovery now?</h2>
          <p>Call Bogdan&apos;s Recovery Ltd and get moving again.</p>
          <a className="callBtn dark" href="tel:07776462219">CALL 07776 462219</a>
        </section>
      </main>

      <footer>
        © 2026 Bogdan&apos;s Recovery Ltd • We Tow – You Go • Keeping Mansfield Moving
      </footer>
    </>
  )
}
