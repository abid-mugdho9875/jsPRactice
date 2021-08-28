class Support {
    name;
    address;
    role;
    constructor(name, address, role) {
        this.name = name;
        this.address = address;
        this.role = role;
    }
    startYourSupport() {
        console.log(this.name,'Please start your supporting work.')
    }

}

const Rahat = new Support('Rahat', 'Rangpur', 'CEO')
console.log(Rahat)
Rahat.startYourSupport()
const Zihad = new Support('Zihad', 'Dhaka', 'CFO')
console.log(Zihad)
Zihad.startYourSupport()