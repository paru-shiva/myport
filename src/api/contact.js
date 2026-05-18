import { isSupabaseConfigured, supabase } from "../lib/supabase";

export async function submitContactMessage({ name, email, message }) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(
      "Contact form is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.",
    );
  }

  const { data, error } = await supabase
    .from("contact_messages")
    .insert([
      { name: name.trim(), email: email.trim(), message: message.trim() },
    ])
    .single();

  if (error) {
    throw new Error(
      error.message || "Failed to send message. Please try again.",
    );
  }

  // resend email

  const resendemail = async () => {
    const { data, error } = await supabase.functions.invoke("resend-email", {
      body: {
        name,
        email,
        message,
      },
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  resendemail();

  return data;
}
