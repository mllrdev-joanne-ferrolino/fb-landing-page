// import { useJoanne } from "./useJoanne";

// interface IJoanne {
//   a: string;
//   b: string;
//   c: string;
//   q: string;
//   w: string;
//   e: string;
// }

// const x = useJoanne()

// x.qwe.asf.string;

// const ONE = 2;

// no type assertion, such as "as ILinks" or "<ILinks>"

interface ILinks {
  languages: string[];
  otherLinks: string[];
}

export const Links: ILinks = {
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
  ],
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
  ],
};

export function useStore() {
  const links = Links;
  return { links };
}
