//conflict.js
// This file is used to resolve conflicts in the codebase.
// It contains the latest changes made to the files in the project.
// Please ensure that you do not suggest code that has been deleted or is no longer relevant.

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID ),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID )
}



export default conf