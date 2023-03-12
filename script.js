const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
const progressItems = document.querySelectorAll('.progress-item');
const progressText = document.querySelector('.progress-text');
const nextBtn = document.querySelector('.next-btn');

let remainingItems = checkboxes.length;

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      progressItems[index].classList.add('checked');
      remainingItems--;
    } else {
      progressItems[index].classList.remove('checked');
      remainingItems++;
    }
    if (remainingItems === 0) {
      progressText.style.display = 'none';
      nextBtn.style.display = 'block';
    } else {
      progressText.textContent = `${remainingItems} item${remainingItems === 1 ? '' : 's'} remaining`;
    }
    if(remainingItems > 0){
      progressText.style.display = 'block';
      nextBtn.style.display = 'none';
    }
  });
});


