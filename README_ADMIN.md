# Admin Dashboard - Al-Qattawi Poultry

A comprehensive, production-ready admin dashboard for managing the Al-Qattawi Poultry website.

## Features

- **Dashboard Overview**: KPIs, analytics, and quick actions
- **Contacts Management**: View, search, and manage customer messages
- **Services CRUD**: Create, read, update, and delete services
- **Products Management**: Manage protected items (medicines, products)
- **Vaccination Programs**: Visual timeline editor for vaccination schedules
- **Notifications**: Send push notifications to users
- **File Upload Manager**: Upload and manage files
- **Authentication**: Secure login with JWT tokens
- **Responsive Design**: Works on desktop, tablet, and mobile

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/pnpm
- Next.js 14+
- Tailwind CSS v4
- API server running (see API_BASE_URL below)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd al-qattawi-poultry
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Configure environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Edit `.env.local` and set:
\`\`\`
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
\`\`\`

4. Run the development server:
\`\`\`bash
pnpm dev
\`\`\`

5. Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login) in your browser

### Default Admin Credentials

\`\`\`
Email: admin@alqattawi.com
Password: admin123
\`\`\`

## API Integration

### Endpoints Mapping

| Feature | Method | Endpoint | Purpose |
|---------|--------|----------|---------|
| Contacts | GET | `/api/Contact` | List all contacts |
| Contacts | GET | `/api/Contact/{id}` | Get single contact |
| Contacts | POST | `/api/Contact` | Create contact |
| Contacts | PUT | `/api/Contact/{id}` | Update contact |
| Contacts | DELETE | `/api/Contact/{id}` | Delete contact |
| Services | GET | `/api/Service` | List services |
| Services | POST | `/api/Service` | Create service |
| Services | PUT | `/api/Service/{id}` | Update service |
| Services | DELETE | `/api/Service/{id}` | Delete service |
| Products | GET | `/api/Protected` | List products |
| Products | POST | `/api/Protected` | Create product |
| Products | PUT | `/api/Protected/{id}` | Update product |
| Products | DELETE | `/api/Protected/{id}` | Delete product |
| Vaccinations | GET | `/api/VaccinationProgram` | List vaccination programs |
| Vaccinations | POST | `/api/VaccinationProgram` | Create program |
| Vaccinations | PUT | `/api/VaccinationProgram/{id}` | Update program |
| Notifications | POST | `/api/Notifications/send` | Send push notification |
| Notifications | GET | `/api/Notifications/publickey` | Get VAPID key |
| Notifications | POST | `/api/Notifications/subscribe` | Subscribe to notifications |
| Upload | POST | `/api/Upload` | Upload file |
| Upload | DELETE | `/api/Upload/{id}` | Delete file |
| Analytics | GET | `/api/Analytics` | Get analytics data |
| Analytics | GET | `/api/Analytics/active-users` | Get active users |
| Auth | POST | `/api/Account/Login` | Admin login |
| Auth | POST | `/api/Account` | Create admin account |

## File Structure

\`\`\`
app/(admin)/
├── layout.tsx              # Admin layout with sidebar
├── page.tsx                # Dashboard overview
├── login/
│   └── page.tsx            # Login page
├── contacts/
│   ├── page.tsx            # Contacts list
│   └── [id]/
│       └── page.tsx        # Contact details
├── services/
│   ├── page.tsx            # Services list
│   └── [id]/
│       └── page.tsx        # Service editor
├── protected/
│   ├── page.tsx            # Products list
│   └── [id]/
│       └── page.tsx        # Product editor
├── vaccinations/
│   └── page.tsx            # Vaccination timeline editor
├── notifications/
│   └── page.tsx            # Notifications console
└── uploads/
    └── page.tsx            # File manager

lib/
├── api-client.ts           # API client with auth
├── notify.ts               # Toast notifications
└── cache-utils.ts          # Caching utilities

hooks/
├── use-auth.ts             # Authentication hook
├── use-fetch.ts            # Data fetching hook
└── use-mutation.ts         # Mutation hook

components/
├── admin-table.tsx         # Reusable table component
├── toast-container.tsx     # Toast notifications UI
├── file-uploader.tsx       # File upload component
├── vaccination-timeline.tsx # Timeline editor
└── charts/                 # Chart components
\`\`\`

## Testing

### Test Sending a Notification

1. Go to `/admin/notifications`
2. Fill in the notification form:
   - Title: "تحديث الأسعار"
   - Message: "تم تحديث أسعار الكتاكيت"
   - Target: "All Users"
3. Click "إرسال الإشعار"
4. Check browser console for success message

### Test File Upload

1. Go to `/admin/uploads`
2. Click "Upload File"
3. Select a file (image, PDF, etc.)
4. Monitor upload progress
5. File should appear in the list

## Security Considerations

### Authentication

- JWT tokens are stored in localStorage (note: vulnerable to XSS)
- **Recommended**: Use httpOnly cookies instead
- Implement token refresh mechanism
- Add CSRF protection if using cookies

### API Security

- All requests include `Authorization: Bearer {token}` header
- Implement rate limiting on API
- Validate all inputs server-side
- Use HTTPS in production

### File Upload

- Validate file types server-side
- Implement file size limits
- Scan uploads for malware
- Store files outside web root

## Deployment

### Vercel

\`\`\`bash
# Push to GitHub
git push origin main

# Deploy to Vercel
vercel deploy
\`\`\`

### Docker

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

Build and run:
\`\`\`bash
docker build -t al-qattawi-admin .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_BASE_URL=http://api:3001 al-qattawi-admin
\`\`\`

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_API_BASE_URL` | Yes | `http://localhost:3001` | API server URL |
| `NEXT_PUBLIC_AUTH_TOKEN_KEY` | No | `admin_token` | LocalStorage key for JWT |
| `NEXT_PUBLIC_SENTRY_DSN` | No | - | Sentry error tracking |

## Troubleshooting

### "Failed to fetch" errors

- Check `NEXT_PUBLIC_API_BASE_URL` is correct
- Ensure API server is running
- Check CORS headers on API

### Login not working

- Verify credentials are correct
- Check API `/api/Account/Login` endpoint
- Check browser console for errors

### Notifications not sending

- Verify user has subscribed to notifications
- Check `/api/Notifications/send` endpoint
- Check browser notification permissions

## Support

For issues or questions:
1. Check the Swagger API docs: `http://localhost:3001/swagger`
2. Review API error responses
3. Check browser console for client-side errors
4. Contact the development team

## License

Proprietary - Al-Qattawi Poultry
