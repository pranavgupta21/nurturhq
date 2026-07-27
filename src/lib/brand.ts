export const brand = {
  name: "NurturHQ",
  domain: "nurturhq.com",
  contactEmail: "pranav@nurturhq.com",
  demoSubject: "NurturHQ workflow demo",
};

export const demoHref = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(
  brand.demoSubject,
)}`;
