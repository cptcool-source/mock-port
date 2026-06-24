# MambaHire — Resume & LinkedIn Optimization Service

MambaHire is a done-for-you resume and LinkedIn rewriting service targeting job seekers in the 2026 market. Clients fill out an intake questionnaire, you use Claude to produce an ATS-optimized resume and LinkedIn profile, review the output, and deliver polished documents within 48 hours. No design skills required. Labor cost per client is roughly 20–30 minutes of your time.

---

## Getting Started — Actionable Steps

### Step 1: Build your Claude system prompt
Save this as a Project instruction in Claude:

> "You are an expert resume writer and ATS optimization specialist. Given the client's current resume, their target job description, and background notes from the intake form, rewrite the resume using strong action verbs, quantified achievements, and keyword alignment with the job posting. Format for ATS readability. Do not use tables, graphics, or columns — plain text structure only."

### Step 2: Build a 10-question Google Form intake questionnaire
Questions to include:
1. Current job title
2. Target job title and industry
3. Years of experience in your field
4. List your top 5 professional achievements (with numbers if possible)
5. List your core technical and soft skills
6. Highest level of education
7. Are you open to relocation? (yes / no / remote only)
8. Upload your current resume (Google Drive link or attach)
9. Paste 2–3 job descriptions you're targeting
10. Anything else we should know about your career goals?

### Step 3: Create a Fiverr listing
- Title: "I will rewrite your resume and optimize it for ATS systems"
- Start at $75 per resume to build reviews fast
- Raise price to $150 after your first 5 reviews
- Raise to $249 after 15 reviews (matching the site pricing)

### Step 4: Get your first testimonials
Post a free offer in 3 places: LinkedIn, a Facebook job seeker group, and a subreddit like r/resumes or r/jobs. Offer 2–3 free rewrites in exchange for honest feedback and permission to use the result as a before/after example.

### Step 5: Prove the workflow, then bundle
Once you can reliably deliver a polished resume in under 30 minutes, add the LinkedIn rewrite to your offer. Upsell clients who ordered just the resume ($249) into the full bundle ($499). The bundle is your highest-margin offer because the LinkedIn rewrite takes less time than the resume once you have the client's background.

### Optional quality check
Run the finished resume through **jobscan.co** (free tier available). Paste the resume + one of the client's target job descriptions. Aim for 75%+ match score before delivering.

---

## Payment Setup

### Stripe (for direct sales from this site)
1. Create an account at stripe.com
2. In your Stripe dashboard, go to **Products → Payment Links**
3. Create three payment links:
   - "Resume Rewrite" — $249
   - "LinkedIn Rewrite" — $349
   - "Full Bundle" — $499
4. In `index.html`, replace the following placeholder hrefs with your real Stripe Payment Link URLs:
   - `href="#stripe-resume"` → Stripe link for Resume Rewrite
   - `href="#stripe-linkedin"` → Stripe link for LinkedIn Rewrite
   - `href="#stripe-bundle"` → Stripe link for Full Bundle

### Formspree (contact / free audit form)
Form is already connected: `https://formspree.io/f/mwvdvvgo`
Configure the email recipient at formspree.io/dashboard if not already set to bspivey212@gmail.com.

---

## Deployment

This site is GitHub Pages compatible — no build step, no dependencies. To deploy:
1. Push this folder to a GitHub repository
2. Go to Settings → Pages → Source: main branch, root folder
3. Your site will be live at `https://yourusername.github.io/your-repo-name`
4. When you have a real domain, point it to GitHub Pages or move the files to any static host (Netlify, Vercel, Cloudflare Pages)

---

## File Structure

```
site7/
├── index.html       — full page HTML
├── css/
│   └── style.css    — all styles (no framework)
├── js/
│   └── main.js      — nav scroll, mobile drawer, reveal animations, stat counter
└── README.md        — this file
```
