import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-pink-600">Divine Fitness</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-700 hover:text-pink-600 transition-colors">Programs</a>
              <a href="#membership" className="text-gray-700 hover:text-pink-600 transition-colors">Membership</a>
              <a href="#shop" className="text-gray-700 hover:text-pink-600 transition-colors">Shop</a>
            </nav>
            <a href="#membership" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-4 py-2 bg-pink-600 text-white hover:bg-pink-700">Get Started</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your <span className="text-pink-600 block">Body & Mind</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of women who've discovered their strength, confidence, and best selves through our personalized fitness programs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#membership" className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-4 bg-pink-600 text-white hover:bg-pink-700">Start Your Journey</a>
                <a href="#testimonials" className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-4 border border-pink-600 text-pink-600 hover:bg-pink-50">Watch Our Story</a>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">50K+</div>
                  <div className="text-sm text-gray-500">Women Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">95%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">4.9★</div>
                  <div className="text-sm text-gray-500">App Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&crop=face" alt="Woman doing yoga" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Empowering Women Through Fitness</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Divine Fitness, we believe every woman deserves to feel strong, confident, and empowered. Our holistic approach combines cutting-edge workouts, nutrition guidance, and mental wellness support.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded by women, for women, we understand the unique challenges you face and provide personalized solutions that fit your lifestyle.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  </div>
                  <h3 className="font-semibold">Personalized</h3>
                  <p className="text-sm text-gray-600">Tailored programs for your goals</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                  </div>
                  <h3 className="font-semibold">Community</h3>
                  <p className="text-sm text-gray-600">Support from like-minded women</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop&crop=face" alt="Women working out together" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover our most popular fitness programs, each designed to help you reach your specific goals with expert guidance every step of the way.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" alt="Strength & Sculpt" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">Beginner to Advanced</div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Strength & Sculpt</h3>
                <p className="text-base text-gray-600">Build lean muscle and boost metabolism with our signature strength training program.</p>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600"><span>Duration: 12 weeks</span></div>
                <div className="space-y-2">
                  <h4 className="font-medium">What's included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Progressive overload</li>
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Form-focused</li>
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Equipment adaptable</li>
                  </ul>
                </div>
                <a href="#membership" className="block w-full text-center rounded-md px-4 py-2 bg-pink-600 text-white hover:bg-pink-700">Learn More</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop" alt="HIIT & Flow" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">Intermediate</div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">HIIT & Flow</h3>
                <p className="text-base text-gray-600">High-intensity workouts combined with yoga flow for the perfect balance.</p>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600"><span>Duration: 8 weeks</span></div>
                <div className="space-y-2">
                  <h4 className="font-medium">What's included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Fat burning</li>
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Flexibility</li>
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Stress relief</li>
                  </ul>
                </div>
                <a href="#membership" className="block w-full text-center rounded-md px-4 py-2 bg-pink-600 text-white hover:bg-pink-700">Learn More</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop" alt="Prenatal Fitness" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">All levels</div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Prenatal Fitness</h3>
                <p className="text-base text-gray-600">Safe, effective workouts designed specifically for expecting mothers.</p>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600"><span>Duration: 9 months</span></div>
                <div className="space-y-2">
                  <h4 className="font-medium">What's included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Doctor approved</li>
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Trimester specific</li>
                    <li className="flex items-center"><span className="w-4 h-4 mr-2 text-pink-600">✔</span>Recovery focused</li>
                  </ul>
                </div>
                <a href="#membership" className="block w-full text-center rounded-md px-4 py-2 bg-pink-600 text-white hover:bg-pink-700">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Membership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Select the perfect plan to support your fitness goals. All memberships include our core features with varying levels of personalization and support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="text-center p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Starter</h3>
                <div className="flex items-baseline justify-center gap-1"><span className="text-4xl font-bold">$29</span><span className="text-gray-600">/month</span></div>
                <p className="text-base text-gray-600">Perfect for beginners starting their fitness journey</p>
              </div>
              <div className="px-6 pb-6 space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Access to basic workouts</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Nutrition guidelines</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Community access</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Progress tracking</span></li>
                </ul>
                <a href="#" className="block w-full text-center rounded-md px-4 py-2 bg-gray-900 text-white hover:bg-gray-800">Get Started</a>
              </div>
            </div>
            {/* Pro */}
            <div className="relative bg-white rounded-xl border border-pink-600 overflow-hidden shadow-lg scale-105">
              <div className="absolute top-0 right-0 bg-pink-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">Most Popular</div>
              <div className="text-center p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Pro</h3>
                <div className="flex items-baseline justify-center gap-1"><span className="text-4xl font-bold">$59</span><span className="text-gray-600">/month</span></div>
                <p className="text-base text-gray-600">Most popular choice for dedicated fitness enthusiasts</p>
              </div>
              <div className="px-6 pb-6 space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>All Starter features</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Premium workout programs</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Personal meal plans</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>1-on-1 coaching calls</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Priority support</span></li>
                </ul>
                <a href="#" className="block w-full text-center rounded-md px-4 py-2 bg-pink-600 text-white hover:bg-pink-700">Get Started</a>
              </div>
            </div>
            {/* Elite */}
            <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="text-center p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Elite</h3>
                <div className="flex items-baseline justify-center gap-1"><span className="text-4xl font-bold">$99</span><span className="text-gray-600">/month</span></div>
                <p className="text-base text-gray-600">Complete transformation package with VIP treatment</p>
              </div>
              <div className="px-6 pb-6 space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>All Pro features</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Custom workout design</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Weekly coaching calls</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>Supplement guidance</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>VIP community access</span></li>
                  <li className="flex items-start"><span className="w-5 h-5 mr-3 mt-0.5 text-pink-600">✔</span><span>24/7 support</span></li>
                </ul>
                <a href="#" className="block w-full text-center rounded-md px-4 py-2 bg-gray-900 text-white hover:bg-gray-800">Get Started</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-600">All plans include a 7-day free trial. Cancel anytime.</p>
            <a href="#" className="inline-flex items-center justify-center rounded-md px-4 py-2 border border-pink-600 text-pink-600 hover:bg-pink-50">Compare All Features</a>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Shop Divine Fitness Essentials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Elevate your workouts with our premium collection of activewear and fitness equipment, designed specifically for the modern woman.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <a className="group bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506629905687-66b3c8c8fcf8?w=300&h=300&fit=crop" alt="Divine Sports Bra" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs text-pink-600 uppercase tracking-wide font-medium">Activewear</div>
                <h3 className="font-medium group-hover:text-pink-600 transition-colors">Divine Sports Bra</h3>
                <div className="text-lg font-bold">$45</div>
              </div>
            </a>
            {/* Product 2 */}
            <a className="group bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506629905687-66b3c8c8fcf8?w=300&h=300&fit=crop" alt="High-Waist Leggings" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs text-pink-600 uppercase tracking-wide font-medium">Activewear</div>
                <h3 className="font-medium group-hover:text-pink-600 transition-colors">High-Waist Leggings</h3>
                <div className="text-lg font-bold">$65</div>
              </div>
            </a>
            {/* Product 3 */}
            <a className="group bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop" alt="Resistance Bands Set" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs text-pink-600 uppercase tracking-wide font-medium">Equipment</div>
                <h3 className="font-medium group-hover:text-pink-600 transition-colors">Resistance Bands Set</h3>
                <div className="text-lg font-bold">$29</div>
              </div>
            </a>
            {/* Product 4 */}
            <a className="group bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300&h=300&fit=crop" alt="Yoga Mat Pro" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs text-pink-600 uppercase tracking-wide font-medium">Equipment</div>
                <h3 className="font-medium group-hover:text-pink-600 transition-colors">Yoga Mat Pro</h3>
                <div className="text-lg font-bold">$85</div>
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-3 bg-pink-600 text-white hover:bg-pink-700">Shop All Products</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Real Women, Real Results</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Don't just take our word for it. Here's what our amazing community of women has to say about their transformation journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl">
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-yellow-400">★★★★★</div>
                <p className="text-gray-300 leading-relaxed">Divine Fitness changed my life! As a busy mom, I thought I'd never find time for fitness. Their flexible programs fit perfectly into my schedule, and I've never felt stronger.</p>
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-gray-400">Working Mom</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl">
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-yellow-400">★★★★★</div>
                <p className="text-gray-300 leading-relaxed">The community support is incredible. I've made lifelong friends and accountability partners. The personalized nutrition plan helped me finally reach my goals.</p>
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" alt="Maria Rodriguez" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">Maria Rodriguez</div>
                    <div className="text-sm text-gray-400">Entrepreneur</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl">
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-yellow-400">★★★★★</div>
                <p className="text-gray-300 leading-relaxed">I love how the workouts adapt to my dorm room setup. The trainers are so encouraging, and I've built confidence I never knew I had. Best investment ever!</p>
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="Ashley Chen" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">Ashley Chen</div>
                    <div className="text-sm text-gray-400">College Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start Your Transformation?</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Join thousands of women who've already discovered their strength. Your journey to a healthier, happier you starts today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#membership" className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-4 bg-pink-600 text-white hover:bg-pink-700">Start Free Trial</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-pink-400">Divine Fitness</h3>
              <p className="text-gray-300">Empowering women to transform their bodies and minds through personalized fitness programs.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Twitter">T</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Facebook">F</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="GitHub">G</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Strength Training</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">HIIT Workouts</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Yoga & Flexibility</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Prenatal Fitness</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-top border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Divine Fitness. All rights reserved. Empowering women through fitness.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
