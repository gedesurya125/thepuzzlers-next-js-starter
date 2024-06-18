export const getPublishedBaseUrl = () =>
  process.env.VERCEL_ENV === 'production'
    ? getPublishedBaseUrlOnProductionVercel()
    : getPreviewBaseUrl();

const getPublishedBaseUrlOnProductionVercel = () =>
  process.env.NEXT_PUBLIC_HOST_URL
    ? process.env.NEXT_PUBLIC_HOST_URL
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.URL;

export const getPreviewBaseUrl = () =>
  process.env.NEXT_PUBLIC_PREVIEW_HOST_URL
    ? process.env.NEXT_PUBLIC_PREVIEW_HOST_URL
    : process.env.VERCEL_BRANCH_URL
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.URL;
