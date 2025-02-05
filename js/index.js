console.log("This is just for the indexed DB");

// Index Db creation function
const indexDBCreation = ()  => {
  const selectOption = document.getElementById("indexDbSelection");
  const db_name = selectOption.value;
  const version = document.getElementById("version");
  const objectStoreValue = document.getElementById("objectStore").value;
  console.log(objectStoreValue);
  const db_version = version.value;
  console.log(db_name);
  let db;
  let data = {
    id: uid(),
    deviceid: uid()
}
  let objectStore = null;
  console.log("creation button clicked");

  // creating an DB with the version number in indexed DB here using open
  const request = window.indexedDB.open(db_name, db_version);

  // to handle all the error which is throwing from the request
  request.onerror = (err) => {
    console.log("Error while doing the operations", err);
  };

  // this code will execute after the db created and executed onupgradeneeded event
  request.onsuccess = (ev) => {
    db = ev.target.result;

    // Doing the transaction after the DB versioning transaction done for the readwrite operations
        // creating data to post it in the db store
    console.log("From Success", db);

    // inserting data to the DB
    insertData(db, objectStoreValue, data);
  };

  // here is the place where we will be creating an objects in the DB
  // upgrading the object sctructure in the DB
  // updating th versioning in the DB
  request.onupgradeneeded = (ev) => {
    db = ev.target.result;
    let oldVersion = ev.oldVersion;
    let newVersion = ev.newVersion || db.version;
    console.log("DB updated from ", oldVersion, "to ", newVersion);

    // creating an object store inside the indexDB database
    if (!db.objectStoreNames.contains(objectStoreValue)) {
      objectStore = db.createObjectStore(objectStoreValue, {
        keyPath: "id",
      });
    }

    // here we are trying to delete the object store in the DB
    // if(db.objectStoreNames.contains(objectStoreValue) ){
    //     db.deleteObjectStore(objectStoreValue);
    // }

    console.log("From onupgradeneeded Success", db);
  };
}

const uid = () => {
  const uid = crypto.randomUUID();
  return uid;
}

const insertData = (db, objectStoreValue, data) => {
  if(!db.objectStoreNames.contains('objectStoreValue')) {
    console.warn("NOt having the Store")
    return;
  }
  // creating the transaction 
  let tx = db.transaction([objectStoreValue], 'readwrite');
  tx.oncomplete = (ev) => {
    console.log("Transaction completed");
    console.log(ev)
  }
  tx.onerror = (err) => {
    console.warn(err)
  }

  // specifying the store to do the transaction for add the request data
  let store = tx.objectStore(objectStoreValue);
  let addRequest = store.add(data);
  addRequest.onsuccess = (ev) => {
    console.log("Object created Successfully");
  }
  addRequest.onerror = (ev) => {
    console.log("error while creating the add request");
  }
}