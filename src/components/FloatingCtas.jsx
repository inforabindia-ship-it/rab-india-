import { Link } from "react-router-dom";
import { WHATSAPP_E164 } from "../seo/site";

const waHref = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
  "Hello RAB INDIA, I would like an enquiry about industrial security and IT infrastructure."
)}`;

export default function FloatingCtas() {
  return (
    <div className="floating-cta-bar" aria-label="Quick contact">
      <a className="floating-cta floating-cta--wa" href={waHref} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <Link className="floating-cta floating-cta--inq" to="/#contact">
        Enquiry
      </Link>
    </div>
  );
}
