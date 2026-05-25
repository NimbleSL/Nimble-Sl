# AI Project Estimator - Implementation Guide

## Overview

The AI Project Estimator is a 7-step wizard that uses Groq's LLaMA 3.1 model to generate instant, accurate software project estimates for NimbleSL clients. It captures leads, integrates with Supabase, and provides a detailed breakdown of costs, timeline, team composition, and tech stack recommendations.

## Architecture

### Frontend
- **Location**: `/src/app/tools/project-estimator/page.tsx`
- **Type**: Client component with Framer Motion animations
- **Features**:
  - 7-step wizard with progress tracking
  - Terminal-style loading animation
  - Comprehensive results screen with 8 sections
  - Lead capture form with validation
  - Responsive design with glassmorphism UI

### Backend API Routes

#### 1. Estimation API (`/src/app/api/estimate/route.ts`)
- **Method**: POST
- **Purpose**: Generates AI-powered project estimates using Groq
- **Input**: `IEstimatorInput` (project details)
- **Process**:
  1. Validates input data
  2. Builds prompt from project details
  3. Calls Groq API with `llama-3.1-8b-instant` model
  4. Parses JSON response
  5. Saves to Supabase `estimations` table
  6. Returns estimation result + ID
- **Output**: `{ success, estimation_id, result }`

#### 2. Lead Capture API (`/src/app/api/estimate/lead/route.ts`)
- **Method**: POST
- **Purpose**: Saves lead information after estimate is shown
- **Input**: `{ estimation_id, name, email, company?, phone? }`
- **Process**:
  1. Validates lead data
  2. Updates Supabase record with lead info
  3. Changes status to 'lead_captured'
- **Output**: `{ success, message }`

## Wizard Steps

### Step 1: Project Type
Select from 6 project categories:
- Web Application
- Mobile App (iOS/Android)
- AI/ML Solution
- API & Backend
- UI/UX Design Only
- Full-Stack Platform

### Step 2: Industry
Choose from 10 industries including FinTech, InsurTech, PropTech, HealthTech, etc.

### Step 3: Features
Multi-select from 5 feature groups:
- **Auth & Users**: Authentication, RBAC, Social Login, 2FA
- **Core**: Dashboard, File Upload, Real-time Updates, Search, Notifications
- **Payments**: Payment Integration, Subscriptions, Multi-currency
- **AI**: ML Features, Chatbot, OCR, Fraud Detection
- **Infrastructure**: Admin Panel, REST/GraphQL API, Integrations

### Step 4: Design Status
- Start from Scratch
- Have Wireframes
- Have Figma Designs
- Clone a Reference Site

### Step 5: Timeline
- ASAP (< 2 months)
- 3-4 Months
- 5-6 Months
- Flexible (6+ months)

### Step 6: Budget
- Under $15K
- $15K – $30K
- $30K – $60K
- $60K – $100K
- $100K+

### Step 7: Project Description
- Required: Minimum 20 characters
- Optional: Reference URL

## Results Screen (8 Sections)

### 1. Hero Bar
- Cost range in large gradient text
- Timeline in weeks
- Project summary

### 2. Tech Stack
- 5 categories with colored tags
- Frontend, Backend, Database, Cloud, Other

### 3. Features Table
- Feature name
- Complexity badge (low/medium/high)
- Estimated hours

### 4. Team Composition
- Role cards with avatar initials
- Role name, level, and count
- Visual team representation

### 5. Timeline Phases
- 5 project phases with colored bars
- Duration ranges for each phase
- Animated progress bars

### 6. Cost Breakdown
- 4 categories: Design, Development, QA, PM
- Low-high ranges for each
- Visual bar representation

### 7. Similar Project Card
- Shows if AI finds a reference project
- Links to live demo if available

### 8. Lead Capture Form
- Name, Email (required)
- Company, Phone (optional)
- "Get This Estimate as PDF" CTA
- Success state with next actions

## Database Schema

### Table: `estimations`

```sql
CREATE TABLE estimations (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE,

  -- Project Details
  project_type TEXT NOT NULL,
  industry TEXT NOT NULL,
  features TEXT[] NOT NULL,
  design_status TEXT NOT NULL,
  timeline_preference TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  project_description TEXT NOT NULL,
  reference_url TEXT,

  -- AI Result
  ai_result JSONB,

  -- Lead Info
  name TEXT,
  email TEXT,
  company TEXT,
  phone TEXT,

  -- Status
  status TEXT DEFAULT 'pending',
  pdf_sent BOOLEAN DEFAULT false
);
```

