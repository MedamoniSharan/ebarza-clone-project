import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl font-light tracking-wide mb-4">ebarza</h3>
            <p className="text-sm text-footer-muted leading-relaxed mb-6">
              One Store for Every Detail of Your Luxury Home. Coming Soon to Dubai & Abu Dhabi.
            </p>
            <a
              href="#"
              className="inline-block border border-footer-foreground/50 text-footer-foreground text-sm px-6 py-2 hover:bg-footer-foreground/10 transition-colors"
            >
              Join Our Waitlist
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-footer-muted">
              {["Furniture", "Outdoor", "Office", "Lighting", "Rugs", "Decor"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-footer-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-footer-muted">
              {["About Us", "Our Story", "Showrooms", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-footer-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-footer-muted">
              {["FAQ", "Shipping Info", "Returns", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-footer-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-footer-foreground/70" />
              <div>
                <p className="text-sm font-semibold">Showrooms</p>
                <p className="text-sm text-footer-muted">Palm Jumeirah Mall, Dubai</p>
                <p className="text-sm text-footer-muted">Yas Mall, Abu Dhabi</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 text-footer-foreground/70" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-sm text-footer-muted">+971 2 443 2224</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5 text-footer-foreground/70" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-sm text-footer-muted">info@ebarza.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-footer-muted">© 2025 ebarza. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-footer-muted">
            <a href="#" className="hover:text-footer-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-footer-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
