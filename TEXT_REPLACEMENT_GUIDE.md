# Text and Title Replacement Guide

## Overview
This guide shows you how to replace all texts and titles in your law office website. All text content is in the `index.html` file.

## Quick Text Replacement Steps

### 1. Open the HTML File
- Open `index.html` in any text editor (Notepad, VS Code, etc.)
- Use Ctrl+F to search for specific text

### 2. Replace Content
- Find the text you want to change
- Replace it with your new text
- Save the file
- Refresh your browser

## Main Sections to Replace

### 🏠 **Hero Section (Main Page)**
```html
<!-- Main Title -->
<h1 class="hero-title" data-aos="fade-up">
    مكتب المحاماة الحديث
</h1>

<!-- Subtitle -->
<p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
    نقدم الخدمات القانونية المتميزة بأعلى معايير الجودة والاحترافية
</p>

<!-- Buttons -->
<a href="#services" class="btn btn-primary">خدماتنا</a>
<a href="#contact" class="btn btn-secondary">تواصل معنا</a>
```

### 🏢 **About Section**
```html
<!-- Section Title -->
<h2>عن المكتب</h2>
<p>نحن مكتب محاماة رائد في المنطقة العربية</p>

<!-- About Content -->
<h3>رؤيتنا</h3>
<p>نسعى لتقديم الخدمات القانونية المتميزة بأعلى معايير الجودة والاحترافية، مع التركيز على مصالح عملائنا وضمان حقوقهم القانونية.</p>

<h3>أهدافنا</h3>
<ul>
    <li>تقديم الاستشارات القانونية المتخصصة</li>
    <li>الدفاع عن حقوق العملاء بكل احترافية</li>
    <li>الالتزام بأعلى معايير الأخلاقيات المهنية</li>
    <li>التطوير المستمر للمهارات والمعرفة القانونية</li>
</ul>

<!-- Manager Info -->
<h3>أحمد محمد علي</h3>
<p>مدير المكتب</p>
<p>خبرة 20+ سنة</p>
```

### 👥 **Lawyers Section**
```html
<!-- Section Title -->
<h2>فريق المحامون</h2>
<p>تعرف على فريقنا المتميز من المحاميين المحترفين</p>

<!-- Individual Lawyers -->
<h3>أحمد محمد علي</h3>
<p class="specialty">محامي مدني وتجاري</p>
<p class="experience">خبرة 15 سنة</p>

<h3>فاطمة أحمد حسن</h3>
<p class="specialty">محامية أسرية</p>
<p class="experience">خبرة 12 سنة</p>

<!-- Continue for all 10 lawyers -->
```

### 🏢 **Clients Section**
```html
<!-- Section Title -->
<h2>العملاء والشركاء</h2>
<p>نفخر بثقة عملائنا وشركائنا الكرام</p>

<!-- Client Names (in alt attributes) -->
alt="شركة النفط الوطنية"
alt="بنك الخليج التجاري"
alt="مجموعة الصناعات الحديثة"
<!-- Continue for all 10 clients -->
```

### ⚖️ **Services Section**
```html
<!-- Section Title -->
<h2>خدماتنا القانونية</h2>
<p>نقدم مجموعة شاملة من الخدمات القانونية المتخصصة</p>

<!-- Individual Services -->
<h3>القضايا المدنية</h3>
<p>نقدم الخدمات القانونية في جميع أنواع القضايا المدنية والتجارية مع ضمان أفضل النتائج لعملائنا.</p>

<h3>القضايا الأسرية</h3>
<p>نعالج جميع القضايا الأسرية بحساسية عالية وخصوصية تامة، مع التركيز على مصالح جميع الأطراف.</p>

<!-- Continue for all 6 services -->
```

