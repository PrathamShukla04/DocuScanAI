"use client";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

        {/* About Project */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Project</h2>
          <p className="mb-4">
            ClauseLogic is an AI-powered tool that extracts approval decisions, financial insights, and clause-level justifications from your documents — fast, secure, and smart.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/upload" className="hover:text-white transition-colors duration-300">Upload</Link>
            </li>
            <li>
              <Link href="/results" className="hover:text-white transition-colors duration-300">Results</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-300">About</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="space-y-2">
            <div>
              <p className="text-white">GitHub :</p>
              <Link href="https://github.com/PrathamShukla04/DocuScanAI" target="_blank"
                rel="noopener noreferrer"  className="hover:text-white transition-colors duration-300 block">
                Repo 1
              </Link>
              <Link href="https://github.com/sustainablerobot/Hackathon-6" target="_blank"
                rel="noopener noreferrer"  className="hover:text-white transition-colors duration-300 block">
                Repo 2
              </Link>
            </div>
            
            <div>
              <p className="text-white">LinkedIn :</p>

              <Link href="https://www.linkedin.com/in/pratham-shukla-35b65a330/" target="_blank"
                rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 block">
                Pratham
              </Link>
              <Link href="https://www.linkedin.com/in/parikshit-jaiswal" target="_blank"
                rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 block">
                Parikshit
              </Link>
              <Link href="http://www.linkedin.com/in/rifa-rafiq-636218377" target="_blank"
                rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 block">
                Rifa
              </Link>
              <Link href="https://www.linkedin.com/in/pratyaksha-gupta-354b2133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
                rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 block">
                Pratyaksha
              </Link>
            </div>
          </div>

        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <p>Ghaziabad, India</p>
          <p className="mt-2">Email:</p>
          <p>shuklapratham28@gmail.com</p>
          <p>parikshitjaiswal82@gmail.com</p>
          <p>rrifa0609@gmail.com</p>
          <p>pratyakshagupta410@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-xs pt-8 border-t border-gray-700 mt-8">
        © {new Date().getFullYear()} ClauseLogic. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
