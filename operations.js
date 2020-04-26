const assert = require('assert'); 

//insert doc
exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection); 
    coll.insert(document, (err, result) =>{
        assert.equal(err, null); 
        console.log("Inserted" + result.result.n + 
        "document(s) into the collection " + collection); 
        callback(result)
    }); 
}

//find doc
exports.findDocuments = (db, collection, callback) => {
        const coll = db.collection(collection); 
        coll.find({}).toArray((err, docs) => {
            assert.equal(err, null); 
            callback(docs)
        });
}

//delete doc 
exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection); 
    coll.deleteOne(document, (err, result)=>{
        assert.equal(err, null); 
        console.log("Removed the document ", document); 
        callback(result);
    })
}

//update 
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection); 
    coll.updateOne(document, { $set: update}, null, (err, result)=> {
        assert.equal(err, null); 
        console.log('Updated the document with ', update);
        callback(result);
    } )
}

