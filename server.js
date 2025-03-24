const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function (req, res) {
  console.log("HOMEPAGE");
  res.sendFile(path.join(__dirname, 'client', 'index.html')); 
});
app.get('/contact', function (req, res) {
  console.log("CONTACT");
  res.sendFile(path.join(__dirname, 'client', 'contact.html')); 
});
app.get('/ourrooms', function (req, res) {
  console.log("OURROOMS");
  res.sendFile(path.join(__dirname, 'client', 'ourrooms.html')); 
});
app.get('/newmarketlocation', function (req, res) {
  console.log("LOCATION");
  res.sendFile(path.join(__dirname, 'client', 'location.html')); 
});
app.get('/hotelfacilities', function (req, res) {
  console.log("FACILITIES");
  res.sendFile(path.join(__dirname, 'client', 'hotelfacilities.html')); 
});
app.get('/events', function (req, res) {
  console.log("EVENTS");
  res.sendFile(path.join(__dirname, 'client', 'events.html')); 
});
app.get('/news', function (req, res) {
  console.log("NEWS");
  res.sendFile(path.join(__dirname, 'client', 'news.html')); 
});
app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
// Import the necessary packages
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'alexander21inn@gmail.com',
    pass: 'kfmi txwt xmfb ktvx',
  },
});

// ...

app.post('/contact-form-process', (req, res) => {
    const name = req.body.Name;
    const lastName = req.body.lastname;
    const email = req.body.Email;
    const contactNumber = req.body.contactnumber;
    const subject = req.body.subject;
    const mailOptions = {
    from: 'alexander21inn@gmail.com',
    to: 'barry.phasel235@gmail.com', // Replace with the recipient's email address
    subject: 'New form submission',
    text: `
      Name: ${name}
      Last Name: ${lastName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Subject: ${subject}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Form submission successful');
    }
  });
});