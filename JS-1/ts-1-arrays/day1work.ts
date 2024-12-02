{
    type user = {
        name: string,
        age: number,
        loggedIn:boolean
    }

    const user1: user = {
        name: "Mickey",
        age: 99,
        loggedIn: false
    }

    const user2: user = {
        name: "Mouse",
        age: 20,
        loggedIn: true
    }

    console.log(user1 , user2)

    console.log(`Age of  ${user1.name} is ${user1.age}`)

    console.log()


    let users:user[] = [
        user1, user2
    ]

    console.log(users)

    console.log(users[0])
    console.log(users[1].name)
type transaction = {accountNumber: number, status:string, balance:number, type:string};
let user1transaction: transaction = {accountNumber : 40987654389, status: 'Active', balance: 10000, type: 'savings'}
let user2transaction: transaction = {accountNumber : 409870054389, status: 'Active', balance: 200, type: 'current'}
let user3transaction = {...user2, accountNumber : 4567890879876986}



}