# BeautyApp

Welcome to the BeautyApp repository! This is a demo application created to showcase my knowledge and skills in React Native, Redux, Navigation, and other essential tools and techniques used in mobile app development.

Features Overview

<span style="font-weight:bold;">Authentication Flow</span>
<h2>Auth Module Design</h2>

<img src="https://github.com/user-attachments/assets/2c60c14e-9b25-4638-a88a-df2b461eb50d" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/user-attachments/assets/5e4ad2f1-4aec-4aed-af56-01605634e05f" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/user-attachments/assets/afd641f4-ca53-4662-8bb9-af4453f7e26c" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;

The app begins with a comprehensive authentication flow that includes:
- <b>Login Screen:</b> Users can log in using their credentials.
- <b>Sign Up Screen:</b> New users can create an account.
- <b>Forgot Password:</b> Screen: Users can recover their password.

For the authentication flow, I utilized the <b>fbemitter</b> library to efficiently switch between the authentication stack and the main application stack. This ensures a smooth transition from the login phase to the main app experience.

<span style="font-weight:bold;">Main Application Flow</span>

<img src="https://github.com/user-attachments/assets/c8dd3128-8b28-4859-9257-aa14d3816942" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/user-attachments/assets/b30d54fc-3ead-4be2-86fb-0f8fc35399fa" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/user-attachments/assets/618fcd8a-bea2-4727-a7b4-4fe164c17013" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/user-attachments/assets/3d442d2d-c42f-4ff7-8a8a-ae688665bbb5" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/user-attachments/assets/94ecc161-47a7-4fe5-ae94-ad5579e0bc64" width="20%" height="10%"/> &nbsp; &nbsp; &nbsp;

After successful authentication, users are navigated to the Home Page. Here’s what you can expect:
- <b>Home Page:</b> Displays a list of items available. Users can click on any item to navigate to the Item Details screen for more information.
- <b>Favorites:</b> Users can mark items as favorites. These favorites are managed using Redux, allowing the favorites list to persist across sessions. The favorites list can be viewed in the Favorites Screen.
