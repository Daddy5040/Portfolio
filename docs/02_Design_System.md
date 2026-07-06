# Design System
Version 1.0

---

# Purpose

This document defines every visual and interaction rule used across the Maherison Daddy Portfolio.

It serves as the single source of truth for all future UI decisions.

Every component, page and animation must follow this document.

If a new feature does not comply with these rules, it should be redesigned before implementation.

---

# Design Philosophy

The website is a premium commercial experience.

It is not an artistic playground.

The interface exists to showcase products.

The interface must never compete with the renders.

Every design decision must increase:

• Trust

• Professionalism

• Clarity

• Premium perception

---

# Core Principle

"The interface disappears behind the artwork."

The visitor should remember the products, not the interface.

---

# Layout

Maximum Content Width

1440px

Page Padding

Desktop

80px

Tablet

48px

Mobile

24px

Sections

Large vertical spacing.

Every section should breathe.

Avoid compressed layouts.

---

# Grid System

12-column responsive grid.

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

Maintain generous whitespace.

---

# Border Radius

Default Radius

12px

Images

12px

Cards

12px

Buttons

12px

Forms

12px

Avoid excessive rounded corners.

---

# Shadows

Style

Apple-inspired

Very subtle.

Low opacity.

Used only to create depth.

Never create dramatic floating elements.

---

# Colors

Primary Background

#090909

Secondary Background

#141414

Surface

#1A1A1A

Primary Text

#F4F4F4

Secondary Text

#A7A7A7

Accent Gold

#F5B335

Success

#3DDC97

Error

#EF4444

Rule

Accent color must be used sparingly.

Gold should indicate value or interaction.

---

# Typography

Heading

Font

Sora

Weight

700–800

Body

Inter

Weight

400–500

Rules

Large headings.

Short paragraphs.

Comfortable reading.

Maximum readability.

---

# Buttons

Primary

Gold background

Dark text

Subtle shadow

12px radius

Secondary

Transparent

Gold border

Gold text

Hover

Soft elevation

Very subtle glow

Animation

200ms

Never use oversized buttons.

---

# Cards

Dark surface

Thin border

Minimal shadow

12px radius

Large image

Minimal copy

Cards must prioritize visuals.

---

# Navigation

Sticky

Transparent on top

Blur on scroll

Minimal

Simple

Business-oriented

Links

Home

Work

Services

Process

About

Contact

Avoid unnecessary navigation items.

---

# Footer

Simple

Professional

Large spacing

Business information

Social links

Back-to-top button

Never overload the footer.

---

# Icons

Interface

Lucide React

Social

React Icons

Icons should remain secondary.

Avoid decorative icon usage.

---

# Images

Priority

Large visuals.

High resolution.

WebP format whenever possible.

Hero

1920 × 1080

Project Cover

1600 × 900

Thumbnail

600 × 400

All images

Lazy Loaded

Consistent color grading.

Consistent lighting.

---

# Motion

General Animation

200ms

Section Reveal

300ms

Hero Animation

500ms

Page Transition

250ms

Movement

Small vertical offset (8–12px)

Opacity fade

Avoid:

Large zooms

Rotations

Overly dramatic effects

Motion should feel premium.

---

# Hover Effects

Soft scale

Small shadow

Gold accent

Never exaggerated.

---

# Forms

Minimal

Large spacing

Readable labels

Strong focus state

Simple validation

No unnecessary decoration.

---

# Responsive Rules

Desktop First

Tablet optimized

Mobile optimized

Touch-friendly

Minimum tap target

44px

No horizontal scrolling.

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus states

Descriptive alt text

Sufficient color contrast

Proper heading hierarchy

Accessibility is mandatory.

---

# Code Standards

Reusable components first.

Avoid duplicated code.

Prefer composition over repetition.

One responsibility per component.

Strong TypeScript typing.

Readable naming.

No magic numbers.

No inline styles unless justified.

---

# Performance

Lazy load media.

Optimize images.

Split large components when appropriate.

Avoid unnecessary renders.

Maintain fast page loads.

---

# UX Principles

The visitor should understand within five seconds:

What you do.

Who you help.

Why they should trust you.

How to contact you.

Everything else is secondary.

---

# Design Validation Checklist

Before shipping any feature, verify:

✓ Follows the color palette.

✓ Uses approved typography.

✓ Respects spacing rules.

✓ Uses proper motion timing.

✓ Responsive.

✓ Accessible.

✓ Performance-conscious.

✓ Keeps the product as the visual focus.

If any answer is "No",

the feature must be revised.