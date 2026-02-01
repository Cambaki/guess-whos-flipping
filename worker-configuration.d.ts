// Cloudflare Worker Configuration Types
declare module "__STATIC_CONTENT_MANIFEST" {
  const manifest: string;
  export default manifest;
}

interface Env {
  // Add your environment variables here
  // Example: API_KEY: string;
}
