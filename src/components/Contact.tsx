import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import ParticleRainScene from "./ParticleRainScene";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "EmailJS credentials are not configured. Please contact the site administrator.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-poppins">Contact</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Label htmlFor="user_name" className="text-foreground">Your name</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder="What's your good name?"
                  required
                  className="bg-card border-border focus:border-primary mt-2"
                />
              </div>

              <div>
                <Label htmlFor="user_email" className="text-foreground">Your Email</Label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="What's your email address?"
                  required
                  className="bg-card border-border focus:border-primary mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-card border-border focus:border-primary mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share internship opportunities, project collaborations, or feedback"
                  required
                  rows={5}
                  className="bg-card border-border focus:border-primary mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-blue text-base sm:text-lg py-5 sm:py-6"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[300px] sm:h-[400px] md:h-[500px]"
          >
            <ParticleRainScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
