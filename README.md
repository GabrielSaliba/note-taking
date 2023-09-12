# Note Taking App

### Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

---

## Guide to Database setup using Supabase

### Step 1: Sign Up/Login to Supabase

1. Go to the [Supabase website](https://supabase.io/).
2. Click on "Start your project" or "Login" if you already have an account.

### Step 2: Create a New Project

1. Once logged in, you'll be in the Supabase dashboard.
2. Click on the "New project" button.
3. Fill in the required fields:
   - **Project name:** Give your project a unique name.
   - **Password:** Set a strong password for the database.
   - **Region:** Choose the server region closest to your target audience for optimal performance.

### Step 3: Access Your Database

1. After creating your project, click on it from the dashboard.
2. In the left sidebar, click on "Database" to view, modify, or query your new database.

### Step 4: Get the Database URI

1. In your project dashboard, navigate to the "Settings" section.
2. Under the "API" tab, you'll find the Database URL. This is the URI you'll need.

### Step 5: Add URI to `.env` File

In your project's root directory, open or create a `.env` file and add the following line:

\`\`\`
DATABASE_URL="your_supabase_database_uri"
\`\`\`

Replace `your_supabase_database_uri` with the URI you copied in the previous step.


--- 

## GitHub OAuth App Guide

If you want to view the complete GitHub OAuth flow setup, [click here to access the guide directly](https://scribehow.com/embed/Create_a_GitHub_OAuth_App_for_a_Note-taking_Application__edPkl6pmQz6sCwydJKDpYQ).

#### Step 1: Register Your App with GitHub

1. Log in to [GitHub](https://github.com/).
2. Navigate to "Settings" > "Developer settings".
3. Click on "OAuth Apps" > "New OAuth App".
4. Fill out the required fields:
   - **Application name:** The name of your app.
   - **Homepage URL:** The main URL where your application is hosted.
   - **Authorization callback URL:** The URL where GitHub will redirect users after authorization (typically `https://your-domain.com/api/auth/callback/github` for NextAuth.js setups).
5. After registration, you'll receive a **Client ID** and **Client Secret**.

#### Step 2: Store the Credentials in Your Project

Add the GitHub **Client ID** and **Client Secret** to your project's `.env` file:

```
# Next Auth Github Provider
GITHUB_CLIENT_ID="your_client_id"
GITHUB_CLIENT_SECRET="your_client_secret"
```

---
