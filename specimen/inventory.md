# Inventory — Ledgerline

Root 1 for the page in this directory. Every line of copy on `index.html` draws
on this and on nothing else.

## What this specimen is, and what it is not

Ledgerline is not a real company. It is the product the calibration fixture
`fixtures/clean-landing` was written for, and this page is that same product
built again — same brief, same decided material, with someone also composing
the page.

That distinction is the whole point of the comparison this specimen appears in
on the presentation page. `anti-slop:build` derives the material an interface is
made of and records why each value is what it is. It says in its own text that
composition — the shape of the page, what sits where, what the reader meets
first — is not what it does. So a page built by it alone is decided and plain,
which is exactly what `fixtures/clean-landing` is, and exactly why that fixture
made a weak advertisement for anything.

**What this page demonstrates:** that a page where nothing is a default does not
have to be a page that avoided features. It runs a gradient, an elevated
surface, a display serif and a saturated accent — the same vocabulary the slop
specimen is accused over — and every one of them has a reason sitting beside it
in `style.css`.

**What it does not demonstrate:** that the plugin designs. It does not. The
composition here is a person's, and the catalog has no tell that would have
found it missing.

## The product

Invoice reconciliation for small accounting firms. It reads a bank feed each
morning, matches it against the invoices the firm sent, and flags the lines
neither side explains.

## What it does, concretely

| Source | What it does with it |
|---|---|
| Bank feed | Read-only, over the same open-banking connection an accountant already uses. Refreshed at 6am and again at noon. |
| Invoices | Imported from Moloni, InvoiceXpress, or a folder of PDFs. |
| Credit notes | Matched to the invoice they cancel, so a refund stops reading as a gap. |
| Bank charges | Recognised and set aside instead of counted as an unexplained line. |
| Your notes | Whatever was written against a line last month is still there this month. |

## The morning of Tuesday 6 August, at a two-partner firm

Four lines. Three matched themselves; the fourth is the one worth ten minutes.

| Line | Amount | What it resolved to |
|---|---|---|
| TRF BRAGA & FILHAS | 2,400.00 | Invoice 1041, paid in full |
| TRF OURIVESARIA LUME | 11,000.00 | Invoice 1039 is 12,190.00 — **1,190.00 short** |
| SEPA FEE | 3.40 | No invoice. Recurring since March |
| TRF CAIS EDITORA | 310.00 | Invoice 1038, paid nine days early |

## The limit, which the page states rather than buries

Two hundred invoices a month or fewer. Above that the reconciliation stops being
the hard part and the workflow does. It is said on the page rather than after
someone signs up.

## Who and where

Ledgerline, Rua do Almada 42, Porto. Registered in Portugal.
`hello@ledgerline.co`

## What has no source and therefore cannot appear on the page

No customer count, no logo wall, no testimonial, no time-saved figure, no
accuracy percentage, no funding announcement, no "trusted by". The four lines
above are the only figures the page is allowed to show, and they are the same
four the fixture carries.
