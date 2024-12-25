/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const socials = [
  {
    title: 'facebook',
    logo: '/images/fb.png',
    link: 'https://facebook.com/'
  },
  {
    title: 'twitter',
    logo: '/images/tw.png',
    link: 'https://x.com/'
  },
  {
    title: 'instagram',
    logo: '/images/ig.png',
    link: 'https://instagram.com/'
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-5 mt-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="text-sm">© {year} DIAMOND Tas. Managed by PT BIP (Berlian Indo Perkasa)</p>

          <div className="flex items-center gap-x-3">
            {socials.map((social) => (
              <Link target="_blank" to={social.link} key={social.title} className="w-8 h-8">
                <img src={social.logo} alt={social.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
