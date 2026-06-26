# Suraj Kora - Developer Portfolio

A premium, dark futuristic developer portfolio built with HTML, CSS, and JavaScript. Features glassmorphism UI, animated particle system, scroll-triggered reveals, and responsive design.

## Live Demo

> Deploy this portfolio using the guide below.

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure & SEO |
| CSS3 | Styling, Animations, Responsive |
| JavaScript | Interactivity, Particles, Typing Effect |
| Google Fonts | Poppins Typography |
| SVG | Placeholder Images |

---

## Features

- Dark futuristic theme with aurora gradient backgrounds
- Glassmorphism cards with backdrop blur
- Animated particle canvas system
- Floating 3D geometric shapes with parallax
- Scroll-triggered reveal animations
- Typing effect on hero section
- Custom cursor glow effect
- 3D card tilt on hover
- Responsive design (mobile to ultra-wide)
- SEO meta tags & Open Graph
- Schema.org structured data
- Reduced motion support
- Mobile hamburger navigation

---

## Project Structure

```
portfolio/
├── index.html
├── skills.html
├── projects.html
├── contact.html
├── README.md
│
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   └── animations.js
│
└── assets/
    ├── images/
    │   ├── profile.jpg
    │   ├── project-1.jpg
    │   ├── project-2.jpg
    │   └── project-3.jpg
    ├── certificates/
    └── icons/
```

---

## Sections

### Home
- Hero with animated typing effect
- Floating profile card with glow ring
- Social media links
- Resume download button
- CTA buttons

### About
- Self-taught developer journey
- Location, learning, experience info cards
- Quick stats (projects, certificates, dedication)

### Skills
- Frontend development (HTML5, CSS3, JavaScript)
- Backend development (Node.js, Express.js, MongoDB)
- Tools & software (VS Code, Git, GitHub, Figma, Chrome DevTools, Canva)
- Soft skills (Problem Solving, Communication, Teamwork, Creativity, Adaptability, Continuous Learning)
- Animated progress bars

### Projects
- Masonry grid layout
- Category filters (All, Frontend, Full Stack, UI Design)
- Project cards with hover effects
- Live demo & GitHub links

### Contact
- Glass contact cards (Email, Phone, Location, Social)
- Google Form embed
- Social media links

---

## Color Palette

```css
--bg-primary: #050816;
--bg-secondary: #0b1120;
--accent: #00f5ff;
--accent2: #8b5cf6;
--accent3: #ff4ecd;
--text: #cbd5e1;
--text-light: #94a3b8;
--border: rgba(255,255,255,0.12);
--card-bg: rgba(255,255,255,0.08);
```

---

## How to Customize

### 1. Replace Images

Drop your images into `assets/images/`:

| File | Used In | Recommended Size |
|------|---------|-----------------|
| `profile.jpg` | index.html hero | 400x400px |
| `project-1.jpg` | projects.html | 600x400px |
| `project-2.jpg` | projects.html | 600x400px |
| `project-3.jpg` | projects.html | 600x400px |

Then update the file extensions in HTML:
```html
<!-- Change .svg to .jpg in these files -->
src="assets/images/profile.jpg"
src="assets/images/project-1.jpg"
src="assets/images/project-2.jpg"
src="assets/images/project-3.jpg"
```

### 2. Update Personal Details

**contact.html** — Replace placeholder contact info:
```
your-email@example.com  →  your actual email
+91 XXXXX XXXXX        →  your actual phone number
```

**index.html + contact.html** — Update social links:
```html
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="https://instagram.com/yourusername">Instagram</a>
<a href="https://twitter.com/yourusername">Twitter</a>
```

### 3. Update Project Links

**projects.html** — Replace `href="#"` with your actual URLs:
```html
<a href="https://your-live-demo.com">Live Demo</a>
<a href="https://github.com/yourusername/project">GitHub</a>
```

### 4. Add Resume

Place your resume PDF at `assets/resume.pdf` — the download button already links to it.

### 5. Setup Contact Form

1. Create a Google Form
2. Click **Send** > **Embed** icon
3. Copy the iframe src URL
4. Replace `YOUR_GOOGLE_FORM_LINK` in `contact.html`

---

## AI Prompts to Customize This Portfolio

Use these prompts with AI tools (ChatGPT, Claude, Gemini) to customize your portfolio:

