class Student {
    constructor(firstName, lastName, dateOfBirth, semCgpaArray, yearOfEnroll, yearOfPassing) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.semCgpaArray = semCgpaArray;
        this.yearOfEnroll = yearOfEnroll;
        this.yearOfPassing = yearOfPassing;
    }

    static createNewStudent(firstName, lastName, dateOfBirth, semCgpaArray, yearOfEnroll, yearOfPassing) {
        let tempStudent = new Student(firstName, lastName, dateOfBirth, semCgpaArray, yearOfEnroll, yearOfPassing)
        return tempStudent
    }

    get fullName() {
        return `${this.firstName} ${this.lastName} `
    }


    get noOfYearsToGraduate()
    {
        return  this.yearOfPassing - this.yearOfEnroll;
    }

    get age()
    {
        const yearOfBirth = new Date(this.dateOfBirth);
        return 2022-yearOfBirth.getFullYear(); 
    }
    get semGradesArr()
    {
        let semGradesArray=[]
       for(let i=0; i<this.semCgpaArray.length; i++)
        {
            if (this.semCgpaArray[i]>=9 && this.semCgpaArray[i]<=10) semGradesArray[i]='A';
            else if(this.semCgpaArray[i]>=7.5 && this.semCgpaArray[i]<9) semGradesArray[i]='B';
            else if(this.semCgpaArray[i]>=6 && this.semCgpaArray[i]<7.5) semGradesArray[i]='C';
            else if(this.semCgpaArray[i]>=4.5 && this.semCgpaArray[i]<6.0) semGradesArray[i]='D';
            else semGradesArray[i]='F';
        } 
        return semGradesArray;
    }


    get finalCgpa(){
        let sumOfCgpa=0;
        for(let i=0; i<this.semCgpaArray.length; i++)
        {
            sumOfCgpa+=this.semCgpaArray[i];
        }
        let averageOfCgpa = sumOfCgpa/this.semCgpaArray.length;
        return averageOfCgpa;
    }


    get finalGrade(){
        let sumOfCgpa=0, averageOfGrade, averageOfCgpa=0;
        for(let i=0; i<this.semCgpaArray.length; i++)
        {
            sumOfCgpa+=this.semCgpaArray[i];
        }
        averageOfCgpa = sumOfCgpa/this.semCgpaArray.length;
        if (averageOfCgpa>=9 && averageOfCgpa<=10) averageOfGrade='A';
            else if(averageOfCgpa>=7.5 && averageOfCgpa<9) averageOfGrade='B';
            else if(averageOfCgpa>=6 && averageOfCgpa<7.5) averageOfGrade='C';
            else if(averageOfCgpa>=4.5 && averageOfCgpa<6) averageOfGrade='D';
            else averageOfGrade='F';
        return averageOfGrade;
    }

    displayFullName() {
        console.log(`${this.firstName} ${this.lastName} `);
    }

    displayYearOfEnroll() {
        console.log(`${this.yearOfEnroll} `);
    }

    displayDateOfBirth() {
        console.log(`${this.dateOfBirth} `);
    }

    updateFirstname(newFirstname) {
        this.firstName = newFirstname;
    }

    updateLastName(newlastname) {
        this.lastName = newlastname;
    }

    updatesemCgpa(newsemCgpaArray) {
        this.semCgpaArray = newsemCgpaArray;
    }

    updateDOB(newdateOfBirth) {
        this.dateOfBirth = newdateOfBirth;
    }
    
    updateYearOfEnroll(newYearOfEnroll) {
        this.yearOfEnroll = newYearOfEnroll;
    }

    updateYearOfPassing(newYearOfPassing) {
        this.yearOfPassing = newYearOfPassing;
    }

    update(propertyToUpdate, value) {
        switch (propertyToUpdate) {
            case "firstName": 
                this.updateFirstname(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "lastName": 
                this.updateLastName(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "semCgpaArray": 
                this.updatesemCgpa(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "dateOfBirth": 
                this.updateDOB(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfEnroll": 
                this.updateYearOfEnroll(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfPassing": 
                this.updateYearOfPassing(value)
                return `${propertyToUpdate} Updated with ${value}`

            default: return "Wrong Property"

        }
    }
}
const ankit = Student.createNewStudent("Ankit", "Raj", "17 November 2000", [5,9,8.4,8.9,10]  , 2000, 2012)