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
            if (this.semCgpaArray[i]>=90 && this.semCgpaArray[i]<=100) semGradesArray[i]='A';
            else if(this.semCgpaArray[i]>=75 && this.semCgpaArray[i]<90) semGradesArray[i]='B';
            else if(this.semCgpaArray[i]>=60 && this.semCgpaArray[i]<75) semGradesArray[i]='C';
            else if(this.semCgpaArray[i]>=45 && this.semCgpaArray[i]<60) semGradesArray[i]='D';
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
        if (averageOfCgpa>=90 && averageOfCgpa<=100) averageOfGrade='A';
            else if(averageOfCgpa>=75 && averageOfCgpa<90) averageOfGrade='B';
            else if(averageOfCgpa>=60 && averageOfCgpa<75) averageOfGrade='C';
            else if(averageOfCgpa>=45 && averageOfCgpa<60) averageOfGrade='D';
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
const ankit = Student.createNewStudent("Ankit", "Raj", "17 November 2000", [50,30,40,50,80]  , 2000, 2012)