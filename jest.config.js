module.exports = {
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest"
    },
    verbose: true
}