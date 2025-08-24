import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/contactSectionA.css';

const ContactSectionA = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: 'Contact Us',
      subheading: 'We would love to hear from you! Fill out the form below or reach out through the contact details provided.',
      placeholders: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message'
      },
      button: 'Send Message',
      info: [
        { icon: '📍', text: 'Jl. Example No.123, Jakarta, Indonesia' },
        { icon: '📞', text: '+62 812-3456-7890' },
        { icon: '✉️', text: 'contact@forpasi.com' }
      ]
    },
    id: {
      heading: 'Hubungi Kami',
      subheading: 'Kami ingin mendengar dari Anda! Isi formulir di bawah atau hubungi kami melalui kontak yang tersedia.',
      placeholders: {
        name: 'Nama Anda',
        email: 'Email Anda',
        message: 'Pesan Anda'
      },
      button: 'Kirim Pesan',
      info: [
        { icon: '📍', text: 'Jl. Contoh No.123, Jakarta, Indonesia' },
        { icon: '📞', text: '+62 812-3456-7890' },
        { icon: '✉️', text: 'contact@forpasi.com' }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="contact-section">
      <div className="contact-glass">
        <h2>{currentContent.heading}</h2>
        <p>{currentContent.subheading}</p>

        <form className="contact-form">
          <input type="text" placeholder={currentContent.placeholders.name} />
          <input type="email" placeholder={currentContent.placeholders.email} />
          <textarea placeholder={currentContent.placeholders.message}></textarea>
          <button type="submit">{currentContent.button}</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSectionA;
