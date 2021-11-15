const firebaseConfig = {

  // apiKey: "AIzaSyDuG4EKILMHMHyUphhu1YKTn-Xbw-EotcM",
  // authDomain: "ghori-71827.firebaseapp.com",
  // projectId: "ghori-71827",
  // storageBucket: "ghori-71827.appspot.com",
  // messagingSenderId: "736322017596",
  // appId: "1:736322017596:web:b4de048a1fd5694b24e639"

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID


    // apiKey: "AIzaSyDuG4EKILMHMHyUphhu1YKTn-Xbw-EotcM",
    // authDomain: "ghori-71827.firebaseapp.com",
    // projectId: "ghori-71827",
    // storageBucket: "ghori-71827.appspot.com",
    // messagingSenderId: "736322017596",
    // appId: "1:736322017596:web:b4de048a1fd5694b24e639"
  };

  export default firebaseConfig;