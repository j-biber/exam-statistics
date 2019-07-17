import Subject from './entities/subject.js'
import Student from './entities/student.js'
import Exam from './entities/exam.js'

const exams = {
    examsPassed: [],
    examsFailed: []
}

function createExam(dataObj, exams) {
    const { subject, student, grade } = dataObj;
    const subjectObj = new Subject(subject);
    const studentObj = new Student(...student.trim().split(/\s+/g));
    const exam = new Exam(subjectObj, studentObj, grade);
    if (exam.hasPassed()) {
        exams.examsPassed.push(exam);
    } else {
        exams.examsFailed.push(exam);
    }

    return exam;
}


export {
    exams,
    createExam
}