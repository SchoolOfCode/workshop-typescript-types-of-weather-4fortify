# step 1 - Create a starter typscript vite/react app

Link - https://vitejs.dev/guide/#scaffolding-your-first-vite-project ✅

# step 2

Define react component tree:

MVP 1:

- main.tsx ✅
  - App.tsx ✅
    - SearchBar.tsx ✅
      - Search text input element ✅
      - Search button element ✅
      - Result paragraph element ✅

MVP 2:

- main.tsx
  - App.tsx
    - SearchBar.tsx
      - Search text input element
      - Search button element
    - Result.tsx
      - Result paragraph element

# step 3
Use previous fireplace palace code to create POC of working API✅
Modify api fetch to use weather api instead✅
specify object parameters to display (weather, temp, location etc)✅
create the React components and create the logic in Typescript  ✅
create error handling
separate react components into searchbar, weather display, error section


# Learnings
Read API documentation thoroughly - initially thought we had to do a double API fetch route to get location then convert to lon/lat for weather.
Practise react more
Then apply TS to it.
There are multiple TS types we weren't aware of, like ChangeEvent types and the specific html element they are associated with.