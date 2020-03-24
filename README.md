# BrokerBuddy

Brooker Buddy is a full statck React site meant to help users track multiple stock and save stock information to user-created watchlists

## Installation

Broker Buddy can be broken down into two parts, the front end and the back end. To set up the back end of Broker Buddy. From your terminal 'cd' into '/broker_buddy/broker_buddy_backend', and from there enter:

```bash
bundle install
```
to install applicable pacakges for rails and then enter

```bash
rails s --port=3001
```
to start the Ruby on Rails server on the required port.

For the front end portion of the app, 'cd' into '/broker_buddy' with a new terminal window and enter:

```bash
npm install
```
to install the applicable pacakges for React and then enter:

```bash
npm start
```
to start the react server.


Navigate to 'http://localhost:3000/' in your browser to start tracking stocks


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)