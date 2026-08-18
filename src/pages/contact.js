import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend or API
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.header}>
        <div style={styles.badge}>Get in Touch</div>
        <h1 style={styles.title}>We'd Love to Hear From You</h1>
        <p style={styles.subtitle}>
          Have a question, feedback, or a project in mind? Drop us a message or reach out using the contact info below.
        </p>
      </section>

      {/* Main Content Layout */}
      <div style={styles.contentGrid}>
        {/* Contact Info Cards */}
        <div style={styles.infoWrapper}>
          <div style={styles.infoCard}>
            <div style={styles.iconBox}>📍</div>
            <div>
              <h3>Our Location</h3>
              <p style={styles.infoText}>123 Innovation Drive, Tech City, TC 90210</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>📧</div>
            <div>
              <h3>Email Us</h3>
              <p style={styles.infoText}>support@example.com</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>📞</div>
            <div>
              <h3>Call Us</h3>
              <p style={styles.infoText}>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          {submitted ? (
            <div style={styles.successMessage}>
              <h2>🎉 Thank You!</h2>
              <p>Your message has been sent successfully. We will get back to you soon.</p>
              <button 
                style={styles.resetButton} 
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <h2 style={styles.formTitle}>Send a Message</h2>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  style={styles.input} 
                  placeholder="John Doe"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  style={styles.input} 
                  placeholder="john@example.com"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  style={styles.textarea} 
                  placeholder="How can we help you?"
                  rows="4"
                />
              </div>

              <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Inline Styles for a polished look
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
  header: {
    textAlign: 'center',
    padding: '60px 20px 40px 20px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '38px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#4b5563',
  },
  contentGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  infoWrapper: {
    flex: '1',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: '20px 25px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
    border: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  iconBox: {
    fontSize: '28px',
    backgroundColor: '#f3f4f6',
    padding: '12px',
    borderRadius: '10px',
  },
  infoText: {
    color: '#4b5563',
    margin: '4px 0 0 0',
    fontSize: '14px',
  },
  formContainer: {
    flex: '1.2',
    minWidth: '300px',
    backgroundColor: '#ffffff',
    padding: '35px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
  },
  formTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.2s',
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  resetButton: {
    marginTop: '20px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
  }
};

export default Contact;