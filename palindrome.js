let input = document.querySelector("#inp");
      let output = document.querySelector("#out");
      function display() {
        let a=input.value;
        let b = a.split('');
        let c= b.reverse();
        let d = c.join('');
        if (a === d)
         output.innerHTML = "it is a palindrome";
        else
        output.innerHTML="it is not a palindrome"
        
      }