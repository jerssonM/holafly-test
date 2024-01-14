# [Holafly Test](https://holafly-test.vercel.app/)

This project was built using Next.js 13 as a full-stack framework, leveraging the new app router to host various pages as well as the authentication APIs powered by NextAuth and internal APIs for session initiation validation and fetching mobile plans for each user.

The project features an initial login page where we can access the system using specific user credentials:

> Jersson | email: jersson@test.com - password: holafly-test-jersson

> Carlos | email: carlos@test.com - password: holafly-test-carlos

Following the successful login, we are directed to the homepage where we can view, through card interfaces, the various plans that the user has subscribed to.

## Building with:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=**white**)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

## Project structure

    src
    ├── app                # Next.js 13 app route folder
    ├────── api            # Next.js api's (nextauth & local api's)
    ├── lib                
    ├─-─-─- components     # common ui components
    ├─-─-─- config         # global config files
    ├───-─- constants      # common constants values
    ├───-─- container      # container components (business logic)
    ├───-─- providers      # provider components
    └───-─- services       # api services and axios instances
    └───-─- styles         # global css files and tailwind config
## Project setup

Create a .env file and include the values that are indicated in the .env.example

> Run project with yarn dev

