const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert("./serviceAccountKey.json"),
});

const data = [
  {
    title: "Beach Sunset",
    date: "2024-07-15T19:00:00Z",
    userId: "G9yjSYDPO6MkDPISVytcHe1XymV2",
    transcript: [
      "The sun sets beautifully over the horizon.",
      "Waves crash gently on the shore.",
      "A golden glow fills the sky."
    ],
    summary: "A peaceful evening watching the sunset at the beach."
  },
  {
    title: "Mountain Hike",
    date: "2024-06-22T10:30:00Z",
    userId: "user_XYZ123",
    transcript: [
      "Reached the summit after a long climb.",
      "The view from the top is breathtaking.",
      "Feeling accomplished and refreshed."
    ],
    summary: "A challenging but rewarding hike up the mountain."
  },
  {
    title: "Family Reunion",
    date: "2024-08-01T14:00:00Z",
    userId: "user_ABC789",
    transcript: [
      "Everyone gathered for lunch.",
      "Shared stories and laughter.",
      "Captured lots of photos together."
    ],
    summary: "A joyful family reunion filled with laughter and memories."
  },
  {
    title: "Graduation Day",
    date: "2023-11-18T09:00:00Z",
    userId: "G9yjSYDPO6MkDPISVytcHe1XymV2",
    transcript: [
      "Walked across the stage to receive my diploma.",
      "Family cheered from the audience.",
      "Celebrated with friends after the ceremony."
    ],
    summary: "A proud moment marking the end of my academic journey."
  },
  {
    title: "Concert Night",
    date: "2024-05-10T20:00:00Z",
    userId: "user_LMN456",
    transcript: [
      "The band played all my favorite songs.",
      "The crowd was energetic and lively.",
      "Left with unforgettable memories."
    ],
    summary: "An exciting night enjoying live music at the concert."
  },
  {
    title: "Road Trip",
    date: "2023-09-05T08:45:00Z",
    userId: "user_TUV321",
    transcript: [
      "Started the journey early in the morning.",
      "Stopped at scenic spots along the way.",
      "Sang songs and shared stories in the car."
    ],
    summary: "A fun-filled road trip with friends exploring new places."
  },
  {
    title: "City Lights Tour",
    date: "2024-01-19T18:00:00Z",
    userId: "G9yjSYDPO6MkDPISVytcHe1XymV2",
    transcript: [
      "Admired the city skyline at night.",
      "Visited famous landmarks.",
      "Enjoyed street food and local music."
    ],
    summary: "A magical evening exploring the city's vibrant nightlife."
  },
  {
    title: "Snowboarding Weekend",
    date: "2023-12-14T11:30:00Z",
    userId: "user_ZZZ888",
    transcript: [
      "Hit the slopes early in the morning.",
      "Learned new snowboarding tricks.",
      "Relaxed by the fireplace after a long day."
    ],
    summary: "An adventurous weekend snowboarding in the mountains."
  },
  {
    title: "Birthday Bash",
    date: "2024-04-02T16:00:00Z",
    userId: "user_QWE654",
    transcript: [
      "Friends surprised me with a party.",
      "Played games and danced all night.",
      "Ended the day with cake and gifts."
    ],
    summary: "A memorable birthday celebration with friends and family."
  },
  {
    title: "Café Hangout",
    date: "2024-03-12T17:15:00Z",
    userId: "G9yjSYDPO6MkDPISVytcHe1XymV2",
    transcript: [
      "Met up with friends at our favorite café.",
      "Chatted over coffee and pastries.",
      "Planned our next adventure together."
    ],
    summary: "A relaxing afternoon spent catching up at the café."
  },
];

const promises = data.map(datum => {
  const docRef = admin.firestore().collection("memories").doc(); // generates random ID
  const memoryWithId = { ...datum, memoryId: docRef.id }; // add memoryId to the data

  return docRef.set(memoryWithId);
});

Promise.all(promises).then(() => {
  console.log("All documents added with random IDs.");
  process.exit(0);
});
