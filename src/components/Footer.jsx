import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-14">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2">
                        <Logo />
                        <p className="text-white/60 mt-4 max-w-md">
                            Independent coverage of NASA and the global space sector. We synthesize verified updates, mission data, and imagery into a clear daily briefing.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 tracking-tight">Sections</h4>
                        <ul className="space-y-2 text-white/70">
                            <li>
                                <a href="/space/news" className="hover:text-white flex items-center gap-1">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="/launch" className="hover:text-white flex items-center gap-1">
                                    Launches
                                </a>
                            </li>
                            <li>
                                <a href="/space/mars" className="hover:text-white flex items-center gap-1">
                                    Mars
                                </a>
                            </li>
                            <li>
                                <a href="/space/apod" className="hover:text-white flex items-center gap-1">
                                    APOD
                                </a>
                            </li>
                            <li>
                                <a href="/neo" className="hover:text-white flex items-center gap-1">
                                    NEO Tracker
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 tracking-tight">NASA Resources</h4>
                        <ul className="space-y-2 text-white/70">
                            <li>
                                <a 
                                    href="https://www.nasa.gov/nasatv" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    NASA TV Live
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://eol.jsc.nasa.gov/ESRS/HDEV/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    ISS Live Stream
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://mars.nasa.gov/layout/embed/image/mslweather/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    Mars Weather
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://api.nasa.gov" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    NASA API
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://science.nasa.gov/eclipses/future-eclipses/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    Eclipse Tracker
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 tracking-tight">Space Agencies</h4>
                        <ul className="space-y-2 text-white/70">
                            <li>
                                <a 
                                    href="https://www.nasa.gov" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    NASA
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.esa.int" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    ESA (Europe)
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://global.jaxa.jp" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    JAXA (Japan)
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.roscosmos.ru" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    Roscosmos
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.isro.gov.in" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white flex items-center gap-1"
                                >
                                    ISRO (India)
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
                    <div>© 2025 Cosmic Updates!!. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a 
                            href="https://www.nasa.gov/about/highlights/HP_Privacy.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            Privacy
                        </a>
                        <a 
                            href="https://www.nasa.gov/about/terms.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            Terms
                        </a>
                        <a 
                            href="https://www.nasa.gov/security" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            Security
                        </a>
                        <a 
                            href="https://www.nasa.gov/accessibility" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            Accessibility
                        </a>
                    </div>
                </div>

                {/* Data Attribution */}
                <div className="mt-6 text-xs text-white/40 text-center">
                    Data provided by NASA APIs • Imagery from NASA/JPL-Caltech/SpaceX/ESA
                </div>
            </div>
        </footer>
    );
};

export default Footer;