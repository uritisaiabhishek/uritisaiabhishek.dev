import React from "react";
import PageTitle from "../components/PageTitle";

/**
 * WebInspectorPromo.jsx
 *
 * Usage:
 * <WebInspectorPromo chromeStoreUrl="https://chrome.google.com/..." />
 *
 * Note: if you use react-helmet or next/head, move the metaDescription/metaKeywords into the head.
 */

export default function WebInspectorPromo({ chromeStoreUrl = "#" }) {
  const metaDescription =
    "Web Page Inspector + SEO Audit — a Chrome extension that inspects headings, scripts, styles, images, performance and runs a complete technical SEO audit locally in your browser.";
  const metaKeywords =
    "web inspector, SEO audit, technical SEO, Core Web Vitals, performance, headings, link analyzer, chrome extension";

  return (
    <>
        <PageTitle title="SEO Audit Chrome extension" />
        <section className="section"><div className="container">
            <article className="web-inspector-promo" style={{ fontFamily: "Arial, sans-serif", maxWidth: 980 }}>
            {/* If you use a head manager, add metaDescription/metaKeywords there */}
            <header style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: 28, margin: "8px 0" }}>Web Page Inspector + SEO Audit</h1>
                <p style={{ margin: 0, color: "#555" }}>{metaDescription}</p>
            </header>

            <section style={{ display: "flex", gap: 20, marginTop: 18 }}>
                <div style={{ flex: 1, minWidth: 320 }}>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>One tool. Full technical insight.</h2>
                <p style={{ color: "#444", lineHeight: 1.5 }}>
                    Analyze any webpage instantly from your browser. The extension consolidates structural, technical,
                    and performance diagnostics into a single easy-to-read dashboard. No external services. All analysis runs
                    client-side for speed and privacy.
                </p>

                <div style={{ marginTop: 14 }}>
                    <a
                    href={chromeStoreUrl}
                    style={{
                        display: "inline-block",
                        background: "#007bff",
                        color: "#fff",
                        padding: "10px 14px",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontWeight: 600,
                    }}
                    >
                    Get it on Chrome Web Store
                    </a>
                </div>
                </div>

                <aside style={{ width: 320, background: "#f8f9fb", padding: 14, borderRadius: 6 }}>
                <h3 style={{ marginTop: 0 }}>Quick facts</h3>
                <ul style={{ paddingLeft: 18, color: "#333" }}>
                    <li>Client-side analysis — no data leaves your browser</li>
                    <li>Manifest V3, Chrome Scripting API</li>
                    <li>Pagination and resource details (status, transfer, load time)</li>
                    <li>SEO Health Score with actionable checks</li>
                </ul>
                </aside>
            </section>

            <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

            <section>
                <h2 style={{ fontSize: 18 }}>Key features</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginTop: 12 }}>
                <div style={{ padding: 12, border: "1px solid #e6e9ee", borderRadius: 6 }}>
                    <h3 style={{ margin: "0 0 8px 0" }}>Headings Overview</h3>
                    <p style={{ margin: 0, color: "#444" }}>
                    Displays up to 10 headings per page with pagination. Shows total headings and per-level counts. Click a
                    heading to scroll to it and highlight it in the page.
                    </p>
                </div>

                <div style={{ padding: 12, border: "1px solid #e6e9ee", borderRadius: 6 }}>
                    <h3 style={{ margin: "0 0 8px 0" }}>Script & Stylesheet Analysis</h3>
                    <p style={{ margin: 0, color: "#444" }}>
                    Analyzes all JavaScript and CSS resources loaded by the page and reports load time, transfer size,
                    HTTP status (when available), and source URL for rapid troubleshooting.
                    </p>
                </div>

                <div style={{ padding: 12, border: "1px solid #e6e9ee", borderRadius: 6 }}>
                    <h3 style={{ margin: "0 0 8px 0" }}>Image Inspection</h3>
                    <p style={{ margin: 0, color: "#444" }}>
                    Lists images with visibility, MIME/type, transfer bytes, load time and alt-text status. Flags missing
                    dimensions and lazy-loading adoption.
                    </p>
                </div>

                <div style={{ padding: 12, border: "1px solid #e6e9ee", borderRadius: 6 }}>
                    <h3 style={{ margin: "0 0 8px 0" }}>SEO Audit</h3>
                    <p style={{ margin: 0, color: "#444" }}>
                    Performs an on-page SEO audit: meta tags, canonical, hreflang, Open Graph/Twitter cards, structured data,
                    robots directives and mixed-content detection. Produces an SEO Health Score with prioritized recommendations.
                    </p>
                </div>
                </div>
            </section>

            <section style={{ marginTop: 18 }}>
                <h2 style={{ fontSize: 18 }}>Advanced checks</h2>
                <ul style={{ color: "#444" }}>
                <li>Core Web Vitals (LCP, CLS) via Performance API</li>
                <li>Compression and HTTP/2 or HTTP/3 adoption checks</li>
                <li>Heading hierarchy and content-to-HTML ratio</li>
                <li>Link analysis: internal vs external, anchor text quality, nofollow detection</li>
                <li>Accessibility basics: lang tag, alt-text presence, visible headings</li>
                </ul>
            </section>

            <section style={{ marginTop: 18 }}>
                <h2 style={{ fontSize: 18 }}>Who it’s for</h2>
                <p style={{ color: "#444" }}>
                Developers, SEO specialists, content strategists, and QA teams who need a fast technical snapshot of any page.
                Use it for pre-launch checks, client audits, or on-the-fly troubleshooting during development.
                </p>
            </section>

            <footer style={{ marginTop: 22, paddingTop: 16, borderTop: "1px solid #eee", color: "#666" }}>
                <p style={{ margin: 0 }}>
                    <strong>Privacy:</strong> All analysis runs locally in your browser. No page data is transmitted externally.
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                    <strong>Install:</strong>{" "}
                    <a href={chromeStoreUrl} style={{ color: "#007bff" }}>
                        Chrome Web Store
                    </a>
                </p>
            </footer>
            </article>
        </div></section>
    </>
  );
}
