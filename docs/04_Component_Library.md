# Component Library
Version 1.0

---

# Purpose

This document defines every reusable UI component used throughout the Maherison Daddy Portfolio.

The goal is consistency, maintainability and scalability.

Every component should solve one problem only.

Components must be reusable.

Avoid duplicated layouts.

---

# Folder Structure

src/

components/

ui/

layout/

sections/

portfolio/

viewer/

forms/

feedback/

navigation/

Each folder has a single responsibility.

---

# Naming Convention

PascalCase

Examples

Hero.tsx

ProjectCard.tsx

SectionTitle.tsx

CTASection.tsx

ServiceCard.tsx

ViewerToolbar.tsx

Never use generic names such as:

Card2

NewComponent

Test

Component

---

# General Rules

One component = one responsibility.

Reusable.

Responsive.

Typed.

Accessible.

Composable.

No duplicated logic.

No inline styles unless justified.

---

# Hero

Purpose

Create a strong first impression.

Contains

Headline

Subheadline

Primary CTA

Secondary CTA

Hero Render

Rules

Large spacing.

Large imagery.

Minimal text.

The render is always the visual focus.

---

# SectionTitle

Purpose

Standardize section headers.

Contains

Eyebrow

Title

Subtitle

Rules

Same spacing everywhere.

Consistent typography.

Never create custom section titles.

---

# Button

Variants

Primary

Secondary

Ghost

Props

variant

size

icon

loading

disabled

Rules

Never create custom buttons.

Always use Button component.

---

# ProjectCard

Purpose

Display portfolio projects.

Contains

Thumbnail

Title

Category

Short Description

Hover Effect

Props

Project

Rules

Image always dominates.

Minimal text.

Consistent hover animation.

---

# ProjectGallery

Purpose

Display project images.

Supports

Grid

Carousel

Fullscreen

Rules

Lazy loading.

Responsive.

High resolution.

---

# ProjectBreakdown

Purpose

Explain production workflow.

Sections

Challenge

References

Modeling

Materials

Lighting

Rendering

Post

Final

Rules

Every project follows the same structure.

---

# ServiceCard

Purpose

Explain services.

Contains

Icon

Title

Description

Benefits

CTA

Rules

Business-focused.

Avoid technical wording.

---

# ProcessTimeline

Purpose

Explain workflow.

Steps

Discovery

Planning

Modeling

Rendering

Revision

Delivery

Rules

Simple.

Linear.

Easy to understand.

---

# TestimonialCard

Purpose

Display client feedback.

Contains

Photo

Name

Role

Company

Review

Rules

Authentic.

Professional.

Never use fake testimonials.

---

# FAQItem

Purpose

Display common questions.

Behavior

Accordion

Accessible

Keyboard friendly

Only one expanded by default.

---

# ContactForm

Fields

Name

Email

Company

Project Type

Budget (optional)

Message

Rules

Minimal.

Fast.

Professional.

---

# Viewer

Purpose

Display interactive 3D models.

Supports

Orbit Controls

Fullscreen

Environment

Loading State

Future

Annotations

Exploded View

AR Support

---

# ViewerToolbar

Contains

Fullscreen

Reset Camera

Auto Rotate

Wireframe

Environment

Screenshot (future)

Rules

Compact.

Minimal.

Secondary to the viewer.

---

# Navigation

Desktop

Horizontal

Sticky

Transparent

Blur on scroll

Mobile

Slide-out menu

Simple animation

---

# Footer

Contains

Brand

Quick Links

Social Links

Contact

Copyright

Rules

Minimal.

No clutter.

---

# EmptyState

Purpose

Display when no data exists.

Examples

No Projects

No Search Results

Coming Soon

Rules

Positive.

Helpful.

---

# LoadingState

Purpose

Display while content loads.

Use

Skeleton loaders

Avoid spinners whenever possible.

---

# ErrorState

Purpose

Gracefully handle failures.

Rules

Clear explanation.

Retry button.

Friendly language.

---

# Responsive Strategy

Desktop

Feature complete.

Tablet

Reflow.

Mobile

Stack vertically.

Touch optimized.

---

# Accessibility

Keyboard navigation.

ARIA labels.

Semantic HTML.

Visible focus.

Screen reader friendly.

---

# Performance

Memoize when useful.

Lazy load heavy sections.

Avoid unnecessary re-renders.

Optimize images.

---

# Code Quality

Strict TypeScript.

Small components.

Readable props.

Reusable hooks.

Avoid duplicated code.

---

# Component Checklist

Before creating a component ask:

Is there already a similar component?

Can it be reused?

Is it responsive?

Is it accessible?

Does it follow the Design System?

If any answer is "No",

revise before implementation.