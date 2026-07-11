# التكامل مع DeepAgents

إحدى النقاط الجوهرية لفهم قوة **OpenWiki** هي إدراك أنها ليست مجرد أداة مستقلة، بل هي مبنية بالكامل فوق إطار عمل **DeepAgents** من LangChain.

## ما هي DeepAgents؟

**DeepAgents** هو إطار عمل مفتوح المصدر (Agent Harness) مصمم خصيصاً لبناء وكلاء ذكاء اصطناعي قادرين على تنفيذ مهام معقدة وطويلة الأمد. الإطار مبني بدوره فوق LangGraph و LangChain.

يتميز DeepAgents بالقدرات التالية:
1. **بيئة التنفيذ (Execution Environment):** دعم الأدوات، نظام ملفات افتراضي، وتنفيذ الأكواد.
2. **إدارة السياق (Context Management):** تلخيص المحادثات الطويلة، تفريغ النتائج الضخمة (Offloading)، واستخدام الذاكرة.
3. **التفويض (Delegation):** القدرة على تقسيم المهام المعقدة وإنشاء وكلاء فرعيين (Sub-agents) لحلها بالتوازي.
4. **التوجيه (Steering):** إمكانية إيقاف الوكيل لطلب موافقة بشرية (Human-in-the-loop).

## العلاقة بين OpenWiki و DeepAgents

بما أن OpenWiki مبنية على DeepAgents، فهي ترث جميع قدراته القوية. عندما تقوم بتشغيل OpenWiki لإنشاء توثيق (Code Brain) أو ذاكرة شخصية (Personal Brain)، فإن ما يحدث فعلياً هو:

1. يتم إنشاء "وكيل عميق" (Deep Agent) مخصص لهذه المهمة.
2. يستخدم هذا الوكيل أدوات نظام الملفات الافتراضي (Virtual Filesystem) الخاصة بـ DeepAgents لقراءة الأكواد أو جلب البيانات من الموصلات (Connectors).
3. إذا كان المشروع ضخماً، قد يقوم الوكيل بتقسيم المهمة (Delegation) لتوثيق أجزاء مختلفة من المشروع بالتوازي.
4. بفضل إدارة السياق القوية في DeepAgents، يستطيع OpenWiki التعامل مع مستودعات برمجية ضخمة دون أن يتجاوز الحد الأقصى لسياق النموذج اللغوي (Context Window).

## ربط OpenWiki مع DeepAgents في مشاريعك الخاصة

إذا كنت تبني وكيلك الخاص باستخدام مكتبة `deepagents` (سواء في Python أو TypeScript)، يمكنك الاستفادة من الويكي الذي أنشأته OpenWiki كجزء من سياق وكيلك.

### مثال عملي (Python):

لنفترض أنك استخدمت `openwiki code --init` لإنشاء مجلد `openwiki/` في مشروعك. الآن تريد بناء وكيل خاص بك باستخدام DeepAgents ليقوم بمراجعة الأكواد بناءً على هذا التوثيق.

```python
from deepagents import create_deep_agent

# 1. قراءة التوثيق الذي أنشأته OpenWiki
with open("openwiki/Architecture.md", "r") as f:
    architecture_context = f.read()

# 2. إعداد النظام التوجيهي للوكيل مع تضمين السياق
system_prompt = f"""
You are an expert code reviewer.
Before reviewing any code, please consider the project's architecture guidelines:

<architecture_guidelines>
{architecture_context}
</architecture_guidelines>

Ensure all your suggestions align with these guidelines.
"""

# 3. إنشاء الوكيل باستخدام DeepAgents
agent = create_deep_agent(
    model="anthropic:claude-sonnet-4-6",
    system_prompt=system_prompt,
    # يمكن إضافة أدوات لقراءة ملفات إضافية من الويكي إذا لزم الأمر
)

# 4. تشغيل الوكيل لمراجعة كود معين
result = agent.invoke({
    "messages": [
        {"role": "user", "content": "Please review the new authentication logic in auth.py"}
    ]
})

print(result)
```

### الفائدة من هذا الربط:
عندما تربط مخرجات OpenWiki بوكيلك المبني على DeepAgents، فإنك تمنح وكيلك "خريطة" جاهزة للمشروع. بدلاً من أن يضطر وكيل DeepAgents الخاص بك للبحث في جميع الملفات باستخدام أدوات النظام، فإنه يبدأ مباشرة وهو يمتلك الفهم المعماري الصحيح.

بالإضافة إلى ذلك، بما أن OpenWiki مبنية على DeepAgents، فهي تدعم التتبع عبر **LangSmith** بشكل أصلي. إذا قمت بتوفير `LANGCHAIN_API_KEY`، يمكنك رؤية كل خطوة اتخذها وكيل OpenWiki أثناء بناء التوثيق.
