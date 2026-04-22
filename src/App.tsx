import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from './images';
import { 
  Menu, X, Star, Calendar, Sparkles, Droplets, 
  Paintbrush, Scissors, GraduationCap, MapPin, 
  Phone, ArrowRight, CheckCircle2, Instagram, Facebook, MessageCircle
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Randomize gallery images
    const shuffled = [...IMAGES.gallery].sort(() => 0.5 - Math.random());
    setGalleryImages(shuffled);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Branches', href: '#branches' },
  ];

  return (
    <div className="min-h-screen bg-dark text-secondary">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-white/5 ${
          isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-3xl font-serif text-secondary tracking-widest font-semibold flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
            NUMRA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-sm uppercase tracking-widest font-medium text-secondary/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="bg-primary text-secondary hover:bg-primary-dark transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide border border-primary hover:border-primary-dark"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-dark-elevated border-b border-white/10 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif italic text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block mt-4 bg-primary text-secondary px-8 py-3 rounded-full text-sm font-medium tracking-wide"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex border-b border-white/10 flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-dark/40 z-10" />
          <img 
            src={IMAGES.hero} 
            alt="Beautiful bride makeup" 
            className="w-full h-full object-cover object-center scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl pt-24 mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-dark/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium tracking-wider">4.7★ RATED | 1,200+ HAPPY BRIDES</span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-6"
          >
            Where Every Bride <br/><span className="text-primary italic">Becomes Art</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-lg md:text-xl text-secondary/80 font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            Lahore's Most Trusted Luxury Bridal Makeup Studio.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#contact" className="w-full sm:w-auto bg-primary text-secondary px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group">
              <Calendar className="w-4 h-4" />
              BOOK APPOINTMENT
            </a>
            <a href="#services" className="w-full sm:w-auto bg-transparent border border-white/30 text-secondary px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white/5 hover:border-white transition-all flex items-center justify-center gap-2">
              VIEW PORTFOLIO <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-32 bg-dark relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">EST. 2014</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-secondary">The <span className="italic text-primary">NUMRA</span> Experience</h2>
            <p className="text-lg text-secondary/70 font-light leading-relaxed mb-10">
              Founded by renowned artist Numra Waqas, we have redefined luxury bridal artistry in Lahore. 
              Our studio isn't just about makeup; it's a sanctuary where every stroke of the brush highlights 
              your individual beauty, ensuring you walk down the aisle feeling like royalty.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />, title: "Expert Artists", desc: "Trained under international masterclasses." },
                { icon: <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />, title: "Premium Products", desc: "Exclusively using L'Oréal, Kérastase, and high-end brands." },
                { icon: <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />, title: "Personalized Service", desc: "Consultations tailored to your skin type and vision." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-serif mb-1">{item.title}</h3>
                    <p className="text-sm text-secondary/60 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-white/10 p-2">
              <img 
                src={IMAGES.about}
                alt="Makeup artist working" 
                className="w-full h-full object-cover rounded-t-full opacity-90 hover:opacity-100 transition-opacity duration-700" 
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-primary/40 rounded-full mix-blend-overlay pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 lg:py-32 bg-dark-elevated">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="text-center mb-16 lg:mb-24">
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-secondary">Signature Services</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto mt-8"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: "Bridal Makeup", desc: "Flawless, long-lasting luxury artistry for your big day." },
              { icon: <Paintbrush className="w-8 h-8" />, title: "Party Makeup", desc: "Glamorous and elegant looks for any special occasion." },
              { icon: <Scissors className="w-8 h-8" />, title: "Hair Styling", desc: "From intricate updos to premium restorative treatments." },
              { icon: <Droplets className="w-8 h-8" />, title: "Skin & Facial Care", desc: "Rejuvenating facials using top-tier dermatology brands." },
              { icon: <CheckCircle2 className="w-8 h-8" />, title: "Mani & Pedi", desc: "Relaxing spa experiences for perfectly groomed hands and feet." },
              { icon: <GraduationCap className="w-8 h-8" />, title: "Masterclass", desc: "Learn the art of self-grooming from our senior artists." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group p-8 rounded-3xl bg-dark border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3 text-secondary">{service.title}</h3>
                <p className="text-secondary/60 font-light mb-8 flex-grow">{service.desc}</p>
                <div className="flex items-center text-sm font-medium text-primary uppercase tracking-wider group-hover:text-secondary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US - STATS */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center divide-x-0 lg:divide-x divide-white/20">
            {[
              { val: "10+", label: "Years Experience" },
              { val: "3", label: "Branches in Lahore" },
              { val: "100%", label: "International Brands" },
              { val: "128K+", label: "Insta Followers" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="px-4"
              >
                <h3 className="text-5xl font-serif font-bold mb-2 tracking-tight">{stat.val}</h3>
                <p className="text-sm uppercase tracking-widest font-medium opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 lg:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">Words From Our Brides</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Fatima Ali", review: "I booked NUMRA for my Baraat. The makeup was so flawless and stayed perfect despite all the tears. Highly recommend, they are true magicians!" },
              { name: "Zainab Shah", review: "From the ambiance to the VIP treatment, everything was 10/10. The bridal suite at the DHA branch is gorgeous. I felt so relaxed." },
              { name: "Ayesha Khan", review: "Numra's signature look is to die for. My husband couldn't take his eyes off me. Thank you for making my dream look come to life!" }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-dark-elevated p-8 lg:p-10 rounded-2xl border border-white/5 relative">
                <div className="text-primary text-6xl font-serif opacity-20 absolute top-4 right-8">"</div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-secondary/80 font-light italic leading-relaxed mb-8">"{testimonial.review}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <h4 className="font-serif text-lg">{testimonial.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT / BRANCHES SECTION */}
      <section id="branches" className="py-24 lg:py-32 bg-dark-elevated border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-secondary flex items-center gap-4">
              Visit Us <div className="hidden sm:block flex-grow h-[1px] bg-white/10 ml-8"></div>
            </h2>
            <p className="text-secondary/60">Open Monday–Sunday • 11:00 AM – 7:30 PM</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "DHA Branch", addr: "174-Y, Phase 3, DHA", phone: "0305-6260230" },
              { name: "Cantt Branch", addr: "Girja Chowk, Abid Majeed Rd", phone: "0310-1111686" },
              { name: "Johar Town", addr: "257-H2 Abdul Haque Rd", phone: "0310-1111703" }
            ].map((branch, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-dark p-8 rounded-2xl border border-white/5 hover:border-primary transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
                <MapPin className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-4 relative z-10">{branch.name}</h3>
                <p className="text-secondary/70 font-light mb-2 relative z-10">{branch.addr}</p>
                <p className="text-primary font-medium tracking-wide flex items-center gap-2 mt-6 relative z-10">
                  <Phone className="w-4 h-4" /> {branch.phone}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-16 text-center" id="contact">
            <a 
              href="https://wa.me/923056260230" 
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-medium tracking-wide hover:bg-[#20bd5a] transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">Our Portfolio</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          {/* Impressive Masonry-ish Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt="Numra Studio Gallery" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:opacity-80 cursor-pointer" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark pt-20 pb-10 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <a href="#home" className="inline-flex items-center gap-2 mb-8 text-4xl font-serif text-primary tracking-widest cursor-pointer group">
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" /> NUMRA
          </a>
          <p className="text-secondary/60 font-serif italic text-2xl mb-12">"Beauty is not just seen. It's felt."</p>
          
          <div className="flex justify-center gap-6 mb-16">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-secondary/40 font-light tracking-wider uppercase">
            &copy; 2025 NUMRA Makeup Studio & Salon. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/923056260230"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
      {/* Scroll animation keyframe */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
