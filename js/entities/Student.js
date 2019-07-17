class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getStudentData() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export default Student
