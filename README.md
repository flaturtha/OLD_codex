# Codex .. BookTracker

tracking updates & changes:

12/7/15 - oops! Forgot to update lately! Oh, well. Who honestly cares!!?? 
2:30p - Anyway, got the basic app working. Not all the functionality I wanted but it'll suffice. And I can upload my CSV file (use the following in Terminal: ./mongoimport --host 127.0.0.1:3001 --db meteor --collection books --type csv --headerline --file /Volumes/MacFiles/3EyedMonster_Mac/Documents/WebDev/Meteor/codex_raw1.csv). Note: "v0.1 .. works on a basic level" is just the code. "v0.01 .. data upload" include (I think/hope) the actual data. Not sure if this is a good idea or what but we'll see!

3:00p - Working on deployment to S3/EC2.

11/24/15 - FINALLY(!) got the subdoc update syntax figured out. ~~Next step is to add in the Spot Illustrations.~~ Works for both Full & spot illustrations.

11/23/15 - all but illustrations set in BookView to allow editing. A form input is created on double-click, allowing update. Works on all fields except illustrations, due to issues with the subdocument values.