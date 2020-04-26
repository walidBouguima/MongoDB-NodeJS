const assert = require('assert'); 

//insert doc
exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection); 
    return coll.insert(document); 
}

//find doc
exports.findDocuments = (db, collection, callback) => {
        const coll = db.collection(collection); 
        return coll.find({}).toArray();
}

//delete doc 
exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection); 
    coll.deleteOne(document);
}

//update 
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection); 
    return coll.updateOne(document, { $set: update}, null);
}

