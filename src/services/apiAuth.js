import supabase from "./supabase";
export async function login({ email, password }) {
  // supabase stores logged in data in localstorage
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}
