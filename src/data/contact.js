import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/mitchellhoesing',
    label: 'Github',
    icon: faGithub,
  },
  {
  // TODO: Fix linkedin link.
    link: 'https://www.linkedin.com/in/michaelldangelo',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:hoesingmitch02@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
