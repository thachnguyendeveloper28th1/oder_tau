/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader")
            .classList.add("hidden");

    }, 900);

});


/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        document.body.classList.remove("no-scroll");

    });

});


/* =========================================================
   LANGUAGE MENU
========================================================= */

const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");

languageBtn.addEventListener("click", () => {

    languageMenu.classList.toggle("active");

});


document.addEventListener("click", (e) => {

    if (
        !languageBtn.contains(e.target) &&
        !languageMenu.contains(e.target)
    ) {

        languageMenu.classList.remove("active");

    }

});


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    vi: {

        "nav.home": "Trang chủ",
        "nav.about": "Về chúng tôi",
        "nav.tours": "Tours",
        "nav.experience": "Trải nghiệm",
        "nav.gallery": "Thư viện",
        "nav.contact": "Liên hệ",
        "nav.book": "Đặt chuyến",

        "hero.eyebrow": "NHỮNG TRẢI NGHIỆM BIỂN ĐÁNG NHỚ",

        "hero.title": "Khám phá<br><em>chân trời xanh</em>",

        "hero.description":
            "Khám phá những vùng biển tuyệt đẹp và tạo nên những kỷ niệm đáng nhớ cùng Ocean Voyage.",

        "hero.explore": "Khám phá Tours",
        "hero.discover": "Khám phá thêm",
        "hero.scroll": "Cuộn để khám phá",

        "about.label": "VỀ CHÚNG TÔI",

        "about.title":
            "Không chỉ là một chuyến đi.<br><em>Đó là một kỷ niệm.</em>",

        "about.years": "năm kinh nghiệm",

        "about.text1":
            "Ocean Voyage mang đến những hành trình trên biển được thiết kế dành cho những người muốn khám phá, thư giãn và tận hưởng vẻ đẹp tự nhiên.",

        "about.text2":
            "Từ những chuyến đi riêng tư đến những tour ngắm hoàng hôn, chúng tôi luôn đặt trải nghiệm của khách hàng lên hàng đầu.",

        "about.button": "Câu chuyện của chúng tôi",

        "tours.label": "NHỮNG HÀNH TRÌNH",

        "tours.title":
            "Chọn chuyến đi<br><em>hoàn hảo cho bạn.</em>",

        "tours.description":
            "Những hành trình được thiết kế để bạn tận hưởng biển cả theo cách riêng của mình.",

        "tours.private": "PRIVATE",
        "tours.sunset": "SUNSET",
        "tours.island": "ISLAND",

        "tour1.duration": "5 GIỜ",
        "tour1.title": "Private Sailing Experience",
        "tour1.description":
            "Một chuyến đi riêng tư dành cho gia đình, cặp đôi hoặc nhóm bạn.",

        "tour2.duration": "4 GIỜ",
        "tour2.title": "Golden Sunset Cruise",
        "tour2.description":
            "Ngắm mặt trời lặn trên biển trong một không gian đầy lãng mạn.",

        "tour3.duration": "CẢ NGÀY",
        "tour3.title": "Island Discovery",
        "tour3.description":
            "Khám phá những hòn đảo tuyệt đẹp, bãi biển hoang sơ và làn nước trong xanh.",

        "tour.book": "Đặt ngay →",

        "experience.label": "TRẢI NGHIỆM",

        "experience.title":
            "Cảm nhận biển cả.<br><em>Quên đi thế giới.</em>",

        "experience.text":
            "Tận hưởng những khoảnh khắc bình yên giữa đại dương, nơi thời gian dường như chậm lại.",

        "experience.button": "Bắt đầu hành trình",

        "feature1.title": "Du thuyền cao cấp",
        "feature1.text":
            "Những chiếc thuyền chất lượng cao, an toàn và thoải mái.",

        "feature2.title": "Đội ngũ chuyên nghiệp",
        "feature2.text":
            "Đội ngũ giàu kinh nghiệm và am hiểu từng vùng biển.",

        "feature3.title": "Dịch vụ cá nhân",
        "feature3.text":
            "Dịch vụ cá nhân hóa cho từng hành trình.",

        "feature4.title": "An toàn tuyệt đối",
        "feature4.text":
            "An toàn luôn là ưu tiên hàng đầu.",

        "gallery.label": "THƯ VIỆN",

        "gallery.title":
            "Những khoảnh khắc<br><em>từ đại dương.</em>",

        "faq.label": "CÂU HỎI",

        "faq.title":
            "Mọi điều bạn<br><em>cần biết.</em>",

        "faq.q1":
            "Tour bao gồm những gì?",

        "faq.a1":
            "Tour bao gồm đội ngũ thủy thủ chuyên nghiệp, thiết bị an toàn, nước uống và các hoạt động được lựa chọn.",

        "faq.q2":
            "Tôi có thể đặt tour riêng không?",

        "faq.a2":
            "Có. Tour riêng có thể được tùy chỉnh theo lịch trình và mong muốn của bạn.",

        "faq.q3":
            "Tôi nên mang theo gì?",

        "faq.a3":
            "Bạn nên mang kem chống nắng, kính râm, đồ bơi và quần áo thoải mái.",

        "faq.q4":
            "Làm thế nào để đặt tour?",

        "faq.a4":
            "Hãy điền thông tin vào form đặt tour. Đội ngũ của chúng tôi sẽ liên hệ với bạn sớm nhất.",

        "booking.label":
            "LÊN KẾ HOẠCH CHO HÀNH TRÌNH",

        "booking.title":
            "Cuộc phiêu lưu<br><em>đang chờ bạn.</em>",

        "booking.text":
            "Hãy để lại thông tin và chúng tôi sẽ liên hệ để tư vấn hành trình phù hợp nhất với bạn.",

        "form.name": "Họ và tên",
        "form.email": "Email",
        "form.phone": "Số điện thoại",
        "form.guests": "Số khách",
        "form.date": "Ngày mong muốn",
        "form.tour": "Tour",
        "form.message": "Tin nhắn",
        "form.submit": "Gửi yêu cầu đặt tour",

        "footer.text":
            "Tạo nên những khoảnh khắc đáng nhớ giữa đại dương.",

        "footer.explore": "Khám phá",
        "footer.contact": "Liên hệ",
        "footer.follow": "Theo dõi",

        "footer.rights": "Tất cả quyền được bảo lưu.",
        "footer.privacy": "Chính sách bảo mật",
        "footer.terms": "Điều khoản",

        "toast":
            "Yêu cầu đặt tour đã được gửi thành công!"

    },


    en: {

        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.tours": "Tours",
        "nav.experience": "Experience",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "nav.book": "Book Now",

        "hero.eyebrow": "UNFORGETTABLE SEA EXPERIENCES",

        "hero.title":
            "Discover the<br><em>Blue Horizon</em>",

        "hero.description":
            "Discover beautiful waters and create unforgettable memories with Ocean Voyage.",

        "hero.explore": "Explore Tours",
        "hero.discover": "Discover more",
        "hero.scroll": "Scroll to explore",

        "about.label": "ABOUT US",

        "about.title":
            "More than a journey.<br><em>It's a memory.</em>",

        "about.years": "years of experience",

        "about.text1":
            "Ocean Voyage creates unique sailing journeys for people who want to explore, relax and experience the beauty of nature.",

        "about.text2":
            "From private escapes to magical sunset cruises, we always put your experience first.",

        "about.button": "Our Story",

        "tours.label": "OUR JOURNEYS",

        "tours.title":
            "Choose your<br><em>perfect escape.</em>",

        "tours.description":
            "Journeys designed for you to experience the sea your own way.",

        "tours.private": "PRIVATE",
        "tours.sunset": "SUNSET",
        "tours.island": "ISLAND",

        "tour1.duration": "5 HOURS",
        "tour1.title": "Private Sailing Experience",
        "tour1.description":
            "A private journey designed for families, couples or groups of friends.",

        "tour2.duration": "4 HOURS",
        "tour2.title": "Golden Sunset Cruise",
        "tour2.description":
            "Watch the sun disappear beneath the horizon in a truly romantic setting.",

        "tour3.duration": "FULL DAY",
        "tour3.title": "Island Discovery",
        "tour3.description":
            "Discover beautiful islands, hidden beaches and crystal-clear waters.",

        "tour.book": "Book now →",

        "experience.label": "THE EXPERIENCE",

        "experience.title":
            "Feel the sea.<br><em>Forget the world.</em>",

        "experience.text":
            "Enjoy peaceful moments in the middle of the ocean, where time seems to slow down.",

        "experience.button": "Start your journey",

        "feature1.title": "Premium Yachts",
        "feature1.text":
            "High-quality yachts designed for comfort, safety and unforgettable journeys.",

        "feature2.title": "Local Experts",
        "feature2.text":
            "Experienced professionals who know every corner of the sea.",

        "feature3.title": "Personal Service",
        "feature3.text":
            "A personalized experience designed around your journey.",

        "feature4.title": "Safe & Secure",
        "feature4.text":
            "Your safety is always our highest priority.",

        "gallery.label": "GALLERY",

        "gallery.title":
            "Moments from<br><em>the ocean.</em>",

        "faq.label": "FAQ",

        "faq.title":
            "Everything you<br><em>need to know.</em>",

        "faq.q1":
            "What is included in the tour?",

        "faq.a1":
            "Tours include professional crew, safety equipment, drinking water and selected activities.",

        "faq.q2":
            "Can I book a private tour?",

        "faq.a2":
            "Yes. Private tours can be customized according to your schedule and preferences.",

        "faq.q3":
            "What should I bring?",

        "faq.a3":
            "Bring sunscreen, sunglasses, swimwear and comfortable clothes.",

        "faq.q4":
            "How can I make a reservation?",

        "faq.a4":
            "Fill out the booking form below and our team will contact you shortly.",

        "booking.label":
            "PLAN YOUR JOURNEY",

        "booking.title":
            "Your next<br><em>adventure awaits.</em>",

        "booking.text":
            "Leave your information and our team will help you plan the perfect journey.",

        "form.name": "Full Name",
        "form.email": "Email",
        "form.phone": "Phone",
        "form.guests": "Guests",
        "form.date": "Preferred Date",
        "form.tour": "Tour",
        "form.message": "Message",
        "form.submit": "Send Booking Request",

        "footer.text":
            "Creating unforgettable moments on the open sea.",

        "footer.explore": "Explore",
        "footer.contact": "Contact",
        "footer.follow": "Follow us",

        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms",

        "toast":
            "Booking request sent successfully!"

    }

};


