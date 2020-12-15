/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

 function makeFriendsList(friends) {
  let ul = document.createElement('ul');
    
    let names = friends.map(item => item.firstName + ' ' + item.lastName);    
           
        for (let name of names) {
          let li = document.createElement('li')
          li.innerHTML = name;
          ul.append(li); 
       }
       return ul;
       
      }  
  
   
     
    

   
