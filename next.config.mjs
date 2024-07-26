/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      MAILJET_API_KEY: process.env.MAILJET_API_KEY,
      MAILJET_API_SECRET: process.env.MAILJET_API_SECRET,
      FROM_EMAIL: process.env.FROM_EMAIL,
    },
    // Add other Next.js config options here
  };
  
  export default nextConfig;