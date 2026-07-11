# Personal-Brain-Openwiki

مرحباً بك في مستودع **Personal-Brain-Openwiki**! 

هذا المستودع هو دليلك الشامل والعملي لفهم وتطبيق أداة **OpenWiki** من LangChain، وكيفية ربطها بـ **DeepAgents** لبناء وكلاء ذكاء اصطناعي يمتلكون ذاكرة استباقية (Proactive Memory) وسياقاً عميقاً لمشاريعك.

## ما هو OpenWiki؟
OpenWiki هو وكيل مفتوح المصدر يعمل من سطر الأوامر (CLI) تم إطلاقه بواسطة LangChain. وظيفته الأساسية هي إنشاء وصيانة قاعدة معرفية (Wiki) إما للمستودعات البرمجية (Code Brain) أو كذاكرة شخصية (Personal Brain) للوكلاء الأذكياء.

---

## 🚀 البدء السريع (Quick Start)

### المتطلبات
- Node.js v18+
- مفتاح API لمزود LLM (OpenAI أو Anthropic)

### التثبيت
```bash
git clone https://github.com/ALaaAlawdi/Personal-Brain-Openwiki.git
cd Personal-Brain-Openwiki
npm install
```

### الإعداد
```bash
cp .env.example .env
# قم بتعديل ملف .env وأضف مفتاح API الخاص بك
```

### التشغيل
```bash
# عرض الأوامر المتاحة
npm start

# تشغيل وكيل مراجعة الأكواد (يستخدم OpenWiki كذاكرة)
npm run agent:code-reviewer

# تشغيل وكيل الذاكرة الشخصية
npm run agent:wiki-memory

# تهيئة العقل الشخصي
npm run cli:brain -- init

# محاكاة جلب البيانات من المصادر (Gmail, X, Notion)
npm run cli:ingest

# سؤال العقل الشخصي
npm run cli:brain -- query "What are my active projects?"
```

---

## 📁 هيكلية المشروع

```
Personal-Brain-Openwiki/
├── docs/                          # التوثيق الشامل (باللغة العربية)
│   ├── 01-what-is-openwiki.md
│   ├── 02-installation-setup.md
│   ├── 03-code-brain.md
│   ├── 04-personal-brain.md
│   ├── 05-connectors.md
│   ├── 06-deepagents-integration.md
│   ├── 07-github-actions-automation.md
│   └── 08-notes-and-tips.md
├── src/                           # الكود المصدري (TypeScript)
│   ├── agents/
│   │   ├── code-reviewer-agent.ts # وكيل مراجعة الأكواد مع ذاكرة OpenWiki
│   │   └── wiki-memory-agent.ts   # وكيل الذاكرة الشخصية (Personal Brain)
│   ├── cli/
│   │   ├── personal-brain-cli.ts  # واجهة سطر الأوامر للعقل الشخصي
│   │   └── ingest-sources.ts      # محاكاة جلب البيانات من الموصلات
│   └── index.ts                   # نقطة الدخول الرئيسية
├── wiki-output/                   # مخرجات الويكي (يتم إنشاؤه تلقائياً)
├── package.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

---

## 🧠 كيف يعمل المشروع؟

### 1. وكيل مراجعة الأكواد (`code-reviewer-agent.ts`)
يوضح كيف يقرأ وكيل DeepAgents التوثيق الذي أنشأته OpenWiki (Code Brain) ويستخدمه كسياق لمراجعة الأكواد. بدلاً من أن يبحث الوكيل في آلاف الملفات، يقرأ الملخصات المعمارية أولاً.

### 2. وكيل الذاكرة الشخصية (`wiki-memory-agent.ts`)
يوضح كيف يبني وكيل DeepAgents ذاكرة محلية (Personal Brain) من ملفات Markdown. يمكنه البحث في الويكي، إضافة معلومات جديدة، وعرض جميع المدخلات.

### 3. واجهة CLI (`personal-brain-cli.ts`)
تطبيق سطر أوامر كامل يسمح لك بتهيئة العقل الشخصي وسؤاله أسئلة، مبني على Commander.js و DeepAgents.

### 4. محاكاة الاستيعاب (`ingest-sources.ts`)
يحاكي كيف تقوم OpenWiki بجلب البيانات من الموصلات (Gmail, X, Notion) وتحويلها إلى ملفات Markdown في مجلد `wiki-output/`.

---

## 📚 التوثيق

لقد قمنا بتقسيم الشرح إلى عدة ملفات داخل مجلد `docs/` لتسهيل القراءة والتطبيق:

1. [ما هي OpenWiki؟](docs/01-what-is-openwiki.md)
2. [خطوات التثبيت والإعداد](docs/02-installation-setup.md)
3. [عقل الشيفرة Code Brain](docs/03-code-brain.md)
4. [العقل الشخصي Personal Brain](docs/04-personal-brain.md)
5. [الموصلات Connectors](docs/05-connectors.md)
6. [التكامل مع DeepAgents](docs/06-deepagents-integration.md)
7. [أتمتة التحديث عبر GitHub Actions](docs/07-github-actions-automation.md)
8. [ملاحظات عملية ونصائح](docs/08-notes-and-tips.md)

---

## 🔗 روابط مفيدة

- [OpenWiki GitHub](https://github.com/langchain-ai/openwiki)
- [DeepAgents JS GitHub](https://github.com/langchain-ai/deepagentsjs)
- [DeepAgents Documentation](https://docs.langchain.com/oss/javascript/deepagents/overview)
- [LangChain Blog - OpenWiki](https://www.langchain.com/blog/introducing-openwiki-an-open-source-agent-for-repo-documentation)

---

## 📄 License

MIT
