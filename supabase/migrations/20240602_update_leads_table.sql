-- Add new columns to the leads table
ALTER TABLE leads
ADD COLUMN IF NOT EXISTS address TEXT,
ADD COLUMN IF NOT EXISTS current_provider TEXT,
ADD COLUMN IF NOT EXISTS business_type TEXT,
ADD COLUMN IF NOT EXISTS epos_provider TEXT,
ADD COLUMN IF NOT EXISTS uses_epos_integration BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS uses_booking_app BOOLEAN DEFAULT FALSE;

-- Enable realtime for the leads table
ALTER PUBLICATION supabase_realtime ADD TABLE leads;