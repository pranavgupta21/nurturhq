export const brand = {
  name: "Nurtur Reader",
  domain: "nurturhq.com",
  contactEmail: "pranav@nurturhq.com",
  demoSubject: "Nurtur Reader beta feedback",
};

export const demoHref = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(
  brand.demoSubject,
)}`;

const chromeStoreBaseHref = "https://chromewebstore.google.com/detail/adgldejhjihoagkjilnkaofheceacjgl";

function chromeStoreHref(utmContent: string) {
  const params = new URLSearchParams({
    utm_source: "nurturhq",
    utm_medium: "website",
    utm_campaign: "chrome_store_install",
    utm_content: utmContent,
  });

  return `${chromeStoreBaseHref}?${params.toString()}`;
}

export const chromeStoreHrefs = {
  header: chromeStoreHref("header_cta"),
  hero: chromeStoreHref("hero_cta"),
  final: chromeStoreHref("final_cta"),
};
