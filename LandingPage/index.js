document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answerId = question.dataset.answer;
        const answer = document.getElementById(answerId);
  
        // Close any other open answer
        document.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
          if (otherAnswer !== answer) {
            otherAnswer.classList.remove("active");
          }
        });
  
        // Toggle the clicked answer
        answer.classList.toggle("active");
      });
    });
  });

  
//   // Data for different use cases
// const useCaseData = {
//     "Better Hiring": {
//       text: "Candidate Screening: By accessing candidate interview data from multiple companies, recruiters can gain insights into a candidate's skills, experience, and performance during different interview processes. This can help them make more informed hiring decisions.",
//       image: "better-hiring.png",
//     },
//     "Loyalty Check": {
//       text: "Loyalty Check: Recruiters can analyze patterns to understand employee loyalty and reduce attrition risks.",
//       image: "loyalty-check.png",
//     },
//     Retention: {
//       text: "Retention: Use data-driven insights to create policies that improve employee satisfaction and retention.",
//       image: "retention.png",
//     },
//     "Background Verification": {
//       text: "Background Verification: Access historical data to verify the authenticity of candidate claims.",
//       image: "background-verification.png",
//     },
//   };
  
//   // Function to update content dynamically
//   function updateContent(useCase) {
//     // Update the title and description
//     document.getElementById("useCaseTitle").textContent = useCase;
//     document.getElementById("useCaseDescription").textContent = useCaseData[useCase].text;
  
//     // Update the image
//     document.getElementById("useCaseImage").src = useCaseData[useCase].image;
//     document.getElementById("useCaseImage").alt = useCase;
  
//     // Update active button state
//     const buttons = document.querySelectorAll(".sidebar button");
//     buttons.forEach((button) => button.classList.remove("active"));
//     document.getElementById(useCase).classList.add("active");
//   }
  