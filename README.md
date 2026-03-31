# NUVI Engineering (Pvt) Ltd — Official Website

> **Building Excellence. Delivering Trust.**

Official website for **NUVI Engineering (Pvt) Ltd**, a professional construction and property development company based in Sri Lanka.

---

## 🌐 Live Website

| Environment | URL |
|---|---|
| Production | https://nuvi.lk *(pending DNS — coming soon)* |
| Staging | https://nuviengineering-demo-site.netlify.app ✅ |

---

## 📋 Table of Contents

1. [About the Company](#about-the-company)
2. [Website Sections](#website-sections)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Running Locally](#running-locally)
6. [External Services](#external-services)
7. [Deployment](#deployment)
8. [Domain & Hosting](#domain--hosting)
9. [Email Setup](#email-setup)
10. [DNS Connection](#dns-connection)
11. [Post-Launch Checklist](#post-launch-checklist)
12. [After Launch — Next Steps](#after-launch--next-steps)
13. [Future Improvements](#future-improvements)
14. [Contact](#contact)

---

## About the Company

**NUVI Engineering (Pvt) Ltd** is a growing construction and engineering company based in Sri Lanka, committed to delivering high-quality building and infrastructure solutions.

- **Managing Director:** Amritha Hitige
- **Address:** 48/3 Horahena Road, Hokandara East, Hokandara
- **Phone:** +94 77 662 2922 | +94 77 580 2880
- **Email:** nuviengineering@gmail.com *(info@nuvi.lk after domain setup)*
- **Facebook:** [NUVI Engineering](https://www.facebook.com/profile.php?id=61587611457835)

---

## Website Sections

| Section | Description |
|---|---|
| **Hero** | Main landing banner with company intro and call-to-action |
| **About** | Company background, mission and vision |
| **Services** | 9 construction and engineering services offered |
| **Process** | 4-step project delivery process |
| **Industries** | Sectors served — Residential, Commercial, Infrastructure, Property |
| **Why Choose Us** | Key strengths and commitment to standards |
| **Meet Our Team** | 7 team members with roles, qualifications, and photos (slider) |
| **Testimonials** | Client reviews |
| **Future Goals** | Company growth and expansion plans |
| **Contact** | Contact form (Formspree), address, phone, map, social links |
| **Footer** | Quick links, services, contact info |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| Vanilla JavaScript | Interactivity (slider, form, animations, scroll) |
| Google Fonts | Playfair Display, Outfit |
| Font Awesome 6.5 | Icons |
| Formspree | Contact form email delivery |

No frameworks, no build tools, no dependencies to install. Pure HTML/CSS/JS.

---

## Project Structure

```
nuvi-engineering-web-app/
│
├── index.html                  # Main HTML — page structure
│
├── assets/
│   ├── css/
│   │   └── style.css           # All styles and responsive layout
│   │
│   ├── js/
│   │   └── main.js             # JavaScript — slider, form, animations
│   │
│   └── images/
│       ├── hero.jpg            # Hero section image
│       ├── about-1.jpg         # About section images
│       ├── about-2.jpg
│       ├── about-3.jpg
│       ├── logo.png            # Company logo / favicon
│       ├── Amritha Hitige.jpg  # Team photos
│       ├── Rasika Dewpura.PNG
│       ├── Amila Ahangama.jpg
│       ├── Anjana Bandara.jfif
│       ├── Romesh Medagoda.jpg
│       ├── Nipuna Sisilaksha.jpg
│       └── Danushka Sanjaya.jpg
│
├── README.md                   # This file
└── to                          # Internal domain/hosting reference doc
```

---

## Running Locally

### Option 1 — VS Code Live Server (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension by Ritwick Dey
3. Open the project folder in VS Code
4. Right-click `index.html` → **Open with Live Server**
5. Browser opens at `http://127.0.0.1:5500`

### Option 2 — Python
```bash
python -m http.server 8080
```
Then open `http://localhost:8080`

### Option 3 — Node.js
```bash
npx serve .
```

---

## External Services

| Service | Purpose | Cost |
|---|---|---|
| [Google Fonts](https://fonts.google.com) | Playfair Display & Outfit fonts | Free |
| [Font Awesome](https://fontawesome.com) | Icons throughout the site | Free |
| [Formspree](https://formspree.io) | Contact form submissions → email | Free (50/month) |
| [Netlify](https://netlify.com) | Website hosting | Free |

### Formspree Configuration
- Form endpoint: `https://formspree.io/f/xreoqqqr`
- Account: nuviengineering@gmail.com
- **After domain is live:** Update notification email to `info@nuvi.lk` in Formspree dashboard

---

## Deployment

This site is deployed on **Netlify** using drag-and-drop (Netlify Drop).

### To redeploy after changes:
1. Go to [netlify.com](https://netlify.com) → Log in
2. Open site: `nuviengineering-demo-site`
3. Go to **Deploys** tab
4. Drag and drop the updated project folder
5. Site updates within seconds

### Or via Git (future):
Connect the GitHub repo to Netlify for automatic deploys on every push.

---

## Domain & Hosting

### Domain
| Field | Details |
|---|---|
| Domain | `nuvi.lk` |
| Registrar | LK Domain Registry |
| Website | register.domains.lk |
| Registered | 2026-03-30 |
| Status | Pending approval ⏳ |
| Admin | Amritha Hitige |
| Renewal | Every 1 year (~LKR 3,000–5,000) |

**Important:** Domain processing at LK Registry runs **10:00 PM – 11:00 PM daily.**
Set a yearly reminder to renew `nuvi.lk` before expiry to avoid losing the domain.

### Hosting
| Field | Details |
|---|---|
| Provider | Netlify |
| Plan | Free |
| Temporary URL | nuviengineering-demo-site.netlify.app ✅ |
| Custom Domain | nuvi.lk (pending DNS) ⏳ |
| SSL | Auto-applied by Netlify (free HTTPS) ⏳ |
| Deploy Method | Netlify Drop |

**LK Domain Registry Contact:**
- Phone: +94 (0)11 421-6061
- Email: hostmaster@domains.lk
- Address: 106, Bauddhaloka Mawatha, Dutugemunu Business Park, Dehiwela

---

## Email Setup

**Plan:** Mymail Lite (FREE — included with nuvi.lk domain)

**Email to create:** `info@nuvi.lk`
*(Set up AFTER domain status = Completed)*

### Setup Steps
1. Login to `register.domains.lk`
2. Go to **Products → Mymail Lite**
3. Create email: `info@nuvi.lk`
4. Set a strong password
5. Access webmail at: `webmail.nuvi.lk`
6. Set up **forwarding to nuviengineering@gmail.com** so all emails arrive in Gmail automatically

### Mymail Lite Limits
| Feature | Limit |
|---|---|
| Email accounts | 1 |
| Storage | 1 GB |
| Max email size | 25 MB |

**Upgrade to Pro if needed:** LKR 983/month — 5 accounts, 5GB storage

---

## DNS Connection

**Status: NOT done yet — waiting for domain to be Completed ⏳**

### Steps to complete after domain is approved:
1. Login to [netlify.com](https://netlify.com)
2. Go to: **Site → Domain Management**
3. Click **"Pending DNS verification"** next to nuvi.lk
4. Copy the **4 nameservers** Netlify provides (example format):
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
5. Login to `register.domains.lk`
6. Go to **nuvi.lk → DNS Records Manager**
7. Click **Add/Edit/Delete Records** tab
8. Select **Name Server** option
9. Paste all 4 nameservers one by one (leave TTL as Default)
10. Save changes
11. Wait **2–4 hours** (up to 24hrs max) for DNS propagation
12. `https://nuvi.lk` will be fully **LIVE** ✅

> DNS propagation of 2–4 hours is completely normal. Just wait.

---

## Post-Launch Checklist

### Website
- [ ] Open nuvi.lk on browser
- [ ] Open on mobile phone
- [ ] Check all sections load properly
- [ ] Check all images display correctly
- [ ] Test contact form — submit and check email arrives
- [ ] Test WhatsApp button
- [ ] Check padlock icon shows (https://)

### HTML Updates Needed After Domain is Live
- [ ] Change contact email from `nuviengineering@gmail.com` → `info@nuvi.lk` in `index.html`
- [ ] Update Formspree notification email to `info@nuvi.lk` in Formspree dashboard

---

## After Launch — Next Steps

### Full Deployment Progress
| Step | Task | Status |
|---|---|---|
| 1 | Buy nuvi.lk domain from domains.lk | ✅ Done |
| 2 | Upload HTML website to Netlify | ✅ Done |
| 3 | Site live on nuviengineering-demo-site.netlify.app | ✅ Done |
| 4 | Add nuvi.lk domain in Netlify domain management | ✅ Done |
| 5 | Wait for domain status = Completed on domains.lk | ⏳ Pending |
| 6 | Set up info@nuvi.lk email on Mymail Lite | ⏳ Pending |
| 7 | Get nameservers from Netlify | ⏳ Pending |
| 8 | Add nameservers to domains.lk DNS Records Manager | ⏳ Pending |
| 9 | Wait 2–4 hours for DNS propagation | ⏳ Pending |
| 10 | SSL auto applies — https://nuvi.lk is LIVE | ⏳ Pending |
| 11 | Test everything on browser and mobile | ⏳ Pending |
| 12 | Submit to Google Search Console | ⏳ Pending |
| 13 | Set up Google Business Profile | ⏳ Pending |

### Google Search Console
- Submit `nuvi.lk` to Google to appear in search results
- Website: [search.google.com/search-console](https://search.google.com/search-console)
- Free

### Google Business Profile
- Register at [business.google.com](https://business.google.com)
- Shows company on Google Maps with phone, address, hours, website
- Clients can leave Google reviews
- Very powerful for local Sri Lankan business visibility
- Free

### Google Analytics
- Track daily visitors, page views, traffic sources
- Website: [analytics.google.com](https://analytics.google.com)
- Free

---

## Future Improvements

| Feature | Priority |
|---|---|
| Projects / Portfolio gallery with real project photos | High |
| Update email to info@nuvi.lk after domain is live | High |
| Connect GitHub repo to Netlify for auto-deploy | Medium |
| Blog section — construction tips and company news | Medium |
| Multi-language support (Sinhala / Tamil) | Low |
| Contact form file upload (for plan drawings) | Low |

---

## Contact

**NUVI Engineering (Pvt) Ltd**
48/3 Horahena Road, Hokandara East, Hokandara, Sri Lanka

- Phone: +94 77 662 2922 | +94 77 580 2880
- Email: nuviengineering@gmail.com
- Facebook: [NUVI Engineering](https://www.facebook.com/profile.php?id=61587611457835)

---

*© 2026 NUVI Engineering (Pvt) Ltd. All rights reserved.*
