# EmailJS Template Setup Guide

## Template Variables

Make sure your EmailJS template includes the following variables to match the form fields:

### Contact Form Template Variables
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message

### Quote Request Form Template Variables
- `{{name}}` - Requester's name
- `{{email}}` - Requester's email
- `{{company}}` - Company name
- `{{service}}` - Selected service
- `{{budget}}` - Budget range
- `{{message}}` - Project description

## Example Template

```
New Contact from Website

From: {{name}} ({{email}})
Subject: {{subject}}

Message:
{{message}}

---
Additional Information (if available):
Company: {{company}}
Service Requested: {{service}}
Budget Range: {{budget}}
```

## Troubleshooting Common Issues

1. **Missing Variables**: If your template doesn't include all the variables that your form is sending, those values will be ignored.

2. **Case Sensitivity**: Variable names are case-sensitive. Make sure `{{name}}` in your template matches the `name` field in your form.

3. **Template ID**: Verify that you're using the correct template ID in your code.

4. **Service Connection**: Ensure your email service (Gmail) is properly connected and authorized in EmailJS.

5. **Form Field Names**: Each input field in your form must have a `name` attribute that matches the variable name in your template.

## Checking the Browser Console

If you're experiencing issues, check your browser's developer console for error messages. Look for:

- Network errors (failed requests)
- JavaScript errors
- Response from EmailJS API

## Testing Your Template

You can test your template directly in the EmailJS dashboard:

1. Go to your template in the EmailJS dashboard
2. Click "Test" button
3. Fill in test values for all variables
4. Send a test email to verify it works

Remember to check your spam folder if test emails aren't appearing in your inbox. 