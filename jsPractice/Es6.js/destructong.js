const platform = {
    websiteName: 'www.aaa.cc',
    admin: 'abid hasan',
    moderator: 'afia khatun',
    member: {
        id1: {
            name: 'abid',
            occupation: 'student'
        },
        id: '2',
        id: '3'
    },
    blog: {
        sub1: 'tech',
        sub2: 'programming',
        sub3: 'machine learning'
    }

}
const {
    websiteName,
    admin,
    moderator,
    member,
    blog
} = platform
const {
    sub1,
    sub2,
    sub3
} = platform.blog

const {
    name,
    occupation
} = platform.member.id1
console.log(blog, websiteName, sub1, sub2, sub3, name, occupation)
console.log(platform.member.admi?.id)
//destracting array
const [nam,age]=['abid',22]
console.log(nam, age)