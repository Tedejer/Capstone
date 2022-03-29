![Brand_Name](./misc/name_flat.png)

## Contents

- [Front End](FrontEnd.md)
- [Back End](BackEnd.md)
- [API](Api.md)
- [Research](Research.md)

## Our goal

A website that people in the local area of Ventura County can use to become a more generous, kind, philanthropic person all around. Aimed at making a person an overall better person and helping them find charities or community service events in the area of Ventura County. Colleges aim to educate people but don’t really teach people how to be better people to society, so one problem we discussed was students who do want to help and donate to charities or participate in beach clean ups and other communal events don’t really know where to go to find charities or events in the local area of Ventura County.

## Status

![Progress](https://progress-bar.dev/30/?scale=100&title=progress&width=1000&color=856A5D&suffix=%)

### Roadmap

- February
  - ~~Front End Version 1 February 1st - February 14th~~
  - ~~Front End Version 2 February 15th - February 19th~~
  - ~~Back End Version 1 February 20th - February 28th~~
- March
  - ~~Inital FrontEnd deploy~~
  - Get feedback on FrontEnd
    - Revaluate GUI based on Feedback
  - Initial BackEnd
- April
  - API
  - Features
- May
  - Presentation App deploy/release

### General Project Concerns

- Establishing a proper tech stack
- Research necessary tools

### Work Environment

A developmental work environment is created for users using VScode 
upon opening the project automated task will serve up the react and json local servers.

A sass watcher script is also ran at start up to aid with scss styling.

Port 3000 is being used by the React Server

Port 8000 is being used by the JSON Server

```
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "⚛️ Run React Server",
      "type": "shell",
      "command": "cd ./charity-islands; npm start"
    },
    {
      "label": "🎨 Watch Sass",
      "type": "shell",
      "command": "cd ./charity-islands; sass --watch src/scss:src/css"
    },
    {
      "label": "📚 Run JSON Database",
      "type": "shell",
      "command": "npx json-server --watch charities.json --port 8000"
    },
    {
      "label": "🟢 Start Working",
      "dependsOn": [
        "⚛️ Run React Server",
        "🎨 Watch Sass",
        "📚 Run JSON Database"
      ],
      "runOptions": {
        "runOn": "folderOpen"
      }
    }
  ]
}
```

## About Us

Ternel E, Jeffery C, Jericho P

We are students from California State University Channel Islands working on our capstone project.

## Misc

[Project Survey](https://forms.gle/MwgDAqQs4hGCz9PQ9)
