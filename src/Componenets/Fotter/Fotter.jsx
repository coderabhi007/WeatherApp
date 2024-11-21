import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abhishek Subhash Sutar. All rights reserved.
        </p>
        <div className="mt-2">
          {/* GitHub Link */}
          <a
            href="https://github.com/coderabhi007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 mx-2"
          >
            GitHub
          </a>
          <span>|</span>

          {/* LeetCode Link */}
          <a
            href="https://leetcode.com/u/abhi045/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 mx-2"
          >
            LeetCode
          </a>
          <span>|</span>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/abhishek-sutar-50889325b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
