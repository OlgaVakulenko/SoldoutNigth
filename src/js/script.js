const memberName = [...document.querySelectorAll('.member-name')];
    
fillInitialsIcons(memberName)  

function fillInitialsIcons(arr) {
    for(let item of arr){
        let name = item.innerText.split(' ')[0].split('');
        let surname = item.innerText.split(' ')[1].split('');
        let initials = name[0] + surname[0];
        item.children[0].innerText = initials.toUpperCase()
    }
}