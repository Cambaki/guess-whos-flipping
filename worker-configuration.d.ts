// Cloudflare Worker Configuration Types
declare module "__STATIC_CONTENT_MANIFEST" {
  const manifest: string;
  export default manifest;
}

interface Env {
  // Resend API key for sending emails
  RESEND_API_KEY: string;
  // Add other environment variables here
}
