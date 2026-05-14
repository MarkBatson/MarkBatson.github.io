import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="flex justify-center gap-5 sm:gap-10 p-10 sm:p-20 flex-wrap-reverse">
        <p className="text-sm">
          To contact me please reach out on my LinkedIn.
          <br/>
          © 2026 Mark Batson. All rights reserved.
        </p>

        <a href="https://www.linkedin.com/in/mark-batson" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-10 h-10'/>
        </a>
        <a href="https://github.com/MarkBatson" target="_blank" rel="noopener noreferrer">
          <SiGithub className='w-10 h-10' />
        </a>
      </footer>
    </>
  );
}

export default Footer;
