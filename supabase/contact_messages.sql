-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New query)

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Optional: index for admin sorting by date
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Row Level Security: allow anonymous inserts only (contact form)
alter table public.contact_messages enable row level security;

create policy "Allow anonymous insert"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Do NOT expose reads to anon unless you want a public inbox
-- For admin reads, use the service role key server-side or authenticated policies