### 📞 **Contact Section**
```html
<!-- Section Title -->
<h2>اتصل بنا</h2>
<p>نحن هنا لمساعدتك في جميع احتياجاتك القانونية</p>

<!-- Contact Information -->
<h3>العنوان</h3>
<p>شارع الملك فهد، برج الأعمال<br>الطابق 15، الرياض، المملكة العربية السعودية</p>

<h3>الهاتف</h3>
<p>+966 11 234 5678</p>
<p>+966 50 123 4567</p>

<h3>البريد الإلكتروني</h3>
<p>info@modernlaw.com</p>
<p>consultation@modernlaw.com</p>

<h3>ساعات العمل</h3>
<p>الأحد - الخميس: 8:00 ص - 6:00 م</p>
<p>الجمعة - السبت: مغلق</p>
```

### 🏢 **Footer Section**
```html
<!-- Logo and Company Name -->
<span>مكتب المحاماة الحديث</span>

<!-- Company Description -->
<p>نحن مكتب محاماة رائد نقدم الخدمات القانونية المتميزة بأعلى معايير الجودة والاحترافية.</p>

<!-- Footer Links -->
<h3>روابط سريعة</h3>
<h3>خدماتنا</h3>
<h3>معلومات الاتصال</h3>

<!-- Copyright -->
<p>&copy; 2024 مكتب المحاماة الحديث. جميع الحقوق محفوظة.</p>
```

### 🧭 **Navigation Menu**
```html
<a href="#home" class="nav-link">الرئيسية</a>
<a href="#about" class="nav-link">عن المكتب</a>
<a href="#lawyers" class="nav-link">المحامون</a>
<a href="#clients" class="nav-link">العملاء والشركاء</a>
<a href="#services" class="nav-link">خدماتنا</a>
<a href="#contact" class="nav-link">اتصل بنا</a>
```

## Common Text Replacements

### Company Information
- **Company Name**: "مكتب المحاماة الحديث" → Your company name
- **Tagline**: "Modern Law Office" → Your tagline
- **Description**: Update the main description

### Contact Information
- **Address**: Update street, building, floor, city
- **Phone Numbers**: Replace with your actual numbers
- **Email Addresses**: Replace with your email addresses
- **Working Hours**: Update your business hours

### Services
- **Service Names**: Update service titles
- **Service Descriptions**: Write detailed descriptions
- **Number of Services**: Add or remove services as needed

### Team Members
- **Names**: Replace all lawyer names
- **Specialties**: Update their areas of expertise
- **Experience**: Update years of experience
- **Photos**: Replace image URLs with your team photos

### Clients
- **Client Names**: Update company names in alt attributes
- **Client Logos**: Replace image URLs with actual client logos

## Tips for Text Replacement

### 1. **Keep Arabic Text Right-to-Left**
- Maintain proper Arabic text direction
- Use proper Arabic punctuation
- Keep text alignment consistent

### 2. **Maintain HTML Structure**
- Don't remove HTML tags
- Keep class names intact
- Preserve data attributes for animations

### 3. **Test After Changes**
- Refresh browser after each change
- Check mobile responsiveness
- Verify animations still work

### 4. **Backup Your Work**
- Save a copy of original file
- Make incremental changes
- Test each section separately

## Quick Find Commands

### Search for Specific Text:
- **Ctrl+F** in your editor
- Search for Arabic text
- Search for English text
- Search for specific words

### Common Search Terms:
- "مكتب المحاماة"
- "Modern Law"
- "أحمد محمد"
- "القضايا المدنية"
- "اتصل بنا"

## File Structure
```
index.html - Main content file
├── Hero Section
├── About Section
├── Lawyers Section
├── Clients Section
├── Services Section
├── Contact Section
└── Footer Section
```

## After Making Changes
1. **Save the file** (Ctrl+S)
2. **Refresh browser** (F5 or Ctrl+R)
3. **Clear cache** if needed (Ctrl+Shift+R)
4. **Test on mobile** devices
5. **Check all sections** work properly

## Need Help?
- Keep HTML tags intact
- Maintain proper Arabic text direction
- Test each change before moving to next
- Backup your work regularly 