# Awesome .Net Architecture [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

![Twitter URL](https://img.shields.io/badge/-@mehdi_hadeli-%231DA1F2?style=flat-square&logo=twitter&logoColor=ffffff) 
[![blog](https://img.shields.io/badge/blog-dotnetuniversity.com-brightgreen?style=flat-square)](https://dotnetuniversity.com/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](./contributing.md)

> Collection of useful Articles and resources to learning and practicing about software architecture, patterns and principles in .NET platform. this repository will be updated continuously, keep yourself up to date 

Contributions are always welcome! Please take a look at the [contribution guidelines](https://github.com/mehdihadeli/awesome-dotnet-architecture/blob/master/contributing.md) pages first.

Thanks to all [contributors](https://github.com/mehdihadeli/awesome-dotnet-architecture/graphs/contributors), you're awesome and wouldn't be possible without you! The goal is to build a categorized community-driven collection of very well-known resources.

Check out my [blog](https://dotnetuniversity.com) or find me on [Linkedin](https://www.linkedin.com/in/mehdihadeli/) or [Twitter](https://twitter.com/mehdi_hadeli)!

## Contents
- [Architectural Principles](architectural-principles)
  - [Traditional N-Layer Architecture](traditional-n-layer-architecture)
  - [Clean Architecture](#clean-architecture)
  - [Onion Architecture](#onion-architecture)
  - [Ports And Adapters Architecture (Hexagonal Architecture)](#ports-and-adapters-architecture-hexagonal-architecture-)
  - [Vertical Slice Architecture](#vertical-slice-architecture)
  - [Event Driven Architecture](#event-driven-architecture)
- [Design Principles](#design-principles)
  - [Crosscutting Concerns](#crosscutting-concerns)
  - [Encapsulation](#encapsulation)
  - [Dependency Inversion](#dependency-inversion)
  - [Interface Segregation Principle](#interface-segregation-principle)
  - [Single Responsibility](#single-responsibility)
  - [Open/Closed Principle](#open/closed-principle)
  - [Command Query Separation](command-query-Separation)
  - [Least Astonishment](#least-astonishment)
  - [Demeter](#demeter)
  - [Favor Composition over Inheritance](favor-composition-over-inheritance)
  - [DRY](#dry)
  - [KISS](#kiss)
  - [YAGNI](#yagni)
  - [Minimize Coupling](#minimize-coupling) 
  - [Maximize Cohesion](#maximize-cohesion) 
- [Design Patterns](#design-patterns)
  - [Decorator](#decorator)
  - [Specification Pattern](#specification-pattern)
  - [Repository Pattern](#repository-pattern)
- [Cloud Design Patterns](#cloud-design-patterns)
  - [Anti-Corruption Layer Pattern](#anti-corruption-layer-pattern)
  - [Asynchronous Request-Reply pattern](#anti-corruption-layer-pattern)
  - [Cache-Aside](#cache-aside)
  - [Command and Query Responsibility Segregation (CQRS)](#command-and-query-responsibility-segregation-(cqrs))
  - [Circuit Breaker](#circuit-breaker)
  - [Gateway Aggregation](#gateway-aggregation)
  - [Gateway Offloading](#gateway-offloading)
  - [Gateway Routing](#gateway-routing)
  - [Priority Queue](#priority-queue)
  - [Publisher/Subscriber](#publisher/subscriber)
  - [Retry](#retry)
  - [Saga](#saga)
  - [Sharding](#sharding)
  - [Sidecar](#sidecar)
  - [Throttling](#throttling)
  - [Valet Key](#valet-key)
  - [At-least-Once Delivery (Outbox Pattern)](#at-least-once-delivery-(outbox-pattern))
  - [Exactly-Once Delivery](#exactly-once-delivery)
- [Object Oriented Design](#object-oriented-design)
- [Clean Code](#clean-code)
- [Anti Patterns](#anti-patterns)
  - [Anemic Domain Model](#anemic-domain-model)
- [Asynchronous Patterns](#asynchronous-patterns)
- [Modular Monolith](#modular-monolith)
- [CQRS](#cqrs)
- [DDD](#ddd)
  - [Value Objects](#value-objects)
  - [Domain](#domain)
  - [Domain Event](#domain-event)
  - [Aggregation](#aggregation)
  - [Domain Primitives](#domain-primitives)
- [MicroServices](#microservices)

## Architectural Principles

### Traditional N-Layer Architecture

#### Articles

- [N-tier architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)
- [Traditional "N-Layer" architecture applications](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#traditional-n-layer-architecture-applications)
- [What is N-Tier Architecture? How It Works, Examples, Tutorials, and More](https://stackify.com/n-tier-architecture/)
- [Layered Architecture](https://herbertograca.com/2017/08/03/layered-architecture/)

### Clean Architecture

#### Articles
- [Clean architecture](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture)
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [CQRS Translated to Clean Architecture](https://blog.fals.io/2018-09-19-cqrs-clean-architecture/)
- [A Brief Intro to Clean Architecture, Clean DDD, and CQRS](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs)
- [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/)
- [Clean architecture series — Part 3](https://dev.to/pereiren/clean-architecture-series-part-3-2795)
- [Asp.net core series 63 domain model architecture eShopOnWeb project analysis](https://www.itworkman.com/89255.html)
- [Analysis of Equinox open source project under asp.net core series 62 CQRS architecture](https://www.cnblogs.com/MrHSR/p/10820545.html)
- [Equinox open source projects analyzed under the framework CQRS](https://www.programmersought.com/article/81052035363/)
- [Comprehensive understanding of domain model architecture combined with eShopOnWeb](https://www.programmersought.com/article/97275046219/)
- [Clean Architecture - An Introduction](https://www.dandoescode.com/blog/clean-architecture-an-introduction/)
- [Building ASP.NET Core Web APIs with Clean Architecture](https://fullstackmark.com/post/18/building-aspnet-core-web-apis-with-clean-architecture)
- [Clean Architecture for .NET Applications](https://paulovich.net/clean-architecture-for-net-applications/)
- [Hexagonal and Clean Architecture Styles with .NET Core (Reviewed)](https://paulovich.net/hexagonal-and-clean-architecture-styles-with-net-core-reviewed/)
- [ASP.NET Core WebAPI – Clean Architecture](https://codewithmukesh.com/project/aspnet-core-webapi-clean-architecture%e2%80%8b/)

#### 📹 Videoes
- [Clean Testing - Clean Architecture with .NET Core - Jason Taylor - NDC Oslo 2020](https://www.youtube.com/watch?v=T6NRcX1vnz8) - Jason Taylor
- [Clean Architecture with ASP.NET Core 3.0 - Jason Taylor](https://www.youtube.com/watch?v=5OtUm1BLmG0) - Jason Taylor
- [Clean Architecture with ASP.NET Core 2.1](https://www.youtube.com/watch?v=_lwCVE_XgqI&feature=youtu.be) - Jason Taylor
- [Clean Architecture with ASP.NET Core with Steve "Ardalis" Smith (2020-06-01)](https://www.youtube.com/watch?v=joNTQy-KXiU&t=1719s) - Steve Smith
- [SLC.NET Presents: Steve Smith (@Ardalis) - Clean Architecture with ASP.NET Core](https://www.youtube.com/watch?v=tYoqmL6e4oY) - Steve Smith
- [Tour of Microsoft's Reference ASP NET Core App eShopOnWeb](https://www.youtube.com/watch?v=rSpF1s8wcyA) - Steve Smith
- [An Overview of eShopOnWeb, an ASP.NET Core Reference Application](https://www.youtube.com/watch?v=vRZ8ucGac8M&ab_channel=Ardalis) - Steve Smith
- [Clean Architecture S02](https://www.youtube.com/playlist?list=PLY9iz4il6pyO46KZN-xQtZZMtdpBO9AoR) - Ivan Paulovich

#### 🔖 Samples

- [https://github.com/EduardoPires/EquinoxProject](https://github.com/EduardoPires/EquinoxProject) - Eduardo Pires
    > Full ASP.NET Core 3.1 application with DDD, CQRS and Event Sourcing concepts

- [https://github.com/dotnet-architecture/eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - Steve Smith
    > Sample ASP.NET Core 5.0 reference application, powered by Microsoft, demonstrating a layered application architecture with monolithic deployment model. Download the eBook PDF from docs folder.

- [https://github.com/JacobsDataSolutions/OrgManager](https://github.com/JacobsDataSolutions/OrgManager)
    > CQRS and Clean Domain-Driven Design concepts on the ASP.NET Core stack. Demo application for a fictional corporate organization management tool.

- [https://github.com/matthewrenze/clean-architecture-demo](https://github.com/matthewrenze/clean-architecture-demo)
    > A sample app for my presentation on Clean Architecture: Patterns, Practices, and Principles

- [https://github.com/jasontaylordev/CleanArchitecture](https://github.com/jasontaylordev/CleanArchitecture) - Jason Taylor
    > Clean Architecture Solution Template for Angular 10 and .NET 5 - [Project Template (nuget package)](https://www.nuget.org/packages/Clean.Architecture.Solution.Template)

- [https://github.com/jasontaylordev/NorthwindTraders](https://github.com/jasontaylordev/NorthwindTraders) - Jason Taylor
    > Northwind Traders is a sample application built using ASP.NET Core and Entity Framework Core.

- [https://github.com/ardalis/cleanarchitecture](https://github.com/ardalis/cleanarchitecture) - Steve Smith
    > A starting point for Clean Architecture with ASP.NET Core - [Project Template (visual studio extension)](https://marketplace.visualstudio.com/items?itemName=GregTrevellick.CleanArchitecture)

- [https://github.com/mmacneil/CleanAspNetCoreWebApi](https://github.com/mmacneil/CleanAspNetCoreWebApi) - Mark Macneil
    > Starter project for creating APIs built on ASP.NET Core using clean architecture.

- [https://github.com/ivanpaulovich/clean-architecture-manga](https://github.com/ivanpaulovich/clean-architecture-manga) - Ivan Paulovich
    > Clean Architecture with .NET5, C#9 and React+Redux. Use cases as central organizing structure, completely testable, decoupled from frameworks

- [https://github.com/Daniel-Krzyczkowski/CleanArchitectureWithDevSecOps](https://github.com/Daniel-Krzyczkowski/CleanArchitectureWithDevSecOps) - Daniel Krzyczkowski
    > This repository contains code samples related with clean software architecture and DevSecOps.

- [https://github.com/iammukeshm/CleanArchitecture.WebApi](https://github.com/iammukeshm/CleanArchitecture.WebApi) - Mukesh Murugan
    > An implementation of Clean Architecture for ASP.NET Core 3.1 WebAPI. Built with loosely coupled architecture and clean-code practices in mind. - [Project Template (visual studio extension)](https://marketplace.visualstudio.com/items?itemName=MukeshMurugan.CleanArchitectureWebApi)

- [https://github.com/fals/cqrs-clean-eventual-consistency](https://github.com/fals/cqrs-clean-eventual-consistency) - Filipe Augusto
	> CQRS, using Clean Architecture, multiple databases and Eventual Consistency

- [https://github.com/rafaelfgx/Architecture](https://github.com/rafaelfgx/Architecture) - Rafael Garcia
	> Architecture .NET 5, ASP.NET Core 5, Entity Framework Core 5, C# 9, Angular 11, Clean Code, SOLID, DDD.

- [https://github.com/kgrzybek/sample-dotnet-core-cqrs-api](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - Kamil Grzybek
	> Sample .NET Core REST API CQRS implementation with raw SQL and DDD using Clean Architecture.

- [https://github.com/phongnguyend/Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture)
	> Asp.Net Core 5 Clean Architecture (Microservices, Modular Monolith, Monolith) samples (+Blazor, Angular 11, React 17, Vue 2.6), Domain-Driven Design, CQRS, Event Sourcing, SOLID, Asp.Net Core Identity Custom Storage, Identity Server 4 Admin UI, Entity Framework Core, Selenium E2E Testing, SignalR Notification, Hangfire Tasks Scheduling

- [https://github.com/aspnetrun/run-aspnetcore](https://github.com/aspnetrun/run-aspnetcore) - AspNetRun
	> A starter kit for your next ASP.NET Core web application. Boilerplate for ASP.NET Core reference application, demonstrating a layered application architecture with applying Clean Architecture and DDD
	
### Onion Architecture

#### 📝 Articles
- [Onion Architecture In ASP.NET Core With CQRS – Detailed](https://codewithmukesh.com/blog/onion-architecture-in-aspnet-core/) - CodeWithMukesh
- [Onion Architecture](https://herbertograca.com/2017/09/21/onion-architecture/) - Herberto Graca
- [The Onion Architecture : part 1](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1) - Jeffrey Palermo
- [The Onion Architecture : part 2](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-2) - Jeffrey Palermo
- [The Onion Architecture : part 3](https://jeffreypalermo.com/2008/08/the-onion-architecture-part-3) - Jeffrey Palermo
- [Onion Architecture: Part 4 – After Four Years](https://jeffreypalermo.com/2013/08/onion-architecture-part-4-after-four-years/) - Jeffrey Palermo
- [Clean architecture series — Part 2](https://dev.to/pereiren/clean-architecture-series-part-2-49db) - David Pereira
- [A simple template for Onion Architecture with .NET 5](https://dev.to/pereiren/a-simple-template-for-onion-architecture-with-net-5-3gll) - David Pereira

#### 🔖 Samples

- [https://github.com/Amitpnk/Onion-architecture-ASP.NET-Core](https://github.com/Amitpnk/Onion-architecture-ASP.NET-Core)
	> WhiteApp API solution template which is built on Onion Architecture with all essential feature using .NET Core!
	
### Ports And Adapters Architecture (Hexagonal Architecture)

#### 📝 Articles
- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/) - Herberto Graca
- [Hexagonal architecture](https://alistair.cockburn.us/hexagonal-architecture/) - Alistair Cockburn
- [Clean architecture series - Part 1](https://dev.to/pereiren/clean-architecture-series-part-1-m64)

### Vertical Slice Architecture

#### 📝 Articles
- [Vertical Slice Architecture](https://jimmybogard.com/vertical-slice-architecture/)
- [Why vertical slice architecture is better—if you know these few things](https://headspring.com/2019/11/05/why-vertical-slice-architecture-is-better/)
- [Architecting for maintainability through Vertical Slices ](https://www.ghyston.com/insights/architecting-for-maintainability-through-vertical-slices/)

### Event Driven Architecture

#### 📝 Articles
- [Event-driven architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven)
- [Event-Driven Architecture](https://herbertograca.com/2017/10/05/event-driven-architecture/)
- [Journey to Event Driven – Part 1: Why Event-First Programming Changes Everything](https://www.confluent.io/blog/journey-to-event-driven-part-1-why-event-first-thinking-changes-everything/)
- [Journey to Event Driven – Part 2: Programming Models for the Event-Driven Architecture](https://www.confluent.io/blog/journey-to-event-driven-part-2-programming-models-event-driven-architecture/)
- [Journey to Event Driven – Part 3: The Affinity Between Events, Streams and Serverless](https://www.confluent.io/blog/journey-to-event-driven-part-3-affinity-between-events-streams-serverless/)
- [Journey to Event Driven – Part 4: Four Pillars of Event Streaming Microservices](https://www.confluent.io/blog/journey-to-event-driven-part-4-four-pillars-of-event-streaming-microservices/)

## Design Principles
- [Principles](https://deviq.com/principles/principles-overview) - DevIQ
- [10 Crucial Software Development Principles to Live By](https://www.laneways.agency/software-development-principles/)
- [10 OOP Design Principles Every Programmer Should Know](https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65)
- [Design Principles](https://java-design-patterns.com/principles/) - java-design-patterns.com
- [Principles](http://principles-wiki.net/principles:start) - principles-wiki.net

### Cross Cutting Concerns

#### 📝 Articles
- [Managing Cross Cutting Concerns – Logging](https://www.cshandler.com/2015/10/managing-cross-cutting-concerns-logging.html#.YCA5VOlR0uV)
- [Cross cutting concern example](https://stackoverflow.com/questions/23700540/cross-cutting-concern-example)
- [cross cutting concern](https://medium.com/anatta-design/cross-cutting-concern-aadf4f51a5c1)
- [Cross-Cutting Concerns for An Enterprise Application](https://dzone.com/articles/cross-cutting-concerns-for-an-enterprise-applicati)
- [Terminology: cross cutting concern](https://crosscuttingconcerns.com/Terminology-cross-cutting-concern)
- [Crosscutting Concerns](https://oncodedesign.com/crosscutting-concerns/)
- [Using the Decorator Pattern to handle cross-cutting concerns](https://www.davideguida.com/using-decorators-to-handle-cross-cutting-concerns/)
- [Chain of Responsibility pattern for handling cross-cutting concerns](https://arturkrajewski.silvrback.com/chain-of-responsibility-pattern-for-handling-cross-cutting-concerns)

### KISS

#### 📝 Articles
- [KISS](https://java-design-patterns.com/principles/#kiss)  - java-design-patterns
- [Principles of Good Programming](https://www.artima.com/weblogs/viewpost.jsp?thread=331531)
- [Keep It Simple Stupid (KISS)](http://principles-wiki.net/principles:keep_it_simple_stupid) - principles-wiki
- [Keep It Simple](https://deviq.com/principles/keep-it-simple) - DevIQ

### YAGNI

#### 📝 Articles
- [YAGNI](https://deviq.com/principles/yagni) - DevIQ
- [YAGNI](https://java-design-patterns.com/principles/#yagni) - java-design-patterns

### Minimize Coupling

#### 📝 Articles
- [Why is loose coupling between services so important?](https://www.ben-morris.com/why-is-loose-coupling-between-services-so-important/) - Ben Morris


## Design Patterns

### Resources 

- [https://github.com/abishekaditya/DesignPatterns](https://github.com/abishekaditya/DesignPatterns)
	> Project : Design Patterns Examples in C#
	
- [https://github.com/anupavanm/csharp-design-patterns-for-humans](https://github.com/anupavanm/csharp-design-patterns-for-humans)
	> Design Patterns for Humans™ - An ultra-simplified explanation - C# Examples
	
- [https://github.com/nemanjarogic/DesignPatternsLibrary](https://github.com/nemanjarogic/DesignPatternsLibrary)
	> A comprehensive design patterns library implemented in C#, which covers various design patterns from the most commonly used ones to the lesser-known ones. Get familiar with and learn design patterns through moderately realistic examples.

### Specification Pattern

#### 📝 Articles
- [Specification pattern: C# implementation](https://enterprisecraftsmanship.com/posts/specification-pattern-c-implementation/) - Vladimir Khorikove
- [Implementing Query Specification pattern in Entity Framework Core](https://gunnarpeipman.com/ef-core-query-specification/) - Gunnar Peipman
- [Using the Specification pattern with Repository and Unit of work](https://dotnetfalcon.com/using-the-specification-pattern-with-repository-and-unit-of-work/) - Akos Nagy

### Repository Pattern

#### 📝 Articles
- [No need for repositories and unit of work with Entity Framework Core](https://gunnarpeipman.com/ef-core-repository-unit-of-work/) - Gunnar Peipman
- [Repository and unit of work ARE useful](https://dotnetfalcon.com/repository-and-unit-of-work-are-useful/) - Akos Nagy
## Cloud Design Patterns

### Resources
 - [Cloud Design Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/index-patterns) - Microsoft
 - [Cloud Computing Patterns](https://www.cloudcomputingpatterns.org) - CloudComputingPatterns
 
###  Anti-Corruption Layer Pattern

###  Asynchronous Request-Reply pattern

###  Cache-Aside

###  Command and Query Responsibility Segregation (CQRS)

###  Circuit Breaker

###  Gateway Aggregation

###  Gateway Offloading

###  Gateway Routing

###  Priority Queue

###  Publisher/Subscriber

###  Retry

###  Saga

###  Sharding

###  Sidecar

###  Throttling

###  Valet Key

### At-least-Once Delivery (Outbox Pattern)

#### 📝 Articles
- [At-least-once Delivery](https://www.cloudcomputingpatterns.org/at_least_once_delivery/) - cloudcomputingpatterns.org
- [The Outbox Pattern](http://www.kamilgrzybek.com/design/the-outbox-pattern/) - Kamil Grzybek
### Exactly-Once Delivery

#### 📝 Articles

- [Exactly-once Delivery](https://www.cloudcomputingpatterns.org/exactly_once_delivery/) - cloudcomputingpatterns.org

## Object Oriented Design

## Clean Code

### Resources

- [https://github.com/thangchung/clean-code-dotnet](https://github.com/thangchung/clean-code-dotnet) - Thang Chung 
	> 🛁 Clean Code concepts and tools adapted for .NET
	
## Anti Patterns

### Resources
- [Anti Patterns](https://deviq.com/antipatterns/antipatterns-overview) - DevIQ

### Anemic Domain Model

#### 📝 Articles

- [AnemicDomainModel](https://www.martinfowler.com/bliki/AnemicDomainModel.html)
- [What is Anemic Domain Model and why it can be harmful?](https://danielrusnok.medium.com/what-is-anemic-domain-model-and-why-it-can-be-harmful-2677b1b0a79a) - Daniel Rusnok

## Asynchronous Patterns

### 📝 Articles
- [Communication in a microservice architecture](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture) - Microsoft
- [Asynchronous message-based communication](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication) - Microsoft
- [Modular Monolith: Integration Styles](http://www.kamilgrzybek.com/tag/messaging/) - Kamil Grzybek
## Modular Monolith

### 📝 Articles
- [My experience of using modular monolith and DDD architectures](https://www.thereformedprogrammer.net/my-experience-of-using-modular-monolith-and-ddd-architectures/)

### 🔖 Samples

- [https://github.com/kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd) - Kamil Grzybek
    > Full Modular Monolith application with Domain-Driven Design approach.

- [https://github.com/kgrzybek/modular-monolith-with-ddd-fe-react](https://github.com/kgrzybek/modular-monolith-with-ddd-fe-react) - Kamil Grzybek
    > FrontEnd React application for Modular Monolith With DDD repository and system
	
- [https://github.com/phongnguyend/Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture)
	> Asp.Net Core 5 Clean Architecture (Microservices, Modular Monolith, Monolith) samples (+Blazor, Angular 11, React 17, Vue 2.6), Domain-Driven Design, CQRS, Event Sourcing, SOLID, Asp.Net Core Identity Custom Storage, Identity Server 4 Admin UI, Entity Framework Core, Selenium E2E Testing, SignalR Notification, Hangfire Tasks Scheduling

## CQRS

### 📝 Articles
- [Command and Query Responsibility Segregation (CQRS) pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs) - Microsoft
- [Simple CQRS implementation with raw SQL and DDD](http://www.kamilgrzybek.com/design/simple-cqrs-implementation-with-raw-sql-and-ddd/) - Kamil Grzybek

### 🔖 Samples

- [https://github.com/kgrzybek/sample-dotnet-core-cqrs-api](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - Kamil Grzybek
	> Sample .NET Core REST API CQRS implementation with raw SQL and DDD using Clean Architecture.
	
- [https://github.com/aspnetrun/run-aspnetcore-cqrs](https://github.com/aspnetrun/run-aspnetcore-cqrs) - aspnetrun
	> Real world Enterprise CRM application example of ASP.NET Core + Angular web application. Implemented CQRS Design Pattern for ASP.NET Core + Angular reference application, demonstrating a layered application architecture with DDD
## DDD

### Value Objects

#### 📝 Articles
- [Treating Primitive Obsession with ValueObjects | DDD in .NET](https://www.youtube.com/watch?v=h4uldNA1JUE)

### Domain 

#### 📝 Articles
- [Always-Valid Domain Model](https://enterprisecraftsmanship.com/posts/always-valid-domain-model/) - Vladimir Khorikove
- [Domain Model Encapsulation and PI with Entity Framework 2.2](http://www.kamilgrzybek.com/design/domain-model-encapsulation-and-pi-with-entity-framework-2-2/) - Kamil Grzybek
- [Attributes of Clean Domain Model](http://www.kamilgrzybek.com/design/clean-domain-model-attributes/) - Kamil Grzybek
### Domain Events

#### 📝 Articles
- [How to publish and handle Domain Events](http://www.kamilgrzybek.com/design/how-to-publish-and-handle-domain-events/) - Kamil Grzybek
- [Handling Domain Events: Missing Part](http://www.kamilgrzybek.com/design/handling-domain-events-missing-part/) - Kamil Grzybek

### Aggregation

#### 📝 Articles
- [Processing multiple aggregates – transactional vs eventual consistency](https://www.kamilgrzybek.com/design/processing-multiple-aggregates-transactional-vs-eventual-consistency/) - Kamil Grzybek

### Domain Primitives

#### 📝 Articles
- [My Take On Domain Primitives](https://svenhuebner-it.com/my-take-on-domain-primitives/) - Sven Hübner
- [Domain Primitives I: easily declaring domain primitives](https://svenhuebner-it.com/domain-primitives-i-easily-declaring-domain-primitives/) - Sven Hübner 

### 🔖 Samples

- [https://github.com/kimcu-on-thenet/ddd-net-ef-core](https://github.com/kimcu-on-thenet/ddd-net-ef-core)
    > Self study: DDD, .net core, entity framework core

- [https://github.com/thangchung/blog-core](https://github.com/thangchung/blog-core) - Thang Chung
    > Modular blog using Blazor with clean domain-driven design patterns

- [https://github.com/thangchung/practical-clean-ddd](https://github.com/thangchung/practical-clean-ddd) Thang Chung
    > The repository uses the eCommerce business domain to demonstrate how to apply Domain Driven Design, Clean Architecture, and Microservice Architecture patterns.

- [https://github.com/ardalis/ddd-guestbook](https://github.com/ardalis/ddd-guestbook) - Steve Smith
    > A DDD guestbook example written for ASP.NET Core
	
- [https://github.com/aspnetrun/run-aspnetcore](https://github.com/aspnetrun/run-aspnetcore) - AspNetRun
	> A starter kit for your next ASP.NET Core web application. Boilerplate for ASP.NET Core reference application, demonstrating a layered application architecture with applying Clean Architecture and DDD
	
## MicroServices

### Resources
- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore) - A collection of awesome training series, Articles, videos, books, courses, sample projects, and tools for Microservices in .NET Core

### 📝 Articles

- [Microservices architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)
- [Securing Microservices with IdentityServer4, OAuth2 and OpenID Connect fronted by Ocelot API Gateway](https://medium.com/aspnetrun/securing-microservices-with-identityserver4-with-oauth2-and-openid-connect-fronted-by-ocelot-api-49ea44a0cf9e)


### 📦 Tools

- [https://github.com/dotnet/tye](https://github.com/dotnet/tye)
    > Tye is a tool that makes developing, testing, and deploying microservices and distributed applications easier. Project Tye includes a local orchestrator to make developing microservices easier and the ability to deploy microservices to Kubernetes with minimal configuration.

### 🔖 Samples
- [https://github.com/vietnam-devs/coolstore-microservices](https://github.com/vietnam-devs/coolstore-microservices) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/thangchung/practical-dapr](https://github.com/thangchung/practical-dapr) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices](https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices)
    > An example of building .NET Core microservices with Dapr and Tye

- [https://github.com/aspnetrun/run-aspnetcore-microservices](https://github.com/aspnetrun/run-aspnetcore-microservices) - AspNetRun
	> Microservices on .Net platforms which used Asp.Net Web API, Docker, RabbitMQ, Ocelot API Gateway, MongoDB, Redis, SqlServer, Entity Framework Core, CQRS and Clean Architecture implementation. See Microservices Architecture and Step by Step Implementation on .NET Course w/ discount
	
- [https://github.com/aspnetrun/run-aspnet-identityserver4](https://github.com/aspnetrun/run-aspnet-identityserver4) - AspNetRun
	> Secure microservices with using standalone Identity Server 4 and backing with Ocelot API Gateway. Protect our ASP.NET Web MVC and API applications with using OAuth 2 and OpenID Connect in IdentityServer4. Securing your web application and API with tokens, working with claims, authentication and authorization middlewares and applying policies.
	
- [https://github.com/alugili/ModernArchitectureShop](https://github.com/alugili/ModernArchitectureShop) - Bassam Alugili
	> The Microservices Online Shop is an application with a modern software architecture that is cleanly designed and based on.NET lightweight technologies. The shop has two build variations. The first variant is the classic Microservices Architectural Style. The second one is with Dapr. Dapr has a comprehensive infrastructure  