import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

			<div className="fixed top-0 bottom-0 left-0 z-30 w-full bg-black popup-wrapper bg-opacity-75">
				<div className="container flex items-center justify-center h-full">
					<div className="relative w-full p-10 overflow-hidden bg-white rounded-lg shadow-lg popup md:w-auto lg:w-1/3 md:p-16">

						<div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 bg-gray-200 cursor-pointer popup-closer">
							<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="iconfinder_ic_close_48px_352270" transform="translate(-6 -6)"><path id="Path" fill="#000" fill-rule="nonzero" d="M23.75 8.01875L21.98125 6.25 15 13.23125 8.01875 6.25 6.25 8.01875 13.23125 15 6.25 21.98125 8.01875 23.75 15 16.76875 21.98125 23.75 23.75 21.98125 16.76875 15z"/><path id="Path" d="M0 0L30 0 30 30 0 30z"/></g></g></svg>
						</div>

						<p className="mb-8 text-xl text-extrabold">Want to know when our awesome online course service launches? Subscribe for updates</p>

						<form className="form-wrapper validate" action="https://coursemaker.us10.list-manage.com/subscribe/post?u=b66f35b93048b878a28ce7c92&amp;id=6169d6d8e1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">

							<input className="w-full px-5 py-3 border border-gray-400 rounded" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required />
							<div className="absolute invisible" aria-hidden="true">
								<input type="text" name="b_074a5f521f440ccfa7bacb4e3_8a4070226e" tabIndex="-1" />
							</div>
							<input className="w-full mt-3 button" type="submit" value="Subscribe" id="mc-embedded-subscribe" />

						</form>

					</div>
				</div>
			</div>

			<main className="py-16 text-gray-900 lg:py-24">
				<div className="container">
					<div className="flex justify-center">
						<div className="w-full xl:w-3/4">
							{children}
						</div>
					</div>
				</div>
			</main>
      <Footer />
    </>
  );
};

export default Layout;
