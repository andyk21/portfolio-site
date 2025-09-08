import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-row justify-between items-center gap-8'>
          <div className='text-white/70'>
            Andy Kim
          </div>
          <div className='text-white/40'>
            Built with Next.js in React + Deployed on Vercel
          </div>
          {/* <nav className='flex flex-row items-center gap-8'>
            <a href="https://www.linkedin.com/in/andy-d-kim/" className='text-white/40 font-semibold inline-flex items-center gap-1.5'>
              <LinkedInIcon className='size-4' fill='white' fillOpacity='0.4' />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/andyk21/" className='text-white/40 font-semibold inline-flex items-center gap-1.5'>
              <GitHubIcon className='size-4' />
              <span>GitHub</span>
            </a>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};
