export const Links = {
  languages: [
    "English (US)",
    "Filipino",
    "Bisaya",
    "Español",
    "한국어",
    "日本語",
    "العربية",
    "中文(简体)",
    "Português (Brasil)",
    "Français (France)",
    "Deutsch",
  ] as string[],
  otherLinks: [
    "Sign Up",
    "Log In",
    "Messenger",
    "Facebook Lite",
    "Watch",
    "People",
    "Pages",
    "Page",
    "Categories",
    "Places",
    "Games",
    "Locations",
    "Marketplace",
    "Facebook Pay",
    "Groups",
    "Jobs",
    "Oculus",
    "Portal",
    "Instagram",
    "Local",
    "Fundraisers",
    "Services",
    "Voting Information Center",
    "About",
    "Create Ad",
    "Create Page",
    "Developers",
    "Careers",
    "Privacy",
    "Cookies",
    "Ad Choices",
    "Terms",
    "Help",
    "Settings",
    "Activity Log",
  ] as string[],
};

export function useStore() {
  // const languages = Links.languages;
  // const otherLinks = Links.otherLinks;
  // return { languages, otherLinks };
  const links = Links;
  return { links };
}
