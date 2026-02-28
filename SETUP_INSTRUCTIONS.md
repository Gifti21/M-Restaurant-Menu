# M-Restaurant Website - Setup Instructions

## ✅ What I've Implemented

Your restaurant website now has **BOTH** email and WhatsApp ordering options!

### Features:
1. **Shopping Cart** - Customers can add multiple items
2. **Two Service Options:**
   - 🚚 Delivery (with address field)
   - 🍽️ Dine-in (with optional table number)
3. **Two Ways to Send Orders:**
   - 📱 WhatsApp (RECOMMENDED - Most reliable)
   - 📧 Email (Backup option)

---

## 🔧 Important Setup Steps

### 1. Update Your WhatsApp Number

Open `script.js` and find line ~268:

```javascript
const whatsappNumber = '251938675525';
```

**Change this to your actual WhatsApp business number!**
- Format: Country code + phone number (NO + sign, NO spaces)
- Example for Ethiopia: `251938675525`
- Example for USA: `12025551234`

### 2. Update Your Email Address

The email is already set to: `medhanitmedi344@gmail.com`

If you want to change it, find this line in `script.js` (~295):

```javascript
const mailtoLink = `mailto:medhanitmedi344@gmail.com?subject=...`;
```

---

## 📱 How It Works

### For Customers:

1. Browse menu and add items to cart
2. Click "Cart" button to review order
3. Click "Checkout"
4. Fill in their details:
   - Name (required)
   - Phone (required)
   - Email (optional)
   - Choose Delivery or Dine-in
   - Add special instructions
5. Choose how to send order:
   - **WhatsApp Button** → Opens WhatsApp with order details pre-filled
   - **Email Button** → Opens their email app with order details

### For You (Restaurant Owner):

- **WhatsApp orders** arrive directly in your WhatsApp
- **Email orders** arrive at medhanitmedi344@gmail.com
- You can reply to customers immediately
- All order details are formatted clearly

---

## 🧪 Testing Your Website

### Test Locally:
1. Open `index.html` in your browser
2. Add some items to cart
3. Go to checkout
4. Fill in the form
5. Click "Send via WhatsApp" - it should open WhatsApp
6. Click "Send via Email" - it should open your email app

### Test on Phone:
1. Upload website to a hosting service (see below)
2. Open on your phone
3. Test both WhatsApp and Email options

---

## 🌐 Publishing Your Website

To make your website accessible to customers, you need to host it online:

### Option 1: GitHub Pages (FREE)
1. Create a GitHub account
2. Create a new repository
3. Upload all files (index.html, style.css, script.js, image folder)
4. Enable GitHub Pages in settings
5. Your website will be at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (FREE)
1. Go to netlify.com
2. Drag and drop your website folder
3. Get instant URL like: `https://your-restaurant.netlify.app`

### Option 3: Ethiopian Hosting
- Ethionet.et
- Ethiopianhosting.com
- Or any local hosting provider

---

## 📞 Contact Information

Your current contact info in the website:
- Email: medhanitmedi344@gmail.com
- Phone: +251 938675525
- Location: Adama, Ethiopia

To change these, edit the footer section in `index.html` (around line 90).

---

## ⚠️ Important Notes

### WhatsApp:
- ✅ Works on all devices (phone, tablet, computer)
- ✅ Customer doesn't need to have your number saved
- ✅ You receive orders instantly
- ✅ You can chat with customers directly
- ⚠️ Make sure your WhatsApp number is correct!

### Email:
- ⚠️ Requires customer to have email app configured
- ⚠️ Customer must click "Send" in their email app
- ⚠️ Less reliable than WhatsApp
- ✅ Good as backup option

---

## 🎯 Recommendation

**Tell your customers to use WhatsApp!** It's:
- More reliable
- Faster
- Easier for both you and them
- Very popular in Ethiopia

---

## 📝 Files in Your Website

- `index.html` - Main website structure
- `style.css` - All styling and design
- `script.js` - All functionality (cart, checkout, ordering)
- `image/` - All your food and drink images
- `SETUP_INSTRUCTIONS.md` - This file

---

## 🆘 Need Help?

If something doesn't work:
1. Check browser console for errors (F12 key)
2. Verify your WhatsApp number is correct
3. Test on different devices
4. Make sure all files are uploaded to your hosting

---

## ✨ Your Website is Ready!

Open `index.html` in your browser and start testing! 🎉
