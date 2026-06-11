# Product Requirements Document (PRD)

# Wedding Invitation Template Hub

Version: 1.0
Author: Akbar Sinyo
Status: Draft

---

# 1. Overview

## Product Name

Wedding Template Hub

## Product Vision

Membangun platform katalog template undangan pernikahan modern yang menampilkan berbagai tema undangan dalam satu halaman utama (landing page), dimana setiap template memiliki repository GitHub dan deployment tersendiri.

Pengguna dapat melihat demo seluruh template, memilih template yang disukai, melakukan fork repository, mengubah konfigurasi pasangan melalui file JSON, lalu melakukan deploy otomatis menggunakan GitHub Actions ke GitHub Pages.

---

# 2. Goals

## Business Goals

* Menyediakan showcase seluruh template wedding invitation.
* Mempermudah distribusi template melalui GitHub.
* Menyediakan workflow deployment gratis menggunakan GitHub Pages.
* Memungkinkan monetisasi melalui template premium di masa depan.

## User Goals

* Melihat seluruh template dalam satu halaman.
* Melihat demo setiap template.
* Menggunakan template tanpa perlu coding kompleks.
* Mengubah data pasangan melalui file konfigurasi JSON.
* Deploy otomatis ke hosting GitHub Pages.

---

# 3. Product Architecture

## Root Repository

Repository utama berfungsi sebagai katalog template.

Repository:

invita-sin.github.io

Deployment:

https://invita-sin.github.io

Fungsi:

* Menampilkan seluruh template
* Preview template
* Link demo
* Link repository
* Dokumentasi penggunaan

---

## Template Repository

Setiap template memiliki repository terpisah.

Contoh:

template-elegant
template-minimalist
template-floral
template-luxury
template-modern

Deployment:

https://invita-sin.github.io/template-elegant
https://invita-sin.github.io/template-minimalist

Masing-masing template memiliki:

* Source code sendiri
* GitHub Actions sendiri
* Konfigurasi JSON sendiri

---

# 4. Technology Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS

## Configuration

* JSON

## Hosting

* GitHub Pages

## Source Control

* GitHub

## CI/CD

* GitHub Actions

## Package Manager

* npm atau pnpm

---

# 5. High Level Workflow

## Template Discovery

User membuka:

https://invita-sin.github.io

↓

Melihat daftar template

↓

Memilih template

↓

Membuka demo

↓

Fork repository

↓

Mengubah config.json

↓

Push ke GitHub

↓

GitHub Actions build

↓

Deploy ke GitHub Pages

↓

Undangan aktif

---

# 6. Root Website Features

## Homepage

Menampilkan:

* Hero Section
* Daftar Template
* Search Template
* Filter Kategori
* Footer

---

## Template Catalog

Menampilkan:

* Thumbnail
* Nama Template
* Deskripsi
* Demo Button
* GitHub Button

---

## Search

User dapat mencari:

* Elegant
* Floral
* Modern
* Luxury

---

## Category Filter

Kategori:

* Modern
* Minimalist
* Elegant
* Floral
* Islamic
* Luxury
* Rustic
* Traditional

---

## Documentation Section

Panduan:

* Fork Template
* Edit JSON
* Deploy GitHub Pages

---

# 7. Template Features

Setiap template wajib memiliki fitur berikut.

## Cover Opening

* Nama Tamu
* Tombol Buka Undangan

---

## Hero Couple

* Foto Pasangan
* Nama Pasangan

---

## Event Information

* Akad
* Resepsi
* Tanggal
* Jam

---

## Countdown Timer

Hitung mundur menuju acara.

---

## Love Story

Timeline perjalanan pasangan.

---

## Gallery

Foto-foto pasangan.

---

## Location

Google Maps Embed.

---

## RSVP

Link WhatsApp atau Google Form.

---

## Gift Section

* Rekening Bank
* QRIS

---

## Closing Section

Ucapan terima kasih.

---

# 8. JSON Configuration

File:

config/wedding.json

Contoh:

{
"groom": {
"name": "Akbar"
},
"bride": {
"name": "Aisyah"
},
"event": {
"date": "2027-06-20",
"time": "09:00"
}
}

---

# 9. Asset Structure

public/

images/
gallery/
music/
icons/

---

# 10. Repository Structure

template-elegant/

src/

components/
sections/
hooks/
lib/

public/

config/

wedding.json

.github/

workflows/

deploy.yml

---

# 11. GitHub Actions CI/CD

Trigger:

* Push main branch

Workflow:

Install Dependencies

↓

Build Next.js

↓

Export Static Site

↓

Deploy GitHub Pages

---

# 12. Design System

## Typography

Font:

* Playfair Display
* Poppins
* Montserrat

## Color Palette

Elegant

* Gold
* Ivory
* Black

Minimalist

* White
* Gray
* Charcoal

Floral

* Pink
* Rose
* Cream

Luxury

* Black
* Gold
* Champagne

---

# 13. Template Metadata

Setiap repository wajib memiliki:

template.json

Contoh:

{
"name": "Elegant Gold",
"slug": "template-elegant",
"category": "Elegant",
"version": "1.0.0",
"thumbnail": "/thumbnail.jpg",
"demo": "https://username.github.io/template-elegant",
"repository": "https://github.com/username/template-elegant"
}

---

# 14. Future Premium Features

## SaaS Dashboard

* Login
* User Management
* Billing

## Template Builder

* Drag and Drop Editor
* Live Preview

## Theme Marketplace

* Free Templates
* Premium Templates

## Analytics

* Visitor Count
* RSVP Statistics

## Custom Domain

* Mapping Domain
* SSL

---

# 15. MVP Scope

Phase 1

Root Website

* Homepage
* Template Catalog
* Search
* Filter
* Documentation

Template Repository

* Elegant Theme
* Minimalist Theme
* Floral Theme

Deployment

* GitHub Pages
* GitHub Actions

Configuration

* JSON Based

---

# Success Metrics

* 3 Template MVP tersedia
* Deploy otomatis berjalan
* User dapat fork template dalam < 5 menit
* 100% static hosting
* Tidak membutuhkan backend
