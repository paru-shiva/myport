# M. Shivakumar — Portfolio

Premium personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Supabase** (contact form).

## Quick Start

```bash
npm install
cp .env.example .env
# Add your Supabase URL and anon key to .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Assets

Add your files to `public/assets/`:

- `profile.jpg` — professional headshot
- `resume.pdf` — downloadable resume

## Supabase Setup (Contact Form)

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run `supabase/contact_messages.sql`.
3. Copy **Project URL** and **anon public key** from **Settings → API**.
4. Create `.env` from `.env.example`:

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
```

5. Restart the dev server after changing `.env`.

Submissions are stored in the `contact_messages` table (`name`, `email`, `message`, `created_at`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Deployment

### Vercel / Netlify

1. Push the repo to GitHub.
2. Import the project; set build command: `npm run build`, output: `dist`.
3. Add environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
4. Deploy.

### Manual

```bash
npm run build
```

Upload the `dist/` folder to any static host (Nginx, Cloudflare Pages, etc.).

## Project Structure

```
src/
├── api/           # Supabase contact API
├── components/
│   ├── layout/    # Navbar, Footer, scroll UI
│   ├── sections/  # Page sections
│   └── ui/        # Reusable UI primitives
├── data/          # Content (skills, projects, etc.)
├── hooks/
├── lib/           # Supabase client
├── pages/
└── utils/
public/assets/     # Profile image, resume, project images
```

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Lucide React
- Supabase JS

## License

Private portfolio — © M. Shivakumar.
