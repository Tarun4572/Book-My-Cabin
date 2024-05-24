import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nvtxlhxlxqmrahvlazgs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dHhsaHhseHFtcmFodmxhemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMDA0MDksImV4cCI6MjAzMTY3NjQwOX0.m3GmVl1ryGGc6KazIuFdBQYwLcbmiHP_iJ821YBdufY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
