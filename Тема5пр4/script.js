const items = document.querySelectorAll('.item');
const countElement = document.getElementById('count');
const sumElement = document.getElementById('sum');


for (let i = 0; i < items.length; i++) {
    
    
    items[i].addEventListener('click', function() {
        
        this.classList.toggle('selected');
        
        let totalCount = 0;
        let totalSum = 0;

        for (let j = 0; j < items.length; j++) {

            if (items[j].classList.contains('selected')) {
                totalCount++;
                
                let number = parseInt(items[j].innerText);
                totalSum = totalSum + number;
            }
        }

        countElement.innerText = totalCount;
        sumElement.innerText = totalSum;
    });
}