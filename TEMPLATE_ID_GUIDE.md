# Finding Your EmailJS Template IDs

The error you're experiencing is because the template ID `cybersidequotemail` doesn't exist in your EmailJS account. Here's how to find and set up the correct template IDs:

## Step 1: Check Your Existing Templates

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/templates)
2. Look at the list of your existing templates
3. For each template, you'll see a Template ID (usually in the format `template_xxxxxxx`)

## Step 2: Create New Templates If Needed

If you don't have templates set up yet:

1. Click "Create New Template"
2. Design your template with the variables mentioned in the EMAILJS_TEMPLATE_GUIDE.md
3. Save the template
4. Note the Template ID that is assigned to it

## Step 3: Update Your Code

You need to update the template IDs in two files:

### In Contact.tsx:
```javascript
const templateId = 'template_contact'; // Replace with your actual template ID
```

### In GetStarted.tsx:
```javascript
const templateId = 'template_quote'; // Replace with your actual template ID
```

## Common Template ID Formats

EmailJS typically assigns template IDs in these formats:
- `template_xxxxxxx` (where x is a random alphanumeric character)
- Sometimes just `xxxxxxx`

## Testing Your Templates

After updating the template IDs:

1. Try submitting the form again
2. Check the browser console for any errors
3. If successful, you should see a success message and receive the email

## Need Different Templates?

You might want to create two separate templates:

1. **Contact Form Template**: For general inquiries from the Contact page
2. **Quote Request Template**: For quote requests from the GetStarted page

This allows you to format the emails differently based on the type of request. 