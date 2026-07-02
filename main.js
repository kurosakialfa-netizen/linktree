function createProfile(name, bio, profileImage) {
  return {
    name,
    bio,
    profileImage,
  };
}

function createLink(title, url, icon = null) {
  return {
    title,
    url,
    icon,
  };
}

function createLinktreeData(profile, links) {
  return {
    profile,
    links,
  };
}

const profile = createProfile(
  "Bruno Rengifo",
  "Tecnico em Desenvolvimento de Sistema | Professor de informática",
  "./photo.jpg"
);

const links = [
  createLink("Instagram", "https://www.instagram.com/bruno_404.exe", " "),
  createLink("Email", "mailto: kurosakialfa@gmail.com", " "),
  createLink("GitHub", "//https://github.com/kurosakialfa-netizen"),
  createLink("WhatsApp", "https://wa.me/qr/BJOIFABKWXAYJ1" ),
  createLink("Linkedin", "https://www.linkedin.com/in/paulo-bruno-dos-santos-rengifo-95004240b/")
];

const sampleData = createLinktreeData(profile, links);

function getLinktreeData() {
  return sampleData;
}
