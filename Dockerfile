FROM oven/bun:latest as base
WORKDIR /app 
COPY . .
RUN bun install
RUN bun --bun run build
EXPOSE 3000
CMD ["bun", "--bun", "run", "start"]