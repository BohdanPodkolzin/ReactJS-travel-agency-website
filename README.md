# ReactJS Travel Agency Website✈️

## Live Demo

You can check out the live demo of the project [here](https://bohdanpodkolzin.github.io/ReactJS-travel-agency-website/).

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Setting Up EmailJS

1. **Register an Account:**
   - Create an account on [EmailJS](https://www.emailjs.com/).
   
2. **Create Email Service:**
   - Add a new email service and get the Service ID.

3. **Create Email Templates:**
   - Add email templates and get the Template ID.

4. **Get Public Key:**
   - Go to your EmailJS account settings to find your Public Key.

5. **Configure EmailJS in the Project:**
   - Find `serviceId`, `templateId`, and `publicKey` in `EmailForm.js` and input your data.

### Installing Dependencies

To set up the project locally, run the following commands in your terminal:

```sh
npm install
npm install jquery
npm install react-router-dom
npm install --save @emailjs/browser
```

### Running the Project

To start the development server, run:

```sh
npm start
```

## Project Structure

- `src/components`: Contains the React components used in the project.
  - `Button.js`: The button component.
  - `CardItem.js`: The card item component.
  - `Footer.js`: The footer component.
  - `Navbar.js`: The navigation bar component.
  - `pages/Home.js`: The home page component.
- `src/App.js`: The main application component.
- `src/App.css`: The main stylesheet for the application.

## Configuring EmailJS

1. Register an account on [EmailJS](https://www.emailjs.com/) to receive emails from users.
2. Add a new email service and get your Service ID.
3. Add email templates and get your Template ID.
4. Go to your account settings and find your Public Key.

Update the `EmailForm.js` file with your EmailJS credentials:

```javascript
const serviceId = 'your_service_id';
const templateId = 'your_template_id';
const publicKey = 'your_public_key';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