## Environment Variables

Required in `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Setup Instructions

### 1. Database Setup
```bash
# Run the schema in Supabase SQL Editor
cat supabase/estimations-schema.sql
```

### 2. Environment Variables
Get your API keys:
- **Groq API**: https://console.groq.com/keys
- **Supabase**: Your project settings > API section

### 3. Test the Estimator
```bash
# Development server
npm run dev

# Navigate to: http://localhost:3000/tools/project-estimator
```

## AI Prompt Engineering

The system uses a carefully crafted prompt (`ESTIMATOR_SYSTEM_PROMPT`) that includes:
- NimbleSL rate card ($12-60/hr based on role)
- 10 reference projects with real cost/timeline data
- Strict formatting rules for JSON output
- 15% buffer for scope creep
- Domain-specific recommendations

## Type Definitions

All types are defined in `/src/lib/types/estimator.ts`:

### IEstimatorInput
```typescript
{
  projectType: string;
  industry: string;
  features: string[];
  designStatus: string;
  timeline: string;
  budget: string;
  description: string;
  referenceUrl?: string;
}
```

### IEstimatorResult
```typescript
{
  summary: string;
  scope: string;
  tech_stack: { frontend, backend, database, cloud, other };
  features: Array<{ name, complexity, estimated_hours }>;
  team: Array<{ role, level, count }>;
  timeline: { total_weeks_low, total_weeks_high, phases };
  cost: { low, high, currency, breakdown };
  similar_project: string | null;
  similar_project_demo: string | null;
  risks: string[];
  recommendation: string;
}
```

## Styling

Uses NimbleSL design system:
- **Colors**: Electric blue (#3B82F6), cyan (#06B6D4), emerald (#10B981)
- **Background**: Dark navy (#0A0E1A)
- **Effects**: Glassmorphism cards, gradient text, smooth animations
- **Fonts**: Plus Jakarta Sans (display), DM Sans (body), JetBrains Mono (mono)

## Loading Animation

Terminal-style loading with 9 animated lines:
```
$ nimble-estimator --analyze
> Parsing project requirements...
> Analyzing 10 reference projects...
> Running cost model v2.4...
> Calculating team composition...
> Estimating delivery timeline...
> Applying 15% scope buffer...
> Generating detailed breakdown...
> ✓ Estimation complete
```

Each line appears with 400ms delay, creating a realistic terminal effect.

## Error Handling

- Input validation on all steps
- API error handling with retry option
- Groq API failure recovery
- Supabase connection error handling
- Email validation for lead capture

## Future Enhancements

1. **PDF Generation**: Implement PDF export via email
2. **CRM Integration**: Sync leads to HubSpot/Pipedrive
3. **Email Notifications**: Send estimate to client email
4. **Admin Dashboard**: View and manage all estimations
5. **Analytics**: Track conversion rates, popular features
6. **A/B Testing**: Optimize wizard flow and messaging
7. **Multi-language**: Support for multiple languages
8. **Calendar Integration**: Direct booking from results screen

## Performance Metrics

- **Load Time**: < 2s for initial page
- **API Response**: 3-5s for Groq estimation
- **Animation Duration**: 3.6s for terminal loading (9 lines × 400ms)
- **Step Transitions**: 300ms smooth animations

## Conversion Funnel

1. **Start**: User lands on estimator
2. **Engagement**: Completes 7-step wizard
3. **Value**: Views detailed AI estimate
4. **Lead**: Submits contact information
5. **Conversion**: Books consultation call

## SEO & Metadata

- **Title**: "AI Project Estimator | Get Your Free Software Quote — NimbleSL"
- **Description**: "Get an instant AI-powered project estimate in 2 minutes. Real costs, real timelines, no sales fluff."
- **URL**: `/tools/project-estimator`

## Support

For questions or issues:
- **Technical**: Check `/docs/` directory
- **API Issues**: Verify Groq API key and rate limits
- **Database**: Check Supabase logs and RLS policies
- **Email**: info@nimblesl.com
