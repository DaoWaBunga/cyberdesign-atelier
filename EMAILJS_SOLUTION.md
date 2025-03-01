# EmailJS Integration Solution

## The Problem

You were encountering a "400 Bad Request" error with the message "The template ID not found" when trying to send emails using EmailJS.

## The Solution

We've made the following changes to fix the issue:

1. **Changed from `sendForm()` to `send()`**: 
   - Instead of using `emailjs.sendForm()` which requires a form element and a template ID, we're now using `emailjs.send()` which allows us to directly send the data as an object.
   - This approach is more flexible and less prone to template ID issues.

2. **Simplified Template Usage**:
   - We're now using a single template ID (`template_contact`) for both forms.
   - For the quote request form, we're formatting the message to include all the additional fields.

3. **Added Direct Data Passing**:
   - Instead of relying on form field names matching template variables, we're explicitly passing the data in the format the template expects.
   - This gives us more control over what data is sent and how it's formatted.

4. **Improved Budget Options**:
   - Updated the budget options to use more readable values that will display better in the email.

## How It Works Now

1. **Contact Form**:
   - When a user submits the contact form, we collect their name, email, subject, and message.
   - We send this data directly to EmailJS using the `send()` method.
   - The email is sent to cybersidestudio@gmail.com.

2. **Quote Request Form**:
   - When a user submits the quote request form, we collect all their information.
   - We format the message to include the project details, company, service, and budget.
   - We send this data to EmailJS using the same template as the contact form.

## Template Requirements

Your EmailJS template should include the following variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Recipient email (optional, we're setting this to cybersidestudio@gmail.com)

## Testing

To test if the solution works:
1. Fill out and submit either form
2. Check the browser console for any errors
3. Check your email inbox at cybersidestudio@gmail.com

## Further Customization

If you want to use different templates for different forms:
1. Create the templates in your EmailJS dashboard
2. Note the template IDs
3. Replace `"template_contact"` in the code with your actual template IDs 