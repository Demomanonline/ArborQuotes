-- Enable RLS on the leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow authenticated users to read leads" ON leads;
DROP POLICY IF EXISTS "Allow public to insert leads" ON leads;

-- Create policy to allow authenticated users to read leads
CREATE POLICY "Allow authenticated users to read leads"
ON leads
FOR SELECT
TO authenticated
USING (true);

-- Create policy to allow public to insert leads
CREATE POLICY "Allow public to insert leads"
ON leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Make sure the leads table is part of the realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE leads;