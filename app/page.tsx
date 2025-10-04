import { siteConfig } from "@/lib/config";
export default function Home() {
  return <main style={{padding:"4rem 0"}}>
    <div className="container">
      <h1 style={{color:"var(--accent)", fontWeight:900, fontSize:"2.5rem"}}>Websites that just work.</h1>
      <p>Tier: {siteConfig.tier} — Theme: {siteConfig.theme}</p>
    </div>
  </main>;
}
