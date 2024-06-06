# Introduction
This repo hosts the sourcce code for the website [donaldson.black](https://donaldson.black). It is created using `React` and `NextJs` built on a bun runtime. 

## Getting Started

First, run the development server:

```bash
bun --bun run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Bun Server

First, build the website using

```bash
bun --bun run build
```

Then, start the production server

```bash
bun --bun run start
```

Then, open the webserver at [http://localhost:3000](http://localhost:3000) or wherever your website is hosted

### Docker Container

First build the image

```bash
docker build -t donaldsonblack .
```

Then deploy the image

```bash
docker run donaldsonblack
```