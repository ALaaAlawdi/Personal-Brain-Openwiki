# Personal-Brain-Openwiki

مرحباً بك في مستودع **Personal-Brain-Openwiki**! 

هذا المستودع هو دليلك الشامل والعملي لفهم وتطبيق أداة **OpenWiki** من LangChain، وكيفية ربطها بـ **DeepAgents** لبناء وكلاء ذكاء اصطناعي يمتلكون ذاكرة استباقية (Proactive Memory) وسياقاً عميقاً لمشاريعك.

## ما هو OpenWiki؟
OpenWiki هو وكيل مفتوح المصدر يعمل من سطر الأوامر (CLI) تم إطلاقه بواسطة LangChain. وظيفته الأساسية هي إنشاء وصيانة قاعدة معرفية (Wiki) إما للمستودعات البرمجية (Code Brain) أو كذاكرة شخصية (Personal Brain) للوكلاء الأذكياء. بدلاً من إجبار الوكيل على قراءة آلاف الملفات لفهم السياق، يقوم OpenWiki بتلخيص هذه الملفات في وثائق Markdown منظمة يسهل على الذكاء الاصطناعي قراءتها وفهمها بسرعة.

## هيكلية الدليل (المستندات)

لقد قمنا بتقسيم الشرح إلى عدة ملفات داخل مجلد `docs/` لتسهيل القراءة والتطبيق:

1. [ما هي OpenWiki؟ (01-what-is-openwiki.md)](docs/01-what-is-openwiki.md) - شرح تفصيلي للفكرة والأهداف.
2. [خطوات التثبيت والإعداد (02-installation-setup.md)](docs/02-installation-setup.md) - كيفية تثبيت الأداة وتهيئتها.
3. [عقل الشيفرة Code Brain (03-code-brain.md)](docs/03-code-brain.md) - كيفية استخدام الأداة لتوثيق المستودعات البرمجية.
4. [العقل الشخصي Personal Brain (04-personal-brain.md)](docs/04-personal-brain.md) - كيفية بناء ذاكرة شخصية للوكيل.
5. [الموصلات Connectors (05-connectors.md)](docs/05-connectors.md) - كيفية ربط OpenWiki بمصادر خارجية مثل Gmail و Notion.
6. [التكامل مع DeepAgents (06-deepagents-integration.md)](docs/06-deepagents-integration.md) - فهم العلاقة بين OpenWiki و DeepAgents وكيفية استخدامهما معاً.
7. [أتمتة التحديث عبر GitHub Actions (07-github-actions-automation.md)](docs/07-github-actions-automation.md) - الحفاظ على التوثيق محدثاً بشكل تلقائي.
8. [ملاحظات عملية ونصائح (08-notes-and-tips.md)](docs/08-notes-and-tips.md) - أفضل الممارسات عند استخدام الأداة.

## البدء السريع

للبدء السريع، يمكنك تثبيت الأداة عالمياً عبر npm:

```bash
npm install -g openwiki
```

ثم يمكنك تهيئة أحد النمطين:

**للنمط الشخصي (Personal Brain):**
```bash
openwiki personal --init
```

**لنمط الأكواد (Code Brain):**
```bash
openwiki code --init
```

نتمنى أن يكون هذا الدليل مفيداً لك في رحلتك لبناء وكلاء ذكاء اصطناعي أكثر ذكاءً وفعالية!
