'use client';

import React, { useState, useEffect } from 'react';
import prayerTimes from '../../lib/prayerTimes';

const initialTasks = [
  {
    group: 'عبادات الاستيقاظ',
    tasks: [{ name: 'أذكار الاستيقاظ من النوم', checked: false }],
  },
  {
    group: 'صلاة الفجر',
    tasks: [
      { name: 'إحسان الوضوء والبسملة قبله والذكر بعده', checked: false },
      { name: 'سنة الفجر الراتبة (ركعتان قبل الفريضة)', checked: false },
      { name: 'صلاة الفجر في جماعة بالمسجد / في وقتها للنساء', checked: false },
      { name: 'الأذكار بعد الصلاة المفروضة', checked: false },
      { name: 'الجلوس في المسجد من الفجر للشروق للرجال', checked: false },
      { name: 'قراءة أذكار الصباح', checked: false },
    ],
  },
  {
    group: 'الشروق',
    tasks: [{ name: 'صلاة الضحى (أقلها ركعتان)', checked: false }],
  },
  {
    group: 'صلاة الظهر',
    tasks: [
      { name: 'إحسان الوضوء والبسملة قبله والذكر بعده', checked: false },
      { name: 'السنن الراتبة القبلية (أربع ركعات بتسليمتين)', checked: false },
      { name: 'صلاة الظهر في جماعة بالمسجد / في وقتها للنساء', checked: false },
      { name: 'السنن الراتبة البعدية (ركعتان بعد الفريضة)', checked: false },
      { name: 'الأذكار بعد الصلاة المفروضة', checked: false },
    ],
  },
  {
    group: 'صلاة العصر',
    tasks: [
      { name: 'إحسان الوضوء والبسملة قبله والذكر بعده', checked: false },
      { name: 'صلاة العصر في جماعة بالمسجد / في وقتها للنساء', checked: false },
      { name: 'الأذكار بعد الصلاة المفروضة', checked: false },
      { name: 'قراءة أذكار المساء', checked: false },
    ],
  },
  {
    group: 'صلاة المغرب',
    tasks: [
      { name: 'إحسان الوضوء والبسملة قبله والذكر بعده', checked: false },
      {
        name: 'صلاة المغرب في جماعة بالمسجد / في وقتها للنساء',
        checked: false,
      },
      { name: 'السنن الراتبة البعدية (ركعتان بعد الفريضة)', checked: false },
      { name: 'الأذكار بعد الصلاة المفروضة', checked: false },
    ],
  },
  {
    group: 'صلاة العشاء',
    tasks: [
      { name: 'إحسان الوضوء والبسملة قبله والذكر بعده', checked: false },
      {
        name: 'صلاة العشاء في جماعة بالمسجد / في وقتها للنساء',
        checked: false,
      },
      { name: 'السنن الراتبة البعدية (ركعتان بعد الفريضة)', checked: false },
      { name: 'الأذكار بعد الصلاة المفروضة', checked: false },
    ],
  },
  {
    group: 'عبادات الليل',
    tasks: [
      { name: 'قيام الليل', checked: false },
      { name: 'ركعة الوتر', checked: false },
      { name: 'الاستغفار بالأسحار', checked: false },
      { name: 'الدعاء', checked: false },
    ],
  },
  {
    group: 'عبادات النوم',
    tasks: [
      { name: 'النوم على طهارة (وضوء)', checked: false },
      { name: 'نفض الفراش بطرف الثوب أو غيره', checked: false },
      { name: 'قراءة أذكار النوم', checked: false },
      { name: 'النوم على الشق الأيمن', checked: false },
    ],
  },
  {
    group: 'عام',
    tasks: [{ name: 'ورد القرآن', checked: false }],
  },
];

const TasksPage = () => {
  const [taskGroups, setTaskGroups] = useState(initialTasks);
  const [fajr, setFajr] = useState('');

  useEffect(() => {
    const initializeAndResetTasks = async () => {
      try {
        const prayerTimesResponse = await prayerTimes('fajr');
        const fajrTimeString = prayerTimesResponse?.data?.timings?.Fajr;
        setFajr(fajrTimeString);

        const [fajrHours, fajrMinutes] = fajr.split(':').map(Number);

        const now = new Date();
        const todayFajr = new Date();
        todayFajr.setHours(fajrHours, fajrMinutes, 0, 0);

        const todayDateString = now.toLocaleDateString('en-CA');
        const lastResetDate = localStorage.getItem('islamic_tasks_last_reset');
        const savedTasks = localStorage.getItem('islamic_tasks');

        if (now >= todayFajr && lastResetDate !== todayDateString) {
          setTaskGroups(initialTasks);
          localStorage.setItem('islamic_tasks', JSON.stringify(initialTasks));
          localStorage.setItem('islamic_tasks_last_reset', todayDateString);
        } else if (savedTasks) {
          setTaskGroups(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Error setting up tasks and prayer times:', error);
        const savedTasks = localStorage.getItem('islamic_tasks');
        if (savedTasks) {
          try {
            setTaskGroups(JSON.parse(savedTasks));
          } catch (e) {
            console.error('Error parsing saved tasks on fallback:', e);
          }
        }
      }
    };

    initializeAndResetTasks();
  }, [fajr]);

  const handleCheckboxChange = (groupIndex, taskIndex) => {
    const updatedGroups = taskGroups.map((group, gIdx) => {
      if (gIdx !== groupIndex) return group;
      return {
        ...group,
        tasks: group.tasks.map((task, tIdx) => {
          if (tIdx !== taskIndex) return task;
          return { ...task, checked: !task.checked };
        }),
      };
    });

    setTaskGroups(updatedGroups);
    localStorage.setItem('islamic_tasks', JSON.stringify(updatedGroups));
  };

  return (
    <main
      className='max-w-3xl mx-auto px-4 py-8 text-surface-900 dark:text-surface-100'
      dir='rtl'
    >
      <h1 className='text-3xl font-bold mb-6 text-center'>مهمات إسلامية</h1>
      <hr className='border-primary-500 mb-6' />

      <div className='space-y-6'>
        {taskGroups.map((group, groupIdx) => (
          <section
            key={groupIdx}
            className='bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-soft rounded-2xl overflow-hidden'
          >
            <h2 className='bg-primary-50/80 dark:bg-surface-700/50 text-primary-900 dark:text-primary-300 font-bold px-5 py-3 border-b border-primary-100 dark:border-surface-700 text-lg'>
              {group.group}
            </h2>

            <ul className='divide-y divide-surface-100 dark:divide-surface-700'>
              {group.tasks.map((task, taskIdx) => (
                <li
                  key={taskIdx}
                  className='flex items-center gap-4 px-5 py-4 hover:bg-primary-50/30 dark:hover:bg-surface-700/30 transition-colors duration-150 cursor-pointer'
                  onClick={() => handleCheckboxChange(groupIdx, taskIdx)}
                >
                  <input
                    type='checkbox'
                    checked={task.checked}
                    onChange={() => {}}
                    className='w-5 h-5 rounded border-primary-300 dark:border-surface-600 text-primary-600 focus:ring-primary-500 accent-primary-600 dark:accent-primary-500 cursor-pointer'
                  />
                  <span
                    className={`text-base select-none transition-colors duration-150 ${
                      task.checked
                        ? 'line-through text-surface-400 dark:text-surface-500'
                        : 'text-surface-700 dark:text-surface-300'
                    }`}
                  >
                    {task.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default TasksPage;
