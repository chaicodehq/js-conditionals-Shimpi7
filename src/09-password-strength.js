/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
   if(password==""||typeof password!="string"){
    return "weak";
   }
   // regex expression
   const char=/.{8,}/;
   const hasUpperCase=/[A-Z]/;
   const hasLowerCase=/[a-z]/;
   const hasNumber=/[0-9]/;
   const specialChar = /[!@#$%^&*()_+=\[\]{}|;:,.<>?-]/;
   let counter=0;
   if(char.test(password)){
      counter+=1;
   }
   if(hasUpperCase.test(password)){
      counter+=1;
   }
   if(hasLowerCase.test(password)){
      counter+=1;
   }
   if(hasNumber.test(password)){
      counter+=1;
   }
   if(specialChar.test(password)){
      counter+=1;
   }
   switch(counter){
      case 0:
      case 1:
         return "weak";
      case 2:
      case 3:
         return "medium";
      case 4:
         return "strong";
      case 5:
         return "very strong";
   }
}
