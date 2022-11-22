var courses=[
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science',
    'Computer Science'
    ]
    
function autocompleteMatch(input) {
    var inputE = input.toLowerCase();
    if (input == '') {
      return null;
    }
    var reg = new RegExp(inputE)
    return courses.filter(function(term) {
        if (term.match(reg)) {
            term = term.toLocaleLowerCase();
          return term;
        }
    });
  }
  
  function showResults(val) {
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i=0; i<terms.length; i++) {
      list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + '<a href="#href"' + list + '</a>'+ '</ul>';
  }