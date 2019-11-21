import {Contact} from './contact';
export let CONTACTS: Contact[]=[
    {
        name:"Praveen Battula",
        email:'praveen@technovert.com',
        mobile:'919233452342',
        landline:'40301231211',
        website:'www.technovert.com',
        address:`123 now here
        Some Street
        Madhapur`
        }
];

export function pushcontact(newcontact:Contact){
    CONTACTS.push(newcontact);
}