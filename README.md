# IMY772 Workshop Assignment

## Functional Requirements for a Hexadecimal Calculator

### 🧮 Basic operations
- Perform addition, subtraction, multiplication and divison operations
- Enforce BODMAS precedence
- Allow users to chain together different operations
- Allow users to convert decimal numbers to hexadecimal numbers, and vice versa

### ⌨️ Input and output
- Only accept positive hexadecimal values up to 3 digits long
- Only return positive hexadecimal values (with no decimals) up to 6 digits

### ❗ Error handling
- Display error message if user attempts divisions by zero
- Display error message to user if a non-hexdecimal number is entered
- Display error message to user if a negative hexdecimal number is entered
- Allow users to correct error after an error message is displayed to them

## Notes For Yan
### Branch log
- phase2 from x...
### Big Oopsies
- There was a mixup with phases 3-1 and 3-2. I started the linking of frontend to the units in phase3-1. To rectify this, phase3-2 branches from phase3-1 and any linking code was removed from phase3-1
- There was a realisation that only hit in phase 3-2 that you need to manually evaluate the input/string entered by the user, and that I did not account for this while completing phase 2. I created a branch called "phase2-2-3" that focuses on exclusively building the functionality around parsing in a string and computing the result based on mathematical precedence and associativity but for hexadecimal values and operations 🫠