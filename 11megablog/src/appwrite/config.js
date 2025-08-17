//major configuration for appwrite

import conf from "../conf/conf";
import { Client, Account, ID , Databases,Storage,Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
        .setProject(conf.appwriteProjectId); // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(title,slug,content,featuredImage,status,userId) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Use slug as the document ID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        }catch (error) {
            throw error; // Handle errors appropriately
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Use slug as the document ID
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            ) 

        } catch (error) {
            throw error; // Handle errors appropriately
            
        }

    }
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Use slug as the document ID
            )
            return true; // Return true if deletion is successful
        } catch (error) {
            throw error; // Handle errors appropriately
            return false; // Return false if deletion fails
        }   
            
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Use slug as the document ID
                
            )
            
        } catch (error) {
            throw error; // Handle errors appropriately
            return false
            
        }
    }
    async getPosts(queries=[Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // [Query.equal("status", "published")] // Filter by status if needed yhnn bhi likh skte hai 
                queries ,// Use the provided queries for filtering
                100,// Limit the number of results to 100
                0 // Pagination offset  

            );
        } catch (error) {
            throw error; // Handle errors appropriately
            return false; // Return false if fetching fails
        }
    }


    // fileupload service

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // Generate a unique ID for the file
                file // The file to upload
            );
            return response; // Return the response containing file details
        }
        catch (error) { 
            throw error; // Handle errors appropriately
            return false; // Return false if upload fails
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId // The ID of the file to delete
            );
            return true; // Return true if deletion is successful
        } catch (error) {
            throw error; // Handle errors appropriately
            return false; // Return false if deletion fails
        }
    }
    getFilepreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId // The ID of the file to get preview
            );
        } catch (error) {
            throw error;   
            return false; // Return false if fetching preview fails
        }      
    }

}

const Service = new Service();

export default Service