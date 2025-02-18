import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Box, Typography, Button } from "@mui/material";
import TermsOfUse from "../../components/common/TermsOfUse";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Link to="#" className="text-2xl font-bold">
                CourtConnect
              </Link>
            </div>
            <ul className="flex mb-4 md:mb-0">
              <li className="mr-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Liên hệ
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Giới thiệu
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  {"FAQ's"}
                </a>
              </li>
              <li className="mr-4">
                <button
                  onClick={handleOpen}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  Điều khoản
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Hỗ trợ
                </a>
              </li>
            </ul>
            <ul className="flex mb-4 md:mb-0">
              <li className="mr-4">
                <a href="#" className="flex">
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#0EB3CE"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#0EB3CE"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                      fill="#0EB3CE"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="text-gray-600">
              © 2024 CourtConnect, all rights reserved
            </div>
          </div>
        </div>
      </footer>
      <TermsOfUse handleOpen={open} handleClose={handleClose} />
    </>
  );
};

export default Footer;
