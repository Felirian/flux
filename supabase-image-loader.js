export default function supabaseLoader({ src, width, quality }) {
  return `${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/render/image/public/${src}?width=${width}&quality=${
    quality || 75
  }`
}