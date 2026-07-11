# الموصلات (Connectors)

الموصلات هي الطريقة التي يستخدمها نمط **Personal Brain** في OpenWiki لجلب المعلومات من مصادرك الخارجية وبناء ذاكرتك الشخصية.

## الموصلات المدعومة حالياً

- **Git Repositories (`git-repo`)**: قراءة مستودعاتك المحلية وبناء ملخصات عنها.
- **X / Twitter (`x`)**: جلب التغريدات، الإشارات (Mentions)، العلامات المرجعية (Bookmarks)، وتغريدات القوائم.
- **Notion (`notion`)**: قراءة صفحات ومساحات العمل في Notion (عبر خادم MCP).
- **Gmail (`google`)**: قراءة أحدث رسائل البريد الإلكتروني.
- **Web Search (`web-search`)**: إجراء عمليات بحث على الويب (يتطلب `TAVILY_API_KEY`).
- **Hacker News (`hackernews`)**: جلب أحدث المنشورات والأخبار التقنية.

## كيفية ربط الموصلات

تستخدم OpenWiki أمر `auth` لربط حساباتك عبر بروتوكول OAuth.

لربط حساب X (تويتر):
```bash
openwiki auth x
```

لربط حساب Gmail:
```bash
openwiki auth gmail
```

لربط حساب Notion:
```bash
openwiki auth notion
```

ستقوم الأداة بفتح متصفحك لإكمال عملية تسجيل الدخول، ثم ستحفظ الرموز (Tokens) بشكل آمن في ملف `~/.openwiki/.env`.

## الاستيعاب (Ingestion)

بمجرد ربط الموصلات، يمكنك طلب استيعاب البيانات منها:

لاستيعاب البيانات من جميع الموصلات المربوطة:
```bash
openwiki ingest all
```

لاستيعاب البيانات من موصل محدد (مثلاً Web Search):
```bash
openwiki ingest web-search
```

تقوم الأداة أولاً بجلب البيانات الخام وحفظها في `~/.openwiki/connectors/<connector>/raw/`، ثم يقوم الوكيل الذكي بتحليلها وتلخيصها ووضعها في الويكي النهائي في `~/.openwiki/wiki/`.
