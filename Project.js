
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    background: linear-gradient(135deg, #74ebd5, #ACB6E5);
    color: #333;
}


.navbar {
    width: 100%;
    padding: 18px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: linear-gradient(90deg, #182848, #4b6cb7);
    color: white;

    position: sticky;
    top: 0;
    z-index: 1000;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.logo {
    font-size: 26px;
    font-weight: bold;
}

.logo i {
    margin-right: 8px;
}

.logo span {
    color: #74ebd5;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #74ebd5;
}

.nav-buttons {
    display: flex;
    gap: 10px;
}

.login-btn,
.register-btn {
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 8px;
    color: white;
    transition: 0.3s;
}

.login-btn {
    border: 1px solid white;
}

.login-btn:hover {
    background: white;
    color: #4b6cb7;
}

.register-btn {
    background: #ff6b6b;
}

.register-btn:hover {
    background: #ff4757;
}


/* ==============================
   HERO SECTION
================================= */

.hero {
    min-height: 650px;
    display: flex;
    align-items: center;

    background:
        linear-gradient(
            rgba(24, 40, 72, 0.85),
            rgba(75, 108, 183, 0.8)
        );
    color: white;
}

.hero-content {
    width: 90%;
    max-width: 1200px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}

.hero-text {
    flex: 1;
}

.welcome {
    color: #74ebd5;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: 55px;
    margin: 20px 0;
    line-height: 1.1;
}

.hero h1 span {
    color: #74ebd5;
}

.hero-description {
    font-size: 18px;
    line-height: 1.7;
    max-width: 600px;
}

.hero-buttons {
    margin-top: 30px;
    display: flex;
    gap: 15px;
}

.primary-btn,
.secondary-btn {
    text-decoration: none;
    padding: 14px 25px;
    border-radius: 10px;
    font-weight: bold;
    transition: 0.3s;
}

.primary-btn {
    background: #ff6b6b;
    color: white;
}

.primary-btn:hover {
    background: #ff4757;
    transform: translateY(-3px);
}

.secondary-btn {
    border: 2px solid #74ebd5;
    color: white;
}

.secondary-btn:hover {
    background: #74ebd5;
    color: #182848;
}


/* ==============================
   STATISTICS
================================= */

.statistics {
    display: flex;
    gap: 45px;
    margin-top: 40px;
}

.statistics h3 {
    color: #74ebd5;
    font-size: 28px;
}

.statistics p {
    margin-top: 5px;
}


/* ==============================
   TRAIN CARD
================================= */

.train-card {
    width: 360px;
    padding: 35px;

    background: white;
    color: #333;

    border-radius: 20px;

    text-align: center;

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

    transition: 0.3s;
}

.train-card:hover {
    transform: translateY(-8px);
}

.train-icon {
    width: 80px;
    height: 80px;

    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: linear-gradient(135deg, #74ebd5, #4b6cb7);
    color: white;

    font-size: 35px;
}

.train-card h2 {
    margin-top: 20px;
}

.train-card > p {
    color: #777;
}

.route-display {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 30px 0;
}

.route-display strong {
    display: block;
    font-size: 25px;
    color: #4b6cb7;
}

.route-display small {
    color: #777;
}

.route-display i {
    color: #ff6b6b;
}

.card-info {
    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;

    font-size: 14px;
    color: #666;
}

.card-button {
    display: block;

    padding: 13px;

    background: linear-gradient(90deg, #ff6b6b, #ff8e53);
    color: white;

    text-decoration: none;

    border-radius: 8px;

    font-weight: bold;
}

.card-button:hover {
    background: linear-gradient(90deg, #ff4757, #ff6b6b);
}


/* ==============================
   SEARCH SECTION
================================= */

.search-section {
    padding: 70px 8%;
    background: #f8fbff;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
}

.section-title h2 {
    font-size: 35px;
    color: #182848;
}

.section-title h2 i {
    color: #ff6b6b;
}

.section-title p {
    color: #777;
    margin-top: 10px;
}

.search-box {
    max-width: 1150px;
    margin: auto;

    padding: 30px;

    display: flex;
    align-items: end;
    gap: 15px;
    flex-wrap: wrap;

    background: white;

    border-radius: 18px;

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.input-box {
    flex: 1;
    min-width: 170px;
}

.input-box label {
    display: block;
    margin-bottom: 8px;

    font-weight: bold;
    color: #182848;
}

.input-box label i {
    color: #ff6b6b;
}

.input-box input,
.input-box select {
    width: 100%;
    padding: 13px;

    border: 1px solid #ddd;
    border-radius: 8px;

    outline: none;
    background: #f8fbff;
}

.input-box input:focus,
.input-box select:focus {
    border-color: #4b6cb7;
}

.swap-btn {
    width: 45px;
    height: 45px;

    border: none;
    border-radius: 50%;

    background: #74ebd5;
    color: #182848;

    cursor: pointer;
}

.swap-btn:hover {
    background: #4b6cb7;
    color: white;
}

.search-button {
    padding: 13px 25px;

    border: none;
    border-radius: 8px;

    background: linear-gradient(90deg, #ff6b6b, #ff8e53);

    color: white;

    font-weight: bold;

    cursor: pointer;

    transition: 0.3s;
}

.search-button:hover {
    transform: translateY(-3px);
}


/* ==============================
   SERVICES
================================= */

.services {
    padding: 80px 8%;
    background: linear-gradient(135deg, #eef7ff, #ffffff);
}

.service-container {
    max-width: 1200px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.service-card {
    padding: 30px;

    text-align: center;

    background: white;

    border-radius: 15px;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-8px);
}

.service-icon {
    width: 70px;
    height: 70px;

    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: linear-gradient(135deg, #74ebd5, #4b6cb7);

    color: white;

    font-size: 28px;
}

.service-card h3 {
    color: #182848;
    margin-top: 20px;
}

.service-card p {
    color: #777;
    line-height: 1.6;
}


/* ==============================
   POPULAR ROUTES
================================= */

.routes-section {
    padding: 80px 8%;
    background: #ffffff;
}

.route-container {
    max-width: 1100px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.route-card {
    padding: 25px;

    border-radius: 15px;

    background: linear-gradient(135deg, #f8fbff, #eef7ff);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.route-top {
    display: flex;
    justify-content: space-between;

    color: #4b6cb7;
    font-weight: bold;
}

.route-main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 30px 0;

    text-align: center;
}

.route-main h3 {
    color: #182848;
}

.route-main p {
    color: #777;
}

.route-line {
    flex: 1;
    margin: 0 15px;
    color: #ff6b6b;
}

.route-line hr {
    border: none;
    border-top: 2px dashed #4b6cb7;
}

.route-card > a {
    display: block;

    padding: 12px;

    text-align: center;

    text-decoration: none;

    background: #4b6cb7;
    color: white;

    border-radius: 8px;
}

.route-card > a:hover {
    background: #182848;
}


/* ==============================
   ABOUT SECTION
================================= */

.about-section {
    padding: 80px 8%;

    display: flex;
    align-items: center;
    gap: 60px;

    background: linear-gradient(135deg, #74ebd5, #ACB6E5);
}

.about-text {
    flex: 1;
}

.small-heading {
    color: #182848;
    font-weight: bold;
    letter-spacing: 2px;
}

.about-text h2 {
    font-size: 38px;
    color: #182848;
}

.about-text h2 span {
    color: #ff4757;
}

.about-text p {
    line-height: 1.7;
}

.about-features {
    flex: 1;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.about-features div {
    padding: 25px;

    background: rgba(255, 255, 255, 0.85);

    border-radius: 15px;

    text-align: center;
}

.about-features i {
    font-size: 30px;
    color: #4b6cb7;
    margin-bottom: 10px;
}

.about-features h3 {
    color: #182848;
}


/* ==============================
   CALL TO ACTION
================================= */

.cta {
    padding: 70px 20px;

    text-align: center;

    color: white;

    background: linear-gradient(90deg, #182848, #4b6cb7);
}

.cta h2 {
    font-size: 35px;
}

.cta p {
    margin: 15px 0 25px;
}

.cta a {
    display: inline-block;

    padding: 14px 30px;

    background: #ff6b6b;

    color: white;

    text-decoration: none;

    border-radius: 8px;

    font-weight: bold;
}

.cta a:hover {
    background: #ff4757;
}


/* ==============================
   FOOTER
================================= */

footer {
    background: #101a35;
    color: white;
}

.footer-container {
    max-width: 1200px;
    margin: auto;

    padding: 60px 8%;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;

    gap: 40px;
}

.footer-column h2 span {
    color: #74ebd5;
}

.footer-column h3 {
    color: #74ebd5;
    margin-bottom: 20px;
}

.footer-column p {
    color: #ccd3e0;
    line-height: 1.7;
}

.footer-column a {
    display: block;

    color: #ccd3e0;

    text-decoration: none;

    margin: 10px 0;
}

.footer-column a:hover {
    color: #74ebd5;
}

.social-icons {
    display: flex;
    gap: 12px;
}

.social-icons a {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #263659;
}

.social-icons a:hover {
    background: #4b6cb7;
    color: white;
}

.footer-bottom {
    padding: 20px;

    text-align: center;

    border-top: 1px solid #263659;

    color: #aaa;
}


/* ==============================
   RESPONSIVE DESIGN
================================= */

@media (max-width: 1000px) {

    .navbar {
        padding: 18px 25px;
    }

    .nav-links {
        display: none;
    }

    .hero-content {
        flex-direction: column;
        text-align: center;
        padding: 70px 0;
    }

    .hero-buttons {
        justify-content: center;
    }

    .statistics {
        justify-content: center;
    }

    .service-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .route-container {
        grid-template-columns: 1fr;
    }

    .about-section {
        flex-direction: column;
    }

    .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    .navbar {
        padding: 15px;
    }

    .nav-buttons {
        display: none;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero-description {
        font-size: 16px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .statistics {
        gap: 20px;
    }

    .train-card {
        width: auto;
        margin: 20px;
    }

    .search-section,
    .services,
    .routes-section,
    .about-section {
        padding: 50px 5%;
    }

    .service-container {
        grid-template-columns: 1fr;
    }

    .about-features {
        grid-template-columns: 1fr;
    }

    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }
}