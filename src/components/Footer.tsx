import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        
        
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Project</h2>
          <p className="mb-4">
            Our document analyzer helps you extract insights, summaries, and key data from uploaded DOCX, PDF, and TXT files using AI — fast, secure, and efficient.
          </p>
        </div>

      
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
              <Link href="/Linkbout" className="hover:text-white transition-colors duration-300">About</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors duration-300">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">LinkedIn</Link>
          </div>
        </div>

      
        <div>
  <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
  <p>Ghaziabad, India</p>
  <p> Email :</p>
  <p> shuklapratham28@gmail.com</p>
  <p> parikshitjaiswal82@gmail.com</p>
  <p> rrifa0609@gmail.com</p>
  <p> pratyakshagupta410@gmail.com</p>
</div>

      </div>

      {/* Footer Bottom */}
      <p className="text-center text-xs pt-8 border-t border-gray-700 mt-8">
        © {new Date().getFullYear()} DocInsight. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
