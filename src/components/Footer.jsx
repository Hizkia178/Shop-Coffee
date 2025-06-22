const Footer = () => {
  const currentYear = 2025;

  const footerLinks = [
    {
      title: "Menu",
      links: [
        { name: "Kopi", href: "#" },
        { name: "Makanan", href: "#" },
        { name: "Merchandise", href: "#" },
        { name: "Paket Spesial", href: "#" },
      ],
    },
    {
      title: "Bantuan",
      links: [
        { name: "Panduan Pemesanan", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Hubungi Kami", href: "#" },
        { name: "Tentang Kami", href: "#" },
      ],
    },
    {
      title: "Akun",
      links: [
        { name: "Profil", href: "#" },
        { name: "Keamanan", href: "#" },
        { name: "Privasi", href: "#" },
        { name: "Keluar", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Email", icon: "bx-envelope", href: "#" },
    { name: "WhatsApp", icon: "bxl-whatsapp", href: "#" },
    { name: "Instagram", icon: "bxl-instagram", href: "#" },
    { name: "Twitter", icon: "bxl-twitter", href: "#" },
  ];

  const features = [
    {
      id: 1,
      title: "Kopi Premium",
      desc: "Biji kopi pilihan terbaik",
      icon: "bx bx-coffee",
      bg: "from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/20",
      iconBg: "from-amber-500 to-amber-600",
      border: "border-amber-200/50 dark:border-amber-700/50",
    },
    {
      id: 2,
      title: "Suasana Nyaman",
      desc: "Nikmati waktu santai Anda",
      icon: "bx bx-home-heart",
      bg: "from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20",
      iconBg: "from-orange-500 to-orange-600",
      border: "border-orange-200/50 dark:border-orange-700/50",
    },
    {
      id: 3,
      title: "Pelayanan Ramah",
      desc: "Layanan dengan senyuman",
      icon: "bx bx-smile",
      bg: "from-yellow-50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-800/20",
      iconBg: "from-yellow-500 to-yellow-600",
      border: "border-yellow-200/50 dark:border-yellow-700/50",
    },
  ];

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 overflow-hidden" data-aos-duration="1000" data-aos="fade-up">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-1" data-aos-delay="600" data-aos="fade-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="bx bx-coffee text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                      Golden Hour Coffee
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Nikmati kopi berkualitas dengan suasana hangat. Kami hadir untuk menciptakan momen istimewa setiap hari.
                </p>
                <div className="flex items-center gap-3" data-aos-delay="600" data-aos="fade-left">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      title={social.name}
                    >
                      <i className={`bx ${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {footerLinks.map((section) => (
                <div key={section.title} data-aos-delay="600" data-aos="fade-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-gray-200 dark:border-gray-700 mb-8" data-aos-delay="600" data-aos="fade-down">
              {features.map(({ id, title, desc, icon, bg, iconBg, border }) => (
                <div
                  key={id}
                  className={`flex items-center shadow-lg gap-4 p-4 bg-gradient-to-br ${bg} rounded-xl border ${border}`}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${iconBg} shadow-lg rounded-lg flex items-center justify-center`}>
                    <i className={`${icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4" >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-sm">
                  © {currentYear} Golden Hour Coffee. Terima kasih telah mengunjungi kami.
                </span>
                <span className="inline-block ml-1 animate-wave">☕</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200">
                  Kebijakan Privasi
                </a>
                <a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200">
                  Syarat & Ketentuan
                </a>
                <div className="flex items-center gap-1">
                  <span>Made with</span>
                  <span className="text-amber-500 animate-pulse">☕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;