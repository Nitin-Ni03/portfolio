import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "../data/Data";
import ThreeDCard from "../common/ThreeDCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-glow-purple/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-glow-orange/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3 font-heading">
            Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Get In Touch
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-2 font-heading">
                Let's start a project together
              </h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <ThreeDCard maxTilt={10}>
                <div className="p-5 flex items-center space-x-4 select-none">
                  <div className="p-3 bg-violet-600/10 rounded-xl text-violet-400 border border-violet-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-semibold text-slate-200 hover:text-orange-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </ThreeDCard>

              {/* Phone Card */}
              <ThreeDCard maxTilt={10}>
                <div className="p-5 flex items-center space-x-4 select-none">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 border border-orange-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="block text-sm sm:text-base font-semibold text-slate-200 hover:text-orange-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </ThreeDCard>

              {/* Location Card */}
              <ThreeDCard maxTilt={10}>
                <div className="p-5 flex items-center space-x-4 select-none">
                  <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</span>
                    <span className="block text-sm sm:text-base font-semibold text-slate-200">
                      Dombivli, Maharashtra, India
                    </span>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-slate-800/80 shadow-2xl relative">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="p-4 bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/30 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3.5 text-sm text-slate-200 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3.5 text-sm text-slate-200 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3.5 text-sm text-slate-200 outline-none transition-colors"
                      placeholder="Collaboration opportunity"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3.5 text-sm text-slate-200 outline-none transition-colors resize-none"
                      placeholder="Hi Nitin, I would like to discuss..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-violet-600 text-white shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
