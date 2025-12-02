# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Interest: {{interest}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Set **To Email** to: `qzaman@eztax.ca`
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Update Contact.jsx

Replace these values in `src/pages/Contact.jsx`:

```javascript
const serviceID = 'YOUR_SERVICE_ID';     // From Step 2
const templateID = 'YOUR_TEMPLATE_ID';   // From Step 3
const publicKey = 'YOUR_PUBLIC_KEY';     // From Step 4
```

## Alternative: Using Environment Variables (Recommended)

1. Create a `.env` file in the root directory:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.jsx to use environment variables:
```javascript
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Testing

1. Fill out the contact form
2. Submit it
3. Check your email inbox (qzaman@eztax.ca)
4. You should receive the form submission

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Service ID/Template ID wrong?** Double-check in EmailJS dashboard
- **Rate limit?** Free tier allows 200 emails/month
- **Need more emails?** Upgrade to a paid plan in EmailJS

