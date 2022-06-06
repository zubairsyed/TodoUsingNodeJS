
// getting the value of a tag under delete button
let anchor = document.getElementById('anchor');

// onclick function of input checkbox
// when we click on input box it call the runn function along with the id
function runn(id1) {
    // the id is stored in a variable to add in url
    let chkbx_id = id1.getAttribute('id');
    // getting the element input in unchecked state
    let unmarkedCheckbox = document.querySelector('input[type="checkbox"]');
    console.log(unmarkedCheckbox.checked);
    // applying the conditions of being completing / non completing of tasks
    if (unmarkedCheckbox.checked == true) {
        anchor.setAttribute('href', '/delete-todo/?id=' + chkbx_id);
    }
    else {
        anchor.setAttribute('href', '');
    }
    console.log(id1.getAttribute('id'));
}
