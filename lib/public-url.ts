/**
 * Caminhos em `public/` precisam do mesmo prefixo que `basePath` no GitHub Pages
 * (ex.: /nome-do-repo). URLs absolutas começando com "/" não são prefixadas pelo Next.
 */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
