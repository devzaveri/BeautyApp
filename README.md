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
- <b>Home Page:</b> Displays a list of items available. Users can click on any item to navigate to the <b>Item Details screen</b> for more information.
- <b>Favorites:</b> Users can mark items as favorites. These favorites are managed using Redux, allowing the favorites list to persist across sessions. The favorites list can be viewed in the Favorites Screen.

<span style="font-weight:bold;">Bottom Tab Bar & Navigation</span>
The application features a bottom tab bar for easy navigation:
- <b>Home Tab:</b> Takes you to the Home Page.
- <b>Profile Tab:</b> Provides access to user profile settings.
 
<span style="font-weight:bold;">Profile Management</span>
The Profile Tab allows users to:
- <b>View Profile:</b> Check their current profile details.
- <b>Edit Profile:</b> Update their profile information.
   
<b><span style="font-weight:bold;">Technical Details</span></b>

<b>React Native:</b>
The application is built using React Native, leveraging its powerful components and capabilities to create a smooth, native-like user experience.

<b>Redux:</b>
  State management is handled with Redux, ensuring that data flows smoothly between different components and that the state is maintained consistently across the application.
      
<b>Navigation:</b>
  The navigation is managed using React Navigation, with stack navigation for handling screen transitions and a bottom tab navigator for the main sections of the app.
      
<b>Emitter:</b>
  I utilized the <b>fbemitter</b> library to handle event-based communication between different parts of the app, especially during the authentication flow.
  
<b>Responsive Design:</b>
Used <b>react-native-full-responsive</b> to ensure the app looks great on all screen sizes.

<b>Drawer Navigation:</b>
  The app also incorporates a drawer for additional navigation options, making it easy to access less frequently used screens.

<h1>Getting Started</h1>
To get started with this project, clone the repository and install the necessary dependencies:

    git clone https://github.com/devzaveri/BeautyApp.git
    cd BeautyApp
    npm install
Then, run the app using:

    npx react-native run-android
<h3>Conclusion</h3>
This project is a reflection of my expertise in React Native, showcasing how different technologies and patterns can be effectively integrated into a mobile application. Feel free to explore the code, and if you have any questions or suggestions, don’t hesitate to reach out!
