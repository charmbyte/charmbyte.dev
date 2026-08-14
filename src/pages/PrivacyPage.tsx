export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: August 14, 2026</p>
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          CharmByte, LLC (“CharmByte,” “we,” “us,” or “our”) operates the website
          at www.charmbyte.dev (the “Site”).
        </p>
        <p>
          We use Google Analytics to understand how visitors use the Site (for
          example, which pages are viewed and general device or browser
          information). Google may set cookies or similar technologies for this
          purpose. You can learn more in{' '}
          <a
            href="https://policies.google.com/privacy"
            className="font-semibold text-cyan transition-colors hover:text-accent"
            target="_blank"
            rel="noreferrer"
          >
            Google’s Privacy Policy
          </a>
          .
        </p>
        <p>
          We do not sell personal data, and this Site has no account systems,
          contact forms, newsletters, or advertising pixels.
        </p>
        <p>
          If you choose to email us (for example at me@charmbyte.dev), the
          information you include in that message is under your control and is
          handled only as needed to respond to your inquiry. We do not add email
          addresses to marketing lists.
        </p>
        <p>
          This Site may link to third-party websites, including game sites such
          as www.pwtycoon.com. Those sites are not operated by us for purposes of
          this policy’s data practices statement about the CharmByte Site, and
          their own privacy practices may differ. We encourage you to review the
          privacy policies of any third-party sites you visit.
        </p>
        <p>
          If this policy changes, we will update this page with a new “Last
          updated” date. Questions about privacy may be sent to{' '}
          <a
            href="mailto:me@charmbyte.dev"
            className="font-semibold text-cyan transition-colors hover:text-accent"
          >
            me@charmbyte.dev
          </a>
          .
        </p>
      </div>
    </div>
  )
}
