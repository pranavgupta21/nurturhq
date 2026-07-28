export const brand = {
  name: "Nurtur AI",
  domain: "nurturhq.com",
  contactEmail: "pranav@nurturhq.com",
  demoSubject: "Nurtur AI workflow demo",
};

export const demoHref = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(
  brand.demoSubject,
)}`;
