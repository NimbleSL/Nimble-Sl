#!/bin/bash

echo "🔍 Verifying AI Project Estimator Installation..."
echo ""

# Check files exist
echo "📁 Checking files..."
files=(
  "src/app/api/estimate/route.ts"
  "src/app/api/estimate/lead/route.ts"
  "src/app/tools/project-estimator/page.tsx"
  "src/app/tools/project-estimator/layout.tsx"
  "src/lib/types/estimator.ts"
  "src/lib/groq/estimatorPrompt.ts"
  "src/lib/groq/client.ts"
  "supabase/estimations-schema.sql"
  "docs/AI_PROJECT_ESTIMATOR.md"
)

missing=0
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file (MISSING)"
    missing=$((missing + 1))
  fi
done

echo ""

# Check environment variables
echo "🔑 Checking environment variables..."
if [ -f ".env.local" ]; then
  echo "✅ .env.local exists"

  if grep -q "GROQ_API_KEY=" .env.local; then
    echo "✅ GROQ_API_KEY configured"
  else
    echo "❌ GROQ_API_KEY not found in .env.local"
    missing=$((missing + 1))
  fi

  if grep -q "NEXT_PUBLIC_SUPABASE_URL=" .env.local; then
    echo "✅ NEXT_PUBLIC_SUPABASE_URL configured"
  else
    echo "❌ NEXT_PUBLIC_SUPABASE_URL not found in .env.local"
    missing=$((missing + 1))
  fi

  if grep -q "NEXT_PUBLIC_SUPABASE_ANON_KEY=" .env.local; then
    echo "✅ NEXT_PUBLIC_SUPABASE_ANON_KEY configured"
  else
    echo "❌ NEXT_PUBLIC_SUPABASE_ANON_KEY not found in .env.local"
    missing=$((missing + 1))
  fi
else
  echo "❌ .env.local not found"
  missing=$((missing + 1))
fi

echo ""

# Check dependencies
echo "📦 Checking dependencies..."
if grep -q "groq-sdk" package.json; then
  echo "✅ groq-sdk installed"
else
  echo "❌ groq-sdk not found in package.json"
  missing=$((missing + 1))
fi

if grep -q "framer-motion" package.json; then
  echo "✅ framer-motion installed"
else
  echo "❌ framer-motion not found in package.json"
  missing=$((missing + 1))
fi

if grep -q "@supabase/supabase-js" package.json; then
  echo "✅ @supabase/supabase-js installed"
else
  echo "❌ @supabase/supabase-js not found in package.json"
  missing=$((missing + 1))
fi

if grep -q "lucide-react" package.json; then
  echo "✅ lucide-react installed"
else
  echo "❌ lucide-react not found in package.json"
  missing=$((missing + 1))
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $missing -eq 0 ]; then
  echo "✨ All checks passed! AI Project Estimator is ready."
  echo ""
  echo "Next steps:"
  echo "1. Run: npm run dev"
  echo "2. Visit: http://localhost:3000/tools/project-estimator"
  echo "3. Setup Supabase: Run supabase/estimations-schema.sql"
  echo ""
  echo "📖 Read the full guide: docs/AI_PROJECT_ESTIMATOR.md"
  exit 0
else
  echo "⚠️  $missing issue(s) found. Please fix the missing items above."
  exit 1
fi
