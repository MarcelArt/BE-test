/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
  // Your Code Here
  let session1 = sessions.filter(S => S.session_id === 1);
  let newSession1 = { session_id: 1, classess: [] };
  session1.forEach(s1 => {
    newSession1.classess.push(s1.class);
    newSession1.classess.forEach(c => {
      c.students = [];
      c.students.push(s1.student);
    })
  });

  newSession1.classess.splice(2, 2);
  
  let session2 = sessions.filter(S => S.session_id === 2);
  let newSession2 = { session_id: 2, classess: [] };
  session2.forEach(s2 => {
    newSession2.classess.push(s2.class);
    newSession1.classess.forEach(c => {
      c.students = [];
      c.students.push(s2.student);
    })
  });

  newSession2.classess.splice(2, 2);
  

  return JSON.stringify([newSession1, newSession2]);
}

console.log(result(sessions));
