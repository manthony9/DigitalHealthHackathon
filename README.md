# DigitalHealthHackathon

Part of our soluton for the Digital Health Hackathon 2021

- Problem: Travel and entry and exit into facilties in a post COVID world.

- Solution: 
 - An easy to use , Digital Health Passport App that lets users authenticate themselves through a QR Code at any participating facility.
The QRCode is a URI issued to users when they get vaccinated. Once vaccinated, the user details are entered in the system and parsed to create a URI.
 - The URI along with the digital health document is saved to the cloud.
 - A secure gateway is used for safe read/write calls to the database for accessing user vaccine data.
 - The URI serves as they key to the digital health document containing the users vaccination details.
 - The key is used to retrieve data for authentication, once successfully authenticated, the digital health document is retrieved and parsed to display user information.

What did I learn ?

- linking react-app with mongo
- Using materializecss to design simple looking landiing page
- Using a qr code generator for qr codes
- How to account for privacy and system design when designing a large-scale app.

Prototype Link : https://xd.adobe.com/view/89170f4e-06cd-4c87-a31e-ef1cf5c6de69-dc44/screen/865ba30a-7e53-48ba-ba7d-a647df59c848

Heroku Link: https://fast-headland-06270.herokuapp.com/

Youtube presentaion: https://youtu.be/G94HMOYZyhw

Credits:
- Matin Truong for the prototype and UI Design
- Yancy Liu for the presentaion, analysis and solution design
- Mark Marino for the solution design and presentaion


