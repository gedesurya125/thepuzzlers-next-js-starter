export const getBaseUrl = () =>
  process?.env?.NEXT_PUBLIC_HOST_URL
    ? process.env.NEXT_PUBLIC_HOST_URL
    : process?.env?.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000';
