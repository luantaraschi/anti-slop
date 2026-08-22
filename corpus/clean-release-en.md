# Tideline 2.3

Released 14 March 2026.

## Offline charts

Charts for 40 harbours now download to the device. They stay current for 90
days, after which the app asks for a connection before it will refresh them. The
list is in Settings, under Charts.

Downloads over a metered connection do not warn you first. If you are on a data
plan, download over wifi until the next release.

## Slack water on spring tides

On spring tides, Tideline was reporting **slack water**, the pause between the
flood and the ebb, up to 12 minutes early. The error came from the harmonic
model rounding the M2 constituent before combining it with S2, so it grew with
tidal range and was worst at the equinoxes. It is fixed. Neap tide predictions
were never affected and have not changed.

If you planned a trip from a printed Tideline table dated before today — and a
lot of guides still work from print — check the slack water times again.

## iOS 15

Tideline no longer runs on iOS 15. Apple stopped issuing security updates for it
in September, and the offline chart store needs a filesystem API that shipped in
iOS 16. Devices already on iOS 15 keep the version they have and it goes on
working. It will not get further updates.

## Three things this release does not fix

The Bristol Channel harmonics are still drawn from the 2019 survey, so Avonmouth
and Portishead run about 4 minutes late. Wind setup is not modelled at all.
Chart downloads still fail silently on a captive portal wifi, which is most
marina wifi.

All three are in the tracker. The Bristol Channel one is next.
