class TeamMember {
    name;
    address;
    role;
    constructor(name, address, role) {
        this.name = name;
        this.address = address;
        this.role = role;
    }
}
class Financial extends TeamMember {
    addNewMember;
    constructor(name, address, role,addNewMember) {
        super(name, address, role)
        this.addNewMember = addNewMember;
    }

    startYourSupport() {
        console.log(this.name, ', Give the budget of next months')
    }

}
class Support extends TeamMember {
    startYourSupport() {
        console.log(this.name, ', Please start your supporting work.')
    }

}
class Marketing extends TeamMember {
    startYourSupport() {
        console.log(this.name, ', What should be our next tragte?')
    }

}
class Technology extends TeamMember {
    newVersion;
    constructor(name, address, role, newVersion) {
        super(name, address, role)
        this.newVersion = newVersion;
    }
    startYourSupport() {
        console.log(this.name, ', Which version of apps is better for us??')
    }

}

const Abid = new Technology('Abid', 'Dhaka,Bangladesh', 'CTO', 1.5)
const Zihad = new Financial('Zihad', 'Dhaka,Bangladesh', 'CFO', 03)
const Rahat = new Marketing('Rahat', 'Dhaka,Bangladesh', 'CEO')
const Alamin = new Support('Alamin', 'Dhaka,Bangladesh', 'CSO')
console.log(Abid)
console.log(Zihad)
console.log(Rahat)
console.log(Alamin)
Abid.startYourSupport()
Zihad.startYourSupport()
Rahat.startYourSupport()
Alamin.startYourSupport()