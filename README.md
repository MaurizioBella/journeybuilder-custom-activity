# Custom Activity
- Demo of Marketing Cloud Journey Builder Custom Activity in Heroku
- [Journey Builder Custom Activity Deep Dive](https://marketingautomation.isobar.ch/2020/12/07/journey-builder-custom-activity-deep-dive/)
- [Heroku](https://sfmc-jb-custom-activity-jwt.herokuapp.com/)

# API Event
- Run the JB via API Event and check the DE sfmc-jb-custom-activity-jwt
- HTTP POST https://{{et_subdomain}}.rest.marketingcloudapis.com/interaction/v1/events
```
{
    "ContactKey": "some@email.com",
    "EventDefinitionKey": "APIEvent-3d419618-4da9-227d-6830-abd8aeea3031",
    "Data": {
        "SubscriberKey": "some@email.com",
        "Id": "fae4b2a0-6461-11ec-b549-c18789e70054",
        "Event": "demo",
        "Text": "demo"
    }
}
```

### Installation
First, install all dependencies: `npm i`

Add all environment variables in `.env` file

Then, run in development mode: `npm run dev`