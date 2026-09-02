@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: #07111f;
  color: white;
  overflow-x: hidden;
}

/* Navigation */

.navbar {
  width: 100%;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 7%;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(7, 17, 31, 0.9);

  position: sticky;
  top: 0;

  z-index: 100;
}

.logo {
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 10px;
}

.logo strong {
  color: #2de2c3;
}

.logo-icon {
  color: #2de2c3;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  color: #aab6c5;
  text-decoration: none;
  font-size: 14px;

  transition: 0.3s;
}

.nav-links a:hover {
  color: white;
}

.nav-button {
  border: 1px solid #2de2c3;
  background: transparent;
  color: #2de2c3;

  padding: 10px 18px;

  border-radius: 8px;

  cursor: pointer;
}

/* Hero */

.hero {
  min-height: 850px;

  padding: 90px 7%;

  display: grid;
  grid-template-columns: 1fr 0.9fr 1fr;

  align-items: center;

  gap: 50px;

  position: relative;

  background:
    radial-gradient(circle at center, rgba(45, 226, 195, 0.08), transparent 40%),
    #07111f;
}

.tag {
  display: inline-block;

  padding: 8px 12px;

  border: 1px solid rgba(45, 226, 195, 0.3);

  border-radius: 20px;

  color: #2de2c3;

  font-size: 11px;
  letter-spacing: 1px;

  margin-bottom: 25px;
}

.hero h1 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(45px, 5vw, 75px);

  line-height: 1.05;

  margin-bottom: 25px;
}

.hero h1 span {
  color: #2de2c3;
}

.hero-text p {
  color: #aab6c5;

  font-size: 17px;

  line-height: 1.7;

  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 15px;

  margin-top: 35px;
}

.primary-btn,
.secondary-btn {
  padding: 14px 22px;

  border-radius: 10px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;
}

.primary-btn {
  border: none;

  background: #2de2c3;

  color: #061018;
}

.primary-btn:hover {
  transform: translateY(-3px);
}

.secondary-btn {
  border: 1px solid rgba(255,255,255,0.15);

  background: transparent;

  color: white;
}

.secondary-btn:hover {
  background: rgba(255,255,255,0.06);
}

/* Human Body */

.body-container {
  display: flex;
  flex-direction: column;

  align-items: center;

  position: relative;
}

.body-glow {
  position: absolute;

  width: 350px;
  height: 550px;

  background: radial-gradient(
    ellipse,
    rgba(45,226,195,0.18),
    transparent 65%
  );

  filter: blur(30px);

  z-index: 0;
}

.human-body {
  width: 220px;

  min-height: 600px;

  position: relative;

  z-index: 2;

  display: flex;
  flex-direction: column;

  align-items: center;
}

.head {
  width: 105px;
  height: 105px;

  border-radius: 50%;

  background: linear-gradient(
    145deg,
    rgba(45,226,195,0.25),
    rgba(20,50,70,0.7)
  );

  border: 1px solid rgba(45,226,195,0.3);

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 45px;

  cursor: pointer;

  transition: 0.3s;
}

.organ:hover {
  transform: scale(1.12);

  filter: drop-shadow(0 0 15px #2de2c3);
}

.body-section {
  width: 180px;

  border-left: 1px solid rgba(45,226,195,0.2);
  border-right: 1px solid rgba(45,226,195,0.2);

  display: flex;

  justify-content: center;

  align-items: center;

  position: relative;
}

.chest {
  height: 180px;

  background: linear-gradient(
    to bottom,
    rgba(45,226,195,0.08),
    rgba(45,226,195,0.02)
  );
}

.abdomen {
  height: 130px;

  background: rgba(255,255,255,0.02);
}

.organ {
  border: none;

  background: transparent;

  font-size: 50px;

  cursor: pointer;

  transition: 0.3s;
}

.lungs {
  position: absolute;
  left: 25px;
}

.heart {
  position: absolute;
  right: 20px;

  font-size: 38px;

  animation: heartbeat 1.5s infinite;
}

.liver {
  position: absolute;

  left: 30px;
}

.stomach {
  position: absolute;

  right: 20px;
}

.body-legs {
  display: flex;

  gap: 25px;
}

.leg {
  width: 45px;
  height: 180px;

  border-left: 1px solid rgba(45,226,195,0.2);
  border-right: 1px solid rgba(45,226,195,0.2);

  background: linear-gradient(
    to bottom,
    rgba(45,226,195,0.04),
    transparent
  );
}

.body-label {
  color: #77889b;

  margin-top: 10px;

  font-size: 13px;
}

/* Search */

.search-panel {
  padding: 35px;

  background: rgba(255,255,255,0.04);

  border: 1px solid rgba(255,255,255,0.08);

  border-radius: 20px;

  backdrop-filter: blur(15px);
}

.search-panel h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: 27px;

  margin-bottom: 12px;
}

.search-panel p {
  color: #9aa9b8;

  line-height: 1.6;

  margin-bottom: 25px;
}

