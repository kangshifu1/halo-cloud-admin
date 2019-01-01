## halo-cloud-admin
Halo Cloud服务治理平台，Halo Cloud服务治理平台，专注于Spring Cloud全方位治理平台

## 接口信息

### 获取服务列表:
  http://localhost:8081/applications
  
```
{
name: "SPRING-CLOUD-ADMIN",
buildVersion: null,
status: "UP",
statusTimestamp: "2019-01-01T02:47:17.411Z",
instances: [
{
id: "e380fad88a6d",
version: 2,
registration: {
name: "SPRING-CLOUD-ADMIN",
managementUrl: "http://192.168.31.228:8081/actuator",
healthUrl: "http://192.168.31.228:8081/actuator/health",
serviceUrl: "http://192.168.31.228:8081/",
source: "discovery",
metadata: {
management.port: "8081",
jmx.port: "49811"
}
},
registered: true,
statusInfo: {
status: "UP",
details: {
hystrix: {
status: "UP"
},
diskSpace: {
status: "UP",
details: {
total: 499963170816,
free: 360221446144,
threshold: 10485760
}
},
refreshScope: {
status: "UP"
},
discoveryComposite: {
status: "UP",
details: {
discoveryClient: {
status: "UP",
details: {
services: [
"spring-cloud-admin"
]
}
},
eureka: {
description: "Remote status from Eureka server",
status: "UP",
details: {
applications: {
SPRING-CLOUD-ADMIN: 1
}
}
}
}
}
}
},
statusTimestamp: "2019-01-01T02:47:17.411Z",
info: { },
endpoints: [
{
id: "httptrace",
url: "http://192.168.31.228:8081/actuator/httptrace"
},
{
id: "caches",
url: "http://192.168.31.228:8081/actuator/caches"
},
{
id: "loggers",
url: "http://192.168.31.228:8081/actuator/loggers"
},
{
id: "health",
url: "http://192.168.31.228:8081/actuator/health"
},
{
id: "refresh",
url: "http://192.168.31.228:8081/actuator/refresh"
},
{
id: "env",
url: "http://192.168.31.228:8081/actuator/env"
},
{
id: "heapdump",
url: "http://192.168.31.228:8081/actuator/heapdump"
},
{
id: "features",
url: "http://192.168.31.228:8081/actuator/features"
},
{
id: "scheduledtasks",
url: "http://192.168.31.228:8081/actuator/scheduledtasks"
},
{
id: "mappings",
url: "http://192.168.31.228:8081/actuator/mappings"
},
{
id: "archaius",
url: "http://192.168.31.228:8081/actuator/archaius"
},
{
id: "beans",
url: "http://192.168.31.228:8081/actuator/beans"
},
{
id: "configprops",
url: "http://192.168.31.228:8081/actuator/configprops"
},
{
id: "threaddump",
url: "http://192.168.31.228:8081/actuator/threaddump"
},
{
id: "metrics",
url: "http://192.168.31.228:8081/actuator/metrics"
},
{
id: "conditions",
url: "http://192.168.31.228:8081/actuator/conditions"
},
{
id: "auditevents",
url: "http://192.168.31.228:8081/actuator/auditevents"
},
{
id: "service-registry",
url: "http://192.168.31.228:8081/actuator/service-registry"
},
{
id: "info",
url: "http://192.168.31.228:8081/actuator/info"
}
],
buildVersion: null,
tags: { }
}
]
},
{
name: "APOLLO",
buildVersion: null,
status: "OFFLINE",
statusTimestamp: "2019-01-01T04:37:17.087Z",
instances: [
{
id: "69866be9a8c5",
version: 1,
registration: {
name: "APOLLO",
managementUrl: "http://iZ23950eyqcZ:8099/actuator",
healthUrl: "http://iZ23950eyqcZ:8099/health",
serviceUrl: "http://iZ23950eyqcZ:8099/",
source: "discovery",
metadata: { }
},
registered: true,
statusInfo: {
status: "OFFLINE",
details: {
exception: "java.net.UnknownHostException",
message: "iZ23950eyqcZ: nodename nor servname provided, or not known"
}
},
statusTimestamp: "2019-01-01T04:37:17.087Z",
info: { },
endpoints: [
{
id: "health",
url: "http://iZ23950eyqcZ:8099/health"
}
],
buildVersion: null,
tags: { }
}
]
},
{
name: "SPRING-CLOUD-CLIENT",
buildVersion: "0.0.1-SNAPSHOT",
status: "UP",
statusTimestamp: "2019-01-01T03:02:43.487Z",
instances: [
{
id: "64f533f076a9",
version: 3,
registration: {
name: "SPRING-CLOUD-CLIENT",
managementUrl: "http://192.168.31.228:8082/actuator",
healthUrl: "http://192.168.31.228:8082/actuator/health",
serviceUrl: "http://192.168.31.228:8082/",
source: "discovery",
metadata: {
management.port: "8082",
jmx.port: "53719"
}
},
registered: true,
statusInfo: {
status: "UP",
details: {
hystrix: {
status: "UP"
},
diskSpace: {
status: "UP",
details: {
total: 499963170816,
free: 359993294848,
threshold: 10485760
}
},
refreshScope: {
status: "UP"
},
discoveryComposite: {
status: "UP",
details: {
discoveryClient: {
status: "UP",
details: {
services: [
"spring-cloud-admin"
]
}
},
eureka: {
description: "Eureka discovery client has not yet successfully connected to a Eureka server",
status: "UP",
details: {
applications: {
SPRING-CLOUD-ADMIN: 1
}
}
}
}
}
}
},
statusTimestamp: "2019-01-01T03:02:43.487Z",
info: {
groupId: "cn.springcloud.admin",
artifactId: "spring-cloud-admin-sample",
version: "0.0.1-SNAPSHOT"
},
endpoints: [
{
id: "httptrace",
url: "http://192.168.31.228:8082/actuator/httptrace"
},
{
id: "caches",
url: "http://192.168.31.228:8082/actuator/caches"
},
{
id: "loggers",
url: "http://192.168.31.228:8082/actuator/loggers"
},
{
id: "refresh",
url: "http://192.168.31.228:8082/actuator/refresh"
},
{
id: "health",
url: "http://192.168.31.228:8082/actuator/health"
},
{
id: "env",
url: "http://192.168.31.228:8082/actuator/env"
},
{
id: "heapdump",
url: "http://192.168.31.228:8082/actuator/heapdump"
},
{
id: "features",
url: "http://192.168.31.228:8082/actuator/features"
},
{
id: "mappings",
url: "http://192.168.31.228:8082/actuator/mappings"
},
{
id: "scheduledtasks",
url: "http://192.168.31.228:8082/actuator/scheduledtasks"
},
{
id: "archaius",
url: "http://192.168.31.228:8082/actuator/archaius"
},
{
id: "configprops",
url: "http://192.168.31.228:8082/actuator/configprops"
},
{
id: "beans",
url: "http://192.168.31.228:8082/actuator/beans"
},
{
id: "threaddump",
url: "http://192.168.31.228:8082/actuator/threaddump"
},
{
id: "metrics",
url: "http://192.168.31.228:8082/actuator/metrics"
},
{
id: "conditions",
url: "http://192.168.31.228:8082/actuator/conditions"
},
{
id: "auditevents",
url: "http://192.168.31.228:8082/actuator/auditevents"
},
{
id: "service-registry",
url: "http://192.168.31.228:8082/actuator/service-registry"
},
{
id: "info",
url: "http://192.168.31.228:8082/actuator/info"
}
],
buildVersion: "0.0.1-SNAPSHOT",
tags: { }
}
]
}
]
```
  

### 获取info:

  http://localhost:8081/instances/64f533f076a9/actuator/info
  
  ```
  {
  groupId: "cn.springcloud.admin",
  artifactId: "spring-cloud-admin-sample",
  version: "0.0.1-SNAPSHOT"
  }
  ```

### 获取线程

  http://localhost:8081/instances/64f533f076a9/actuator/threaddump

```
{
threads: [
{
threadName: "AsyncResolver-bootstrap-executor-0",
threadId: 66,
blockedTime: -1,
blockedCount: 0,
waitedTime: -1,
waitedCount: 22,
lockName: "java.util.concurrent.SynchronousQueue$TransferStack@12db6a0d",
lockOwnerId: -1,
lockOwnerName: null,
inNative: false,
suspended: false,
threadState: "WAITING",
stackTrace: [
{
methodName: "park",
fileName: "Unsafe.java",
lineNumber: -2,
className: "sun.misc.Unsafe",
nativeMethod: true
},
```



