# IMY772 Workshop Assignment

## Link To Demo Video
- 🔗 [Demo Video Link] (https://drive.google.com/file/d/1IJt2Cb6yn9_yQmzRVTTjJEevQCksLMW_/view?usp=sharing)

## Functional Requirements For A Hexadecimal Calculator
### 🧮 Basic Operations
- Perform addition, subtraction, multiplication and divison operations
- Enforce BODMAS precedence
- Allow users to chain together different operations
- Allow users to convert decimal numbers to hexadecimal numbers, and vice versa

### ⌨️ Input and Output
- Only accept positive hexadecimal values up to 3 digits long
- Only return positive hexadecimal values (with no decimals) up to 6 digits

### ❗ Error Handling
- Display error message if user attempts divisions by zero
- Display error message to user if a non-hexdecimal number is entered
- Display error message to user if a negative hexdecimal number is entered
- Allow users to correct error after an error message is displayed to them

## Notes For Yan
### 💔 Mistakes During The Assignment
- I had a a mixup with phases 3-1 and 3-2. I started the linking of frontend to the units in phase3-1. To rectify this, phase3-2 branches from phase3-1 and any linking code was removed from phase3-1
- I had a realisation phase 3-2 that you need to manually evaluate the input/string entered by the user, and that I did not account for this while completing phase 2. I created a branch called "phase2-2-3" that focuses on exclusively building and testing the functionality around parsing in a string and computing the result based on mathematical precedence and associativity but for hexadecimal values and operations 🫠
- Added more robust error handling to the backend and frontend in phase3-2