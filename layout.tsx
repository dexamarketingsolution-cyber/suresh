import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://suresh-k.vercel.app";

const title = "Suresh K | Senior Executive Administration";
const description =
  "Experienced Administration and Facilities Management Professional with 15+ years of experience in corporate administration, workplace operations, procurement, vendor management and statutory compliance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Suresh K Portfolio",
  authors: [{ name: "Suresh K", url: profile.linkedin }],
  creator: "Suresh K",
  keywords: [
    "Suresh K",
    "Senior Executive Administration",
    "Administration Manager Chennai",
    "Facilities Management",
    "Corporate Administration",
    "Vendor Management",
    "Procurement",
    "Corporate Travel Desk",
    "Travel Management",
    "Purchase-to-Pay",
    "Statutory Compliance",
    "Workplace Management",
    "Chennai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Suresh K",
    title,
    description,
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suresh K – Senior Executive Administration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#040817",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.designation,
  email: `mailto:${profile.email}`,
  telephone: "+91-9790972444",
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "ANI Technologies Pvt. Ltd. (OLA Group)" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Annamalai University" },
  sameAs: [profile.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
