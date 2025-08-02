# ReFi Barcelona Knowledge Base 🌱

> Building bridges between the ReFi movement and the local context of Barcelona

[![Quartz](https://img.shields.io/badge/Built%20with-Quartz-green)](https://quartz.jzhao.xyz)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.txt)

A comprehensive digital garden documenting regenerative finance initiatives, bioregional approaches, and cooperative structures in Barcelona and Catalonia.

## 🌐 Live Site

**Development**: `http://localhost:8080` (when running locally)  
**Production**: Coming soon...

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/ReFi-Barcelona.git
cd ReFi-Barcelona

# Install dependencies
npm install

# Build and serve the site locally
npx quartz build --serve
```

The site will be available at `http://localhost:8080`

### Development Commands

```bash
# Build the site
npx quartz build

# Build and serve with live reload
npx quartz build --serve

# Build and serve documentation
npm run docs
```

## 📁 Repository Structure

```
ReFi-Barcelona/
├── content/                              # All content (Markdown files)
│   ├── Bioregional Knowledge Commons/    # Bioregional research & resources
│   ├── Dev_new/                         # Development articles & guides
│   ├── Ecosystem Map/                   # Local & global ecosystem mapping
│   ├── Events/                          # Event documentation
│   ├── Images/                          # Site images & assets
│   ├── ReFi Barcelona/                  # Core ReFi Barcelona content
│   ├── Working Docs/                    # Collaborative documents
│   └── index.md                         # Homepage content
├── quartz/                              # Quartz static site generator
├── public/                              # Generated site (auto-generated)
├── quartz.config.ts                     # Site configuration
├── quartz.layout.ts                     # Layout configuration
└── package.json                         # Dependencies & scripts
```

## 📝 Content Organization

### Main Content Areas

- **🌿 Bioregional Knowledge Commons**: Research on bioregionalism, BioFi initiatives, and territorial approaches
- **🔄 Dev_new**: Latest articles on cooperative structures, membership, and ReFi BCN development
- **🗺️ Ecosystem Map**: Comprehensive mapping of local Barcelona/Catalonia organizations and global ReFi projects
- **📅 Events**: Documentation of ReFi Barcelona events and unconferences
- **🏢 ReFi Barcelona**: Core organizational documents, strategies, and one-pagers

### Content Features

- **264+ Markdown files** with comprehensive coverage
- **Interconnected content** with backlinks and graph view
- **Bilingual support** (English/Catalan)
- **Search functionality** across all content
- **Tag-based organization** for easy navigation

## ✍️ Contributing Content

### Adding New Content

1. Create or edit Markdown files in the appropriate `content/` subdirectory
2. Use YAML frontmatter for metadata:

```yaml
---
title: "Your Page Title"
description: "Brief description of the content"
tags: ["refi", "barcelona", "cooperative"]
date: 2024-01-01
---
```

3. Link to other pages using `[[Page Name]]` syntax
4. Run `npx quartz build --serve` to preview changes

### Content Guidelines

- Use descriptive, SEO-friendly filenames
- Include relevant tags for discoverability
- Link to related content within the knowledge base
- Add images to `content/Images/` directory
- Follow the existing directory structure

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-content`
3. Make your changes and commit: `git commit -m "Add: new content about X"`
4. Push to your fork: `git push origin feature/new-content`
5. Submit a Pull Request

## 🎨 Customization

### Site Configuration

Edit `quartz.config.ts` to customize:
- Site title and description
- Color theme and branding
- Navigation and footer
- Analytics and social links

### Theme

The site uses a custom green regenerative finance theme with:
- **Light mode**: Green-tinted whites and earthy tones
- **Dark mode**: Dark greens with bright green accents
- **Typography**: Schibsted Grotesk and Source Sans Pro fonts

## 🚀 Deployment

### Netlify (Recommended)

1. Push your repository to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npx quartz build`
4. Set publish directory: `public`
5. Deploy!

### Vercel

1. Push your repository to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Quartz settings
4. Deploy!

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automated builds
3. Configure custom domain if needed

## 🌱 About ReFi Barcelona

ReFi Barcelona aims to build bridges between the global Regenerative Finance (ReFi) movement and the local context of Barcelona. We focus on:

- **Bioregional approaches** to financing regenerative initiatives
- **Cooperative structures** for local economic development
- **Knowledge commons** for sharing regenerative practices
- **Community organizing** around climate and social justice

### Core Principles

- **Bridge-building**: Connecting global and local, finance and regeneration
- **Cooperation**: Collective ownership and democratic governance
- **Bioregionalism**: Place-based approaches to regeneration
- **Open source**: Transparent, collaborative knowledge sharing

## 🤝 Community & Contact

- **Website**: [Coming soon]
- **Twitter**: [@ReFiBarcelona](https://twitter.com/ReFiBarcelona)
- **Discord**: [ReFi Barcelona Community](https://discord.gg/refibarcelona)
- **Email**: info@refibarcelona.org

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🙏 Acknowledgments

- **Quartz** - For the amazing static site generator
- **ReFi DAO** - For the global regenerative finance community
- **Barcelona cooperative ecosystem** - For the local inspiration and collaboration
- **Contributors** - Everyone who has shared knowledge and resources

---

*Built with [Quartz](https://quartz.jzhao.xyz) 🌱*