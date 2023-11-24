import { collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "../../firebaseConfig.js";

export async function storeToDoItem(userId, userEmail, itemText) {
    try {

        
        /*STEP 5: Get a refernce to the collection we want to store. Lets use the following documentation 
        to figure this out: https://firebase.google.com/docs/firestore/query-data/get-data */

        // db stands for firebase database 
        // stores userId
        const userTodoListCollection = collection(db,`todo-list-${userId}`);

        // generate a unique id for the document and assemble our data into an object
        const docUniqueId = generateUniqueId();

        //STEP 6: Create a object called data that will hold the information going into the document 
        const data = {
            // value assigned to field, userid on left is field going into document, on right is variable holding the value going into the fields
            userId: userId,
            email: userEmail,
            itemText: itemText,
            uid: docUniqueId,
        };

        // store the following data in a document the specified user collection
        // userTodoListCollection -> the collection we store into
        // docUniqueId -> the name of our document
        // data -> the data object the document will contain
        await setDoc(doc(userTodoListCollection, docUniqueId), data); // gets reference to user's collection and sets doc based on added data
    } catch (error) {
        console.error("Error storing data:", error);
        throw new Error("Failed to store item");
    }
}

// helper function for storeToDoItem that generates a unique Id
// we need this so that we can get a referance each document
function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    const uniqueId = `${timestamp}_${randomNum}`;
    return uniqueId;
}
