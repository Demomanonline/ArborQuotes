-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  turnover TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read all leads
DROP POLICY IF EXISTS "Authenticated users can read leads" ON leads;
CREATE POLICY "Authenticated users can read leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for authenticated users to insert leads
DROP POLICY IF EXISTS "Authenticated users can insert leads" ON leads;
CREATE POLICY "Authenticated users can insert leads"
  ON leads FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy for authenticated users to update leads
DROP POLICY IF EXISTS "Authenticated users can update leads" ON leads;
CREATE POLICY "Authenticated users can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true);

-- Create policy for anonymous users to insert leads
DROP POLICY IF EXISTS "Anonymous users can insert leads" ON leads;
CREATE POLICY "Anonymous users can insert leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

-- Enable realtime for leads table
alter publication supabase_realtime add table leads;