-- Add monthly_turnover column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'monthly_turnover') THEN
    ALTER TABLE leads ADD COLUMN monthly_turnover TEXT;
  END IF;
END $$;

-- Enable realtime for leads table
alter publication supabase_realtime add table leads;