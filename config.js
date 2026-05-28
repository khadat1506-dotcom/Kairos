// Supabase realtime sync for the Kairos dashboard.
// Fill both values to sync your dashboard across every device in realtime.
// Leave either blank to run localStorage-only (single browser, no sync).
//
// Where to find these (https://app.supabase.com -> your project):
//   URL  -> Project Settings > Data API > Project URL
//   KEY  -> Project Settings > API Keys > anon / public (publishable) key
//
// The anon key is safe to expose in client code (that is how Supabase works);
// access is governed by the table's Row Level Security policies.
window.KAIROS_SUPABASE_URL = "https://hiibsfrhmjfcrgacuxyw.supabase.co";
window.KAIROS_SUPABASE_KEY = "sb_publishable_hpxsYLryiF81xyB0fbG6Ew_knBGsWhu";
