export default {
  title: 'Logo',
};

export const Primary = () => {
  const logo = document.createElement('div');
  const logoSpan = document.createElement('span');
  logoSpan.innerText = 'A';
  logo.className = 'logo';

  logo.appendChild(logoSpan);

  return logo;
};
