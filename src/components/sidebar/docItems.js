import {
  FiArrowRightCircle,
  FiCode,
  FiGlobe,
  FiInfo,
  FiList,
  FiMail,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const gettingStartedSection = [
  {
    href: "/docs/introduction",
    icon: <FiInfo />,
    title: "Welcome",
  },
  {
    href: "/docs/getting-started",
    icon: <FiCode />,
    title: "Getting Started",
  },
];

const developmentSection = [
  {
    href: "/docs/routing",
    icon: <FiArrowRightCircle />,
    title: "Routing",
  },
  {
    href: "/docs/auth",
    icon: <FiUsers />,
    title: "Authentication",
    children: [
      {
        href: "/docs/auth/auth0",
        title: "Auth0",
      },
      {
        href: "/docs/auth/cognito",
        title: "Cognito",
      },
      {
        href: "/docs/auth/firebase",
        title: "Firebase",
      },
      {
        href: "/docs/auth/jwt",
        title: "JWT",
      },
    ],
  },
  {
    href: "/docs/guards",
    icon: <FiShield />,
    title: "Guards",
  },
  {
    href: "/docs/api-calls",
    icon: <FiArrowRightCircle />,
    title: "API Calls",
  },
  {
    href: "/docs/environment-variables",
    icon: <FiArrowRightCircle />,
    title: "Environment Variables",
  },
  {
    href: "/docs/redux",
    icon: <FiArrowRightCircle />,
    title: "Redux",
  },
  {
    href: "/docs/internationalization",
    icon: <FiGlobe />,
    title: "Internationalization",
  },
  {
    href: "/docs/eslint-and-prettier",
    icon: <FiArrowRightCircle />,
    title: "ESLint & Prettier",
  },
  {
    href: "/docs/deployment",
    icon: <FiArrowRightCircle />,
    title: "Deployment",
  },
  {
    href: "/docs/migrating-to-next-js",
    icon: <FiArrowRightCircle />,
    title: "Migrating to Next.js",
  },
];

const helpSection = [
  {
    href: "/docs/support",
    icon: <FiMail />,
    title: "Support",
  },
  {
    href: "/docs/changelog",
    icon: <FiList />,
    title: "Changelog",
    badge: "v2.1.0",
  },
];

const navItems = [
  {
    title: "Getting Started",
    pages: gettingStartedSection,
  },
  {
    title: "Development",
    pages: developmentSection,
  },
  {
    title: "Help",
    pages: helpSection,
  },
];

export default navItems;
