Bundler — Complete Explanation 📦

📌 What is a Bundler?

Easy language: Bundler ek tool hai jo aapke
multiple files (JS, CSS, images) ko leke
ek ya kuch files mein combine kar deta hai
taaki browser fast load kar sake!


🔧 Problem Without Bundler:
Aapka project:
├── index.html
├── app.js
├── utils.js
├── helper.js
├── style.css
├── bootstrap.css
└── jquery.js

Browser ko 6 alag requests bhejni padti hain!
❌ Slow loading
❌ Many HTTP requests
❌ Performance poor


✅ With Bundler:
Bundler saari files le leta hai
         ↓
    bundle.js (1 file!)
    bundle.css (1 file!)
         ↓
Browser sirf 2 requests bhejta hai
✅ Fast loading
✅ Less HTTP requests
✅ Better performance




🔧 What Bundler Does:
Source Files          Bundler         Output
-----------           -------         ------
app.js                               
utils.js       →→→   WEBPACK   →→→   bundle.js
helper.js             / VITE          bundle.css
style.css                             images/
bootstrap.css
images/