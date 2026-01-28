# ⚡ Quick Start Guide - StyleMuse

## 30-Minute Setup

### 1. **Open the Website** (2 minutes)
- Open `index.html` in your web browser
- You'll see a fully functional, beautiful website!

### 2. **Customize Brand Name** (2 minutes)

**In `index.html`:**
Find this line (around line 45):
```html
<span>StyleMuse</span>
```
Replace with your brand name:
```html
<span>BeautyBox</span>
```

Also update in footer (around line 372):
```html
<h4>StyleMuse</h4>
```
Replace with:
```html
<h4>BeautyBox</h4>
```

### 3. **Update Meta Description** (1 minute)

In `index.html` head section, find:
```html
<meta name="description" content="StyleMuse - Curated Beauty & Fashion Products...">
```
Replace with your own description:
```html
<meta name="description" content="YourBrand - Your unique value proposition">
```

### 4. **Add Amazon Affiliate Links** (10 minutes)

In `script.js`, find the `productsData` array and update links:

**Before:**
```javascript
affiliate: "https://amazon.com/s?k=hyaluronic+acid+serum"
```

**After (your actual affiliate link):**
```javascript
affiliate: "https://amazon.com/dp/B08XYZABC?tag=yourname-20"
```

> **Get Your Tag:**
> 1. Sign up: [amazon.com/associates](https://amazon.com/associates)
> 2. Find your tracking ID (e.g., `yourname-20`)
> 3. Replace `yourname-20` in all links

### 5. **Test Everything Works** (5 minutes)

✅ **Check Navigation**
- Click menu items
- Try mobile menu button (on small screens)

✅ **Test Filters**
- Click category filters
- Click category cards
- Click "Load More"

✅ **Test Dark Mode**
- Click the moon icon (top right)
- Should toggle between light/dark

✅ **Test Forms**
- Fill newsletter form → click subscribe
- Fill contact form → click send
- Should show success message

✅ **Check Affiliate Links**
- Click "Buy on Amazon" button
- Should open Amazon in new tab

---

## Common Customizations

### Add Your Logo Image

In `index.html` (around line 47):
```html
<!-- Current -->
<i class="fas fa-sparkles"></i>
<span>StyleMuse</span>

<!-- Replace with image -->
<img src="your-logo.png" alt="Logo" style="height: 40px;">
```

### Change Color Scheme

In `styles.css`, find `:root` (line 8) and update:
```css
:root {
    --primary-blush: #YourColor1;
    --gold: #YourColor2;
    --charcoal: #YourColor3;
    /* etc */
}
```

**Color Suggestion Tools:**
- [coolors.co](https://coolors.co) - Generate palettes
- [color-hex.com](https://www.color-hex.com) - Browse colors

### Add Your Own Product Photos

1. Host images on free services:
   - Unsplash
   - Pexels
   - Pixabay
   - Or your own hosting

2. In `script.js`, update `image` property:
```javascript
image: "https://your-image-url.jpg"
```

### Replace Hero Section Image

In `index.html` (around line 115):
```html
<!-- Current -->
<img src="https://images.unsplash.com/photo-1522338503534-75cf8de7ff8b?w=600&h=400&fit=crop" alt="Beautiful woman">

<!-- Replace with your image -->
<img src="your-image-url" alt="Your description">
```

---

## Testing Checklist

- [ ] Website loads in Chrome
- [ ] Website loads in Firefox
- [ ] Website loads in Safari
- [ ] Mobile version looks good (test in browser DevTools)
- [ ] All links work
- [ ] Dark mode toggles
- [ ] Affiliate links open Amazon
- [ ] Forms show success message
- [ ] Images load properly
- [ ] No console errors (F12 → Console tab)

---

## Publishing Your Site

### Easiest Method: GitHub Pages (Free)

1. **Create GitHub account** if you don't have one
2. **Create new repository** called `stylemuse`
3. **Upload files** (drag and drop in web interface)
4. **Enable Pages** (Settings → Pages → main branch)
5. **Done!** Site will be at `https://yourusername.github.io/stylemuse`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## First Month Action Plan

### Week 1: Foundation
- [ ] Customize brand name and colors
- [ ] Add Amazon affiliate links
- [ ] Set up Google Analytics
- [ ] Register domain name

### Week 2: Content
- [ ] Add your product photos
- [ ] Write product descriptions
- [ ] Add real prices
- [ ] Deploy to hosting

### Week 3: Marketing
- [ ] Set up email newsletter
- [ ] Create social media accounts
- [ ] Share first posts
- [ ] Start building email list

### Week 4: Optimization
- [ ] Monitor analytics
- [ ] Optimize best-performing products
- [ ] Write first blog post
- [ ] Engage with audience

---

## Revenue Goals

**Month 1**: Get first 100 visitors
- Share on 5-10 Facebook groups
- Post on Pinterest
- Share with 5 friends

**Month 2**: Get to 500 visitors/month
- Write 2-3 blog posts
- Optimize for keywords
- Build email list

**Month 3**: Aim for 1,000+ visitors/month
- Consistent content
- Expand categories
- Increase product reviews

**Month 4+**: Scale up
- 5,000+ visitors/month
- Multiple traffic sources
- Regular affiliate income

---

## Need Help?

### Video Tutorials Recommended
- "How to Create an Affiliate Website" on YouTube
- "Amazon Associates Beginner Guide"
- "SEO for Beginners"

### Free Tools
- **Analytics**: Google Analytics
- **Keywords**: Google Keyword Planner, Ubersuggest
- **Design**: Canva
- **Images**: Unsplash, Pexels
- **Email**: Mailchimp (free tier)

### Documentation
- See [README.md](README.md) for full features
- See [DEPLOYMENT.md](DEPLOYMENT.md) for hosting options

---

## Pro Tips 💡

1. **Update Regularly**: Add new products weekly to boost SEO
2. **Write Reviews**: Longer content ranks better in search
3. **Be Authentic**: Recommend products you actually like
4. **Disclose**: Always mention you're an affiliate
5. **Engage**: Respond to comments and emails
6. **Monitor**: Check analytics to see what sells
7. **Optimize**: Update top products more frequently
8. **Network**: Collaborate with other influencers

---

## Troubleshooting

**Q: Website looks broken on mobile?**
A: Check browser width is narrow. Use DevTools (F12) to test responsive design.

**Q: Affiliate links don't work?**
A: Make sure you:
- Use valid ASIN (product ID)
- Include your affiliate tag
- Links are in correct format

**Q: Dark mode doesn't save?**
A: Clear browser cache and reload. Ensure localStorage is enabled.

**Q: Forms don't send?**
A: Currently forms show success message but don't send email. Add backend service like:
- Formspree
- Netlify Forms
- EmailJS

---

## Next Steps

1. ✅ **Customize** the site (30 minutes)
2. ✅ **Test** everything (5 minutes)
3. ✅ **Deploy** to hosting (5 minutes)
4. ✅ **Share** with friends and social media
5. ✅ **Monitor** and optimize

---

**You're ready to launch! 🚀**

Questions? Check README.md or DEPLOYMENT.md for more details.

Happy selling! 💰