.search-box {
  display: flex;

  background: rgba(0,0,0,0.25);

  border: 1px solid rgba(255,255,255,0.1);

  border-radius: 10px;

  overflow: hidden;
}

.search-box input {
  width: 100%;

  padding: 15px;

  background: transparent;

  border: none;

  color: white;

  outline: none;
}

.search-box button {
  width: 55px;

  border: none;

  background: #2de2c3;

  color: #061018;

  font-size: 20px;

  cursor: pointer;
}

.suggestions {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 20px;
}

.suggestion {
  background: rgba(45,226,195,0.08);

  border: 1px solid rgba(45,226,195,0.2);

  color: #b7fff4;

  padding: 8px 12px;

  border-radius: 20px;

  cursor: pointer;

  transition: 0.3s;
}

.suggestion:hover {
  background: rgba(45,226,195,0.18);
}

/* Sections */

.systems-section,
.conditions-section {
  padding: 110px 7%;
}

.systems-section {
  background: #0a1727;
}

.section-heading {
  text-align: center;

  max-width: 700px;

  margin: auto auto 60px;
}

.section-heading span {
  color: #2de2c3;

  font-size: 12px;

  letter-spacing: 2px;

  font-weight: bold;
}

.section-heading h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: 48px;

  margin: 15px 0;
}

.section-heading p {
  color: #93a2b2;

  line-height: 1.7;
}

.systems-grid,
.conditions-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  gap: 20px;
}

.system-card,
.condition-card {
  background: rgba(255,255,255,0.035);

  border: 1px solid rgba(255,255,255,0.08);

  border-radius: 18px;

  padding: 28px;

  cursor: pointer;

  transition: 0.35s;
}

.system-card:hover,
.condition-card:hover {
  transform: translateY(-7px);

  border-color: rgba(45,226,195,0.45);

  background: rgba(45,226,195,0.05);
}

.system-icon,
.condition-icon {
  font-size: 38px;

  margin-bottom: 20px;
}

.system-card h3,
.condition-card h3 {
  margin-bottom: 12px;

  font-size: 19px;
}

.system-card p,
.condition-card p {
  color: #91a0b0;

  line-height: 1.6;

  font-size: 14px;
}

.condition-card button {
  margin-top: 20px;

  background: transparent;

  border: none;

  color: #2de2c3;

  font-weight: bold;

  cursor: pointer;
}

/* Modal */

.modal {
  position: fixed;

  inset: 0;

  background: rgba(0,0,0,0.7);

  display: none;

  align-items: center;
  justify-content: center;

  z-index: 500;

  padding: 20px;
}

.modal.active {
  display: flex;
}

.modal-content {
  width: 100%;

  max-width: 600px;

  background: #0d1b2b;

  border: 1px solid rgba(255,255,255,0.1);

  border-radius: 20px;

  padding: 40px;

  position: relative;

  animation: modalIn 0.3s ease;
}

.close-modal {
  position: absolute;

  right: 20px;
  top: 15px;

  border: none;

  background: transparent;

  color: white;

  font-size: 32px;

  cursor: pointer;
}

.modal-icon {
  font-size: 60px;

  margin-bottom: 15px;
}

.modal-content h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: 34px;

  margin-bottom: 15px;
}

.modal-content > p {
  color: #a6b2c0;

  line-height: 1.7;
}

.modal-info {
  margin-top: 25px;

  padding: 20px;

  background: rgba(255,255,255,0.04);

  border-radius: 12px;
}

.modal-info h3 {
  margin-bottom: 10px;

  color: #2de2c3;
}

.modal-info p {
  color: #b0bdc9;

  line-height: 1.7;
}

.modal-disclaimer {
  margin-top: 25px;

  padding: 14px;

  border-radius: 10px;

  background: rgba(255,180,0,0.08);

  color: #d9c49d;

  font-size: 12px;

  line-height: 1.6;
}

/* Footer */

footer {
  text-align: center;

  padding: 60px 20px;

  border-top: 1px solid rgba(255,255,255,0.08);

  color: #8d9baa;
}

footer .logo {
  justify-content: center;

  margin-bottom: 15px;
}

footer p {
  margin-bottom: 20px;
}

/* Animations */

@keyframes heartbeat {

  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.12);
  }

  40% {
    transform: scale(1);
  }

  60% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }

}

@keyframes modalIn {

  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

}

/* Mobile */

@media (max-width: 1000px) {

  .hero {
    grid-template-columns: 1fr;

    text-align: center;
  }

  .hero-text p {
    margin: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .body-container {
    order: 2;
  }

  .search-panel {
    order: 3;
  }

}

@media (max-width: 700px) {

  .navbar {
    padding: 0 20px;
  }

  .nav-links a {
    display: none;
  }

  .nav-button {
    padding: 8px 12px;
  }

  .hero {
    padding: 60px 20px;
  }

  .systems-section,
  .conditions-section {
    padding: 80px 20px;
  }

  .section-heading h2 {
    font-size: 35px;
  }

  .search-panel {
    padding: 25px;
  }

}
