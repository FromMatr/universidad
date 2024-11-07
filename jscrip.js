
const starRatings = document.querySelectorAll('.star-rating');


starRatings.forEach(starRating => {
    const stars = starRating.querySelectorAll('span');

    stars.forEach(star => {
      
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
   
            stars.forEach(s => s.classList.remove('selected'));

          
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected');
            }

      
            console.log(`Has calificado con ${value} estrellas.`);
        });
    });
});
