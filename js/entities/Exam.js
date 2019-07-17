class Exam {
    constructor(subjectObj, studentObj, grade) {
        this.subject = subjectObj;
        this.student = studentObj;
        this.grade = grade;
    }
    getExamInfo() {
        const subjectData = this.subject.getSubjectName();
        const studentData = this.student.getStudentData();
        return `${subjectData}-${studentData}`;
    }
    hasPassed() {

        return this.grade > 5
    }
}


export default Exam

