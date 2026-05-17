import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Phone, Send, ExternalLink, Loader2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import Toast from '../ui/Toast';
import { personal } from '../../data/personal';
import { submitContactMessage } from '../../api/contact';
import { validateContactForm } from '../../utils/validators';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    try {
      await submitContactMessage(form);
      setToast({ message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
      setForm(initialForm);
    } catch (err) {
      setToast({
        message: err.message || 'Something went wrong. Please try again or email me directly.',
        type: 'error',
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast({ message: '', type: 'success' }), 5000);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-indigo-500/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
      errors[field] ? 'border-red-500/50' : 'border-white/10'
    }`;

  return (
    <AnimatedSection id="contact" className="py-20 sm:py-24 lg:py-28" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Build Something"
          description="Have a project in mind? Send a message or reach out directly."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-sm text-slate-400 sm:text-base">
              I typically respond within 24 hours. For urgent inquiries, call or email directly.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm text-white break-all">{personal.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${personal.phone}`}
                  className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm text-white">{personal.phoneDisplay}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
                >
                  <Code2 className="h-5 w-5 text-violet-400" />
                  <div>
                    <p className="text-xs text-slate-500">GitHub</p>
                    <p className="text-sm text-white">@{personal.githubHandle}</p>
                  </div>
                </a>
              </li>
              {personal.websites.map((site) => (
                <li key={site.url}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
                  >
                    <ExternalLink className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="text-xs text-slate-500">Website</p>
                      <p className="text-sm text-white">{site.label}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass lg:col-span-3 rounded-2xl p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-y min-h-[120px]`}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                as={motion.button}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </AnimatedSection>
  );
}
