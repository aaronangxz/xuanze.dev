---
displayed_sidebar: notesSideBar
---

# GitHub Actions

# Deploy
- `${{secrets.X}}` will read from Github secrets

```yml
# This is a basic workflow to help you get started with Actions

name: Deployment

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
      - name: Heroku login credentials
        run: |
          cat > ~/.netrc <<EOF
            machine api.heroku.com
              login $HEROKU_EMAIL
              password $HEROKU_API_KEY
            machine git.heroku.com
              login $HEROKU_EMAIL
              password $HEROKU_API_KEY
          EOF
        env:
          HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
          HEROKU_EMAIL: ${{ secrets.HEROKU_EMAIL }}
      - name: Login Heroku
        run: heroku login
      - name: Set Remote
        run: heroku git:remote -a sea-dinner-order
      - name: Filter
        run: git filter-branch -- --all
      - name: Push
        working-directory: ./
        run: git push --force heroku master
```

# CodeCov

```yml
name: Test and coverage

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 2
      - uses: actions/setup-go@v2
        with:
          go-version: '1.17'
      - name: Run coverage in processors
        working-directory: processors
        env:
          TEST_DB_USERNAME: ${{secrets.TEST_DB_USERNAME}}
          TEST_DB_PASSWORD: ${{secrets.TEST_DB_PASSWORD}}
          TEST_DB_URL: ${{secrets.TEST_DB_URL}}
          TEST_DB_NAME: ${{secrets.TEST_DB_NAME}}
          AES_KEY: ${{secrets.AES_KEY}}
          TOKEN: ${{secrets.TOKEN}}
          TEST_REDIS_URL: ${{secrets.TEST_REDIS_URL}}
          TEST_REDIS_PORT: ${{secrets.TEST_REDIS_PORT}}
          TEST_REDIS_PASSWORD: ${{secrets.TEST_REDIS_PASSWORD}}
          TEST_NEWRELIC_KEY: ${{secrets.TEST_NEWRELIC_KEY}}
        run: go test -coverprofile=coverage.out -covermode=atomic
      - name: Run coverage in bot
        working-directory: bot
        env:
          TEST_DB_USERNAME: ${{secrets.TEST_DB_USERNAME}}
          TEST_DB_PASSWORD: ${{secrets.TEST_DB_PASSWORD}}
          TEST_DB_URL: ${{secrets.TEST_DB_URL}}
          TEST_DB_NAME: ${{secrets.TEST_DB_NAME}}
          AES_KEY: ${{secrets.AES_KEY}}
          TOKEN: ${{secrets.TOKEN}}
          REDIS_URL: ${{secrets.REDIS_URL}}
          REDIS_PORT: ${{secrets.REDIS_PORT}}
          REDIS_PASSWORD: ${{secrets.REDIS_PASSWORD}}
          TEST_REDIS_URL: ${{secrets.TEST_REDIS_URL}}
          TEST_REDIS_PORT: ${{secrets.TEST_REDIS_PORT}}
          TEST_REDIS_PASSWORD: ${{secrets.TEST_REDIS_PASSWORD}}
          TEST_NEWRELIC_KEY: ${{secrets.TEST_NEWRELIC_KEY}}
        run: go test -coverprofile=coverage.out -covermode=atomic
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v2
```

# Static Check
- Matrix: Runs all combinations

```yml
name: "StaticCheck"
on: ["push", "pull_request"]

jobs:
  ci:
    name: "Run Static Check"
    strategy:
      fail-fast: false
      matrix:
        os: ["windows-latest", "ubuntu-latest", "macOS-latest"]
        go: ["1.17.x"]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - uses: WillAbides/setup-go-faster@v1.7.0
        with:
          go-version: ${{ matrix.go }}
      - run: "go vet ./..."
      - uses: dominikh/staticcheck-action@v1.2.0
        with:
          version: "2022.1.1"
          install-go: false
          cache-key: ${{ matrix.go }}
```