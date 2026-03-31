import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  global: {
    fetch: (url, options) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      return fetch(url, { ...options, signal: controller.signal })
        .catch(err => {
          if (err.name === 'AbortError') {
            throw new Error('Supabase request timed out');
          }
          throw err;
        })
        .finally(() => clearTimeout(timeoutId));
    }
  }
});
