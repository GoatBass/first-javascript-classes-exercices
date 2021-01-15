class AddressBook {
    // Implement the constructor method
    constructor(){
        this.elementsName = []
        this.elementsMail = []
    }
    // Implement the store method
    store(name, email){
        this.elementsName.push(name)
        this.elementsMail.push(email)
    }
    // Implement the lookup method
    lookup(name){
        for(let i = 0; i < this.elementsMail.length; i++){
            if(this.elementsMail[i].substring(0, this.elementsMail[i].lastIndexOf('@')) === name){
                return this.elementsMail[i]
            }
        }
        return 'Adress not found'
    }
  }
  
  const myAddressBook = new AddressBook();
  
  myAddressBook.store("bart", "bart@simpsons.com");
  myAddressBook.store("maggie", "maggie@simpsons.com");
  
  console.log(myAddressBook.lookup("bart"));
  // 'bart@simpsons.com'
  
  console.log(myAddressBook.lookup("homer"));
  // 'address not found'

  console.log(myAddressBook.lookup("maggie"));
