import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-gray-800 text-gray-300 rounded p-10 rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover hover:text-gray-100">About us</a>
          <a className="link link-hover hover:text-gray-100">Contact</a>
          <a className="link link-hover hover:text-gray-100">Jobs</a>
          <a className="link link-hover hover:text-gray-100">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Twitter */}
            <a href="https://twitter.com" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-500 hover:text-blue-400 transition-colors">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-500 hover:text-red-400 transition-colors">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-800 hover:text-blue-700 transition-colors">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-pink-500 hover:text-pink-400 transition-colors">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.242-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.27 0-3.67.014-4.947.072-1.477.064-2.884.364-3.934 1.414s-1.35 2.457-1.414 3.934c-.058 1.277-.072 1.677-.072 4.947s.014 3.67.072 4.947c.064 1.477.364 2.884 1.414 3.934s2.457 1.35 3.934 1.414c1.277.058 1.677.072 4.947.072s3.67-.014 4.947-.072c1.477-.064 2.884-.364 3.934-1.414s1.35-2.457 1.414-3.934c.058-1.277.072-1.677.072-4.947s-.014-3.67-.072-4.947c-.064-1.477-.364-2.884-1.414-3.934s-2.457-1.35-3.934-1.414c-1.277-.058-1.677-.072-4.947-.072zm0 10.163a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm6.406-5.406c.867 0 1.573.706 1.573 1.573s-.706 1.573-1.573 1.573-1.573-.706-1.573-1.573.706-1.573 1.573-1.573z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-600 hover:text-blue-500 transition-colors">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.83-1.56 3.03 0 3.59 1.99 3.59 4.57v5.63z" />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Booskstore Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
