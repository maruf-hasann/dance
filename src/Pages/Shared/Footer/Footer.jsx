import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <>
        <footer className="footer p-10 my_container text-base-content">
          <div>
            <h4 className="text-2xl font-semibold">Dance</h4>
            <pre>
              Dhaka,Bangladesh <br />
              Phone: +88832212
              <br />
              Email: dance@yahoo.com
            </pre>
          </div>
          <div>
            <span className="footer-title">Website</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Instructors</Link>
              </li>
              <li>
                <Link to="/">Classes</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
        <div className='my_container lg:text-center'>
          <p>Copyright © 2023 - All right reserved by Dance</p>
        </div>
      </>
    );
};

export default Footer;