# Contact Form Setup with EmailJS

This document provides instructions on how to set up the contact form to send emails to cybersidestudio@gmail.com using EmailJS.

## Setting Up EmailJS

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Select "Gmail" as the service provider
   - Connect your cybersidestudio@gmail.com account
   - Name your service (e.g., "cyberside_gmail")
   - Note the **Service ID** for later use

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Example template:
     ```
     From: {{name}} ({{email}})
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Save the template and note the **Template ID**

4. **Get Your Public Key**
   - Go to "Account" > "API Keys"
   - Copy your **Public Key**

## Updating the Contact Form Code

1. Open `src/pages/Contact.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your Service ID
   const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your Template ID
   const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your Public Key
   ```

## Testing the Contact Form

1. Fill out the contact form with test information
2. Submit the form
3. Check the email inbox at cybersidestudio@gmail.com to verify the email was received
4. Check the EmailJS dashboard to monitor email sending activity and any potential errors

## Security Considerations

- The EmailJS public key is exposed in the frontend code, but this is normal and expected
- EmailJS has built-in security measures to prevent abuse
- For additional security, you can set up domain restrictions in your EmailJS account settings

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that all EmailJS credentials are correct
3. Check your EmailJS dashboard for any failed email attempts
4. Ensure your Gmail account doesn't have additional security restrictions preventing the connection

For more information, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 