We have a shared basic and functional prototype. The prototype is just a simple HTML page. 
What I already have is a Git repository (both locally and on GitHub), connection and publication of the page via Netlify, and the overall plan.
I want to expand the prototype into an application that will emulate a small client zone. I want the application to be written in JavaScript, use my existing infrastructure with Netlify, and have the following parameters.

**Prototype scope:** Simple working app only — no data storage, no backend persistence, no real submission. Just UI and flow (login, multi-step form, camera demo, contract view) so the experience can be tried and demoed. Compliance (GDPR, IPID, withdrawal, etc.) is for a later production version.

The URL of the prototype is: https://lnd-proto-training.netlify.app/

Target / inspiration (styling, structure): https://lnd-poj.netlify.app/ (JerryPoj by Lundegaard)

Household insurance flow inspiration: https://sjednat.generaliceska.cz/pojisteni-majetku/uvod/ (Generali – pojištění majetku a domácnosti)

My feature requirements are:

- Basic login and hiding from the public
- Multi-step form with basic validations
- Use of camera for file upload
- Option to view contract in lightweight client zone (KZ)
- Styling and colors of the inspiration (lnd-poj / JerryPoj)
- Household insurance form (pojištění majetku/domácnosti, B2C)

**Relevant for this prototype (simple, no storage):**

- **Language:** Czech for the form and client zone (matches target B2C market and inspiration).
- **Contract view:** A “view contract” step/screen is part of the flow; content can be placeholder (no real IPID/terms needed for prototype).
- **Accessibility (lightweight):** Sensible labels, focus order, and error messages so the form is usable — no full WCAG audit needed for a prototype.

**For production only (not for this prototype):** Czech regulation (ČNB, Act 170/2018, IDD), REGIS, GDPR/privacy notice, real IPID, withdrawal rights, e-signature handling. Keep the notes below for when you move beyond the prototype.

**Reference — Czech regulation (context):** Main supervisor is ČNB; distribution is Act No. 170/2018 Coll. and EU IDD. ČKP = motor liability; ČAP = industry association (standards, calculators). For production: REGIS, IPID, privacy notice, withdrawal info.

**Reference — Other (production):** GDPR (privacy notice, data subject rights); IDD pre-contract info and IPID; consumer withdrawal (Civil Code § 1841–1851); contract conclusion via simple e-signature (click/typed name) is valid in CZ.