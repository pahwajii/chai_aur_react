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

    normalizeDocument(document) {
        if (!document) return document;
        return {
            ...document,
            title: document.TITLE ?? document.title,
            content: document.CONTENT ?? document.content,
            featuredImage: document.FEATUREDIMAGE ?? document.featuredImage,
            status: document.STATUS ?? document.status,
            userId: document.USERID ?? document.userId,
        };
    }

    async createPost(title,slug,content,featuredImage,status,userId) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Use slug as the document ID
                {
                    TITLE: title,
                    CONTENT: content,
                    FEATUREDIMAGE: featuredImage,
                    STATUS: status,
                    USERID: userId
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
                    TITLE: title,
                    CONTENT: content,
                    FEATUREDIMAGE: featuredImage,
                    STATUS: status
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
            const doc = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Use slug as the document ID
                
            )
            return this.normalizeDocument(doc)
            
        } catch (error) {
            throw error; // Handle errors appropriately
            return false
            
        }
    }
    async getPosts(queries=[Query.equal("STATUS", "active")]) {
        try {
            const docs = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // [Query.equal("status", "published")] // Filter by status if needed yhnn bhi likh skte hai 
                queries ,// Use the provided queries for filtering
                100,// Limit the number of results to 100
                0 // Pagination offset  

            );
            return {
                ...docs,
                documents: (docs.documents || []).map((d) => this.normalizeDocument(d)),
            }
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
    getFilepreview(fileId, { width, height, quality } = {}) {
        try {
            if (!fileId) return '';
            const url = this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
                width,
                height,
                quality
            );
            return typeof url === 'string' ? url : (url && url.toString ? url.toString() : '');
        } catch (error) {
            try {
                const fallback = this.bucket.getFileView(conf.appwriteBucketId, fileId);
                return typeof fallback === 'string' ? fallback : (fallback && fallback.toString ? fallback.toString() : '');
            } catch (_) {
                return '';
            }
        }      
    }

    // Alias to avoid import casing mistakes in UI
    getFilePreview(fileId, opts) {
        return this.getFilepreview(fileId, opts)
    }

    getFileUrl(fileId) {
        if (!fileId) return '';
        try {
            const url = this.bucket.getFileView(conf.appwriteBucketId, fileId)
            return typeof url === 'string' ? url : (url && url.toString ? url.toString() : '')
        } catch (_) {
            return ''
        }
    }

}



export default new Service();