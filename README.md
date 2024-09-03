<p align="center">
  <img src="banner.png" height="400">
  <h1 align="center">
   Awesome Software Architecture
    <br>
    <a href="https://github.com/mehdihadeli/awesome-software-architecture/actions/workflows/ci.yml"><img alt="build-status" src="https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square" /></a>
    <a href="https://github.com/sindresorhus/awesome" ><img alt="awesome" src="https://awesome.re/badge-flat2.svg?style=flat-square" /></a>
    <a href="https://github.com/mehdihadeli/awesome-software-architecture/blob/main/LICENSE" ><img alt="license" src="https://img.shields.io/badge/License-CC0_1.0-E91E63.svg?style=flat-square" /></a>
  </h1>
</p>

> Curated list of awesome articles and resources to learn and practice software architecture, patterns and principles. This repository will be updated continuously, keep yourself up to date .

I created this repository to share a set of links that I found valuable and inspiring and I share them with others to improve our knowledge together ✌️. 

> **🚀 Go ahead to the official web page here:** 
**🌐 [https://awesome-architecture.com](https://awesome-architecture.com/)**

--------------------------

## Contents
- [Software Architecture](#software-architecture)
- [Actor Model Architecture](#actor-model-architecture)
- [Algorithms](#algorithm)
- [Clean Architecture](#clean-architecture)
- [Onion Architecture](#onion-architecture)
- [Hexagonal Architecture](#hexagonal-architecture)
- [Vertical Slice Architecture](#vertical-slice-architecture)
- [Event Driven Architecture](#event-driven-architecture)
- [Service Oriented Architecture](#service-oriented-architecture)
- [Domain Driven Design](#domain-driven-design)
- [Data Driven Design](#data-driven-design)
- [CQRS](#cqrs)
- [Microservices](#microservices)
- [Modular Monolith](#modular-monolith)
- [Architectural Design Principles](#architectural-design-principles)
- [Design Patterns](#design-patterns)
- [Cloud Design Patterns](#cloud-design-patterns)
- [Cloud Best Practices](#cloud-best-practices)
- [Cloud Native](#cloud-native)
- [Platform as a Service](#platform-as-a-service)
- [Infrastructure as a Service](#infrastructure-as-a-service)
- [DevOps](#devops)
- [Reverse Proxy - Load Balancing](#reverse-proxy---load-balancing)
- [Service Discovery And Registry](#service-discovery-and-registry)
- [Service Mesh](#service-mesh)
- [Object Oriented Design](#object-oriented-design)
- [Systems Design](#systems-design)
- [Scaling](#scaling)
- [Back Pressure](#back-pressure)
- [Clean Code](#clean-code)
- [Abstraction](#abstraction)
- [Design Best Practices](#design-best-practices)
- [Anti Patterns](#anti-patterns)
- [Eventual Consistency](#eventual-consistency)
- [Messaging](#messaging)
- [Distributed Transactions](#distributed-transactions)
- [Distributed Locking](#distributed-locking)
- [RESTful API Design](#rest)
- [gRPC](#grpc)
- [Caching](#caching)
- [Functional Programming](#functional)
- [Concurrency](#concurrency)
- [Sharding](#sharding)
- [Refactoring](#refactoring)
- [NoSQL](#nosql)
- [Relational Database](#relational-database)
- [Microsoft Azure Cloud](#microsoft-azure-cloud)
- [Modeling](#modeling)
- [Open Source](#open-source)
- [Code Review](#code-review)
- [Interview](#interview)
- [Architecture Decision Records (ADR)](#adr)
- [Micro-Frontend](#micro-frontend)
- [Others](#others)


> **Note**: Bellow contents is not complete yet and it's in progress, and I will complete the **descriptions** over the time, but you are feel free to [contribute](contributing.md) this part. 


### Software Architecture

| Topic | Description |
|:-------:|:----------- |
| [Software Architecture](docs/software-architecture.md) | Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems.

### Actor Model Architecture

| Topic | Description |
|:-------:|:----------- |
| [Actor Model Architecture](docs/actor-model-architecture/actor-model-architecture.md) |  The Actor Model is a programming paradigm in which the basic unit of execution is the actor. In the Actor Model, an actor does work by using messages to express actions upon a system or other actors within the given system
| [Akka .NET](docs/actor-model-architecture/akka-net.md) |  Akka.NET is a toolkit and runtime for building highly concurrent, distributed, and fault tolerant event-driven applications on .NET.
| [Microsoft Orleans](docs/actor-model-architecture/orleans.md) |Orleans is a cross-platform framework for building robust, scalable distributed applications.  
| [ProtoActor](docs/actor-model-architecture/protoactor.md) | Ultra fast distributed actors for Go, C# and Java/Kotlin.

### Algorithms

| Topic | Description |
|:-------:|:----------- |
| [Algorithms](docs/algorithm.md) |  An algorithm is a procedure used for solving a problem or performing a computation.

### Clean Architecture

| Topic | Description |
|:-------:|:----------- |
| [Clean Architecture](docs/clean-architecture.md) |  The Clean Architecture is the system architecture guideline proposed by Robert C. Martin (Uncle Bob) derived from many architectural guidelines like Hexagonal Architecture, Onion Architecture, etc...

### Onion Architecture
| Topic | Description |
|:-------:|:----------- |
| [Onion Architecture](docs/onion-architecture.md) | The Onion architecture, introduced by Jeffrey Palermo, and it is a form of layered architecture and we can visualize these layers as concentric circles.

### Hexagonal Architecture
| Topic | Description |
|:-------:|:----------- |
| [Hexagonal Architecture](docs/hexagonal-architecture.md) | The Hexagonal Architecture or Ports and Adapters architecture, introduced by Alistair Cockburn and it's an architectural pattern that allows input by users or external systems to arrive into the Application at a Port via an Adapter, and allows output to be sent out from the Application through a Port to an Adapter.

### Vertical Slice Architecture
| Topic | Description |
|:-------:|:----------- |
| [Vertical Slice Architecture](docs/vertical-slice-architecture.md) | The vertical slice architecture is a technique that helps us build maintainable applications by separating the application around features or `vertical slices`. 

### Event Driven Architecture
| Topic | Description |
|:-------:|:----------- |
| [Event Driven Architecture](docs/event-driven-architecture.md) | Event-driven architecture is a software design pattern in which decoupled applications can asynchronously publish and subscribe to events via an event broker.

### Service Oriented Architecture
| Topic | Description |
|:-------:|:----------- |
| [Service Oriented Architecture](docs/service-oriented-architecture.md) | Service Oriented Architecture (SOA) is a software architecture design pattern in which application components provide services to other components using a communication protocol over a network. SOA aims to achieve loose coupling between software components, allowing them to be easily replaced or updated without affecting the rest of the system.

### Domain Driven Design
| Topic | Description |
|:-------:|:----------- |
| [Domain Driven Design](docs/domain-driven-design/domain-driven-design.md) | The key concepts and principles of Domain Driven Design, which emphasizes the importance of building a software system around a shared understanding of the business domain and the use of ubiquitous language.
| [Value Objects](docs/domain-driven-design/value-objects.md) | The concept of value objects in Domain Driven Design, which are immutable objects that represent a concept or measurement and are characterized by their value, rather than their identity.
| [Aggregation](docs/domain-driven-design/aggregation.md) | The concept of aggregation in Domain Driven Design, which is a way of grouping objects together to form a logical unit that can be treated as a single entity.
| [Anemic Domain Model](docs/domain-driven-design/anemic-domain-model.md) | The Anemic Domain Model anti-pattern in Domain Driven Design, which refers to a model where the domain objects contain little or no behavior and the business logic is instead implemented in separate services.
| [Rich Domain Model](docs/domain-driven-design/rich-domain-model.md) | The Rich Domain Model pattern in Domain Driven Design, which advocates for placing behavior and business logic in the domain objects themselves, rather than in separate services.
| [Domain Model](docs/domain-driven-design/domain.md) | The Domain Model concept in Domain Driven Design, which is a representation of the core concepts, entities, and relationships that make up a business domain.
| [Domain Service](docs/domain-driven-design/domain-service.md) | The Domain Service concept in Domain Driven Design, which is a stateless, transactional operation that performs a business task and is not associated with any specific entity.
| [Application Service](docs/domain-driven-design/application-service.md) | The Application Service concept in Domain Driven Design, which is responsible for coordinating the execution of multiple domain services to achieve a higher-level business goal.
| [Domain Events](docs/domain-driven-design/domain-events.md) | The Domain Events concept in Domain Driven Design, which are messages that represent a significant occurrence within the business domain and can be used to trigger downstream processes or updates to other systems.
| [Integration Events](docs/domain-driven-design/integration-event.md) | The Integration Events concept in Domain Driven Design, which are messages that represent a significant occurrence in the context of an external system and can be used to trigger downstream processes or updates to the local system.
| [Bounded Context](docs/domain-driven-design/bounded-context.md) | The Bounded Context concept in Domain Driven Design, which is a way of dividing a large, complex business domain into smaller, more manageable parts that are defined by a common language, context, and set of boundaries.
| [Infrastructure](docs/domain-driven-design/infrastructure.md) | The Infrastructure concept in Domain Driven Design, which includes all the components and systems that support the operation of the application, such as databases, message brokers, and third-party services.
| [Tactical Design Patterns](docs/domain-driven-design/tactical-design-patterns.md) | The Tactical Design Patterns in Domain Driven Design, which are recurring solutions to common problems that arise when building domain models, services, and repositories.
| [Strategic Design Patterns](docs/domain-driven-design/strategic-design-patterns.md) | The Strategic Design Patterns in Domain Driven Design, which are high-level principles and patterns that guide the overall architecture and organization of a large, complex software system.
| [Mappings](docs/domain-driven-design/mapping.md) | The concept of mappings in Domain Driven Design, which are the mechanisms used to transform data between the domain model and other parts of the system, such as the database or user interface.
| [Domain Primitives](docs/domain-driven-design/domain-primitives.md) | The Domain Primitives concept in Domain Driven Design, which are simple, immutable value types that represent basic concepts in the domain, such as dates, times, and quantities.
| [Enum](docs/domain-driven-design/enums.md) | The Enum concept in Domain Driven Design, which is a special type of domain primitive that represents a discrete set of values.
| [Exception and Validation](docs/domain-driven-design/exception-and-validation.md) | The concepts of exception handling and validation in Domain Driven Design, which are important mechanisms for ensuring the correctness and robustness of the application.

### Data Driven Design
| Topic | Description |
|:-------:|:----------- |
| [Data Driven Design](docs/data-driven-design.md) | Data-Driven Design is a software development methodology that emphasizes the use of data and analytics to inform design decisions. It involves collecting, analyzing, and using data to create and improve software products, services, and experiences. This approach relies on empirical evidence to guide design choices, and it requires a strong data infrastructure and analytics capabilities. Data-Driven Design can help organizations create more effective, efficient, and user-friendly products and services by making informed decisions based on real-world data. It can also lead to better customer engagement, increased revenue, and improved user satisfaction.

### CQRS
| Topic | Description |
|:-------:|:----------- |
| [CQRS](docs/cqrs.md) | CQRS (Command Query Responsibility Segregation) is a design pattern that separates the concerns of command execution and data querying in a system. The basic idea behind CQRS is to split the application model into two separate models: one for reading data and another for writing data. This allows the two models to be optimized for their specific purposes, and provides benefits such as better scalability, performance, and maintainability. The CQRS pattern is often used in conjunction with event sourcing, which is a technique for capturing all changes to an application state as a sequence of events. Together, CQRS and event sourcing can provide a powerful way to build highly scalable and fault-tolerant systems.

### Microservices
| Topic | Description |
|:-------:|:----------- |
| [Microservices](docs/microservices/microservices.md) | A brief introduction to the concept of microservices, including their benefits and drawbacks, as well as common characteristics of microservices architecture.
| [Communication](docs/microservices/communication.md) | An overview of the different communication patterns and protocols that can be used in microservices architecture, such as synchronous vs. asynchronous communication, REST vs. message-based communication, and the use of service buses.
| [Composite UI](docs/microservices/composite-ui.md) | A discussion of the Composite UI pattern, which involves combining multiple microservices into a single user interface, and the different approaches to implementing it, such as server-side composition vs. client-side composition.
| [Service Boundaries](docs/microservices/services-boundries.md) | An exploration of how to define and enforce service boundaries in microservices architecture, including strategies for identifying service boundaries and techniques for implementing them, such as domain-driven design and bounded contexts.
| [Testing](docs/microservices/testing.md) | A guide to testing microservices, including strategies for testing individual services and testing the interactions between services, as well as tools and frameworks for testing microservices.
| [API Gateway](docs/microservices/api-gateway/api-gateway.md) | An introduction to the concept of an API Gateway, which acts as a single entry point for clients to access multiple microservices, and the benefits and drawbacks of using an API Gateway.
| [API Gateway - Ambassador](docs/microservices/api-gateway/ambassador.md) | A specific implementation of an API Gateway using the Ambassador open-source project, including an overview of its features and how to configure and deploy it.
| [API Gateway - Kong](docs/microservices/api-gateway/kong.md) | A specific implementation of an API Gateway using the Kong open-source project, including an overview of its features and how to configure and deploy it.
| [API Gateway - Ocelot](docs/microservices/api-gateway/ocelot.md) | A specific implementation of an API Gateway using the Ocelot open-source project, including an overview of its features and how to configure and deploy it.
| [Observability](docs/microservices/observability/observability.md) | An exploration of the concept of observability in microservices architecture, which involves the ability to monitor and debug distributed systems, and the different techniques and tools for achieving observability, such as logging, tracing, health checks ,and monitoring.
| [Observability - Distributed Tracing](docs/microservices/observability/distributed-tracing.md) | A deep dive into the use of distributed tracing as a tool for achieving observability in microservices architecture, including an overview of how distributed tracing works, common tracing frameworks, and how to instrument microservices for tracing.
| [Observability - Monitoring](docs/microservices/observability/monitoring.md) | An overview of the different types of monitoring that can be used in microservices architecture, such as system monitoring, application monitoring, and business monitoring, and the different tools and approaches for monitoring microservices.
| [Observability - Diagnostics](docs/microservices/observability/diagnostics.md) | An overview of the different techniques and tools for diagnosing and debugging issues in microservices architecture, including log analysis.
| [Observability - Logging](docs/microservices/observability/logging.md) | Logging is an important aspect of observability in microservices architecture. This topic covers different logging frameworks and strategies used for monitoring and troubleshooting distributed systems.
| [Observability - CorrelationId](docs/microservices/observability/correlationId.md) | Correlation ID is a technique used to track requests across multiple microservices. This topic explains what Correlation ID is and how it is implemented in a distributed system.
| [Observability - Tools - EFK](docs/microservices/observability/tools/efk.md) | EFK stack (Elasticsearch, Fluentd, and Kibana) is a popular logging and observability solution. This topic covers the basics of EFK, how it works, and how to set it up in a microservices architecture.
| [Observability - Tools - ELK](docs/microservices/observability/tools/elk.md) | ELK stack (Elasticsearch, Logstash, and Kibana) is another popular logging and observability solution. This topic covers the basics of ELK, how it works, and how to set it up in a microservices architecture.
| [Observability - Tools - Fluent Bit](docs/microservices/observability/tools/fluent-bit.md) | Fluent Bit is a lightweight and efficient log processor and forwarder. This topic covers the basics of Fluent Bit, how it works, and how to set it up in a microservices architecture.
| [Observability - Tools - FluentD](docs/microservices/observability/tools/fluentd.md) | Fluentd is an open-source log collector and aggregator. This topic covers the basics of Fluentd, how it works, and how to set it up in a microservices architecture.
| [Observability - Tools - Loki](docs/microservices/observability/tools/loki.md) | Loki is a horizontally-scalable, highly-available log aggregation system. This topic covers the basics of Loki, how it works, and how to set it up in a microservices architecture.
| [Resiliency](docs/microservices/resiliency/resiliency.md) | Resiliency is the ability of a system to recover from failures and continue functioning. This topic covers different resiliency patterns and strategies used for building fault-tolerant microservices.
| [Resiliency - Idempotency](docs/microservices/resiliency/idempotency.md) | Idempotency is a technique used to ensure that an operation can be safely retried without causing unintended effects. This topic explains what idempotency is and how it can be implemented in a microservices architecture.
| [Resiliency - High Availability](docs/microservices/resiliency/high-availibility.md) | High availability is a property of a system that ensures it remains operational even in the face of hardware or software failures. This topic covers different high availability patterns and strategies used for building fault-tolerant microservices.
| [Security](docs/microservices/security/security.md) | Security is a critical aspect of any distributed system. This topic covers different security challenges and strategies used for securing microservices.
| [Security - Key Vault](docs/microservices/security/vault.md) | A key vault is a secure storage location for storing cryptographic keys, certificates, and secrets used by a microservices architecture. This topic explains what a key vault is and how to use it to securely manage sensitive data in a microservices
| [Tools - CAP](docs/microservices/tools/cap.md) | CAP (short for "CAPability") is a distributed transaction solution for microservices that is based on the idea of eventual consistency. It provides an event bus with an Outbox pattern, which allows you to publish messages/events to multiple microservices in a reliable and transactional way. CAP is written in .NET Core
| [Tools - Dapr](docs/microservices/tools/dapr.md) | Dapr (Distributed Application Runtime) is an open-source framework for building microservices-based applications. It provides a set of building blocks, such as state management, pub/sub messaging, and service-to-service invocation, that help developers to focus on writing business logic rather than infrastructure code. Dapr is designed to be language-agnostic and can be used with any programming language and any cloud or edge environment. This topic covers the key features of Dapr and how to use it to build distributed applications.
| [Tools - Mass Transit](docs/microservices/tools/mass-transit.md) | Mass Transit is an open-source distributed application framework for .NET. It provides a set of abstractions and building blocks for building scalable and fault-tolerant microservices-based applications. Mass Transit supports various messaging technologies, such as RabbitMQ, ActiveMQ, and Azure Service Bus, and provides features such as request-response, pub/sub messaging, and message routing. This topic covers the key features of Mass Transit and how to use it to build distributed applications.
| [Tools - NService Bus](docs/microservices/tools/nservice-bus.md) | NService Bus is a commercial distributed application framework for .NET. It provides a set of abstractions and building blocks for building scalable and reliable microservices-based applications. NService Bus supports various messaging technologies, such as RabbitMQ, Azure Service Bus, and Amazon SQS, and provides features such as request-response, pub/sub messaging, and message routing. This topic covers the key features of NService Bus and how to use it to build distributed applications.
| [Tools - SteelToe](docs/microservices/tools/steeltoe.md) | Steeltoe is an open-source framework for building .NET microservices-based applications that run on Cloud Foundry and Kubernetes. Steeltoe provides a set of libraries and building blocks, such as service discovery, circuit breakers, and security, that help developers to build and operate cloud-native applications. Steeltoe is designed to be modular and can be used with any .NET framework, such as ASP.NET, .NET Core, and .NET Framework. This topic covers the key features of Steeltoe and how to use it to build cloud-native applications.
| [Tools - Tye](docs/microservices/tools/tye.md) | Tye is an open-source development tool for building, testing, and deploying microservices-based applications. Tye provides a simple and fast way to develop and run applications locally using containers, without the need to manage the infrastructure. Tye supports various programming languages, such as .NET, Java, and Node.js, and integrates with popular tools such as Docker, Kubernetes, and Helm. This topic covers the key features of Tye and how to use it to develop and deploy microservices-based applications locally.
| [Tools - wolverine](docs/microservices/tools/wolverine.md) | Wolverine is an open-source project that provides a next-generation command and message bus for .NET. It allows developers to build scalable and distributed applications by enabling communication between different parts of the application through a message-based architecture. Wolverine is built on top of the Jasper Framework and provides features such as distributed command routing, message serialization, and versioning. It supports both synchronous and asynchronous message handling, and can be used with various transport protocols such as HTTP, RabbitMQ, and Azure Service Bus.

### Modular Monolith
| Topic | Description |
|:-------:|:----------- |
| [Modular Monolith](docs/modular-monolith.md) | Modular Monolith is an architectural approach that combines the advantages of monolithic and microservices architectures. It aims to build a monolithic application with a modular design that allows it to be divided into smaller, more manageable parts, each with its own clear responsibilities and interfaces. This approach allows teams to develop and deploy features independently, while still maintaining a single codebase and database. The modular design also facilitates the testing and maintenance of the application, as well as the scaling of individual modules.

### Architectural Design Principles

| Topic | Description |
|:-------:|:----------- |
| [Architectural Design Principles](docs/architectural-design-principles/architectural-design-principles.md) | A comprehensive overview of the most important principles that should be considered when designing software architecture. |
| [CAP](docs/architectural-design-principles/cap.md) | The CAP theorem, which describes the trade-offs that must be made in distributed systems between consistency, availability, and partition tolerance. |
| [Cohesion](docs/architectural-design-principles/cohesion.md) | The concept of cohesion, which refers to the degree to which the elements within a module or component are related and work together to achieve a single purpose. |
| [Coupling](docs/architectural-design-principles/coupling.md) | The concept of coupling, which refers to the degree to which one module or component depends on another. |
| [Command Query Separation](docs/architectural-design-principles/cqs.md) | The Command Query Separation (CQS) principle, which recommends that methods should either change the state of an object (commands) or return a value (queries), but not both. |
| [Cross Cutting Concerns](docs/architectural-design-principles/cross-cutting-concerns.md) | Cross-cutting concerns are features or requirements that cut across multiple components or modules in a system, such as security, logging, or transaction management. |
| [Dependency Inversion](docs/architectural-design-principles/dependency-inversion.md) | The Dependency Inversion principle, which states that high-level modules should not depend on low-level modules, but both should depend on abstractions. |
| [DRY](docs/architectural-design-principles/dry.md) | The Don't Repeat Yourself (DRY) principle, which states that code should not be duplicated within a system, but instead should be abstracted into reusable functions or modules. |
| [Encapsulation](docs/architectural-design-principles/encapsulation.md) | Encapsulation is the principle of hiding implementation details of an object or module from its users, and providing a well-defined interface for interacting with it. |
| [Fail Fast Design Principles](docs/architectural-design-principles/fail-fast.md) | Fail-fast design principles aim to reduce the impact of errors and failures in a system, by detecting them as early as possible and stopping the execution of the system before the error propagates further. |
| [Composition Over Inheritance](docs/architectural-design-principles/favor-composition-over-inheritance.md) | The Composition over Inheritance principle, which recommends favoring composition (building complex objects by combining simpler ones) over inheritance (creating new classes by extending existing ones) when designing object-oriented software. |
| [GRASP](docs/architectural-design-principles/grasp.md) | The General Responsibility Assignment Software Patterns (GRASP) are a set of guidelines for assigning responsibilities to objects and modules in a software system. |
| [Interface Segregation](docs/architectural-design-principles/interface-segregation.md) | The Interface Segregation principle, which states that clients should not be forced to depend on interfaces they do not use, and that interfaces should be designed to be cohesive and focused on a single purpose. |
| [Inversion Control](docs/architectural-design-principles/inversion-control.md) | The Inversion of Control (IoC) pattern, which is a technique for decoupling the dependencies between modules or components in a system, by inverting the direction of the dependencies. |
| [KISS](docs/architectural-design-principles/kiss.md) | Keep It Simple, Stupid (KISS) is a design principle that encourages keeping systems and solutions as simple as possible to avoid unnecessary complexity and increase maintainability. |
| [Open Closed Principles](docs/architectural-design-principles/open-closed-principles.md) | The Open-Closed Principle (OCP) is a design principle that promotes the idea of writing code that is open to extension but closed to modification, meaning that new features should be added to a system without changing its existing codebase. |
| [Persistence Ignorance](docs/architectural-design-principles/persistence-ignorance.md) | Persistence Ignorance (PI) is a design principle that encourages decoupling business logic from persistence logic to increase flexibility, maintainability, and testability. |
| [Single Responsibility](docs/architectural-design-principles/single-responsibility.md) | The Single Responsibility Principle (SRP) is a design principle that advocates for a class or module to have only one reason to change, meaning it should only have one responsibility or job. |
| [Strangler Fig Pattern](docs/architectural-design-principles/strangler-fig-pattern.md) | The Strangler Fig Pattern is an approach to software modernization that involves gradually replacing an existing system with a new one, module by module, rather than attempting to migrate it all at once. |
| [Solid](docs/architectural-design-principles/solid.md) | SOLID is an acronym for five object-oriented design principles (Single Responsibility Principle, Open-Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle) that aim to make software systems more maintainable, scalable, and testable. |
| [Yagni](docs/architectural-design-principles/yagni.md) | You Aren't Gonna Need It (YAGNI) is a principle that advises against writing code for features that are not yet needed, to avoid adding unnecessary complexity to the codebase and focus on delivering only what is required. |

### Design Patterns
| Topic | Description |
|:-------:|:----------- |
| [Design Patterns](docs/design-patterns/design-patterns.md) | A comprehensive list of design patterns with examples and explanations of how they can be used to solve common software design problems. 
| [Adapter Pattern](docs/design-patterns/adapter-pattern.md) |  The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces to work together by providing a wrapper that adapts the interface of one object to match the interface of another. Actually The Adapter acts as a wrapper between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object. 
| [Builder](docs/design-patterns/builder.md) | TODO...
| [Chain of Responsibility](docs/design-patterns/chain-of-responsibility.md) | TODO...
| [Command Message Pattern](docs/design-patterns/command-message-pattern.md) | TODO...
| [Command Pattern](docs/design-patterns/command-pattern.md) | TODO...
| [Decorator Patterns](docs/design-patterns/decorator-pattern.md) | TODO...
| [Factory Patterns](docs/design-patterns/factory-pattern.md) | TODO...
| [Mediator Patterns](docs/design-patterns/mediator-pattern.md) | TODO...
| [Observer Patterns](docs/design-patterns/observer.md) | TODO...
| [Query-Object Patterns](docs/design-patterns/query-object-pattern.md) | TODO...
| [Repository Pattern](docs/design-patterns/repository-pattern.md) | TODO...
| [REPR](docs/design-patterns/repr.md) | TODO...
| [Service Locator](docs/design-patterns/service-locator.md) | TODO...
| [Singleton](docs/design-patterns/singleton.md) | TODO...
| [Specification Pattern](docs/design-patterns/specification-pattern.md) | TODO...
| [State Pattern](docs/design-patterns/state-pattern.md) | TODO...
| [Strategy Patterns](docs/design-patterns/strategy-pattern.md) | TODO...
| [Transaction-Script Patterns](docs/design-patterns/transaction-script-pattern.md) | TODO...

### Cloud Design Patterns
| Topic | Description |
|:-------:|:----------- |
| [Cloud Design Patterns](docs/cloud-design-patterns/cloud-design-patterns.md) | TODO...
| [Ambassador Pattern](docs/cloud-design-patterns/ambassador-pattern.md) | TODO...
| [Anti Corruption Layer Pattern](docs/cloud-design-patterns/anti-corruption-layer-pattern.md) | TODO...
| [BFF](docs/cloud-design-patterns/bff.md) | TODO...
| [Bulkhead Pattern](docs/cloud-design-patterns/bulkhead-pattern.md) | TODO...
| [Circuit Breaker](docs/cloud-design-patterns/circuit-breaker.md) | TODO...
| [Exactly One Delivery](docs/cloud-design-patterns/exactly-one-delivery.md) | TODO...
| [Gateway Aggregation](docs/cloud-design-patterns/gateway-aggregation.md) | TODO...
| [Gateway Pattern](docs/cloud-design-patterns/gateway-pattern.md) | TODO...
| [Inbox Patterns](docs/cloud-design-patterns/inbox-pattern.md) | TODO...
| [Outbox Patterns](docs/cloud-design-patterns/outbox-pattern.md) | TODO...
| [Saga Patterns](docs/cloud-design-patterns/saga.md) | TODO...
| [Sidecar Patterns](docs/cloud-design-patterns/sidecar.md) | TODO...
| [Strangler Fig Patterns](docs/cloud-design-patterns/strangler-fig-pattern.md) | TODO...

### Cloud Best Practices
| Topic | Description |
|:-------:|:----------- |
| [Cloud Best Practices](docs/cloud-best-practices/cloud-best-practices.md) | TODO...

### Cloud Native
| Topic | Description |
|:-------:|:----------- |
| [Cloud Native](docs/cloud-native.md) | TODO...

### Platform as a Service
| Topic | Description |
|:-------:|:----------- |
| [Heroku](docs/paas/heroku.md) | TODO...
| [Netlify](docs/paas/netlify.md) | TODO...
| [OpenShift](docs/paas/openshift.md) | TODO...
| [Rancher](docs/paas/rancher.md) | TODO...

### Infrastructure as a Service
| Topic | Description |
|:-------:|:----------- |
| [Infrastructure as a Service](docs/iaas/iaas.md) | TODO...
| [Nomad](docs/iaas/nomad.md) | TODO...
| [Pulumi](docs/iaas/pulumi.md) | TODO...
| [Terraform](docs/iaas/terraform.md) | TODO...

### DevOps
| Topic | Description |
|:-------:|:----------- |
| [Containerd](docs/devops/containerd.md) | TODO...
| [Docker](docs/devops/docker/docker.md) | TODO...
| [Docker - Docker Compose](docs/devops/docker/docker-compose.md) | TODO...
| [Kubernetes](docs/devops/kubernetes/kubernetes.md) | TODO...
| [Kubernetes - Services](docs/devops/kubernetes/services.md) | TODO...
| [Kubernetes - Deployment Strategies](docs/devops/kubernetes/deployment-strategies.md) | TODO...
| [Kubernetes - Deployment Tools - ArgoCd](docs/devops/kubernetes/deployment-tools/argo-cd.md) | TODO...
| [Kubernetes - Deployment Tools - Flux](docs/devops/kubernetes/deployment-tools/flux.md) | TODO...
| [Kubernetes - Deployment Tools - Helm](docs/devops/kubernetes/deployment-tools/helm.md) | TODO...
| [Kubernetes - Deployment Tools - Jenkins](docs/devops/kubernetes/deployment-tools/jenkins.md) | TODO...
| [Kubernetes - Deployment Tools - Kubernetes Operator](docs/devops/kubernetes/deployment-tools/kubernetes-operator.md) | TODO...
| [Kubernetes - Deployment Tools - Kustomize](docs/devops/kubernetes/deployment-tools/kustomize.md) | TODO...
| [Kubernetes - Ingress Controller](docs/devops/kubernetes/ingress-controller/ingress-controller.md) | TODO...
| [Kubernetes - Ingress Controller - Nginx](docs/devops/kubernetes/ingress-controller/nginx-ingress.md) | TODO...
| [Kubernetes - Ingress Controller - Traefik](docs/devops/kubernetes/ingress-controller/traefik-ingress.md) | TODO...
| [Kubernetes - Other Tools - K3s](docs/devops/kubernetes/other-tools/k3s.md) | TODO...
| [Kubernetes - Other Tools - Kind](docs/devops/kubernetes/other-tools/kind.md) | TODO...
| [Kubernetes - Other Tools - Tilt](docs/devops/kubernetes/other-tools/tilt.md) | TODO...

### Reverse Proxy - Load Balancing
| Topic | Description |
|:-------:|:----------- |
| [Load Balancing](docs/reverse-proxy-lb/load-balancing.md) | TODO...
| [Reverse Proxy](docs/reverse-proxy-lb/reverse-proxy.md) | TODO...
| [Envoy](docs/reverse-proxy-lb/envoy.md) | TODO...
| [HAProxy](docs/reverse-proxy-lb/haproxy.md) | TODO...
| [MetalLB](docs/reverse-proxy-lb/metallb.md) | TODO...
| [Nginx](docs/reverse-proxy-lb/nginx.md) | TODO...
| [Traefik](docs/reverse-proxy-lb/traefik.md) | TODO...
| [Yarp](docs/reverse-proxy-lb/yarp.md) | TODO...

### Service Discovery And Registry
| Topic | Description |
|:-------:|:----------- |
| [Service Discovery](docs/service-discovery/service-discovery.md) | TODO...
| [Consul](docs/service-discovery/consul.md) | TODO...
| [Eureka](docs/service-discovery/eureka.md) | TODO...

### Service Mesh
| Topic | Description |
|:-------:|:----------- |
| [Service Mesh](docs/service-mesh/service-mesh.md) | TODO...
| [Istio](docs/service-mesh/istio.md) | TODO...
| [Linkerd](docs/service-mesh/linkerd.md) | TODO...
| [Maesh](docs/service-mesh/maesh.md) | TODO...

### Object Oriented Design
| Topic | Description |
|:-------:|:----------- |
| [Object Oriented Design](docs/object-oriented-design.md) | TODO...

### Systems Design
| Topic | Description |
|:-------:|:----------- |
| [Systems Design](docs/systems-design/systems-design.md) | TODO...
| [Consistent Hash](docs/systems-design/consistent-hash.md) | TODO...

### Scaling
| Topic | Description |
|:-------:|:----------- |
| [Scaling](docs/scaling.md) | TODO...

### Back Pressure
| Topic | Description |
|:-------:|:----------- |
| [Back Pressure](docs/back-pressure.md) | TODO...

### Clean Code
| Topic | Description |
|:-------:|:----------- |
| [Clean Code](docs/clean-code.md) | TODO...


### Abstraction
| Topic | Description |
|:-------:|:----------- |
| [Abstraction](docs/abstraction.md) | TODO...

### Design Best Practices
| Topic | Description |
|:-------:|:----------- |
| [Design Best Practices](docs/design-best-practices/design-best-practices.md) | TODO...
| [12 Factor](docs/design-best-practices/12-factor.md) | TODO...
| [Strongly Typed Ids](docs/design-best-practices/strongly-typed-ids.md) | TODO...
| [Thin Controllers](docs/design-best-practices/thin-controllers.md) | TODO...

### Anti Patterns
| Topic | Description |
|:-------:|:----------- |
| [Anti Patterns](docs/anti-patterns/anti-patterns.md) | TODO...
| [Big Ball of Mud](docs/anti-patterns/big-ball-of-mud.md) | TODO...
| [Code Smells](docs/anti-patterns/code-smells.md) | TODO...
| [God Object](docs/anti-patterns/god-object.md) | TODO...
| [Leaky Abstractions](docs/anti-patterns/leaky-abstractions.md) | TODO...
| [Partial Object](docs/anti-patterns/partial-object.md) | TODO...
| [Static Cling](docs/anti-patterns/static-cling.md) | TODO...

### Eventual Consistency
| Topic | Description |
|:-------:|:----------- |
| [Eventual Consistency](docs/eventual-consistency.md) | TODO...

### Messaging
| Topic | Description |
|:-------:|:----------- |
| [Messaging](docs/messaging/messaging.md) | TODO...
| [Kafka](docs/messaging/kafka.md) | TODO...
| [Rabbitmq](docs/messaging/rabbitmq.md) | TODO...
| [Nats](docs/messaging/nats.md) | TODO...
| [Change Data Capture (CDC)](docs/messaging/change-data-capture.md) | TODO...
| [Documentation](docs/messaging/documentation.md) | TODO...

### Distributed Transactions
| Topic | Description |
|:-------:|:----------- |
| [Distributed Transactions](docs/distributed-transactions.md) | TODO...

### Distributed Locking
| Topic | Description |
|:-------:|:----------- |
| [Distributed Locking](docs/distributed-locking.md) | TODO...

### Eventual Consistency
| Topic | Description |
|:-------:|:----------- |
| [Eventual Consistency](docs/eventual-consistency.md) | TODO...

### RESTful API Design
| Topic | Description |
|:-------:|:----------- |
| [RESTful API Design](docs/rest.md) | TODO...

### gRPC
| Topic | Description |
|:-------:|:----------- |
| [gRPC](docs/grpc.md) | TODO...

### Caching
| Topic | Description |
|:-------:|:----------- |
| [Caching](docs/caching.md) | TODO...

### Functional Programming
| Topic | Description |
|:-------:|:----------- |
| [Functional Programming](docs/functional.md) | TODO...

### Concurrency
| Topic | Description |
|:-------:|:----------- |
| [Concurrency](docs/concurrency.md) | TODO...

### Sharding
| Topic | Description |
|:-------:|:----------- |
| [Sharding](docs/sharding.md) | TODO...

### Refactoring
| Topic | Description |
|:-------:|:----------- |
| [Refactoring](docs/refactoring.md) | TODO...

### Database

| Topic | Description |
|:-------:|:----------- |
| [Database - NoSQL - NoSQL](docs/database/nosql/nosql.md) | TODO...
| [Database - NoSQL - MongoDB](docs/database/nosql/mongodb.md) | TODO...
| [Database - NoSQL - RavenDB](docs/database/nosql/ravendb.md) | TODO...
| [Database - NoSQL - Cosmosdb](docs/database/nosql/cosmosdb.md) | TODO...
| [Database - NoSQL - Documentdb](docs/database/nosql/documentdb.md) | TODO...
| [Database - Relational - Relational Database](docs/database/relational/relational-database.md) | TODO...
| [Database - Relational - Postgres](docs/database/relational/postgres.md) | TODO...
| [Database - Relational - SQL](docs/database/relational/sql.md) | TODO...
| [Database - Replication](docs/database/replication.md) | TODO...
| [Database - Sharding](docs/database/sharding.md) | TODO...

### Relational Database
| Topic | Description |
|:-------:|:----------- |

### Microsoft Azure Cloud
| Topic | Description |
|:-------:|:----------- |
| [Microsoft Azure Cloud](docs/azure/azure-cloud.md) | TODO...
| [AKS](docs/azure/aks.md) | TODO...
| [Azure API Management](docs/azure/azure-api-management.md) | TODO...
| [Azure App Service Plan](docs/azure/azure-app-service-plan.md) | TODO...
| [Azure App Service](docs/azure/azure-app-service.md) | TODO...
| [Azure Arc](docs/azure/azure-arc.md) | TODO...
| [Azure Configuration](docs/azure/azure-configuration.md) | TODO...
| [Azure Functions](docs/azure/azure-functions.md) | TODO...
| [Azure Load Balancing](docs/azure/azure-load-balancing.md) | TODO...
| [Azure Logic App](docs/azure/azure-logic-app.md) | TODO...
| [Azure Resource](docs/azure/azure-resource.md) | TODO...
| [Azure Resource Manager](docs/azure/azure-resource-manager.md) | TODO...
| [Azure SQL Server](docs/azure/azure-sql.md) | TODO...
| [Azure Security - Azure Key Vault](docs/azure/azure-security/azure-key-vault.md) | TODO...
| [Azure Security - Azure Active Directory](docs/azure/azure-security/azure-active-directory.md) | TODO...
| [Azure Messaging](docs/azure/messaging/messaging.md) | TODO...
| [Azure Messaging - Azure Service Bus](docs/azure/messaging/azure-service-bus.md) | TODO...
| [Azure Messaging - Azure Event Grid](docs/azure/messaging/azure-event-grid.md) | TODO...
| [Azure Messaging - Azure Event Hub](docs/azure/messaging/azure-event-hub.md) | TODO...
| [Azure Messaging - Azure Queue](docs/azure/messaging/azure-queue.md) | TODO...
| [Azure Messaging - Azure Web Pub Sub](docs/azure/messaging/azure-web-pub-sub.md) | TODO...
| [Azure NoSQL](docs/azure/nosql/azure-nosql.md) | TODO...
| [Azure NoSQL - CosmosDB](docs/azure/nosql/cosmosdb.md) | TODO...
| [Azure Storage](docs/azure/storage/storage.md) | TODO...
| [Azure Storage - Blob Storage](docs/azure/storage/blob.md) | TODO...
| [Azure Storage - File Storage](docs/azure/storage/file.md) | TODO...
| [Azure Storage - Queue Storage](docs/azure/storage/queue.md) | TODO...
| [Azure Storage - Table Storage](docs/azure/storage/table.md) | TODO...
 
### Modeling
| Topic | Description |
|:-------:|:----------- |
| [Modeling](docs/modeling/modeling.md) | TODO...
| [Architecture Diagram](docs/modeling/architecture-diagram.md) | TODO...
| [Class Diagram](docs/modeling/class-diagram.md) | TODO...
| [Component Diagram](docs/modeling/component-diagram.md) | TODO...
| [Conceptual Modeling](docs/modeling/conceptual-modeling.md) | TODO...
| [Data Model Notations](docs/modeling/data-model-notations.md) | TODO...
| [Domain Stroytelling](docs/modeling/domain-stroytelling.md) | TODO...
| [ER Diagrams](docs/modeling/er-diagrams.md) | TODO...
| [Event Modeling](docs/modeling/event-modeling.md) | TODO...
| [Event Storming](docs/modeling/event-storming.md) | TODO...
| [Logical Modeling](docs/modeling/logical-modeling.md) | TODO...

### Open Source
| Topic | Description |
|:-------:|:----------- |
| [Open Source](docs/open-source.md) | TODO...

### Code Review
| Topic | Description |
|:-------:|:----------- |
| [Code Review](docs/code-review.md) | TODO...

### Interview
| Topic | Description |
|:-------:|:----------- |
| [Interview](docs/interview.md) | TODO...

### Architecture Decision Records (ADR)
| Topic | Description |
|:-------:|:----------- |
| [Architecture Decision Records (ADR)](docs/adr.md) | TODO...

### Micro-Frontend
| Topic | Description |
|:-------:|:----------- |
| [Micro-Frontend](docs/micro-frontend.md) | Micro-frontends are revolutionizing the development landscape by allowing independent implementation of a business subdomain, all with the same and different technologies.

### Others
| Topic | Description |
|:-------:|:----------- |
| [Others](docs/others.md) | TODO...


## 🙏 Special Thanks

Thanks to the authors of the links for their valuable content, I gather them in one place for finding topics to read easier.

## ⭐ Support 

If you like, feel free to ⭐ this repository, it helps out :)

Thanks a bunch for supporting me!


## 🤝 Contribution

Contributions are always welcome! Please take a look at the [contribution guidelines](https://github.com/mehdihadeli/awesome-software-architecture/blob/main/contributing.md) pages first.

Thanks to all [contributors](https://github.com/mehdihadeli/awesome-software-architecture/graphs/contributors), you're awesome and this wouldn't be possible without you! The goal is to build a categorized community-driven collection of very well-known resources.

<a href="https://github.com/mehdihadeli/awesome-software-architecture/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mehdihadeli/awesome-software-architecture" />
</a>