/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function changeLanguage(lang) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.dataset.i18n;

        if (translations[lang][key]) {

            element.innerHTML = translations[lang][key];

        }

    });

    document.documentElement.lang = lang;

    document.getElementById("currentLanguage")
        .textContent = lang.toUpperCase();

    localStorage.setItem("language", lang);

    languageMenu.classList.remove("active");

}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


/* =========================================================
   LOAD LANGUAGE
========================================================= */

const savedLanguage =
    localStorage.getItem("language") || "vi";

changeLanguage(savedLanguage);


/* =========================================================
   FAQ
========================================================= */

document.querySelectorAll(".faq-question")
    .forEach(question => {

        question.addEventListener("click", () => {

            const currentItem =
                question.parentElement;

            document.querySelectorAll(".faq-item")
                .forEach(item => {

                    if (item !== currentItem) {
                        item.classList.remove("active");
                    }

                });

            currentItem.classList.toggle("active");

        });

    });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   BOOKING FORM
========================================================= */

const bookingForm =
    document.getElementById("bookingForm");

const toast =
    document.getElementById("toast");


bookingForm.addEventListener("submit", e => {

    e.preventDefault();

    toast.classList.add("show");

    bookingForm.reset();

    setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

});


/* =========================================================
   PARALLAX HERO
========================================================= */

window.addEventListener("scroll", () => {

    const heroBg =
        document.querySelector(".hero-background");

    if (!heroBg) return;

    const scroll =
        window.scrollY;

    heroBg.style.transform =
        `translateY(${scroll * 0.15}px) scale(1.02)`;

});
