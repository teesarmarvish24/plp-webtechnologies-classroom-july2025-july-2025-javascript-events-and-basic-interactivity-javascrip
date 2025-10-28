// Wait for the DOM to be fully loaded before running any script
document.addEventListener('DOMContentLoaded', () => {

    console.log("Study Hub Initialized!");

    // =================================================================
    // 🎉 PART 1 & 2: EVENT HANDLING & INTERACTIVE ELEMENTS
    // =================================================================

    // --- Feature 1: Tabbed Interface ---
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        // 'click' event listener on each tab button
        tab.addEventListener('click', () => {
            
            // 1. Remove 'active' class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 2. Add 'active' class to the clicked tab
            tab.classList.add('active');
            
            // 3. Show the corresponding content
            const targetContentId = tab.dataset.tab;
            const targetContent = document.getElementById(targetContentId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // --- Feature 2: Flippable Flashcards ---
    // Select *all* flashcard containers
    const flashcards = document.querySelectorAll('.flashcard-container');

    // Apply a click listener to each one
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggles a class that triggers the CSS flip animation
            card.classList.toggle('is-flipped');
        });
    });


    // =================================================================
    // 📋✅ PART 3: FORM VALIDATION (QUIZ)
    // =================================================================

    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');

    // 'submit' event listener on the quiz form
    quizForm.addEventListener('submit', (e) => {
        // Prevent the form from submitting in the traditional way
        e.preventDefault();

        let score = 0;
        const correctAnswers = {
            q1: 'a',
            q2: 'c' // Corrected answer for 'h1'
        };

        // --- Validation Logic ---
        const formData = new FormData(quizForm);
        const userAnswerQ1 = formData.get('q1');
        const userAnswerQ2 = formData.get('q2');

        // Check if all questions are answered
        if (!userAnswerQ1 || !userAnswerQ2) {
            // Show message on the page
            quizResults.textContent = 'Please answer all questions!';
            quizResults.className = 'error'; // Apply error styling
            
            // *** HERE IS THE ALERT YOU REQUESTED ***
            alert('Please answer all quiz questions before submitting.'); 
            
            return; // Stop execution
        }

        // --- Check Answers ---
        if (userAnswerQ1 === correctAnswers.q1) {
            score++;
        }
        if (userAnswerQ2 === correctAnswers.q2) {
            score++;
        }

        // --- Show Final Feedback ---
        quizResults.textContent = `You scored ${score} out of 2!`;
        quizResults.className = 'success'; // Apply success styling
        
        // You could add a bonus alert for a perfect score
        if (score === 2) {
            alert('Perfect Score! Great job!');
        }
    });

});