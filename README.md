# Omkar Agrotech CRM - Accounting Management System

A comprehensive, modern web-based CRM specifically designed for accounting operations at Omkar Agrotech Pvt. Ltd. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Accounting Features
- **Automated Double-Entry Bookkeeping** - Automatic journal entries with debit/credit validation
- **Books of Accounts** - Journal, Ledger, and Trial Balance with real-time updates
- **Financial Statements** - Trading Account, P&L, Balance Sheet, and Cash Flow Statement
- **Stock Management** - Real-time inventory tracking with FIFO/LIFO/Weighted Average valuation
- **Document Management** - Upload and OCR processing for invoices, receipts, and documents
- **Transaction Management** - Complete transaction lifecycle with approval workflows
- **GST Compliance** - Automatic GST calculation and compliance tracking
- **Search & Analytics** - Powerful search with advanced filtering and real-time analytics

### User Interface
- **Modern Dashboard** - Interactive charts and real-time financial metrics
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Intuitive Navigation** - Easy-to-use sidebar with quick access to all features
- **Drag-and-Drop Upload** - Simple document upload with progress tracking
- **Real-time Updates** - Live data synchronization across all modules

## 📋 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **File Storage**: Supabase Storage
- **Deployment**: Vercel

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account (for database)
- Git

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/brandingkraft-alt/omkar-agrotech-crm.git
cd omkar-agrotech-crm
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Configuration**

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Application Configuration
NEXT_PUBLIC_APP_NAME=Omkar Agrotech CRM
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
omkar-agrotech-crm/
├── app/                          # Next.js 14 App Router
│   ├── dashboard/               # Dashboard pages
│   │   ├── page.tsx            # Main dashboard
│   │   ├── transactions/       # Transaction management
│   │   ├── books/              # Books of accounts
│   │   ├── statements/         # Financial statements
│   │   ├── stock/              # Stock management
│   │   ├── upload/             # Document upload
│   │   └── messages/           # Communication
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/                  # Reusable components
│   └── DashboardLayout.tsx     # Dashboard layout wrapper
├── public/                      # Static assets
├── .env.example                # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎯 Key Pages

### 1. Dashboard (`/dashboard`)
- Financial overview with key metrics
- Revenue vs Expenses charts
- Expense breakdown pie chart
- Recent transactions table
- Quick stats cards

### 2. Transactions (`/dashboard/transactions`)
- Complete transaction listing
- Advanced filtering (type, status, date)
- Search functionality
- Create, edit, delete transactions
- Document attachments

### 3. Books of Accounts (`/dashboard/books`)
- **Journal**: Chronological transaction entries
- **Ledger**: Account-wise transaction history
- **Trial Balance**: Debit/Credit totals with balance verification

### 4. Financial Statements (`/dashboard/statements`)
- **Trading Account**: Gross profit calculation
- **Profit & Loss Account**: Net profit/loss
- **Balance Sheet**: Assets and liabilities
- **Cash Flow Statement**: Operating, investing, financing activities

### 5. Stock Management (`/dashboard/stock`)
- Real-time inventory tracking
- Stock valuation (FIFO/LIFO/Weighted Average)
- Low stock alerts
- Category-wise filtering
- Stock movement analysis

### 6. Document Upload (`/dashboard/upload`)
- Drag-and-drop file upload
- OCR processing for data extraction
- Automatic categorization
- Progress tracking
- Batch upload support

## 🔐 Security Features

- Role-based access control (RBAC)
- Secure authentication with Supabase Auth
- Data encryption at rest and in transit
- Audit trail for all transactions
- Session management
- Input validation and sanitization

## 📊 Database Schema

### Core Tables
- `accounts` - Chart of accounts
- `journal_entries` - Journal entry headers
- `journal_entry_lines` - Journal entry details (double-entry)
- `stock_items` - Inventory items
- `stock_transactions` - Stock movements
- `documents` - Uploaded documents
- `transaction_messages` - Communication threads

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables
- Deploy

3. **Configure Environment Variables**
Add the following in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Manual Deployment

```bash
npm run build
npm run start
```

## 📈 Future Enhancements

- [ ] Multi-user authentication and authorization
- [ ] Email notifications for transactions
- [ ] PDF export for all reports
- [ ] Excel import/export
- [ ] Bank reconciliation module
- [ ] Automated backup system
- [ ] Mobile app (React Native)
- [ ] API integrations (Banking, GST portal)
- [ ] Advanced analytics and forecasting
- [ ] Multi-currency support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software developed for Omkar Agrotech Pvt. Ltd.

## 👥 Team

Developed by Kraft Designz for Omkar Agrotech Pvt. Ltd.

## 📞 Support

For support and queries:
- Email: branding.kraft@gmail.com
- GitHub Issues: [Create an issue](https://github.com/brandingkraft-alt/omkar-agrotech-crm/issues)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- Tailwind CSS for the styling system
- Recharts for beautiful charts
- Lucide for the icon library

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**