class User {
    constructor({ name, email, phone, dob, picture, nat, location }) {
        this.fullname = `${name.title} ${name.first} ${name.last}`
        this.email = email
        this.phone = phone
        this.dob = dob.date
        this.age = dob.age
        this.nat = nat
        this.location = location
        this.picture = picture.large
    }
}