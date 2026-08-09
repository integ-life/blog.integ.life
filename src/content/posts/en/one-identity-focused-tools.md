---
title: "One identity, many focused tools"
description: "Integ.Life now uses a central sign-in across its connected product family, while each product keeps a focused interface and an independent domain."
pubDate: "2026-08-18"
tags: ["identity", "product design", "workflow", "integ.life"]
heroImage: "/images/social/03-multidevice-offline.png"
heroAlt: "An explainer visual showing an Integ.Life workflow continuing across surfaces"
visualMode: "explainer"
translationKey: "one-identity-focused-tools"
draft: true
---

This is part three of a four-part update on the current Integ.Life workflow.

There are two common ways to grow a software product. One is to keep adding every capability to the same application until navigation becomes the product. The other is to create separate tools and make the user rebuild identity and context in each one.

Integ.Life is moving toward a third shape: one identity, many focused tools—connected where continuity helps, independent by default.

## A domain should explain the product family

The root `integ.life` domain is now the directory for the family. The personal operating system lives at `app.integ.life`. Other products keep their own clear destinations for language learning, structured debate, Chinese chess, games, and the blog.

This separation is useful because a focused activity deserves a focused interface. Reading in a second language should not feel like opening an accounting module. A chess study session should not inherit the navigation of a notes workspace.

## Sign in once, understand where you are

Separate interfaces should not require separate identity rituals. Current Integ.Life sign-in goes through the central authentication experience, and connected apps can reuse that identity.

The goal is not merely fewer password prompts. Shared identity provides continuity: the person entering the product family is the same person, even when the job changes.

At the same time, the address and interface make the current context explicit. `app.integ.life` is the personal system. `blog.integ.life` is public reading. Each surface can explain its own permissions and data boundaries instead of hiding them inside a giant settings screen.

## Connected does not mean merged

It is tempting to interpret a shared account as a reason to combine all data. That would undermine the value of focused products.

The better default is independence. A product should request only the access it needs. Shared identity answers who the user is; it does not automatically answer which records every product may read or change.

This boundary also keeps future integrations honest. If two tools exchange context, that relationship should be understandable and useful—not an accidental consequence of living in the same database.

## A family can stay legible as it grows

The design principle is simple: one domain family, one recognizable identity, several tools with clear purposes.

That creates a better growth path than an endlessly expanding sidebar. New products can be narrow enough to do one job well. Users can move between them without repeatedly creating accounts. The root directory can show how the pieces relate without pretending they are one interface.

The final article in this series will examine one concrete connection: the read-only ChatGPT Connector, which lets AI review authorized Integ.Life records without taking control of them.

