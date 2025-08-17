# 🚀 Portfolio + Blog (Next.js + Decap CMS + SQLite)

This is my personal **portfolio + blog** project built with **Next.js**, featuring:

- 📄 **Blog** with Markdown/MDX (SEO optimized)
- 🗂️ **Portfolio pages** powered by SQLite + Prisma
- 📝 **Decap CMS** integration for easy blog management
- ✉️ Contact form storing messages in SQLite
- ⚡ Deployed on my **Vultr 1-core server** with Nginx + PM2

---

## 🛠️ Tech Stack
- **Next.js (Pages Router)**
- **Tailwind CSS** for styling
- **Prisma + SQLite** for projects & messages
- **Markdown/MDX** for blog posts
- **Decap CMS** for admin editing
- **next-seo** + **next-sitemap** for SEO

---

## 📂 Project Structure
```
my-portfolio/
│
├── content/
│   └── blog/                  → Markdown/MDX blog posts
│
├── pages/
│   ├── index.js               → Homepage
│   ├── about.js               → About page
│   ├── blog/
│   │   ├── index.js           → Blog list page
│   │   └── [slug].js          → Blog detail page
│   ├── portfolio/
│   │   ├── index.js           → Portfolio list page
│   │   └── [id].js            → Portfolio detail
│   ├── contact.js             → Contact page
│   ├── api/
│   │   └── contact.js         → API route (SQLite)
│   ├── admin/                 → Decap CMS
│
├── prisma/
│   └── schema.prisma          → SQLite schema
│
├── public/
│   └── admin/
│       └── config.yml         → Decap CMS config
│
├── styles/                    → Tailwind styles
├── package.json
└── next.config.js
```

---

## 🚀 Deployment on Vultr

### 1. Install dependencies
```bash
sudo apt update && sudo apt install nodejs npm sqlite3 nginx
```

### 2. Build & Run
```bash
npm install
npm run build
npm run start
```

Or run with PM2:
```bash
pm2 start npm --name portfolio -- start
```

### 3. Nginx Reverse Proxy
```
server {
    server_name portfolio.yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Enable SSL (Let's Encrypt)
```bash
sudo certbot --nginx -d portfolio.yourdomain.com
```

---

## 📝 Blog Workflow (Decap CMS)
1. Visit `yourdomain.com/admin`
2. Login via Git provider (GitHub/GitLab)
3. Create/Edit blog → Decap commits new `.mdx` file into `content/blog/`
4. Next.js rebuilds → new blog live instantly

---

## 📌 Roadmap
- [x] Portfolio Pages (SQLite)
- [x] Blog (Markdown + SEO)
- [x] Contact Form (SQLite)
- [x] Decap CMS Setup
- [ ] Blog Categories/Tags
- [ ] RSS Feed
- [ ] Analytics (Plausible/GA)
- [ ] Dark Mode

---

## 📜 License
This project is licensed under the **MIT License**.
