# Email Setup Instructions

The contact form now sends real emails using Resend API. Follow these steps to complete the setup:

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Free tier includes 100 emails/day and 3,000 emails/month

## 2. Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name like "Guess Who's Flipping Production"
4. Copy the API key (starts with `re_`)

## 3. Configure Vercel Environment Variable

Since you're deploying on Vercel:

1. Go to your Vercel dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your `guess-whos-flipping` project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (from step 2)
   - **Environment**: Check all environments (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your site to apply the changes

## 4. Verify Your Domain (Optional but Recommended)

To send emails from `contact@guesswhoflipping.com` instead of `onboarding@resend.dev`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `guesswhoflipping.com`)
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually a few minutes)
6. Update the worker code to use your domain:

```typescript
from: "Guess Who's Flipping <contact@guesswhoflipping.com>",
```

## 5. Test the Contact Form

1. Visit your deployed site
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email at `Guesswhosflipping@gmail.com`

## Troubleshooting

- **"Email service not configured"** - Resend API key is missing in Vercel environment variables
- **Emails not arriving** - Check spam folder, verify API key is correct
- **Rate limits** - Free tier has 100 emails/day limit

## Current Configuration

- **To Email**: `Guesswhosflipping@gmail.com`
- **From Email**: `Guess Who's Flipping <onboarding@resend.dev>` (update after domain verification)
- **Reply-To**: User's submitted email address
