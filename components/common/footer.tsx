import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-green-100 text-gray-900 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-extrabold mb-4">ABOUT</h4>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Image
              src="/profile.jpeg"
              alt="Akash"
              width={50}
              height={50}
              className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-md"
            />
            <span className="font-semibold text-lg">Akash <span className="text-green-600">🧡</span></span>
          </div>
          <p className="mt-3 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </p>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-xl font-extrabold mb-4">PRODUCTS</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-green-600 transition">Build Modern Full-Stack Apps: Next.js Course</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Next.js Workshop</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Developer to Leader</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Engineering Leader's Playbook</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-xl font-extrabold mb-4">RESOURCES</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-green-600 transition">Blog</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Frontend Snacks Newsletter</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Engineering Leader's Snacks Newsletter</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Free Course: Next.js Hot Tips</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t border-gray-300 pt-4">
        © 2025 MD Abdur Rahman Akash. All Rights Reserved.
      </div>
    </footer>
  );
}
