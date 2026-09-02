export const brand = {
  name: "Nurtur Reader",
  domain: "nurturhq.com",
  contactEmail: "pranav@nurturhq.com",
  demoSubject: "Nurtur Reader support",
};

export const demoHref = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(
  brand.demoSubject,
)}`;

export const chromeStoreHref = "https://chromewebstore.google.com/detail/adgldejhjihoagkjilnkaofheceacjgl";
