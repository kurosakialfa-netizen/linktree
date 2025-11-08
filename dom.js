function createElement(tag, className = '', content = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.textContent = content;
  return element;
}

function createProfileSection(profile) {
  const container = createElement('div', 'flex flex-col items-center mb-8');

  const img = createElement('img');
  img.src = profile.profileImage;
  img.alt = profile.name;
  img.className = 'w-32 h-32 rounded-full mb-4 object-cover border-4 border-white shadow-lg';

  const name = createElement('h1', 'text-2xl font-bold text-gray-800 mb-2', profile.name);
  const bio = createElement('p', 'text-gray-600 text-center max-w-md', profile.bio);

  container.appendChild(img);
  container.appendChild(name);
  container.appendChild(bio);

  return container;
}

function createLinkButton(link) {
  const button = createElement('a');
  button.href = link.url;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.className = 'w-full max-w-md bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mb-4 flex items-center justify-center text-gray-800 hover:bg-gray-50 border border-gray-200';

  const content = createElement('div', 'flex items-center');

  if (link.icon) {
    const icon = createElement('span', 'mr-3 text-xl', link.icon);
    content.appendChild(icon);
  }

  const title = createElement('span', 'font-medium', link.title);
  content.appendChild(title);

  button.appendChild(content);
  return button;
}

function createLinksSection(links) {
  const container = createElement('div', 'flex flex-col items-center w-full');

  links.forEach(link => {
    const linkButton = createLinkButton(link);
    container.appendChild(linkButton);
  });

  return container;
}

function renderLinktree(data) {
  const app = createElement('div', 'min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-12 px-4');
  const container = createElement('div', 'max-w-md mx-auto');

  const profileSection = createProfileSection(data.profile);
  const linksSection = createLinksSection(data.links);

  container.appendChild(profileSection);
  container.appendChild(linksSection);
  app.appendChild(container);

  document.body.appendChild(app);
}

function initApp() {
  const data = getLinktreeData();
  renderLinktree(data);
}

document.addEventListener('DOMContentLoaded', initApp);