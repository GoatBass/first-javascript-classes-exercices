class AddressBook {
    // Implement the constructor method
    // Implement the store method
    // Implement the lookup method
  }
  
  const myAddresBook = new AddressBook();
  
  myAddressBook.store("bart", "bart@simpsons.com");
  myAddressBook.store("maggie", "maggie@simpsons.com");
  
  myAddressBook.lookup("bart");
  // 'bart@simpsons.com'
  
  myAddressBook.lookup("homer");
  // 'address not found'