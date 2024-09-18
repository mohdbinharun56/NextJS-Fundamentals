This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Next Fundamentals
A basic landing page design and routing the diferent page are rendered. Also implementing the validation using the react hook library for Register Form and vanila JavaScript for validate Signin Form and implment the client side rendering (CSR).
# Design pattern
- Logo
- Navigation
- Banner
- Footer
# Create components
```bash
1. titlebar.tsx
2. header.tsx
3. logo.tsx
4. navigation.tsx 
5. footer.tsx 
```
# Folder based Route
1. about
```bash
http://localhost:7000/about
```
2. contact
```bash
http://localhost:7000/contact
```
3. rendering
```bash
**Client-Side-Rendering**
http://localhost:3000/rendering/User-CSR
```
4. validation
  - JavaScriptsFormValidation (use normal JS and react to validate Signin Form)
  - ReactHookFormValidation (useForm used from react hook library for Form validation using for validate Register/Sign out)
```bash
**Signin**
http://localhost:7000/validation/JavaScriptsFormValidation

**Signout**
http://localhost:7000/validation/ReactHookFormValidation
```
## Rendering
# Client Side Resndering 
Client Side Rendering is when a web application rendered entire browser using JavaScript. There are some key points in CSR:
  - First, Server send an empty HTML file to the client (browser)
  - Sencod, JavaScript Load the browser
  - Third, Rect components takes over the content to load
  - Final, Data is fetched if it's done the loading.
**Note** Browser can take min second to fetch the data. So, user can see loading while browser are loaded to take the fetch data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