### Change Color Theme
```
Give me a CSS color palette for a dark portfolio theme using deep blue 
primary, electric green accent, and soft white text. Include CSS 
variables format.
```

### Add New Project
```
Add a new project card to my projects.html file. The project is called 
"[Name]", category is "frontend", description is "[Description]", 
live demo is "[URL]", GitHub is "[URL]". Match the existing card 
structure and glass styling.
```

### Add New Skill
```
Add a new skill to my skills.html. Category: "Frontend Development", 
skill name: "React", percentage: 80%. Match the existing HTML structure 
with progress bars.
```

### Modify Hero Section
```
Update my hero section typing effect words. Change the array in main.js 
to include: ["Full Stack Developer", "React Specialist", "Node.js 
Developer", "UI/UX Designer"]. Keep the same typing speed.
```

### Add New Page
```
Create a new HTML page called "certifications.html" for my portfolio. 
Include the same header/nav, footer, and link all 3 CSS files and both 
JS files. Add a page hero with title "Certifications" and a grid of 
certification cards with glass styling.
```

### Improve SEO
```
Update the meta tags in my index.html for better SEO. Target keyword: 
"[Your Name] developer portfolio". Include description under 160 
characters, Open Graph tags, and Twitter card tags.
```

### Add Animation
```
Add a new CSS animation to animations.css for a skill card that pulses 
a subtle glow on hover. Use the existing accent color variable and 
keep it smooth.
```

### Responsive Fix
```
My tool-grid looks broken on mobile. Add responsive CSS rules to 
responsive.css for the .tool-grid class at 576px breakpoint to show 
2 columns instead of auto-fill.
```

---

## Deploy Guide

### Option 1: GitHub Pages (Recommended)

**Step 1: Create GitHub Repository**
```bash
cd "C:\Users\Jatt Rock Kora\Desktop\Portfolio"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Branch: **main** | Folder: **/ (root)**
6. Click **Save**

**Step 3: Access Your Site**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

### Option 2: Netlify

**Step 1: Push to GitHub** (same as above)

**Step 2: Deploy on Netlify**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **Add new site** > **Import an existing project**
3. Connect your GitHub account
4. Select your portfolio repository
5. Settings:
   - Build command: (leave empty)
   - Publish directory: `.` (dot)
6. Click **Deploy site**

**Step 3: Custom Domain** (optional)
1. Go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Update DNS records at your registrar

---

### Option 3: Vercel

**Step 1: Push to GitHub** (same as above)

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **Add new project**
3. Import your GitHub repository
4. Framework preset: **Other**
5. Click **Deploy**

**Step 3: Custom Domain** (optional)
1. Go to **Project settings** > **Domains**
2. Add your custom domain

---

### Option 4: Cloudflare Pages

**Step 1: Push to GitHub** (same as above)

**Step 2: Deploy on Cloudflare**
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Pages** > **Create a project**
3. Connect to GitHub
4. Select your repository
5. Build settings:
   - Build command: (leave empty)
   - Build output directory: `.`
6. Click **Save and Deploy**

---

## SEO Setup

Each page includes:

**Meta Tags**
```html
<meta name="description" content="Suraj Kora - Self-Taught Developer Portfolio">
<meta property="og:title" content="Suraj Kora Portfolio">
<meta property="og:description" content="Self-Taught Developer Portfolio">
<meta property="og:image" content="assets/images/profile.jpg">
<meta property="og:type" content="website">
```

**Schema Markup** (index.html)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Suraj Kora",
  "jobTitle": "Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pandaveswar",
    "addressRegion": "West Bengal",
    "addressCountry": "India"
  }
}
```

---

## Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | Yes |
| Firefox | Yes |
| Safari | Yes |
| Edge | Yes |
| Mobile Chrome | Yes |
| Mobile Safari | Yes |

---

## Performance

- Images use `loading="lazy"` and `decoding="async"`
- Fonts use `preconnect` for faster loading
- JavaScript uses `defer` attribute
- CSS animations respect `prefers-reduced-motion`
- Particle system pauses on tab blur

---

## License

This portfolio is free to use and modify for personal projects.

---

## Author

**Suraj Kora**
- Self-taught developer from West Bengal, India
- Learning through YouTube, documentation, and online resources
