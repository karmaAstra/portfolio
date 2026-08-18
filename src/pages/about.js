import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBadge}>Our Story</div>
        <h1 style={styles.heroTitle}>Building the Future, Together</h1>
        <p style={styles.heroSubtitle}>
          We are a dedicated team of innovators, creators, and problem-solvers on a mission to build impactful digital solutions that empower people around the world.
        </p>
      </section>

      {/* Mission & Vision Grid */}
      <section style={styles.gridSection}>
        <div style={styles.card}>
          <div style={styles.iconBox}>🎯</div>
          <h2 style={styles.cardTitle}>Our Mission</h2>
          <p style={styles.cardText}>
            To deliver exceptional experiences through cutting-edge technology and thoughtful design, making complex challenges simple and accessible for everyone.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.iconBox}>🚀</div>
          <h2 style={styles.cardTitle}>Our Vision</h2>
          <p style={styles.cardText}>
            To be a globally trusted leader in digital transformation, recognized for our uncompromising quality, creativity, and customer-first mindset.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={styles.valuesSection}>
        <h2 style={styles.sectionTitle}>What Drives Us</h2>
        <div style={styles.valuesGrid}>
          <div style={styles.valueItem}>
            <h3>💡 Innovation</h3>
            <p>Constantly pushing boundaries and exploring fresh ideas to stay ahead.</p>
          </div>
          <div style={styles.valueItem}>
            <h3>🤝 Integrity</h3>
            <p>Transparency, honesty, and ethical practices form the core of everything we do.</p>
          </div>
          <div style={styles.valueItem}>
            <h3>⭐ Excellence</h3>
            <p>Delivering top-tier quality in every line of code and every interaction.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={styles.ctaBanner}>
        <h2>Want to work with us?</h2>
        <p>Let's create something extraordinary together.</p>
        <a href="/contact" style={styles.ctaButton}>Get in Touch</a>
      </section>
    </div>
  );
}

// Inline Styles for a modern look
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px 50px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroBadge: {
    display: 'inline-block',
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  heroTitle: {
    fontSize: '42px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#4b5563',
    maxWidth: '650px',
    margin: '0 auto',
  },
  gridSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '20px 20px 60px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    flex: '1',
    minWidth: '280px',
    maxWidth: '450px',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.2s ease',
  },
  iconBox: {
    fontSize: '36px',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '15px',
    color: '#4b5563',
  },
  valuesSection: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '30px',
  },
  valuesGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  valueItem: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    flex: '1',
    minWidth: '250px',
    border: '1px solid #e5e7eb',
    textAlign: 'left',
  },
  ctaBanner: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    textAlign: 'center',
    padding: '60px 20px',
    maxWidth: '900px',
    margin: '60px auto 0 auto',
    borderRadius: '20px',
  },
  ctaButton: {
    display: 'inline-block',
    marginTop: '20px',
    backgroundColor: '#ffffff',
    color: '#4f46e5',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

export default About;