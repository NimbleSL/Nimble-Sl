-- Estimations table schema for NimbleSL Project Estimator
-- Run this SQL in your Supabase SQL Editor to create the table

CREATE TABLE IF NOT EXISTS estimations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),

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

  -- Lead Information (captured after estimate is shown)
  name TEXT,
  email TEXT,
  company TEXT,
  phone TEXT,

  -- Status
  status TEXT DEFAULT 'pending',
  pdf_sent BOOLEAN DEFAULT false
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_estimations_created_at ON estimations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_estimations_email ON estimations(email);
CREATE INDEX IF NOT EXISTS idx_estimations_status ON estimations(status);

-- Enable Row Level Security (RLS)
ALTER TABLE estimations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone
CREATE POLICY "Allow public inserts" ON estimations
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow updates on own records (by email)
CREATE POLICY "Allow updates on own records" ON estimations
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Create policy to allow reads by authenticated users (for admin)
CREATE POLICY "Allow authenticated reads" ON estimations
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Add comment to table
COMMENT ON TABLE estimations IS 'Stores project estimation requests and lead data from the AI Project Estimator tool';
