import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GlobalSEO = () => {
  const { pathname } = useLocation();

  const siteName = " | MOMO Resturant";
  const baseUrl = import.meta.env.BASE_URL;

  const seoConfig = {
    '/': {
      title: `Home${siteName}`,
      description: "Welcome to our restaurant! Enjoy fresh, locally sourced ingredients, crafted beautifully by our executive chefs. Order online now.",
    },
    '/about': {
      title: `About Us${siteName}`,
      description: "Learn about our culinary journey, our commitment to healthy food, and the team behind your favorite dishes.",
    },
    '/contact': {
      title: `Contact Us${siteName}`,
      description: "Have questions or want to book a table? Reach out to our customer support team directly via phone, email, or our contact form.",
    },
    '/services': {
      title: `Our Services${siteName}`,
      description: "Explore our premium catering services, private dining options, and corporate lunch box delivery setups.",
    },
    '/menu': {
      title: `Our Delicious Menu${siteName}`,
      description: "Browse through our wide selection of appetizers, gourmet main courses, wood-fired pizzas, and handcrafted desserts.",
    },
    '/allergy-advice': {
      title: `Allergy Advice${siteName}`,
      description: "Your health is our top priority. Review our detailed dietary allergen guide before placing an order.",
    },
    '/cart': {
      title: `Your Shopping Cart${siteName}`,
      description: "Review the items in your food cart before proceeding to our secure checkout panel.",
    },
    '/payment': {
      title: `Secure Payment Checkout${siteName}`,
      description: "Complete your meal order safely through our secure, encrypted payment processing gateway.",
    },
  };

  let currentSEO = seoConfig[pathname];

  if (!currentSEO) {
    if (pathname.startsWith('/menu-detail/')) {
      currentSEO = {
        title: `View Menu Item${siteName}`,
        description: "Explore ingredients, nutritional details, and pricing configurations for this specific menu selection.",
      };
    } else {
      currentSEO = {
        title: `Page Not Found${siteName}`,
        description: "Oops! The page you are searching for does not exist or has been permanently moved.",
      };
    }
  }

  return (
    <Helmet>
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <link rel="canonical" href={`${baseUrl}${pathname}`} />

      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:url" content={`${baseUrl}${pathname}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default GlobalSEO;