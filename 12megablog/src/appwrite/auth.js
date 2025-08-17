import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
// likhte hai ab qualtity code

export class Authservice{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);

    }   
    async createAccount(email, password, name) {
        try{
            const userAccount = await this.account.create(
                ID.unique(), // Unique user ID
                email, // User email
                password, // User password
                name // User name
            );
            if(userAccount){
                return userAccount;//call another method //hamara yhn flow jo hai ham aesa krna chahte hai ki jisse bante hi acount login hi hojaye hamari choice hai ham ek msg bhi bhej sakte hai ki account create ho gaya hai
                return this.login ({email, password}); // Automatically log in after account creation
            } else{
                return 
            }

        } catch (error) {
            throw error;
        }
    }
    async login(email, password) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session; // Return the session object
        } catch (error) {
            throw error; // Handle errors appropriately
        }
    }
    async getcurrentUser() {
    try {
        const user = await this.account.get();
        return user; // Return the current user object 
    } catch (error) {
        throw error; // Handle errors appropriately 
        console
    }
    return null; // If no user is logged in, return null
    }
    async logout() {
        try {
            await this.account.deleteSessions(); // Delete the all session where user is logged in
            // Optionally, you can also delete the user account if needed
            // await this.account.delete(); // Uncomment this line to delete the user account
            console.log("User logged out successfully");
            // You can also return a success message or status
            return true; // Return true on successful logout
        } catch (error) {
            throw error; // Handle errors appropriately
        }   
    }

}

const authService = new Authservice();


export default authService
