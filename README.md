# wetrot

## Pre-requisites

- git 2.x
- JDK 11.x
- Maven 3.x
- Angular 8.x
- nodejs 10.x
- npm 6.x
- docker 18.x
- intellij

You may find it usefull it you use Linux OS :

- [ubuntu/fedora] (https://github.com/newlight77/ubuntu)

Whatever the OS, you may use this to customize your bash :

- [bash_custom] (https://github.com/newlight77/bash_custom)

## Quickstart

_1._ Clone all repositories as followed :

```bash
git clone git clone https://github.com/wesquad/wetrot.git
```

_2._ Install [code formatter] (https://github.com/newlight77/git-hooks-code-autoformat.git)

_3._ Import projects inside you [Intellij] (https://www.jetbrains.com/idea/download)

_4._ Set to use [Java Google style](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml) inside Intellij

_5._ Compile :

```bash
./ci/build/compile.sh
```

_6._ Run Backend :

```bash
cd wetrot-backend-java
mvn spring-boot:run
```

_8._ Access the [application UI](http://localhost:8080)

## Backlog

[trello](https://trello.com/b/HX4zDeN8/wetrot).
