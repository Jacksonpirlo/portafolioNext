

# Next.js Portfolio

Personal portfolio built with Next.js 15, TypeScript, and MongoDB. Includes sections for contact, projects, skills, and languages, with an admin panel and REST API for contact messages.

## Technologies

- Next.js 15 (App Router)
- TypeScript
- MongoDB (Mongoose)
- React Toastify
- CSS Modules
- Tailwind

## Features

- Projects view with dynamic routes and individual detail
- Contact form with API submission and notifications
- Admin panel to manage content
- SPA navigation with `next/navigation`

## Usage

1. Install dependencies:
	 ```bash
	 npm install
	 ```
2. Configure your database in `.env`:
	 ```env
	 MONGO_URI=your_mongodb_uri
	 ```
3. Start the development server:
	 ```bash
	 npm run dev
	 ```
4. Go to [http://localhost:3000](http://localhost:3000)

## Customization

- Add your projects in `src/helpers/utils.ts`.
- Modify styles in CSS Modules files.
- Edit components in `src/components/` to change the UI.

## Author

Jackson Florez
GitHub: [Jacksonpirlo](https://github.com/Jacksonpirlo)
