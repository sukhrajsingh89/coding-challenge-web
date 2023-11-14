# Medibank Coding Challenge

## Overview

A web service has been setup at the following URL: 
-	https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json

## Requirements
You need to:
- Write some code to consume the json hosted on the above web service.
- Output a list of all the cats in alphabetical order under a heading of the gender of their owner.
- Output must be presentable on a web browser.
- Submissions will only be accepted via GitHub or Bitbucket.

Please note:
- It can be written in any language you like.
- Use any libraries/frameworks/SDKs you choose.
- Use industry best practices.
- Use the code to showcase your skill and what you value in a software application.

## Example

```
Male

Angel
Molly
Tigger


Female

Gizmo
Jasper
Notes

```


Test coverage 

------------------------------------------|---------|----------|---------|---------|-------------------
All files                                  |   67.44 |     37.5 |   86.66 |   65.85 |                   
 src                                       |    8.33 |        0 |   33.33 |    8.33 |                   
  App.tsx                                  |     100 |      100 |     100 |     100 |                   
  index.tsx                                |       0 |      100 |     100 |       0 | 7-19              
  react-app-env.d.ts                       |       0 |        0 |       0 |       0 |                   
  reportWebVitals.ts                       |       0 |        0 |       0 |       0 | 3-10              
 src/components/cats-list                  |   86.95 |       75 |     100 |   85.71 |                   
  catsList.component.tsx                   |      75 |       50 |     100 |      75 | 19,24-25          
  catsList.utils.ts                        |     100 |      100 |     100 |     100 | 
  types.ts                                 |       0 |        0 |       0 |       0 | 
 src/components/cats-list/cats-list-gender |     100 |      100 |     100 |     100 | 
  catsListGender.component.tsx             |     100 |      100 |     100 |     100 | 
 src/components/error                      |     100 |      100 |     100 |     100 | 
  error.component.tsx                      |     100 |      100 |     100 |     100 | 
-------------------------------------------|---------|----------|---------|---------|-------------------



  Story book has been also implemneted for cats list component

 