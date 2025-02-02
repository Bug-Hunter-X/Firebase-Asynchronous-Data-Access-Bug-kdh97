Instead of directly accessing the data, use the `.then()` method to ensure the data is available before accessing it.

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log("Data: ", doc.data());
    // Access properties here
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```