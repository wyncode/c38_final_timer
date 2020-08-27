if (process.env.NODE_ENV !== "production")require("dotenv").config();

require("../config");

const Task = require("../models/task"),
  User = require("../models/user"),
  Session = require("../models/session"),
  faker = require("faker"),
  mongoose = require("mongoose");

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  console.log(collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Task.countDocuments({}, function (err, count) {
    console.log("Number of tasks:", count);
  });

  await Session.countDocuments({}, function (err, count) {
    console.log("Number of sessions:", count);
  });

  const userIdArray = [];

  const sessionTypeArray = [
    'pomo', 'default', 'custom'
  ];

  for (let i = 0; i < 100; i++) {
    const user = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    await user.generateAuthToken();
    userIdArray.push(user._id);
  }
  for (let i = 0; i < 100; i++) {
    const task = new Task({
      name: faker.lorem.paragraph(),
      completed: Boolean(Math.round(Math.random())),
      numOfSessions: Math.floor(Math.random() * 5),
      dueDate: faker.date.future(),
      startDate: faker.date.past(),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
    });
    await task.save();
  }

  for (let i = 0; i < 100; i++) {
    const session = new Session({
      description: faker.lorem.paragraph(),
      sessionType:
        sessionTypeArray[Math.floor(Math.random() * sessionTypeArray.length)],
      activeSession: Boolean(Math.round(Math.random())),
      sessionDates: faker.date.past(),
      timeSpent: Math.floor(Math.random() * 25),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
    });
    await session.save();
  }

  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Task.countDocuments({}, function (err, count) {
    console.log("Number of tasks:", count);
  });
  await Session.countDocuments({}, function (err, count) {
    console.log("Number of sessions:", count);
  });
};
console.log("Database seeded!")

dbReset();
