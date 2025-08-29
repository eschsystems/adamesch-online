import { redirect } from 'next/navigation';
import { getLinkByRedirectPath } from '@/data/socialLinks';

interface PlatformPageProps {
  params: {
    platform: string;
  };
}

export default function PlatformPage({ params }: PlatformPageProps) {
  const { platform } = params;
  
  // Look up the social link by redirect path
  const socialLink = getLinkByRedirectPath(platform);
  
  if (socialLink) {
    // Redirect to the external URL
    redirect(socialLink.url);
  }
  
  // If no matching platform found, redirect to home page
  redirect('/');
}

// Optional: Generate static params for known platforms (improves performance)
export async function generateStaticParams() {
  const { socialLinks } = await import('@/data/socialLinks');
  
  return socialLinks.map((link) => ({
    platform: link.redirectPath,
  }));
}