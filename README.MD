### Step 1. 安装依赖
npm install

### Step 2. 
本地运行：
docker 运行 redis，OR 本地启动redis-server
确认 routes/index.js 文件中路由采用 localhost
启动进程 npm start

### Step 3.
k8s 运行：
确认 routes/index.js 文件中路由采用服务名
打包镜像 docker build -t service_string_v1 .