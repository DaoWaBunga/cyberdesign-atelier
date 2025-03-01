# EmailJS Template Update

## Current Template
```html
<p>Hello {{to_name}},</p>
<p>You got a new message from {{from_name}}:</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  {{message}}
</p>
<p>
  Best wishes,<br>EmailJS team
</p>
```

## Updated Template (Option 1)
Update your template to match the variables we're sending:

```html
<p>Hello,</p>
<p>You got a new message from {{name}} ({{email}}):</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  {{message}}
</p>
<p>
  Best wishes,<br>CyberSide Studio
</p>
```

## Alternative: Update Code Instead (Option 2)
If you prefer to keep your current template, we can update our code to match your template variables:

In both Contact.tsx and GetStarted.tsx, change:
```javascript
{
  name: data.name,
  email: data.email,
  subject: data.subject,
  message: data.message,
  to_email: "cybersidestudio@gmail.com"
}
```

To:
```javascript
{
  from_name: data.name,
  to_name: "CyberSide Studio",
  message: data.message,
  reply_to: data.email
}
```

For the GetStarted.tsx file, you would format the message to include all details:
```javascript
{
  from_name: data.name,
  to_name: "CyberSide Studio",
  message: `Subject: Quote Request\n\nProject Details:\n${data.message}\n\nCompany: ${data.company || 'Not specified'}\nService: ${data.service || 'Not specified'}\nBudget: ${data.budget || 'Not specified'}\n\nContact Email: ${data.email}`,
  reply_to: data.email
}
```

## Recommendation
I recommend Option 1 (updating your template) as it provides a cleaner separation of data fields and makes the emails more structured and readable. 