import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';

export const ContactSection = () => {
  return (
    <section id='contact' className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          title="Let's Connect" 
          eyebrow="Get In Touch" 
          description="I'd love to hear from you!" 
        />
        <div className="mt-10 md:mt-20">
          <Card className="p-6 sm:p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl mb-6">
                Have an opportunity available?
              </h3>
              <p className="text-white/60 mb-8 text-lg">
                Whether you have a project in mind or just want to chat about the future of software development, 
                I&apos;m always excited to connect with fellow developers and potential collaborators.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                {/* <a 
                  href="mailto:your.email@example.com" 
                  className="bg-white text-gray-900 h-12 px-8 rounded-xl font-semibold inline-flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  Send me an email
                </a> */}
                <a 
                  href="https://www.linkedin.com/in/andy-d-kim/" 
                  className="border border-white/15 h-12 px-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <LinkedInIcon className="size-4" fill='white' />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/andyk21/" 
                  className="border border-white/15 h-12 px-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
