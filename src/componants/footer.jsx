export default function Footer() {
    return (
        <footer className=" text-black">
            <div className="container mx-auto flex ">
                
                <div className="px-6 py-10 grid grid-cols-4 w-3/5 pl-24 gap-6">
                    {/* Main Pages */}
                    <div className="col-span-2">
                        <h4 className="text-lg font-semibold mb-3">Main Pages</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/about" className="hover:text-white">About</a></li>
                            <li><a href="/features" className="hover:text-white">Features</a></li>
                            <li><a href="/integrations" className="hover:text-white">Integrations</a></li>
                            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="/blog" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    {/* Utility Pages */}
                    <div  className="col-span-2">
                        <h4 className="text-lg font-semibold mb-3">Utility Pages</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/coming-soon" className="hover:text-white">Coming Soon</a></li>
                            <li><a href="/sign-in" className="hover:text-white">Sign In</a></li>
                            <li><a href="/sign-up" className="hover:text-white">Sign Up</a></li>
                            <li><a href="/request-a-demo" className="hover:text-white">Request a Demo</a></li>
                        </ul>
                    </div>

                    {/* Template Pages */}
                    <div  className="col-span-2">
                        <h4 className="text-lg font-semibold mb-3">Template Pages</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/start-here" className="hover:text-white">Start Here</a></li>
                            <li><a href="/style-guide" className="hover:text-white">Style Guide</a></li>
                            <li><a href="/404" className="hover:text-white">404 Not Found</a></li>
                            <li><a href="/licenses" className="hover:text-white">Licenses</a></li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div  className="col-span-2">
                        <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                        {/* <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">🔗 Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white">🔗 LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white">🔗 YouTube</a>
                        </div> */}
                        <h4 className="text-lg font-semibold mt-6">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Links */}


            {/* Bottom Bar
            <div className="border-t border-gray-700 text-gray-400 text-sm text-center py-4">
                <p>🌐 Language: Fr | &copy; 2025 Your Company</p>
            </div> */}
        </footer>
    );
}
