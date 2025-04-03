-- Disable Row Level Security for leads table to allow all operations
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- This will allow all operations without any policy restrictions