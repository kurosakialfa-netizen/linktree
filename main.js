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
  "Trabalhos em Serviços de informática | Professor de informática",
  "./photo.jpg"
);

const links = [
  createLink("Instagram", "https://www.instagram.com/bruno_404.exe", " "),
  createLink("Email", "mailto: kurosakialfa@gmail.com", " "),
  createLink("Tik Tok", "https://www.tiktok.com/@bruno_drumns_am"),
  createLink("WhatsApp", "https://wa.me/message/CNAKUJLAYHQPL1" )
];

const sampleData = createLinktreeData(profile, links);

function getLinktreeData() {
  return sampleData;
}
