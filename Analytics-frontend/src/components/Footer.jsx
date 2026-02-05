import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="relative left-1/2 w-screen -translate-x-1/2 bg-cyan-500 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold">
                            Stock Nest
                        </Link>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <div className="space-y-4">
                            <Link href="/about" className="block text-indigo-500 hover:text-blue-300 transition-colors"> 
                                About Us
                            </Link>
                            <Link href="/contact" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                Contact
                            </Link>
                            <Link href="/faqs" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                Help
                            </Link>
                        </div>
                    </div>

                    {/* Follow us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Follow us</h3>
                        <div className="space-y-4">
                            <Link href="https://twitter.com" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                X
                            </Link>
                            <Link href="https://medium.com" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                Medium
                            </Link>
                            <Link href="https://linkedin.com" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Help</h3>
                        <div className="space-y-4">
                            <Link href="/faqs" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                How do I analyze stock performance?
                            </Link>
                            <Link href="/faqs" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                What analytics features are included?
                            </Link>
                            <Link href="/faqs" className="block text-indigo-500 hover:text-blue-300 transition-colors">
                                How do I track my portfolio?
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white">Stock Nest © 2026</p>
                        <div className="flex space-x-6">
                            <Link href="/policy" className="text-indigo-500 hover:text-blue-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/policy" className="text-indigo-500 hover:text-blue-300 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}