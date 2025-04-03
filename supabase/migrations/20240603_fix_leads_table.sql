-- Add missing columns to leads table if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'address') THEN
    ALTER TABLE leads ADD COLUMN address TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'current_provider') THEN
    ALTER TABLE leads ADD COLUMN current_provider TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'business_type') THEN
    ALTER TABLE leads ADD COLUMN business_type TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'epos_provider') THEN
    ALTER TABLE leads ADD COLUMN epos_provider TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'uses_epos_integration') THEN
    ALTER TABLE leads ADD COLUMN uses_epos_integration BOOLEAN DEFAULT FALSE;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'uses_booking_app') THEN
    ALTER TABLE leads ADD COLUMN uses_booking_app BOOLEAN DEFAULT FALSE;
  END IF;
END $$;