import { redirect } from 'next/navigation'
import { SOCIAL_LINKS } from '@/lib/data/social-links'

const REDIRECT_MAP: Record<string, string> = {
  'ig': SOCIAL_LINKS.instagram.href,
  'instagram': SOCIAL_LINKS.instagram.href,
  'tt': SOCIAL_LINKS.tiktok.href,
  'tiktok': SOCIAL_LINKS.tiktok.href,
  'linkedin': SOCIAL_LINKS.linkedin.href,
  'li': SOCIAL_LINKS.linkedin.href,
  'github': SOCIAL_LINKS.github.href,
  'gh': SOCIAL_LINKS.github.href,
  'twitter': SOCIAL_LINKS.twitter.href,
  'x': SOCIAL_LINKS.twitter.href,
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CatchAllRedirect({ params }: PageProps) {
  const url = REDIRECT_MAP[params.slug.toLowerCase()]

  if (url) {
    redirect(url)
  }

  redirect('/')
}
