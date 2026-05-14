import Header from './components/Header';
import TechSkills from './components/TechSkills';
import InfoCapsule from './components/InfoCapsule';
import Project from './components/Project';
import Footer from './components/Footer';
import depotLogo from './assets/depotlogo.svg';
import creditCardSnapshot from './assets/creditcardsnapshot.png';
import checkoutImage from './assets/checkout.png';
import ugaImage from './assets/uga.png';

function App() {
  const creditCardBullets = [
    'Front-end lead creating credit card marketing that generated more that 3,000 new accounts per month',
    'Collaborated with 3rd party stakeholders to enable more than 1 million customers to SSO link accounts',
    'Acted as subject matter expert for multiple components owning technical design',
    'Lead and mentored developers including running a weekly code review',
    'Migrated legacy code to align with modern development standards'
  ];

  const checkoutBullets = [
    'Enabled millions of customers to purchase products every day',
    'Contributed to a complex application that used Redux for state management',
    'Improved performance and monitored core web vitals',
    'Collaborated closely with product management, UX design, and QA to deliver features end-to-end'
  ];

  return (
    <div className=" m-auto max-w-5xl bg-dark-blue">
      <Header />
      <TechSkills />
      <InfoCapsule logo={depotLogo} info='7 + Years of experience at The Home Depot' color='border-home-depot' />
      <Project screenshot={creditCardSnapshot} name='Credit Card Team' bullets={creditCardBullets} />
      <Project screenshot={checkoutImage} name='Checkout Team' bullets={checkoutBullets} imageRight />
      <InfoCapsule logo={ugaImage} info='BS Computer Science, University of Georgia' color='border-uga' />
      <Footer />
    </div>
  );
}

export default App;
