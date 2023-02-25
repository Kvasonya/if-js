import Students from '../src/entities/Students.js';

test('give information about students and graduates (full name, specialization and course/graduation)', () => {
  const data = [
    {
      firstName: 'Александр',
      lastName: 'Иванов',
      admissionYear: 2020,
      courseName: 'Прикладная математика',
    },
    {
      firstName: 'Елена',
      lastName: 'Смирнова',
      admissionYear: 2018,
      courseName: 'Журналистика',
    },
    {
      firstName: 'Николай',
      lastName: 'Петров',
      admissionYear: 2022,
      courseName: 'Маркетинг',
    },
    {
      firstName: 'Виктор',
      lastName: 'Петров',
      admissionYear: 2015,
      courseName: 'Социология',
    },
  ];

  const students = new Students(data);

  expect(students.getInfo()).toStrictEqual([
    'Николай Петров - Маркетинг, 1 курс',
    'Александр Иванов - Прикладная математика, 3 курс',
    'Елена Смирнова - Журналистика, 5 курс',
  ]);
  expect(students.getInfoGraduates()).toStrictEqual([
    'Виктор Петров - Социология, год выпуска: 2020',
  ]);
});
