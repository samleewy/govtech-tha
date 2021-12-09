# Govtech Take-home Assignment

## Setting up
1. Install dependencies
```
yarn install
```
2. Run application
```
yarn start
```

## Testing
```
yarn test
Press <a> to run all test cases
```

## Notes / Assumptions
1. Since this assignment is based on a mock API, the utility functions that are used to grab search results / suggestions do not take into account what the user inputs. However, arguments are added into those functions if required in the future.
2. API calls have been set to a timeout of 5 seconds. To test for network failure, a change to an invalid URL will trigger an error, resulting in an error message in the front-end.