export default function PrivacyPolicy() {
  return (
    <main className='min-h-screen bg-[#faf8f5] text-[#2c2c2c] py-12 px-4 sm:px-6 lg:px-8 dir-rtl text-right font-sans'>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-[#e8e2d8] p-6 sm:p-10 space-y-8'>
        {/* Header */}
        <header className='border-b border-[#e8e2d8] pb-6'>
          <h1 className='text-3xl font-bold text-[#1b3b2b] mb-2'>
            سياسة الخصوصية — تطبيق وموقع أورادي
          </h1>
          <p className='text-sm text-gray-500'>
            آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
          </p>
        </header>

        {/* Introduction */}
        <section className='space-y-3'>
          <h2 className='text-xl font-semibold text-[#1b3b2b]'>1. مقدمة</h2>
          <p className='text-gray-700 leading-relaxed'>
            مرحباً بكم في موقع وتطبيق <strong>أورادي (Awradi)</strong> المتاح
            عبر الرابط{' '}
            <a
              href='https://awradi.vercel.app'
              className='text-[#8c6b3e] hover:underline'
            >
              https://awradi.vercel.app
            </a>
            . نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة
            كيفية تعاملنا مع البيانات عند استخدامك للموقع والخدمات المتاحة فيه
            (الأذكار، القرآن الكريم، الورد اليومي، مواقيت الصلاة، والسبحة
            الإلكترونية).
          </p>
        </section>

        {/* Data Collection */}
        <section className='space-y-3'>
          <h2 className='text-xl font-semibold text-[#1b3b2b]'>
            2. البيانات التي نجمعها وكيفية استخدامها
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            لا يتطلب موقع "أورادي" إنشاء حساب أو تقديم بيانات شخصية معرّفة مثل
            الاسم أو البريد الإلكتروني. البيانات المعالجة تنحصر فيما يلي:
          </p>

          <div className='space-y-4 pt-2'>
            <div className='bg-[#fcfaf7] p-4 rounded-xl border border-[#efe9de]'>
              <h3 className='font-semibold text-[#8c6b3e] mb-1'>
                أ. بيانات الموقع الجغرافي (Location Data)
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed'>
                نستخدم خدمة <strong>ipapi.co</strong> لتحديد موقعك الجغرافي
                تقريبياً بناءً على عنوان IP الخاص بك، وذلك لغرض واحد فقط: إرسال
                موقعك التقديري إلى واجهة برمجة التطبيقات{' '}
                <strong>Aladhan API</strong> لحساب مواقيت الصلاة الصحيحة الخاصة
                بمدينتك. لا نقوم بتخزين موقعك أو عنوان IP الخاص بك في أي قاعدة
                بيانات خاصة بنا.
              </p>
            </div>

            <div className='bg-[#fcfaf7] p-4 rounded-xl border border-[#efe9de]'>
              <h3 className='font-semibold text-[#8c6b3e] mb-1'>
                ب. التخزين المحلي (Local Storage)
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed'>
                لحفظ تقدمك في قراءة الأذكار، قراءة القرآن، الورد اليومي،
                الملاحظات، والمهمات الإسلامية، وعداد السبحة، يتم حفظ هذه
                البيانات محلياً على متصفحك أو جهازك الشخصي باستخدام تقنية{' '}
                <code>localStorage</code>. هذه البيانات لا تُنقل إلى خوادمنا
                وتبقي تحت سيطرتك الكاملة داخل متصفحك.
              </p>
            </div>

            <div className='bg-[#fcfaf7] p-4 rounded-xl border border-[#efe9de]'>
              <h3 className='font-semibold text-[#8c6b3e] mb-1'>
                ج. بيانات الاستضافة والسجلات (Hosting & Server Logs)
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed'>
                يتم استضافة موقعنا على منصة <strong>Vercel</strong>. قد تقوم
                منصة الاستضافة بجمع بيانات تقنية قياسية تلقائياً مثل نوع
                المتصفح، نظام التشغيل، وعنوان IP لأغراض الحماية، وتأمين الخدمة،
                وتحسين الأداء.
              </p>
            </div>
          </div>
        </section>

        {/* Third Party Services */}
        <section className='space-y-3'>
          <h2 className='text-xl font-semibold text-[#1b3b2b]'>
            3. الخدمات الخارجية (Third-Party APIs & Links)
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            يتكامل الموقع مع الخدمات الخارجية التالية لتوفير الوظائف الأساسية:
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-2 pr-2'>
            <li>
              <strong>ipapi.co:</strong> للحصول على الموقع الجغرافي التقريبي.
            </li>
            <li>
              <strong>Aladhan API:</strong> لجلب مواقيت الصلاة والتقويم الهجري
              بناءً على احداثيات مدينتك.
            </li>
            <li>
              <strong>روابط خارجية وتطبيق الأندرويد:</strong> يضم الموقع روابط
              لتطبيق Android (APK) وقناة الواتساب و روابط أخرى. نوصي بمراجعة سياسات الخصوصية
              الخاصة بتلك المنصات عند زيارتها.
            </li>
          </ul>
        </section>

        {/* User Rights */}
        <section className='space-y-3'>
          <h2 className='text-xl font-semibold text-[#1b3b2b]'>
            4. التحكم في بياناتك وجمعها
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            بما أن كافة تقدمك ومحفوظاتك تُخزن محلياً على جهازك، يمكنك مسح كافة
            بيانات التطبيق في أي وقت عن طريق مسح ذاكرة التخزين المؤقت (Cache and
            Local Storage) لمتصفحك.
          </p>
        </section>

        {/* Sadaqah Jariyah Disclaimer */}
        <section className='bg-[#f5f0e6] p-4 rounded-xl border border-[#e8dcc8] text-[#5a4325]'>
          <h2 className='font-bold text-lg mb-1'>صدقة جارية</h2>
          <p className='text-sm leading-relaxed'>
            هذا الموقع والتطبيق صدقة جارية على روح المهندس / تامر سامي إبراهيم
            (رحمه الله). الموقع غير تجاري، ولا يهدف إلى تحقيق أرباح، ولا يحتوي
            على إعلانات تجارية تعقب المستخدمين.
          </p>
        </section>

        {/* Contact Us */}
        <section className='space-y-3 pt-4 border-t border-[#e8e2d8]'>
          <h2 className='text-xl font-semibold text-[#1b3b2b]'>
            5. التواصل معنا
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو
            استخدام الموقع، يمكنك التواصل معنا عبر صفحة الدعم المتاحة على
            الموقع.
          </p>
        </section>
      </div>
    </main>
  );
}
