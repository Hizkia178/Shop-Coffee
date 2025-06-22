import { useState, useEffect } from "react";

const Header = () => {
    const today = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const namaUser = "Coffee Lover";

    const dailyDrinks = {
        Minggu: "Cappuccino",
        Senin: "Mocha",
        Selasa: "Americano",
        Rabu: "Latte",
        Kamis: "Espresso",
        Jumat: "Caramel Macchiato",
        Sabtu: "Flat White",
    };

    const todayDrink = dailyDrinks[new Date().toLocaleDateString("id-ID", { weekday: "long" })] || "Latte";

    const operatingHours = {
        Senin: "07:00 - 21:00",
        Selasa: "07:00 - 21:00",
        Rabu: "07:00 - 21:00",
        Kamis: "07:00 - 21:00",
        Jumat: "07:00 - 22:00",
        Sabtu: "08:00 - 22:00",
        Minggu: "08:00 - 20:00",
    };

    const todayHours = operatingHours[new Date().toLocaleDateString("id-ID", { weekday: "long" })] || "08:00 - 20:00";

    // State for real-time clock
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("id-ID"));

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString("id-ID"));
        }, 1000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    // Determine greeting based on time of day
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Selamat Pagi";
        if (hour < 16) return "Selamat Siang";
        if (hour < 19) return "Selamat Sore";
        return "Selamat Malam";
    };

    return (
        <>
            <section
                id="home"
                className="min-h-screen dark:bg-gray-900 pt-24 overflow-hidden pb-6"
                data-aos-duration="1000"
                data-aos="fade-down"
            >
                <div className="container">
                    <div className="max-w-7xl mx-auto px-4 mt-6">
                        <div className="relative">
                            <div className="relative bg-white dark:bg-gray-900 backdrop-blur-xl shadow-lg border border-white dark:border-gray-700 text-gray-800 dark:text-white p-8 md:p-10 rounded-2xl transition-all duration-500 mb-4">
                                <div className="flex items-start gap-4 mb-6" data-aos-delay="600" data-aos="fade-down">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                                            <i className="bx bx-coffee text-2xl text-white"></i>
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center animate-bounce">
                                            <span className="text-xs text-white">☕</span>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-tight">
                                                {getGreeting()} di Golden Hour Coffee,
                                            </h2>
                                            <div className="animate-wave origin-bottom">👋</div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-amber-600 dark:text-amber-400 mb-4">
                                            {namaUser}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-3" data-aos-delay="600" data-aos="fade-left">
                                    <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                        <span className="font-medium">Hari ini</span>
                                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                                            {today}
                                        </span>
                                    </div>

                                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed pl-5 border-l-4 border-amber-500/50">
                                        Nikmati secangkir kopi terbaik dan suasana hangat di sini.
                                        <span className="inline-block ml-2 text-amber-600 dark:text-amber-400 font-semibold">
                                            Mari mulai hari dengan aroma kopi!
                                        </span>
                                        <span className="inline-block ml-1 animate-pulse">☕</span>
                                    </p>

                                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed pl-5 border-l-4 border-amber-500/50">
                                        Kami hadir untuk menyajikan kopi berkualitas dengan sentuhan cinta. 
                                        <span className="inline-block ml-2 text-amber-600 dark:text-amber-400 font-semibold">
                                            Jadilah bagian dari momen istimewa kami!
                                        </span>
                                    </p>

                                    <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300 pl-5">
                                        <i className="bx bx-time-five text-amber-500 text-lg"></i>
                                        <span className="font-medium">Jam Operasional Hari Ini:</span>
                                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 sm:text-xs rounded-full text-sm font-medium">
                                            {todayHours}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300 pl-5">
                                        <i className="bx bx-time text-amber-500 text-lg"></i>
                                        <span className="font-medium">Waktu Sekarang:</span>
                                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                                            {currentTime}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos-delay="600" data-aos="fade-up">
                                    <div className="flex items-center p-4 dark:bg-amber-900/20 rounded-xl dark:border-amber-700/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        <div className="w-10 h-10 bg-amber-500 shadow-lg rounded-lg flex items-center justify-center mr-4">
                                            <i className="bx bx-coffee-togo text-white text-lg"></i>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Minuman Spesial Hari Ini</div>
                                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{todayDrink}</div>
                                            <a href="/order" className="mt-2 text-sm text-amber-600 dark:text-amber-400 font-medium hover:underline" aria-label="Pesan minuman spesial">Pesan Sekarang</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-white dark:bg-orange-900/20 rounded-xl dark:border-amber-700/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        <div className="w-10 h-10 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center mr-4">
                                            <i className="bx bx-gift text-white text-lg"></i>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Program Loyalitas</div>
                                            <div className="text-lg font-semibold text-gray-900 dark:text-white">10 Stempel, Gratis 1 Kopi</div>
                                            <a href="/loyalty" className="mt-2 text-sm text-orange-600 dark:text-orange-400 font-medium hover:underline" aria-label="Gabung program loyalitas">Gabung Sekarang</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 dark:bg-yellow-900/20 rounded-xl  dark:border-amber-700/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        <div className="w-10 h-10 bg-yellow-500 shadow-lg rounded-lg flex items-center justify-center mr-4">
                                            <i className="bx bx-calendar-event text-white text-lg"></i>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Acara Minggu Ini</div>
                                            <div className="text-lg font-semibold text-gray-900 dark:text-white">Workshop Barista, 28 Juni</div>
                                            <a href="/events" className="mt-2 text-sm text-yellow-600 dark:text-yellow-400 font-medium hover:underline" aria-label="Daftar acara minggu ini">Daftar Sekarang</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes wave {
                        0%, 100% { transform: rotate(0deg); }
                        25% { transform: rotate(-10deg); }
                        75% { transform: rotate(10deg); }
                    }

                    .animate-wave {
                        animation: wave 2s ease-in-out infinite;
                    }
                `}</style>
            </section>
        </>
    );
};

export default Header;