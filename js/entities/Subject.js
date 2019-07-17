class Subject {
    constructor(name) {
        this.name = name;
    }
    getSubjectName() {
        return this.name.substring(0, 3).toUpperCase();
    }
}

export default Subject