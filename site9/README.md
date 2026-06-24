# Mamba Connections — Premium Dating Profile Writing Service

Mamba Connections is a done-for-you dating profile writing service for Hinge, Bumble, Tinder, and other apps. Clients fill out a detailed questionnaire about their personality, humor style, and what they're looking for. You use Claude to write a tailored profile and prompt answers, then deliver within 48 hours. The entire business is a questionnaire, a Claude prompt, and a payment link.

---

## Getting Started — Actionable Steps

### Step 1: Build your Claude prompt
Save this as a Project instruction in Claude:

> "You are a dating profile expert who has written thousands of profiles across Hinge, Bumble, and Tinder. Given the client's questionnaire answers below, write a [platform] dating profile that is [funny and self-aware / warm and sincere — use client's preference]. For Hinge: write a 150-word bio and 3 strong prompt answers. For Bumble/Tinder: write a full bio optimized for that platform's format. Avoid every cliché: no 'I love to laugh,' no 'partner in crime,' no 'foodie,' no 'work hard play hard.' Make it specific, interesting, and unmistakably this person."

### Step 2: Build a Typeform intake questionnaire (12–15 questions)
Questions to include:
1. Your name and age
2. Which platform(s) do you use? (Hinge / Bumble / Tinder / Other)
3. Describe your personality in 3 words
4. What's your sense of humor like? (dry / self-deprecating / absurdist / warm / not really a humor person)
5. What do you do for work and how do you feel about it?
6. What do you do on a typical weekend?
7. What's one thing you're genuinely passionate about that would surprise people?
8. What are you looking for? (casual / something serious / open to see)
9. What's a deal breaker for you?
10. What's a story about yourself that makes you laugh or that you think is interesting?
11. What's the tone you want your profile to have? (fun / sincere / mysterious / confident)
12. Anything you definitely don't want in your profile?
13. Optional: Describe your ideal first date
14. Optional: Is there anything specific about your life right now that you want woven in?

### Step 3: Do 3 free profiles for friends
Before charging anyone, write profiles for 3 real people you know who are actively on the apps. Get their honest feedback. Ask what felt off-brand or too generic. Use these as before/after examples on the site and in your social content.

### Step 4: Launch on Fiverr at $150
- Title: "I will write your Hinge, Bumble, or Tinder dating profile"
- Start at $150 to get reviews quickly
- After 5 positive reviews, raise to $199 (matching the site price)
- Screenshot every compliment and match result clients send you

### Step 5: Add the upsell early
Once you have the workflow down, create a $350 package: profile + 5 custom opening message templates. This is fast to produce and clients love having openers ready to go. It maps directly to "The Full Kit" package on the site.

### Content for social media
Short videos showing a before/after profile transformation perform extremely well on TikTok and Instagram Reels. The "before" profile is generic; the "after" is specific and interesting. No faces needed — just text on screen.

---

## Payment Setup

### Stripe (for direct sales from this site)
1. Create an account at stripe.com
2. In your Stripe dashboard, go to **Products → Payment Links**
3. Create three payment links:
   - "The Profile" — $199
   - "The Full Kit" — $349
   - "Premium" — $499
4. In `index.html`, replace the following placeholder hrefs with your real Stripe Payment Link URLs:
   - `href="#stripe-profile"` → Stripe link for The Profile
   - `href="#stripe-kit"` → Stripe link for The Full Kit
   - `href="#stripe-premium"` → Stripe link for Premium

### Formspree (contact form)
Form is already connected: `https://formspree.io/f/mzdldezw`
Configure the email recipient at formspree.io/dashboard if not already set to bspivey212@gmail.com.

---

## Deployment

This site is GitHub Pages compatible — no build step, no dependencies. To deploy:
1. Push this folder to a GitHub repository
2. Go to Settings → Pages → Source: main branch, root folder
3. Your site will be live at `https://yourusername.github.io/your-repo-name`
4. When you have a real domain, point it to GitHub Pages or move to Netlify, Vercel, or Cloudflare Pages

---

## File Structure

```
site9/
├── index.html       — full page HTML
├── css/
│   └── style.css    — all styles (no framework)
├── js/
│   └── main.js      — nav scroll, mobile drawer, scroll reveals, FAQ accordion
└── README.md        — this file
```
