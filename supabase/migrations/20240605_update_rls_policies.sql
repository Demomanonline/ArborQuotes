-- Enable Row Level Security on leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Public insert access" ON leads;
DROP POLICY IF EXISTS "Public read access" ON leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON leads;

-- Create policy for public access to insert leads
CREATE POLICY "Public insert access"
  ON leads FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for public access to read leads
CREATE POLICY "Public read access"
  ON leads FOR SELECT
  TO public
  USING (true);

-- Create policy for authenticated users to update leads
CREATE POLICY "Authenticated users can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true);

-- Enable realtime for leads table
alter publication supabase_realtime add table leads;