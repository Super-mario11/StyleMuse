# 📝 Affiliate Links Template & Examples

## How to Find Amazon Product ASINs

### Method 1: From Amazon URL
Example: `https://amazon.com/dp/B08V6XQ2YZ/ref=sr_1_1`
- ASIN is: `B08V6XQ2YZ`

### Method 2: Search Products
1. Go to [amazon.com](https://amazon.com)
2. Search for a product
3. Open the product page
4. Copy ASIN from URL or product details

## Affiliate Link Format

Replace `YOUR-TAG-20` with your actual Amazon Associates tag:

```
https://amazon.com/dp/ASIN?tag=YOUR-TAG-20
```

Example:
```
https://amazon.com/dp/B08V6XQ2YZ?tag=yourname-20
```

## Example Affiliate Links (Template)

### Beauty & Skincare Products

| Product | ASIN | Full Link |
|---------|------|-----------|
| Hyaluronic Acid Serum | B08XYZ1234 | `https://amazon.com/dp/B08XYZ1234?tag=YOUR-TAG-20` |
| Retinol Night Cream | B07WXYZ5678 | `https://amazon.com/dp/B07WXYZ5678?tag=YOUR-TAG-20` |
| Vitamin C Serum | B09ABCD1234 | `https://amazon.com/dp/B09ABCD1234?tag=YOUR-TAG-20` |
| Face Moisturizer | B08EFG5678 | `https://amazon.com/dp/B08EFG5678?tag=YOUR-TAG-20` |
| Liquid Foundation | B07HIJ1234 | `https://amazon.com/dp/B07HIJ1234?tag=YOUR-TAG-20` |
| Eyeshadow Palette | B06KLM5678 | `https://amazon.com/dp/B06KLM5678?tag=YOUR-TAG-20` |

### How to Update in Code

In `script.js`, locate the `productsData` array and update each product's affiliate link:

```javascript
{
    id: 1,
    title: "Hyaluronic Acid Serum",
    category: "skincare",
    price: 24.99,
    originalPrice: 39.99,
    description: "Hydrating serum with hyaluronic acid for plump, radiant skin",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 342,
    badge: "Editor's Pick",
    // UPDATE THIS LINE with your actual affiliate link:
    affiliate: "https://amazon.com/dp/B08XYZ1234?tag=yourname-20"
}
```

## Finding Products to Add

### Search Tools
1. **Amazon Keyword Tool** (in Associates dashboard)
2. **Google Trends** - See what's trending
3. **Pinterest** - Popular beauty/fashion pins
4. **Instagram** - Influencer recommendations
5. **YouTube** - Beauty/fashion reviews

### Product Research Strategy

1. **Search Popular Items**
   - "Best affordable makeup" + ASIN
   - "Top rated skincare products"
   - "Trending fashion accessories"

2. **Check Reviews**
   - Look for 4+ star rated products
   - Read reviews to understand value
   - Identify best sellers

3. **Compare Prices**
   - Find products with discounts
   - Note original vs sale price
   - Update regularly to show savings

4. **Find ASIN**
   - Open Amazon product page
   - Look in URL: `/dp/ASIN/`
   - Or search in product details

## Bulk Update Template

Need to update multiple links? Here's a template:

```javascript
const productsData = [
    {
        id: 1,
        title: "Product Name",
        category: "skincare", // or makeup, haircare, fashion, accessories
        price: 24.99,
        originalPrice: 39.99,
        description: "Brief product description",
        image: "image-url-here",
        rating: 4.8,
        reviews: 342,
        badge: "Editor's Pick", // or Best Seller, Trending, New
        affiliate: "https://amazon.com/dp/ASIN?tag=yourname-20"
    },
    // Repeat for each product...
];
```

## Using Amazon Associates Link Generator

### Automatic Method (Recommended)

1. Log into [Amazon Associates](https://amazon.com/associates)
2. Click "Marketing Tools" → "Product Links"
3. Search for product
4. Click "Generate Link"
5. Copy the link (includes your tag automatically)
6. Paste into `script.js`

### Manual Method

1. Find product on Amazon
2. Copy the ASIN from URL
3. Format: `https://amazon.com/dp/ASIN?tag=YOUR-TAG-20`
4. Paste into code

## Best Practices for Affiliate Links

✅ **DO:**
- Use short, clean links
- Always include your tag
- Test links before publishing
- Update broken links monthly
- Monitor which products earn most

❌ **DON'T:**
- Use shortened URLs (hides affiliate tag)
- Add your own tracking parameters
- Recommend products you haven't researched
- Forget to disclose you're an affiliate
- Use misleading product descriptions

## Tracking Your Performance

In Amazon Associates Dashboard:

1. **Traffic**: Which products get most clicks
2. **Orders**: Which products convert to sales
3. **Earnings**: Which categories are most profitable
4. **Revenue**: Monitor monthly earnings

### Optimization Strategy

- **High Clicks, Low Orders** → Improve description
- **Low Clicks** → Better placement, more promotion
- **High Orders** → Feature more similar products
- **No Clicks** → Consider removing and replacing

## Common Affiliate Link Issues

| Issue | Solution |
|-------|----------|
| Link opens wrong product | Check ASIN is correct |
| Link shows "no tag" | Ensure `?tag=` is in URL |
| Link not tracking | Use your specific affiliate tag |
| Link is broken | Test in incognito mode |
| Link shows error | Verify ASIN still exists |

## Sample Complete Links

Here are working examples (replace YOUR-TAG with your tag):

**Skincare:**
```
https://amazon.com/s?k=hyaluronic+acid+serum&tag=YOUR-TAG-20
https://amazon.com/s?k=retinol+night+cream&tag=YOUR-TAG-20
https://amazon.com/s?k=vitamin+c+serum&tag=YOUR-TAG-20
```

**Makeup:**
```
https://amazon.com/s?k=liquid+foundation&tag=YOUR-TAG-20
https://amazon.com/s?k=eyeshadow+palette&tag=YOUR-TAG-20
https://amazon.com/s?k=mascara&tag=YOUR-TAG-20
```

**Fashion:**
```
https://amazon.com/s?k=silk+blouse&tag=YOUR-TAG-20
https://amazon.com/s?k=maxi+dress&tag=YOUR-TAG-20
https://amazon.com/s?k=blazer&tag=YOUR-TAG-20
```

**Accessories:**
```
https://amazon.com/s?k=gold+necklace&tag=YOUR-TAG-20
https://amazon.com/s?k=leather+crossbody+bag&tag=YOUR-TAG-20
https://amazon.com/s?k=pearl+earrings&tag=YOUR-TAG-20
```

## Updating Links - Step by Step

1. **Open `script.js`** in your editor
2. **Find a product** you want to update
3. **Find the line** with `affiliate:`
4. **Replace the URL** with your new affiliate link
5. **Save the file**
6. **Test** by clicking "Buy on Amazon" button
7. **Verify** it opens correct product

Example edit:

```javascript
// BEFORE:
affiliate: "https://amazon.com/s?k=hyaluronic+acid+serum"

// AFTER:
affiliate: "https://amazon.com/dp/B08V6XQ2YZ?tag=yourname-20"
```

## Get More Products

### Curated Lists
- **Best sellers in category** - Sort by ratings
- **Editor's picks** - Most recommended
- **Trending now** - Highest growth
- **Budget friendly** - Best value for money
- **Luxury** - Premium products

### Sources
- **Amazon Best Sellers**: amazon.com/Best-Sellers
- **Reddit**: r/BeautyDiagnostics, r/FashionPlus
- **YouTube**: Beauty/Fashion reviewer channels
- **Instagram**: Hashtags #BeautyProduct, #FashionFinds
- **Pinterest**: Style boards

## Seasonal Products

**Q1 (Jan-Mar):** New Year skincare routines, spring fashion
**Q2 (Apr-Jun):** Summer makeup, outdoor fashion
**Q3 (Jul-Sep):** Back-to-school, fall fashion
**Q4 (Oct-Dec):** Holiday gifts, holiday glam

---

**Pro Tip:** Update your affiliate links at least monthly to:
- Replace broken links
- Add new trending products
- Remove underperforming products
- Keep prices current

Good luck with your affiliate journey! 💰
