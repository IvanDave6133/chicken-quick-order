
## QuickBite Chicken – "Before" Version (Intentionally Flawed UI)

A 4-page chicken ordering website with deliberate usability issues for HCI evaluation.

### Pages & Key Details

**1. Home Page**
- Loud red/yellow/orange banner with "Welcome to QuickBite Chicken"
- Navigation bar with small font, vague labels ("Order" instead of "Cart"), no active page indicator
- Cluttered layout with mixed fonts and competing visual elements

**2. Menu Page**
- 4 items: Fried Chicken, Spicy Chicken, Chicken Wings, Chicken Meal Combo
- Each with image, name, price, excessive description text, and a tiny "Add" button
- No category grouping, misaligned grid, hard to scan

**3. Order/Cart Page**
- Lists added items with total price
- "Submit" button (not "Place Order"), no confirmation after clicking
- No ability to remove or edit items

**4. Contact Page**
- Name + Message form with "Submit" button
- No validation (submits empty), no success/error feedback, misaligned labels

### Functionality
- React Router navigation between all 4 pages
- Simple state (React useState) for cart: add items, display in cart
- All interactions are frontend-only, no backend

### Intentional UX Deficiencies
- Clashing bright colors (red, yellow, orange) with no visual hierarchy
- Multiple inconsistent font families and sizes
- Small, hard-to-notice buttons
- No feedback after any action (add to cart, submit order, contact form)
- Vague button labels ("Add", "Submit")
- Cluttered, misaligned layouts
- No form validation or error handling
